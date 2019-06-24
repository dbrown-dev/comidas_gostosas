const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:id', (req, res) => {
  const recipeId = Number(req.params.id)
  db.getRecipeSummaries(recipeId)
    .then(recipes => {
      const formattedSummary = recipes
      formattedSummary.cuisine_categories = formattedSummary.cuisine_categories.split(
        '@'
      )
      return formattedSummary
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
    .then(summary => {
      return db.getRecipeInstructions(recipeId).then(instructions => {
        const updatedRecipe = summary
        updatedRecipe.instructions = instructions
        return updatedRecipe
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
    .then(recipe => {
      return db.getRecipeIngredients(recipeId).then(ingredients => {
        const finalRecipe = recipe
        finalRecipe.ingredients = ingredients
        res.json(finalRecipe)
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  db.getRecipeSummaries()
    .then(recipes => {
      const formattedSummary = recipes.map(recipe => {
        recipe.cuisine_categories = recipe.cuisine_categories.split('@')
        return recipe
      })
      res.json(formattedSummary)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const recipe = req.body
  db.insertRecipe(recipe)
    .then(id => res.send(`/recipe/${id}`))
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
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
