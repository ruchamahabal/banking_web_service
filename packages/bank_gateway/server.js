const express = require('express');
const server = require('./data/schema.js')

const { port } = require('./config');
const app = express();

server.applyMiddleware({ app });

app.listen({ port: port }, () =>
	console.log(`🚀 Server ready at http://localhost:${port}`)
)