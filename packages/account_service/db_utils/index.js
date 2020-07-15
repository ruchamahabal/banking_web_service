const mongoose = require('mongoose');
const AccountSchema = require('./Models/Account');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);
    mongoose.model('Account', AccountSchema);
}