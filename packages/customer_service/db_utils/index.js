const mongoose = require('mongoose');
const CustomerSchema = require('./Models/Customer');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);
    mongoose.model('Customer', CustomerSchema);
}