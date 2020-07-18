const axios = require('axios');
const config = require('../config');

const customer_port = config.customerServiceDatabase.port;
const account_port = config.accountServiceDatabase.port;

const hostname = `http://localhost`;

const get = async path =>
    (await axios.get(`${hostname}:${path}`)).data.payload;

const post = async (path, body) =>
	(await axios.post(`${hostname}:${path}`, { ...body })).data.payload;


module.exports = {
    Query:  {
        customers: () => get(`${customer_port}/customers`),
        accounts: () => get(`${account_port}/accounts`),
    },
    Mutation: {
		customer: (_, args) => {
            post(`${customer_port}/customer`, args);
        },
        account: (_, args) => {
            post(`${account_port}/account`, args);
        }
	}
};