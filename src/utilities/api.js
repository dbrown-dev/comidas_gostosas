import request from 'superagent'
import { compose } from 'ramda'

const apiUrl = t => `http://localhost:3000/api/${t}`

const getJSON = async url => request.get(url)

export const makeAPICall = compose(
  getJSON,
  apiUrl
)

export const postRecipe = recipe => {
  return new Promise((resolve, reject) => {
    request
      .post(apiUrl + 'recipes')
      .send(recipe)
      .end((error, res) => {
        error ? reject(error) : resolve(res.body)
      })
  })
}
