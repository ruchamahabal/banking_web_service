const express = require('express');
const server = require('./data/schema.js')
const path = require('path');

const { port } = require('./config');
const app = express();

server.applyMiddleware({ app });

const view_path = path.join(__dirname, '../../public/views/');
const static_files = path.join(__dirname, '../../public/');

let router = express.Router();
app.use('/', router);
app.use(express.static(static_files));

router.get('/', function(req, res) {
	res.sendFile(view_path + 'index.html');
});
app.listen({ port: port });