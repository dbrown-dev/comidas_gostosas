exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cuisine_categories_recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_categories_recipes').insert([
        { id: 1, recipe_id: 1, category_id: 4 },
        { id: 2, recipe_id: 1, category_id: 6 },
        { id: 3, recipe_id: 1, category_id: 2 },
        { id: 4, recipe_id: 2, category_id: 2 },
        { id: 5, recipe_id: 2, category_id: 3 },
        { id: 6, recipe_id: 2, category_id: 6 },
        { id: 7, recipe_id: 3, category_id: 1 },
        { id: 8, recipe_id: 3, category_id: 2 },
        { id: 9, recipe_id: 3, category_id: 5 }
      ])
    })
}
