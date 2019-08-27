exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cuisine_categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_categories').insert([
        { id: 1, label: 'Italian' },
        { id: 2, label: 'Vegetarian' },
        { id: 3, label: 'Mediterranean' },
        { id: 4, label: 'Asian' },
        { id: 5, label: 'Pasta' },
        { id: 6, label: 'Rice' }
      ])
    })
}
