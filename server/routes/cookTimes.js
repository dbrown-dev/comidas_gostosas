const express = require('express')

const modelTranslate = require('../modelTranslate')

const router = express.Router()

router.get('/', (req, res) => {
  modelTranslate
    .formatCookTimes()
    .then(cookTimes => {
      res.json(cookTimes)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router