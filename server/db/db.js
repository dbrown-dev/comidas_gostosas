const { curry } = require('ramda')
const config = require('./knexfile').development
const database = require('knex')(config)

const selectTable = curry(async (db, tableName) => db(tableName))

const selectTableProd = selectTable(database)

const getRecipeSummaries = (id, db = database) => {
  return db('recipes')
    .join('cook_times', 'recipes.cook_time_id', 'cook_times.id')
    .join('seasons', 'recipes.season_id', 'seasons.id')
    .join(
      'cuisine_categories_recipes',
      'recipes.id',
      'cuisine_categories_recipes.recipe_id'
    )
    .join(
      'cuisine_categories',
      'cuisine_categories.id',
      'cuisine_categories_recipes.category_id'
    )
    .select(
      'recipes.id',
      'recipes.title',
      'seasons.label as season',
      'recipes.rating',
      'recipes.image',
      'cook_times.label as cookTime',
      db.raw(
        'GROUP_CONCAT(cuisine_categories.label, "@") cuisine_categories'
      )
    )
    .orderBy('recipes.id')
    .groupBy('recipes.id')
    .modify(queryBuilder => {
      if (id) {
        queryBuilder.where('recipes.id', id)
        queryBuilder.first()
      }
    })
}

const getRecipeInstructions = (id, db = database) => {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.id', 'instructions.instruction', 'instructions.image')
    .orderBy('instructions.id')
    .where('recipes.id', id)
    .groupBy('instructions.id')
}

const getRecipeIngredients = (id, db = database) => {
  return db('ingredients')
    .join(
      'ingredients_recipes',
      'ingredients_recipes.ingredient_id',
      'ingredients.id'
    )
    .join('recipes', 'ingredients_recipes.recipe_id', 'recipes.id')
    .join('measurements', 'measurements.id', 'ingredients_recipes.measurement_id')
    .select(
      'ingredients.id',
      'ingredients.label',
      'ingredients_recipes.quantity',
      'ingredients_recipes.ingredient_group',
      'measurements.label'
    )
    .orderBy('ingredients.id')
    .where('recipes.id', id)
}

const getIngredientIdByName = (label, db = database) => {
  return db('ingredients')
    .select()
    .where('label', label)
    .first()
}

const getMeasurementIdByName = (label, db = database) => {
  return db('measurements')
    .select()
    .where('label', label)
    .first()
}

const insertIngredient = (ingredient, db = database) => {
  return db('ingredients').insert({ label: ingredient })
}

const insertMeasurement = (measurement, db = database) => {
  return db('measurements').insert({ label: measurement })
}

const insertRecipe = (
  recipeSummary,
  cuisineCategories,
  ingredients,
  instructions,
  db = database
) => {
  return db.transaction(trx => {
    return db('recipes')
      .insert(recipeSummary)
      .transacting(trx)
      .then(ids => {
        const id = ids[0]
        const formattedCategories = cuisineCategories.map(category => {
          return { recipe_id: id, category_id: category }
        })
        return db('cuisine_categories_recipes')
          .insert(formattedCategories)
          .transacting(trx)
          .then(() => {
            const formattedIngredients = ingredients.map(ingredient => {
              ingredient.recipe_id = id
              return ingredient
            })
            return db('ingredients_recipes')
              .insert(formattedIngredients)
              .transacting(trx)
          })
          .then(() => {
            const FormattedInstructions = instructions.map(instruction => {
              instruction.recipe_id = id
              return instruction
            })
            return db('instructions')
              .insert(FormattedInstructions)
              .transacting(trx)
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
}

const updateRecipeById = (id, recipe, db = database) => {
  return db.transaction(trx => {
    return db('recipes')
      .where('id', id)
      .update({
        title: recipe.title,
        season: recipe.season,
        image: recipe.image,
        cook_time_id: recipe.timeOption
      })
      .transacting(trx)
      .then(() => {
        const cuisineCategories = recipe.cuisineCategories.map(category => {
          return { recipe_id: id, category_id: category }
        })
        db('cuisine_categories_recipes')
          .where('recipe_id', id)
          .del()
          .insert(cuisineCategories)
          .transacting(trx)
          .then(() => {
            const ingredients = recipe.ingredients.map(category => {
              return {
                recipe_id: id,
                ingredients_id: category.ingredientId,
                quantity: category.quantity,
                measure_id: category.measurementId,
                ingredient_group: category.ingredientGroup
              }
            })
            db('ingredients_recipes')
              .where('recipe_id', id)
              .del()
              .insert(ingredients)
              .transacting(trx)
              .then(() => {
                const instructions = recipe.instructions.map(instruction => {
                  return {
                    recipe_id: id,
                    instruction: instruction.instruction,
                    image: instruction.image
                  }
                })
                return db('instructions')
                  .where('recipe_id', id)
                  .del()
                  .insert(instructions)
                  .transacting(trx)
              })
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
}

const close = (db = database) => {
  db.destroy()
}

module.exports = {
  getRecipeSummaries,
  getRecipeInstructions,
  getRecipeIngredients,
  insertRecipe,
  updateRecipeById,
  getIngredientIdByName,
  getMeasurementIdByName,
  insertMeasurement,
  insertIngredient,
  close,
  selectTableProd
}
