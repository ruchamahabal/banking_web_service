const mongoose = require('mongoose');
const Event = mongoose.model('tEvent');

const eventHandler = async (_, res) => {
  let event;
  let error;

  try {
      event = await Event.find();
  } catch(err) {
      error = err;
  }

  res.send({
    message: 'Got response from DB',
    service: 'Event Synchronizer Service',
    status: 200,
    payload: event || error
  });
};

module.exports = server => {
  server
    .get('/events', eventHandler)
};
