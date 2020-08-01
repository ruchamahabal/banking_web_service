const mongoose = require('mongoose');
const Account = mongoose.model('tAccount');

const deleteAccount = async ({ params: { account_number }}, res) => {
    let is_deleted;
    let error;
  
    try {
      is_deleted = await Account.deleteOne({ account_number: account_number }).exec();
    } catch (err) {
      error = err;
    }
  
    res.send({
      message: 'Got response from DB',
      service: 'Account Servce',
      status: 200,
      payload: is_deleted || error
    });
  };
  
  
module.exports = server => {
    server.delete('/delete_account/:account_number', deleteAccount)
}
