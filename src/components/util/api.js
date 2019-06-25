import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/'

export function getRecipesSummary (callback) {
  request
    .get(apiUrl + 'recipes')
    .end((err, res) => {
      console.log(res.body)
      callback(res.body)
    })
}

export function addRecipe (recipe, callback) {
  request
    .post(apiUrl)
    .send(recipe)
    .end((err, res) => {
      callback(err)
    })
}