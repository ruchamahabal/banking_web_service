const mongoose = require('mongoose');
const Customer = mongoose.model('tCustomer');
const Event = mongoose.model('tEvent');

const CustomerHandler = async( 
    {body: {
        customer_id, 
        customer_name, 
        phone_no,
        address
        
    }}, res) => 
    {
    let customer;
    let error;

    if (!customer_id || !customer_name ) {
        res.sendStatus(400).send({
            message: 'You forgot some important key',
            service: 'Customer Database Service',
            status: 400,
            payload: null
        })
    };

    let customer_no = await generate_customer_id();

    const newCustomer = new Customer({
        customer_id: customer_no,
        customer_name: customer_name,
        phone_no:phone_no,
        address:address
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

const EventHandler = async({
    body: {
        source,
        destination,
        event_type,
        event_data
    }}, res) => 
    {
        let event;
        let error;

        if (!source || !destination || !event_data) {
            res.sendStatus(400).send({
                message: 'You forgot some important key',
                service: 'Event Synchronizer Database Service',
                status: 400,
                payload: null
            })
        };
        
        const newEvent = new Event({
            datetime: Date.now(),
            source: source,
            destination: destination,
            status: 'Open',
            event_type: event_type,
            event_data: event_data
        });

        try {
            event = await newEvent.save();
        } catch(err) {
            error = err;
        }

        res.send({
            message: 'Got response from DB',
            service: 'Account Database Service',
            status: 200,
            payload: event || error
        })   
    }

async function generate_customer_id() {
    // get the last customer number which is of the form cc1
    let last_customer = await Customer.find().sort({ _id: -1 }).limit(1);
    let last_customer_number = last_customer[0]._doc.customer_id;

    // get the number from string i.e. extract 1 from ACC1, increment the number and join string
    last_customer_number = last_customer_number.substring(3, last_customer_number.length);
    cur_customer = parseInt(last_customer_number) + 1;
    return 'ACC' + cur_customer.toString();
}


module.exports = server => {
    server.post('/customer', CustomerHandler)
    .post('/event',EventHandler);
}