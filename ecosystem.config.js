const path = require('path');
const basepath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
    {
      name: 'Bank Gateway',
      script: basepath + '/bank_gateway/server.js',
      watch: true,
      env: {
        PORT: 3001,
        CUSTOMER_SERVICE_PORT: 4001,
        ACCOUNT_SERVICE_PORT: 4002,
        MONEY_TRANSFER_SERVICE_PORT: 4003,
        Q_URI: 'dummy'
      }
    },
    {
      name: 'Customer Service',
      script: basepath + '/customer_service/server.js',
      watch: true,
      env: {
        PORT: 4001
      }
    },
    {
      name: 'Account Service',
      script: basepath + '/account_service/server.js',
      watch: true,
      env: {
        PORT: 4002
      }
    },
    {
      name: 'Money Transfer Service',
      script: basepath + '/money_transfer_service/server.js',
      watch: true,
      env: {
        PORT: 4003
      }
    },
    {
      name: 'Event Synchronizer Service',
      script: basepath + '/event_synchroniser_service/index.js',
      watch: true,
      env: {
        Q_URI: 'dummy'
      }
    }
  ]
};

