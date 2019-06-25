exports.up = function (knex, Promise) {
  return knex.schema.createTable('cuisine_categories_recipes', table => {
    table.increments('id').primary()
    table.integer('recipe_id').references('recipes.id')
    table.integer('category_id').references('cuisine_categories.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cuisine_categories_recipes')
}


