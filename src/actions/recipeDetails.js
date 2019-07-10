import { getRecipeDetail } from '../utilities/api'

export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'
export const REQUEST_RECIPE = 'REQUEST_RECIPE'
export const SHOW_ERROR = 'IS_ERROR'

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

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getRecipeDetails = id => {
  return dispatch => {
    dispatch(requestRecipe())
    return getRecipeDetail(id)
      .then(recipeDetails => {
          dispatch(receiveRecipe(recipeDetails))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
