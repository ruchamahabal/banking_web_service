const { PORT, Q_URI } = process.env;

module.exports = {
	port: PORT || 5000,
	mongoURI:  `mongodb://localhost:27017/EventSynchronizer`,
	q: {
		uri: Q_URI || 'amqp://qpdqdyhj:HETuO7YjcgSyFAlIFRUlU2fDFF2j-RhD@gull.rmq.cloudamqp.com/qpdqdyhj'
	}
};