const express = require('express')
const pino = require('express-pino-logger')();

const recipesRoutes = require('./routes/recipes')
const cookTimesRoutes = require('./routes/cookTimes')

const server = express()

server.use(express.json())
server.use(pino);
server.use('/api/recipes', recipesRoutes)
server.use('/api/cooktimes', cookTimesRoutes)

module.exports = server
