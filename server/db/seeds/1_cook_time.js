exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cook_time')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cook_time').insert([
        { id: 1, time_options: 'Quick' },
        { id: 2, time_options: 'Medium' },
        { id: 3, time_options: 'Long' }
      ])
    })
}
