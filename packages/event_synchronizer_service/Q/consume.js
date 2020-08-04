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
	const consume_q = 'event_q';
	const publish_account_q = 'account_q';
	const publish_customer_q = 'customer_q';
	const publish_money_transfer_q = 'money_transfer_q'

	let channel = null;
	amqp.connect(uri, (err, conn) => {
		if (err) throw new Error(err);

		conn.createChannel((err, ch) => {
			if (err) throw new Error(err);

			ch.assertQueue(consume_q, { durable: true });
			channel = ch;
			ch.consume(
				consume_q,
				msg => {
					let event;
					try {
						event = JSON.parse(msg.content.toString());
					} catch(err) {
						console.log(err);
						event = msg.content.toString();
					}
					// insert message into db
					event['destination'] = 'Money Transfer';
					axios.post(`${hostname}:${port}/event`, event)
						.then(response => {
							console.log('event saved', response);
						});

					// take necessary action
					pushToMessageQ(JSON.stringify(event));

					ch.ack(msg);
				},
				{ noAck: false }
			)

		});
	});

	const pushToMessageQ = msg => {
		if (!channel) setTimeout(pushToMessageQ(msg), 1000);

		channel.sendToQueue(publish_account_q, Buffer.from(msg));
		channel.sendToQueue(publish_customer_q, Buffer.from(msg));
		channel.sendToQueue(publish_money_transfer_q, Buffer.from(msg));
		return { m: 'done'}
	}
}

