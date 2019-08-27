exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients_recipes', table => {
    table.increments('id').primary()
    table.integer('recipe_id').references('recipes.id')
    table.integer('ingredient_id').references('ingredients.id')
    table.integer('quantity')
    table.integer('measurement_id').references('measurements.id')
    table.string('ingredient_group')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ingredients_recipes')
}
