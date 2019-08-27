exports.up = function (knex, Promise) {
  return knex.schema.createTable('cook_times', table => {
    table.increments('id').primary()
    table.string('label')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cook_times')
}
