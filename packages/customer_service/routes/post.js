const mongoose = require('mongoose');
const Customer = mongoose.model('tCustomer');

const CustomerHandler = async( {body: {customer_id, customer_name, active_accounts}}, res) => {
    let customer;
    let error;

    if (!customer_id || !customer_name || !active_accounts) {
        res.sendStatus(400).send({
            message: 'You forgot some important key',
            service: 'Customer Database Service',
            status: 400,
            payload: null
        })
    };

    const newCustomer = new Customer({
        customer_id: customer_id,
        customer_name: customer_name,
        active_accounts: active_accounts
    });

    try {
        customer = await newCustomer.save();
    } catch(err) {
        error = err;
    }

    res.send({
        message: 'Got response from DB',
        service: 'Customer Database Service',
        status: 200,
        payload: customer || error
    })   
}

module.exports = server => {
    server.post('/customer', CustomerHandler);
}