const amqp = require('amqplib/callback_api');
const config = require('../config');
const { q: {uri} } = config;
const { port } = config;

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(express.json());

const hostname = `http://localhost`;
let urlencodedParser = bodyParser.urlencoded({extended: false});

require('../db_utils')(config);
require('../routes/get')(app);
require('../routes/post')(app);

module.exports = () => {
	const q = 'account_q';

	amqp.connect(uri, (err, conn) => {
		if (err) throw new Error(err);

		conn.createChannel((err, ch) => {
			if (err) throw new Error(err);

			ch.assertQueue(q, { durable: true });

			ch.consume(
				q,
				msg => {
					let event;
					try {
						event = JSON.parse(msg.content.toString());
					} catch(err) {
						console.log(err);
						event = msg.content.toString();
					}
					// insert message into db
					event['destination'] = 'Account';
					axios.post(`${hostname}:${port}/event`, event)
						.then(response => {
							console.log('event saved', response);
						});

					// take necessary action
					data = JSON.parse(event.event_data);
					let from_account = data.from_account;
					let to_account = data.to_account;
					let amount = data.amount;

					const change_balance = async () => {
						let source_balance = (await axios.get(`${hostname}:${port}/account/${from_account}`)).data.payload.balance;
						let destination_balance = (await axios.get(`${hostname}:${port}/account/${to_account}`)).data.payload.balance;
						source_balance = parseFloat(source_balance) - parseFloat(amount);
						destination_balance = parseFloat(destination_balance) + parseFloat(amount);

						axios.put(`${hostname}:${port}/update_account/${from_account}`, {balance: source_balance})
						.then(response => {

						   console.log('source account updated', response);
						});

						axios.put(`${hostname}:${port}/update_account/${to_account}`, {balance: destination_balance})
						.then(response => {
						   console.log('destination account updated', response);
						});

					}

					change_balance();
					ch.ack(msg);
				},
				{ noAck: false }
			)
		});
	});
}
