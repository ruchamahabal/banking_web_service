const mongoose = require('mongoose');
const AccountSchema = require('./Models/Account');
const EventSynchronizerSchema = require('./Models/EventSynchronizer');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);
    mongoose.model('tAccount', AccountSchema, 'tAccount');
    mongoose.model('tEvent', EventSynchronizerSchema, 'tEvent');
}