const mongoose = require('mongoose');
const MoneyTransfer = mongoose.model('tMoneyTransfer');

const pingHandler = (_, res) => {
  res.send('Healthy');
};

const moneyTransferHandler = async (_, res) => {
  let moneytransfers;
  let error;

  try {
      moneytransfers = await MoneyTransfer.find();
  } catch(err) {
      error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Money Transfer Service',
    status: 200,
    payload: moneytransfers || error
  });
};

const singleMoneyTransHandler = async ({ params: { id } }, res) => {
  let moneytrans;
  let error;

  try {
    moneytrans = await MoneyTransfer.findOne({ _id: id });
  } catch (err) {
    error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'MoneyTransfer Servce',
    status: 200,
    payload: moneytrans || error
  });
};

module.exports = server => {
  server
    .get('/', pingHandler)
    .get('/moneytransfers', moneyTransferHandler)
    .get('/moneytrans/:id', singleMoneyTransHandler);
};
