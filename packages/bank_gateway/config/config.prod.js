const { PORT, SERVICE_DB_PORT } = process.env;

module.exports = {
    port: PORT || 3000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 4000
    }
};