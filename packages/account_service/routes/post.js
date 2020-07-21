const mongoose = require('mongoose');
const Account = mongoose.model('tAccount');

const AccountHandler = async({
    body: {
        account_number,
        account_type,
        bank_name,
        balance,
        customer_id,
        is_active
    }}, res) => 
    {
        let account;
        let error;

        if (!account_number || !account_type || !bank_name || !customer_id) {
            res.sendStatus(400).send({
                message: 'You forgot some important key',
                service: 'Account Database Service',
                status: 400,
                payload: null
            })
        };

        const newAccount = new Account({
            account_number: account_number,
            account_type: account_type,
            bank_name: bank_name,
            balance: balance,
            customer_id: customer_id,
            is_active: is_active
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

module.exports = server => {
    server.post('/account', AccountHandler);
}