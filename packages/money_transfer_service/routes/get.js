const mongoose = require('mongoose');
const MoneyTransfer = mongoose.model('tMoneyTransfer');

const moneyTransferHandler = async (_, res) => {
	let moneytransfers;
	let error;

	try {
			moneytransfers = await MoneyTransfer.find();
	} catch(err) {
			error = err;
	}

	res.send({
		message: 'Got response from DB',
		service: 'Money Transfer Service',
		status: 200,
		payload: moneytransfers || error
	});
};

const singleTransactionHandler = async ({ params: { transaction_id } }, res) => {
	let transaction;
	let error;

	try {
		transaction = await MoneyTransfer.findOne({ transaction_id: transaction_id });
	} catch (err) {
		error = err;
	}

	res.send({
		message: 'Got response from DB',
		service: 'MoneyTransfer Servce',
		status: 200,
		payload: transaction || error
	});
};

module.exports = server => {
	server
		.get('/moneytransfers', moneyTransferHandler)
		.get('/moneytransfer/:transaction_id', singleTransactionHandler);
};
