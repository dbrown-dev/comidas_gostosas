const _ = require('lodash')
const db = require('./db/db')

const toSnakeCase = obj => {
  return _.mapKeys(obj, (value, key) => {
    return _.snakeCase(key)
  })
}

const toCamelCase = obj => {
  return _.mapKeys(obj, (value, key) => {
    return _.camelCase(key)
  })
}

const formatRecipeSummaries = () => {
  return db.getRecipeSummaries().then(recipes => {
    const formattedSummary = recipes.map(recipe => {
      recipe.cuisine_categories = recipe.cuisine_categories.split('@')
      return toCamelCase(recipe)
    })
    return formattedSummary
  })
}

const formatCookTimes = () => {
  return db.getCookTimeOptions().then(options => {
    return options.map(option => toCamelCase(option))
  })
}

const formatSeasons = () => {
  return db.getSeasons().then(seasons => {
    return seasons.map(season => toCamelCase(season))
  })
}

const formatCategories = () => {
  return db.getCategories().then(categories => {
    return categories.map(category => toCamelCase(category))
  })
}

const formatMeasurements = async () => {
  const measurements = await db.getMeasurements()
  return measurements.map(measurement => toCamelCase(measurement))
}

const formatIngredients = async () => {
  const ingredients = await db.getIngredients()
  return ingredients.map(ingredient => toCamelCase(ingredient))
}

const formatRecipeDetails = recipeId => {
  return db
    .getRecipeSummaries(recipeId)
    .then(recipes => {
      const formattedSummary = recipes
      formattedSummary.cuisine_categories = formattedSummary.cuisine_categories.split(
        '@'
      )
      return toCamelCase(formattedSummary)
    })
    .then(formattedSummary => {
      return db.getRecipeInstructions(recipeId).then(instructions => {
        const updatedRecipe = formattedSummary
        updatedRecipe.instructions = instructions.map(toCamelCase)
        return updatedRecipe
      })
    })
    .then(recipe => {
      return db.getRecipeIngredients(recipeId).then(ingredients => {
        const finalRecipe = recipe
        finalRecipe.ingredients = ingredients.map(toCamelCase)
        return finalRecipe
      })
    })
}

const formatInsertRecipe = recipe => {
  const {
    title,
    season,
    image,
    cookTimeId,
    cuisineCategories,
    instructions,
    ingredients
  } = recipe

  const recipeSummary = toSnakeCase({
    title,
    season,
    image,
    cookTimeId
  })

  const snakeIngredients = ingredients.map(toSnakeCase)

  const snakeInstructions = instructions.map(toSnakeCase)

  return db.insertRecipe(
    recipeSummary,
    cuisineCategories,
    snakeIngredients,
    snakeInstructions
  )
}

module.exports = {
  formatRecipeDetails,
  formatRecipeSummaries,
  formatInsertRecipe,
  formatCookTimes,
  formatSeasons,
  formatCategories,
  formatMeasurements,
  formatIngredients
}
