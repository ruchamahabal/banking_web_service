const mongoose = require('mongoose');
const Account = mongoose.model('tAccount');

const pingHandler = (_, res) => {
  res.send('Healthy');
};

const accountHandler = async (_, res) => {
  let accounts;
  let error;

  try {
      accounts = await Account.find();
  } catch(err) {
      error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Account Service',
    status: 200,
    payload: accounts || error
  });
};

const singleAccountHandler = async ({ params: { id } }, res) => {
  let account;
  let error;

  try {
    account = await Account.findOne({ _id: id });
  } catch (err) {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Account Servce',
    status: 200,
    payload: account || error
  });
};

module.exports = server => {
  server
    .get('/', pingHandler)
    .get('/accounts', accountHandler)
    .get('/account/:id', singleAccountHandler);
};
