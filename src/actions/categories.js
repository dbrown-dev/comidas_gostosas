import { getCategories } from '../utilities/api'
import { showError, mapApiDataToOptionsForSelectComponent } from './'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories: mapApiDataToOptionsForSelectComponent(categories)
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
    return getCategories()
      .then(categories => {
        dispatch(receiveCategories(categories))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
