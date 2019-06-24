exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('season')
    table.integer('rating').defaultsTo(0)
    table.string('image')
    table.integer('cook_time_id').references('cook_time.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes')
}
