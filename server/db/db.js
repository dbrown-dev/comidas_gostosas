const config = require('./knexfile').development
const database = require('knex')(config)

const getRecipeSummaries = (id, db = database) => {
  return db('recipes')
    .join('cook_time', 'recipes.cook_time_id', 'cook_time.id')
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
      'recipes.season',
      'recipes.rating',
      'recipes.image',
      'cook_time.time_options',
      db.raw(
        'GROUP_CONCAT(cuisine_categories.category_name, "@") cuisine_categories'
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
      'ingredients_recipes.ingredients_id',
      'ingredients.id'
    )
    .join('recipes', 'ingredients_recipes.recipe_id', 'recipes.id')
    .join('measurements', 'measurements.id', 'ingredients_recipes.measure_id')
    .select(
      'ingredients.id',
      'ingredients.name',
      'ingredients_recipes.quantity',
      'ingredients_recipes.ingredient_group',
      'measurements.measurement_name'
    )
    .orderBy('ingredients.id')
    .where('recipes.id', id)
    .groupBy('ingredients.id')
}

const insertRecipe = (recipe, db = database) => {
  return db.transaction(trx => {
    return db('recipes')
      .insert({
        title: recipe.title,
        season: recipe.season,
        image: recipe.image,
        cook_time_id: recipe.timeOption
      })
      .transacting(trx)
      .then(ids => {
        const id = ids[0]
        const cuisineCategories = recipe.cuisineCategories.map(category => {
          return { recipe_id: id, category_id: category }
        })
        return db('cuisine_categories_recipes')
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
            return db('ingredients_recipes')
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
                  .insert(instructions)
                  .transacting(trx)
              })
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
  close
}
// getRecipeIngredient(1).then(data => {
//   console.log(data)
//   close()
// }).catch(err => {
//   console.log(err.message)
//   close()
// })
