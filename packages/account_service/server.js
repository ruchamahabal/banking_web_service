const express = require('express');
const config = require('./config');
const { port } = config;
const app = express();
app.use(express.json());

require('./db_utils')(config);

app.listen({ port: port }, () =>
	  console.log(`🚀 Server ready at http://localhost:${port}`)
	)