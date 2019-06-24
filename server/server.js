const express = require('express')
const pino = require('express-pino-logger')();

const recipesRoutes = require('./routes/recipes')

const server = express()

server.use(express.json())
server.use(pino);
server.use('/api/recipes', recipesRoutes)

module.exports = server
