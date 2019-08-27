import { makeAPICall } from '../utilities/api'
import { showError } from './'

export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS'
export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'

export const receiveIngredients = ingredients => {
  return {
    type: RECEIVE_INGREDIENTS,
    ingredients: ingredients
  }
}

export const requestIngredients = () => {
  return {
    type: REQUEST_INGREDIENTS
  }
}

export const getIngredientsList = () => {
  return dispatch => {
    dispatch(requestIngredients())
    return makeAPICall('ingredients')
      .then(({ body }) => {
        dispatch(receiveIngredients(body))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
