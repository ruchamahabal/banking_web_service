const mongoose = require('mongoose');
const Event = mongoose.model('tEvent');

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
			service: 'Event Synchronizer Database Service',
			status: 200,
			payload: event || error
		})
	}

module.exports = server => {
	server.post('/event', EventHandler);
}