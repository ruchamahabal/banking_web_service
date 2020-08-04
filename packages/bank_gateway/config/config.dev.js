const { PORT, CUSTOMER_SERVICE_PORT, ACCOUNT_SERVICE_PORT,MONEY_TRANSFER_SERVICE_PORT, Q_URI } = process.env;

module.exports = {
	port: PORT || 3000,
	customerServiceDatabase: {
		port: CUSTOMER_SERVICE_PORT || 4001
	},
	accountServiceDatabase: {
		port: ACCOUNT_SERVICE_PORT || 4002
	},
	moneyTransferDatabase:{
		port: MONEY_TRANSFER_SERVICE_PORT || 4003
	},
	q: {
		uri: Q_URI || 'amqp://qpdqdyhj:HETuO7YjcgSyFAlIFRUlU2fDFF2j-RhD@gull.rmq.cloudamqp.com/qpdqdyhj'
	}
};