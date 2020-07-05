const {Schema} = require('mongoose');

const CustomerSchema = new Schema({
    customer_id: Number,
    customer_name: String,
    active_accounts: Number
});

module.exports = CustomerSchema;