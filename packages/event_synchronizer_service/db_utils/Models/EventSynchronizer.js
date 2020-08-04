const {Schema} = require('mongoose');

const EventSynchronizerSchema = new Schema({
	datetime: String,
	source: String,
	destination: String,
	status: String,
	event_type: String,
	event_data: String
});

module.exports = EventSynchronizerSchema;