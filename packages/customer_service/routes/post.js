const mongoose = require('mongoose');
const Customer = mongoose.model('tCustomer');

const CustomerHandler = async( 
    {body: {
        customer_id, 
        customer_name, 
        active_accounts
    }}, res) => 
    {
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

    let customer_id = await generate_customer_id();

    const newCustomer = new Customer({
        customer_id: get_current_customer_id(),
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

async function get_current_customer_id() {
    // get the last customer number which is of the form cc1
    let last_customer = await Customer.find().sort({ _id: -1 }).limit(1);
    let last_customer_number = last_customer[0]._doc.customer_id;

    // get the number from string i.e. extract 1 from ACC1, increment the number and join string
    last_customer_number = last_customer_number.substring(3, last_customer_number.length);
    cur_customer = parseInt(last_customer_number) + 1;
    return 'ACC' + cur_customer.toString();
}

function get_current_customer_id() {
    // random, will change once customer service is integrated
    return 1;
}


module.exports = server => {
    server.post('/customer', CustomerHandler);
}