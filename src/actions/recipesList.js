import { getRecipesSummary } from '../utilities/api'

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'
export const REQUEST_RECIPES = 'IS_LOADING'
export const SHOW_ERROR = 'IS_ERROR'

export const receiveRecipes = recipes => {
  return {
    type: RECEIVE_RECIPES,
    recipes: recipes
  }
}

export const requestRecipes = () => {
  return {
    type: REQUEST_RECIPES
  }
}

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getRecipesList = () => {
  return dispatch => {
    dispatch(requestRecipes())
    return getRecipesSummary().then(recipesList => {
        dispatch(receiveRecipes(recipesList))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}

// export function fetchJoke() {
//   return (dispatch) => {
//     dispatch(requestJoke())
//     return request
//       .get('/api/v1/joke')
//       .then(res => {
//         dispatch(receiveJoke(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }
