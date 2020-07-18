const mongoose = require('mongoose');
const Customer = mongoose.model('tCustomer');

const pingHandler = (_, res) => {
  res.send('Healthy');
};

const customerHandler = async (_, res) => {
  let customers;
  let error;

  try {
      customers = await Customer.find();
  } catch(err) {
      error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Customer Service',
    status: 200,
    payload: customers || error
  });
};

const singleCustomerHandler = async ({ params: { id } }, res) => {
  let customer;
  let error;

  try {
    customer = await Customer.findOne({ _id: id });
  } catch (err) {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Customer Servce',
    status: 200,
    payload: customer || error
  });
};

module.exports = server => {
  server
    .get('/', pingHandler)
    .get('/customers', customerHandler)
    .get('/customer/:id', singleCustomerHandler);
};

