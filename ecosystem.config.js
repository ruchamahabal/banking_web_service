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
        ACCOUNT_SERVICE_PORT: 4002
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
    }
  ]
};

