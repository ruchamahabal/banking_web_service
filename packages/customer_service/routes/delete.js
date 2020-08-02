const mongoose = require('mongoose');
const Account = mongoose.model('tCustomer');

const deleteCustomer = async ({ params: { customer_id }}, res) => {
    let is_deleted;
    let error;
  
    try {
      is_deleted = await Account.deleteOne({ customer_id: customer_id }).exec();
    } catch (err) {
      error = err;
    }
  
    res.send({
      message: 'Got response from DB',
      service: 'Customer Servce',
      status: 200,
      payload: is_deleted || error
    });
  };
  
  
module.exports = server => {
    server.delete('/delete_customer/:customer_id', deleteCustomer)
}
