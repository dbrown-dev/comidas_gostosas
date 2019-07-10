const request = require('supertest')

const server = require('../../../server/server')

jest.mock('../../../server/db/db')

test('GET / returns all the recipe summaries', () => {
  return request(server)
    .get('/api/recipes')
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
})

test('GET /:id (1) returns a single recipe', () => {
  const expected = {
    "id": 1,
    "title": "test recipe",
    "season": "Summer",
    "rating": 4.8,
    "image": "/images/test.jpg",
    "timeOptions": "Quick",
    "cuisineCategories": [
        "Asian",
        "Rice",
        "Vegetarian"
    ],
    "instructions": [
        {
            "id": 1,
            "instruction": "test.",
            "image": "/images/food.png"
        },
        {
            "id": 2,
            "instruction": "test.",
            "image": "/images/food.png"
        }
    ],
    "ingredients": [
        {
            "id": 22,
            "name": "White Rice",
            "quantity": 1,
            "ingredientGroup": "Rice Bowl",
            "measurementName": "Cup"
        },
        {
            "id": 23,
            "name": "Carrot",
            "quantity": 1,
            "ingredientGroup": "Rice Bowl",
            "measurementName": "None"
        }
    ]
}
  return request(server)
    .get('/api/recipes/1')
    .then(res => {
      expect(res.body).toEqual(expected)
    })
})
