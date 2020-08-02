const mongoose = require('mongoose');
const EventSynchronizerSchema = require('./Models/EventSynchronizer');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);
    mongoose.model('tEvent', EventSynchronizerSchema, 'tEvent');
}