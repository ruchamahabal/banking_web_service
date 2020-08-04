const {Schema} = require('mongoose');

const CustomerSchema = new Schema({
	customer_id: String,
	customer_name: String,
	active_accounts: Number,
	phone_no :Number,
	address : String
});

module.exports = CustomerSchema;