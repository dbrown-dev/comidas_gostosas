exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cook_times')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cook_times').insert([
        { id: 1, label: 'Quick' },
        { id: 2, label: 'Medium' },
        { id: 3, label: 'Long' }
      ])
    })
}
