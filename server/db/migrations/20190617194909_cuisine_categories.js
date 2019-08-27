exports.up = function (knex, Promise) {
  return knex.schema.createTable('cuisine_categories', table => {
    table.increments('id').primary()
    table.string('label')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cuisine_categories')
}
