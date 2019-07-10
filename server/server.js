const express = require('express')
const pino = require('express-pino-logger')();

const recipesRoutes = require('./routes/recipes')
const cookTimesRoutes = require('./routes/cookTimes')
const seasonsRoutes = require('./routes/seasons')
const categoriesRoutes = require('./routes/categories')
const ingredientsRoutes = require('./routes/ingredients')
const measurementsRoutes = require('./routes/measurements')

const server = express()

server.use(express.json())
server.use(pino);
server.use('/api/recipes', recipesRoutes)
server.use('/api/cooktimes', cookTimesRoutes)
server.use('/api/seasons', seasonsRoutes)
server.use('/api/categories', categoriesRoutes)
server.use('/api/ingredients', ingredientsRoutes)
server.use('/api/measurements', measurementsRoutes)

module.exports = server
