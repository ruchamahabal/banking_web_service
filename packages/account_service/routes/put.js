const mongoose = require('mongoose');
const Account = mongoose.model('tAccount');

module.exports = server => {
    server.put('/update_account/:account_number', async (req, res) => {
        account_number = req.params.account_number;
        let updated_account, error;
        try {
            updated_account = await Account.findOneAndUpdate({account_number: account_number}, req.body);
        } catch(err) {
            error = err
        }

        res.send({
            message: 'Got response from DB',
            service: 'Account Database Service',
            status: 200,
            payload: updated_account || error
        });
    })
}