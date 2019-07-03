import { getCategories } from '../utilities/api'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const SHOW_ERROR = 'IS_ERROR'

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}

export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES
  }
}

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getCategoriesList = () => {
  return dispatch => {
    dispatch(requestCategories())
    return getCategories()
      .then(categories => {
        console.log(categories)
        dispatch(receiveCategories(categories))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
