exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cuisine_categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_categories').insert([
        { id: 1, category_name: 'Italian' },
        { id: 2, category_name: 'Vegetarian' },
        { id: 3, category_name: 'Mediterranean' },
        { id: 4, category_name: 'Asian' },
        { id: 5, category_name: 'Pasta' },
        { id: 6, category_name: 'Rice' }
      ])
    })
}
