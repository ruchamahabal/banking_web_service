const mongoose = require('mongoose');
const CustomerSchema = require('./Models/Customer');
const EventSchema = require('./Models/EventSynchronizer')

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);
    mongoose.model('tCustomer', CustomerSchema, 'tCustomer');
    mongoose.model('tEvent', EventSchema, 'tEvent');
    
}