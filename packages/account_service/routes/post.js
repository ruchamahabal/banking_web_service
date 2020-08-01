const mongoose = require('mongoose');
const Account = mongoose.model('tAccount');

const AccountHandler = async({
    body: {
        account_type,
        bank_name,
        branch,
        ifsc_code,
        balance
    }}, res) => 
    {
        let account;
        let error;

        if (!account_type || !bank_name || !branch || !ifsc_code) {
            res.sendStatus(400).send({
                message: 'You forgot some important key',
                service: 'Account Database Service',
                status: 400,
                payload: null
            })
        };

        let account_number = await generate_account_number();
        
        const newAccount = new Account({
            account_number: account_number,
            account_type: account_type,
            bank_name: bank_name,
            branch: branch,
            ifsc_code: ifsc_code,
            balance: balance,
            customer_id: get_current_customer_id(),
            is_active: 1
        });

        try {
            account = await newAccount.save();
        } catch(err) {
            error = err;
        }

        res.send({
            message: 'Got response from DB',
            service: 'Account Database Service',
            status: 200,
            payload: account || error
        })   
    }

async function generate_account_number() {
    // get the last account number which is of the form ACC1
    let last_account = await Account.find().sort({ _id: -1 }).limit(1);
    let last_account_number = last_account[0]._doc.account_number;

    // get the number from string i.e. extract 1 from ACC1, increment the number and join string
    last_account_number = last_account_number.substring(3, last_account_number.length);
    cur_acc = parseInt(last_account_number) + 1;
    return 'ACC' + cur_acc.toString();
}

function get_current_customer_id() {
    // random, will change once customer service is integrated
    return 1;
}

module.exports = server => {
    server.post('/account', AccountHandler);
}