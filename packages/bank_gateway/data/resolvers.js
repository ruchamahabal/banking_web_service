const axios = require('axios');
const {customerServiceDatabase: {port}} = require('../config');

const hostname = `http://localhost`;
const databaseURL = `${hostname}:${port}`;

const get = async path =>
    (await axios.get(`${databaseURL}/${path}`)).data.payload;

module.exports = {
    Query:  {
        customers: () => get('customers')
    }
};