const axios = require('axios');
const config = require('../config');

const customer_port = config.customerServiceDatabase.port;
const account_port = config.accountServiceDatabase.port;

const hostname = `http://localhost`;
// const databaseURL = `${hostname}:${port}`;

const get = async path =>
    (await axios.get(`${hostname}:${path}`)).data.payload;

module.exports = {
    Query:  {
        customers: () => get(`${customer_port}/customers`),
        accounts: () => get(`${account_port}/accounts`)
    }
};