const { PORT, CUSTOMER_SERVICE_PORT, ACCOUNT_SERVICE_PORT } = process.env;

module.exports = {
    port: PORT || 3000,
    customerServiceDatabase: {
        port: CUSTOMER_SERVICE_PORT || 4001
    },
    accountServiceDatabase: {
        port: ACCOUNT_SERVICE_PORT || 4002
    }
};