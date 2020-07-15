const {Schema} = require('mongoose');

const AccountSchema = new Schema({
    account_number: Number,
    account_type: String,
    bank_name: String,
    balance: Number,
    customer_id: Number,
    is_active: Boolean
});

module.exports = AccountSchema;