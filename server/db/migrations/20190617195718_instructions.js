exports.up = function (knex, Promise) {
  return knex.schema.createTable('instructions', table => {
    table.increments('id').primary()
    table.integer('recipe_id').references('recipes.id')
    table.string('image')
    table.string('instruction')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('instructions')
}
