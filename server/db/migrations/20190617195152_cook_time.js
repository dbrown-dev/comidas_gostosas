exports.up = function (knex, Promise) {
  return knex.schema.createTable('cook_time', table => {
    table.increments('id').primary()
    table.string('time_options')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cook_time')
}
