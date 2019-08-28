const { curry } = require('ramda')

const { selectTableProd } = require('../db/db')

const DbSelectAndResponse = curry((tableName, req, res) => {
  selectTableProd(tableName)
    .then(values => {
      res.json(values)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = {
  DbSelectAndResponse
}
