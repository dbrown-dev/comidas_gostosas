const express = require('express')

const db = require('../db/db')
const modelTranslate = require('../modelTranslate')

const router = express.Router()

router.get('/', (req, res) => {
  modelTranslate
    .formatIngredients()
    .then(ingredients => {
      res.json(ingredients)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
