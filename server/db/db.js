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
      db.raw('GROUP_CONCAT(cuisine_categories.category_name, "@") cuisine_categories')
    )
    .orderBy('recipes.id')
    .groupBy('recipes.id')
    .modify((queryBuilder) => {
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
  .join('ingredients_recipes', 'ingredients_recipes.ingredients_id', 'ingredients.id')
  .join('recipes', 'ingredients_recipes.recipe_id', 'recipes.id')
  .join('measurements', 'measurements.id', 'ingredients_recipes.measure_id')
  .select('ingredients.id', 'ingredients.name', 'ingredients_recipes.quantity', 'ingredients_recipes.ingredient_group', 'measurements.measurement_name')
  .orderBy('ingredients.id')
  .where('recipes.id', id)
  .groupBy('ingredients.id')
}

const close = (db = database) => {
  db.destroy()
}

module.exports = {
  getRecipeSummaries,
  getRecipeInstructions,
  getRecipeIngredients,
  close
}
// getRecipeIngredient(1).then(data => {
//   console.log(data)
//   close()
// }).catch(err => {
//   console.log(err.message)
//   close()
// })