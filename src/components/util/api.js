import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/'

export const getRecipesSummary = (callback) => {
  request
    .get(apiUrl + 'recipes')
    .end((err, res) => {
      callback(res.body)
    })
}

export const getRecipeDetail = (recipeId, callback) => {
  request
    .get(apiUrl + 'recipes/' + recipeId)
    .end((err, res) => {
      callback(res.body)
    })
}

export const getCookTimes = (callback) => {
  request
    .get(apiUrl + 'cooktimes')
    .end((err, res) => {
      callback(res.body)
    })
}

export const addRecipe = (recipe, callback) => {
  request
    .post(apiUrl)
    .send(recipe)
    .end((err, res) => {
      callback(err)
    })
}