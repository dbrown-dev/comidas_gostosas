const express = require('express')
const formidable = require('formidable')
const path = require('path')

const db = require('../db/db')
const modelTranslate = require('../modelTranslate')

const router = express.Router()

router.get('/:id', (req, res) => {
  const recipeId = Number(req.params.id)
  modelTranslate
    .formatRecipeDetails(recipeId)
    .then(recipe => {
      res.json(recipe)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  modelTranslate
    .formatRecipeSummaries()
    .then(recipes => {
      res.json(recipes)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const recipe = req.body
  modelTranslate
    .formatInsertRecipe(recipe)
    .then(id => res.send(`/recipe/${id[0]}`))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err)
    })
})

router.put('/:id', (req, res) => {
  const recipe = req.body
  const id = Number(req.params.id)
  db.updateRecipeById(id, recipe)
    .then(id => res.send(`/recipe/${id}`))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
