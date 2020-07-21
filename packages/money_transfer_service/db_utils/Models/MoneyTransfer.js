const {Schema} = require('mongoose');

const MoneyTransferSchema = new Schema({
    t_id :Number,
    rec_accno:Number,    //receiver's account number
    rec_Fname :String,   //receiver's First Name
    rec_Lname:String,    //receiver's last Name
    bank_name:String,    //receiver's bank name
    ifsc_code:String,    //receiver's ifsc code
    mob_no:Number,       //receiver's mobile number
    amt:Number,          //amount to be tranfered 
    remark:String,       //any note
    acc_no:Number,        //sender's account number
    trans_type: String, //transaction type
    customer_id:Number   
});

module.exports = MoneyTransferSchema;