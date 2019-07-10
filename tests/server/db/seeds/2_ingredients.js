exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'Pumpkin' },
        { id: 2, name: 'Olive Oil' },
        { id: 3, name: 'Shallot' },
        { id: 4, name: 'Garlic' },
        { id: 5, name: 'Cherry Tomatoes' },
        { id: 6, name: 'Spaghetti' },
        { id: 7, name: 'Basil Pesto' },
        { id: 8, name: 'Parmesan Cheese' },
        { id: 9, name: 'Rocket Leaves' },
        { id: 10, name: 'Kalamata Olives' },
        { id: 11, name: 'Basil Leaves' },
        { id: 12, name: 'Walnuts' },
        { id: 13, name: 'Capsicum' },
        { id: 14, name: 'Brown Onion' },
        { id: 15, name: 'Cumin' },
        { id: 16, name: 'Smoked Paprika' },
        { id: 17, name: 'Italian Chopped Tomatoes' },
        { id: 18, name: 'Salt' },
        { id: 19, name: 'Black Pepper' },
        { id: 20, name: 'Egg' },
        { id: 21, name: 'Feta Cheese' },
        { id: 22, name: 'White Rice' },
        { id: 23, name: 'Carrot' },
        { id: 24, name: 'Soy Sauce' },
        { id: 25, name: 'Firm Tofu' },
        { id: 26, name: 'CornFlour' },
        { id: 27, name: 'Ginger Miso Sauce' },
        { id: 28, name: 'Water' },
        { id: 29, name: 'Mayonnaise' },
        { id: 30, name: 'Avocado' },
        { id: 31, name: 'Sesame Seeds' }
      ])
    })
}
