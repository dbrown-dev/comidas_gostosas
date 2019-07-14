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

const chkIngredientExistsElseCreate = async ingredient => {
  const result = await db.getIngredientIdByName(ingredient)
  return result ? result.id : await db.insertIngredient(ingredient)
}

const chkMeasurementExistsElseCreate = async measurement => {
  const result = await db.getMeasurementIdByName(measurement)
  return result ? result.id : await db.insertMeasurement(measurement)
}

const formatIngredientsForInsert = async ingredients => {
  return await Promise.all(
    ingredients.map(async ingredient => {
      const ingredient_id = await chkIngredientExistsElseCreate(
        ingredient.ingredientName
      )
      const measure_id = await chkMeasurementExistsElseCreate(
        ingredient.measurementName
      )
      return {
        ingredient_id: ingredient_id[0],
        quantity: ingredient.quantity,
        measure_id: measure_id[0],
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
  formatCookTimes,
  formatSeasons,
  formatCategories,
  formatMeasurements,
  formatIngredients,
  chkIngredientExistsElseCreate,
  chkMeasurementExistsElseCreate
}
