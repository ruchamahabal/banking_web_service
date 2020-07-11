const express = require('express');

const { port } = require('./config');
const app = express();

app.listen({ port: port }, () =>
	console.log(`🚀 Server ready at http://localhost:${port}`)
)