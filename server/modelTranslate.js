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

const chkIngredientExistsElseCreate = async ingredient => {
  const result = await db.getIngredientIdByName(ingredient)
  return result ? result.id : db.insertIngredient(ingredient)
}

const chkMeasurementExistsElseCreate = async measurement => {
  const result = await db.getMeasurementIdByName(measurement)
  return result ? result.id : db.insertMeasurement(measurement)
}

const formatIngredientsForInsert = async ingredients => {
  return Promise.all(
    ingredients.map(async ingredient => {
      const ingredientId = await chkIngredientExistsElseCreate(
        ingredient.ingredientName
      )
      const measureId = await chkMeasurementExistsElseCreate(
        ingredient.measurementName
      )
      return {
        ingredient_id: ingredientId[0],
        quantity: ingredient.quantity,
        measure_id: measureId[0],
        ingredient_group: ingredient.ingredientGroup
      }
    })
  )
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

const formatInsertRecipe = async recipe => {
  const {
    title,
    season,
    image,
    timeOptions,
    cuisineCategories,
    instructions,
    ingredients
  } = recipe

  const recipeSummary = {
    title,
    season_id: season,
    image,
    cook_time_id: timeOptions
  }

  const formattedInstructions = instructions.map(toSnakeCase)

  const formattedIngredients = await formatIngredientsForInsert(ingredients)

  return db.insertRecipe(
    recipeSummary,
    cuisineCategories,
    formattedIngredients,
    formattedInstructions
  )
}

module.exports = {
  formatRecipeDetails,
  formatRecipeSummaries,
  formatInsertRecipe,
  chkIngredientExistsElseCreate,
  chkMeasurementExistsElseCreate
}
