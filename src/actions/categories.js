import { makeAPICall } from '../utilities/api'
import { showError } from './'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES
  }
}

export const getCategoriesList = () => {
  return dispatch => {
    dispatch(requestCategories())
    return makeAPICall('categories')
      .then(({ body }) => {
        dispatch(receiveCategories(body))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
