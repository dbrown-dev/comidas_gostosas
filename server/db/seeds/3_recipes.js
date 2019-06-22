exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          title: 'Miso Ginger Tofu and Rice Bowl',
          season: 'Summer',
          rating: 4.8,
          image: '/images/food.png',
          cook_time_id: 1
        },
        {
          id: 2,
          title: 'Shakshuka',
          season: 'Winter',
          rating: 4.8,
          image: '/images/food.png',
          cook_time_id: 2
        },
        {
          id: 3,
          title: 'Pesto Spaghetti with Pumpkin, Rockert, Olives and Cherry Tomatoes',
          season: 'Summer',
          rating: 4.4,
          image: '/images/food.png',
          cook_time_id: 1
        }
      ])
    })
}
