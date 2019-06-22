const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const apiRoutes = require('./routes/api')

const server = express()

server.use(bodyParser.urlencoded({ extended: false }));
server.use(pino);
server.use('/api', apiRoutes)

module.exports = server
