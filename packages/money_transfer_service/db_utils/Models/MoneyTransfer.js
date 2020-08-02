const {Schema} = require('mongoose');

const MoneyTransferSchema = new Schema({
    transaction_id: String,
    account_number: String,
    from_account: String,
    to_account: String,
    amount: Number, 
    remark: String,
    transaction_time: String   
}, { timestamps: { createdAt: 'created_at' }});
 
module.exports = MoneyTransferSchema;