const mongoose = require('mongoose');
const MoneyTransferSchema = require('./Models/MoneyTransfer');
const EventSynchronizerSchema = require('./Models/EventSynchronizer');

module.exports = config => {
	mongoose.Promise = global.Promise;
	mongoose.connect(config.mongoURI);
	mongoose.model('tMoneyTransfer', MoneyTransferSchema, 'tMoneyTransfer');
	mongoose.model('tEvent', EventSynchronizerSchema, 'tEvent');
}