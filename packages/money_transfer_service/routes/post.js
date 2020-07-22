const mongoose = require('mongoose');
const MoneyTransfer = mongoose.model('tmoneytrans');

const MoneyTransferHandler = async({
    body: {
            t_id,
            rec_accno,    //receiver's account number
            rec_Fname ,   //receiver's First Name
            rec_Lname,    //receiver's last Name
            bank_name,    //receiver's bank name
            ifsc_code,    //receiver's ifsc code
            mob_no,       //receiver's mobile number
            amt,          //amount to be tranfered 
            remark,       //any note
            acc_no,        //sender's account number
            trans_type, //transaction type
            customer_id
    }}, res) => 
    {
        let moneytans;
        let error;

        if (!rec_accno || !rec_Fname || !rec_Lname || !bank_name || !ifsc_code || !mob_no || !acc_no || !customer_id) {
            res.sendStatus(400).send({
                message: 'You forgot some important key',
                service: 'MoneyTransfer Database Service',
                status: 400,
                payload: null
            })
        };

        const newMoneyTransfer = new MoneyTransfer({
            t_id:t_id,
            rec_accno:rec_accn,    //receiver's account number
            rec_Fname: rec_Fnam ,   //receiver's First Name
            rec_Lname: rec_Lname,    //receiver's last Name
            bank_name : bank_name,    //receiver's bank name
            ifsc_code: ifsc_code,    //receiver's ifsc code
            mob_no: mob_no,       //receiver's mobile number
            amt:amt,          //amount to be tranfered 
            remark: remark,       //any note
            acc_no: acc_no,        //sender's account number
            trans_type : trans_type, //transaction type
            customer_id: customer_id
        });

        try {
            moneytans = await newMoneyTransfer.save();
        } catch(err) {
            error = err;
        }

        res.send({
            message: 'Got response from DB',
            service: 'MoneyTransfer Database Service',
            status: 200,
            payload: moneytans || error
        })   
    }

module.exports = server => {
    server.post('/moneytrans', MoneyTransferHandler);
}