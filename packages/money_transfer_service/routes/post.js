const mongoose = require('mongoose');
const MoneyTransfer = mongoose.model('tMoneyTransfer');
const Event = mongoose.model('tEvent');

const MoneyTransferHandler = async({
	body: {
			from_account,
			to_account ,
			amount,
			remark
	}}, res) =>
	{
		let transaction;
		let error;

		if (!from_account || !to_account || !amount) {
			res.sendStatus(400).send({
				message: 'You forgot some important key',
				service: 'MoneyTransfer Database Service',
				status: 400,
				payload: null
			})
		};

		let transaction_id = await generate_transaction_id()
		const newMoneyTransfer = new MoneyTransfer({
			transaction_id: transaction_id,
			from_account: from_account,
			to_account: to_account ,
			amount: amount,
			remark: remark,
			transaction_time: Date.now()
		});

		try {
			transaction = await newMoneyTransfer.save();
		} catch(err) {
			error = err;
		}

		res.send({
			message: 'Got response from DB',
			service: 'MoneyTransfer Database Service',
			status: 200,
			payload: transaction || error
		})
	}

	const EventHandler = async({
		body: {
			source,
			destination,
			event_type,
			event_data
		}}, res) =>
		{
			let event;
			let error;

			if (!source || !destination || !event_data) {
				res.sendStatus(400).send({
					message: 'You forgot some important key',
					service: 'Event Synchronizer Database Service',
					status: 400,
					payload: null
				})
			};

			const newEvent = new Event({
				datetime: Date.now(),
				source: source,
				destination: destination,
				status: 'Open',
				event_type: event_type,
				event_data: event_data
			});

			try {
				event = await newEvent.save();
			} catch(err) {
				error = err;
			}

			res.send({
				message: 'Got response from DB',
				service: 'Money Transfer Database Service',
				status: 200,
				payload: event || error
			})
		}

	async function generate_transaction_id() {
		// get the last transaction number which is of the form TRANS1
		let last_transaction = await MoneyTransfer.find().sort({ _id: -1 }).limit(1);
		let last_transaction_id = last_transaction[0]._doc.transaction_id;

		// get the number from string i.e. extract 1 from TRANS1, increment the number and join string
		last_transaction_id = last_transaction_id.substring(5, last_transaction_id.length);
		cur_transaction = parseInt(last_transaction_id) + 1;
		return 'TRANS' + cur_transaction.toString();
	}

module.exports = server => {
	server
		.post('/transfer_money', MoneyTransferHandler)
		.post('/event', EventHandler);
}