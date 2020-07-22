const mongoose = require('mongoose');
const MoneyTransferSchema  = require('./Models/MoneyTransfer');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);
    mongoose.model('tmoneytrans',MoneyTransferSchema,'tmoneytrans');
}