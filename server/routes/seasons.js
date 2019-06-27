const express = require('express')

const modelTranslate = require('../modelTranslate')

const router = express.Router()

router.get('/', (req, res) => {
  modelTranslate
    .formatSeasons()
    .then(seasons => {
      res.json(seasons)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router