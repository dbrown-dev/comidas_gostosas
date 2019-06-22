const server = require('./server')

const PORT = process.env.PORT || 3001

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
