const express = require('express')

const modelTranslate = require('../modelTranslate')

const router = express.Router()

router.get('/', (req, res) => {
  modelTranslate
    .formatMeasurements()
    .then(measurements => {
      res.json(measurements)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router