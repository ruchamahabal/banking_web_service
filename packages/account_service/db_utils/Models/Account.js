const {Schema} = require('mongoose');

const AccountSchema = new Schema({
    account_number: String,
    account_type: String,
    bank_name: String,
    branch: String,
    ifsc_code: String,
    balance: Number,
    customer_id: Number,
    is_active: Boolean
});

module.exports = AccountSchema;