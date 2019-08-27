import { makeAPICall } from '../utilities/api'
import { showError } from './'

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'

export const receiveRecipe = recipe => {
  return {
    type: RECEIVE_RECIPE,
    recipe: recipe
  }
}

export const requestRecipe = () => {
  return {
    type: REQUEST_RECIPE
  }
}

export const getRecipeDetails = id => {
  return dispatch => {
    dispatch(requestRecipe())
    return makeAPICall(`recipes/${id}`)
      .then(({ body }) => {
        dispatch(receiveRecipe(body))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
