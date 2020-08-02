const mongoose = require('mongoose');
const Customer = mongoose.model('tCustomer');

module.exports = server => {
    server.put('/update_customer/:customer_id', async (req, res) => {
        customer_id = req.params.customer_id;
        let updated_customer, error;
        try {
            updated_customer = await Customer.findOneAndUpdate({customer_id: customer_id}, req.body);
        } catch(err) {
            error = err
        }

        res.send({
            message: 'Got response from DB',
            service: 'Customer Database Service',
            status: 200,
            payload: updated_customer || error
        });
    })
} 