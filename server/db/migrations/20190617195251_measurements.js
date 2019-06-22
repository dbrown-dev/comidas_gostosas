exports.up = function (knex, Promise) {
  return knex.schema.createTable('measurements', table => {
    table.increments('id').primary()
    table.string('measurement_name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('measurements')
}
