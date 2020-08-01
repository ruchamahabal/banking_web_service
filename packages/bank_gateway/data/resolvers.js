const axios = require('axios');
const config = require('../config');

const customer_port = config.customerServiceDatabase.port;
const account_port = config.accountServiceDatabase.port;
const moneytransfer_port= config.moneyTransferDatabase.port;

const hostname = `http://localhost`;

const get = async path =>
    (await axios.get(`${hostname}:${path}`)).data.payload;

const post = async (path, body) =>
	(await axios.post(`${hostname}:${path}`, { ...body })).data.payload;


module.exports = {
    Query:  {
        customers: () => get(`${customer_port}/customers`),
        accounts: () => get(`${account_port}/accounts`),
        account:(_, {account_number}) => get(`${account_port}/account/${account_number}`),
        moneytransfers: () => get (`${moneytransfer_port}/moneytransfers`)
    },
    Mutation: {
		customer: (_, args) => {
            post(`${customer_port}/customer`, args);
        },
        account: (_, args) => {
            post(`${account_port}/account`, args);
        },
        moneytransfers: (_,args) => {
            post(`${moneytransfer_port}/moneytrans`,args);
        }
	}
};
