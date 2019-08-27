exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments('id').primary()
    table.string('title')
    table.string('season_id').references('seasons.id')
    table.integer('rating').defaultsTo(0)
    table.string('image')
    table.integer('cook_time_id').references('cook_times.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes')
}
