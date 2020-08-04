const axios = require('axios');
const config = require('../config');

const customer_port = config.customerServiceDatabase.port;
const account_port = config.accountServiceDatabase.port;
const moneytransfer_port= config.moneyTransferDatabase.port;
const { pushToMessageQ } = require('../Q/connect');


const hostname = `http://localhost`;

const get = async path =>
	(await axios.get(`${hostname}:${path}`)).data.payload;

const post = async (path, body) =>
	(await axios.post(`${hostname}:${path}`, { ...body })).data.payload;


module.exports = {
	Query:  {
		customers: () => get(`${customer_port}/customers`),
		customer:(_,{customer_id})=> get(`${customer_port}/customer/${customer_id}`),
		accounts: () => get(`${account_port}/accounts`),
		account:(_, {account_number}) => get(`${account_port}/account/${account_number}`),
		moneytransfers: () => get(`${moneytransfer_port}/moneytransfers`),
		moneytransfer: (_, {transaction_id}) => get(`${moneytransfer_port}/moneytransfer/${transaction_id}`)
	},
	Mutation: {
		customer: (_, args) => {
			post(`${customer_port}/customer`, args);
		},
		account: (_, args) => {
			post(`${account_port}/account`, args);
		},
		moneytransfer: (_, args) => {
			let result;
			let error;
			try {
				result = post(`${moneytransfer_port}/transfer_money`, args);
			} catch(err) {
				error = err;
			}
			let event = {
				'source': 'Money Transfer',
				'event_type': 'post',
				'event_data': JSON.stringify(args)
			}
			pushToMessageQ(JSON.stringify(event));
			return result || error;
		}
	}
};
