import { getCookTimes } from '../utilities/api'

export const RECEIVE_COOKTIMES = 'RECEIVE_COOKTIMES'
export const REQUEST_COOKTIMES = 'REQUEST_COOKTIMES'
export const SHOW_ERROR = 'IS_ERROR'

export const receiveCookTimes = cookTimes => {
  return {
    type: RECEIVE_COOKTIMES,
    cookTimes: cookTimes
  }
}

export const requestCookTimes = () => {
  return {
    type: REQUEST_COOKTIMES
  }
}

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getCookTimesList = () => {
  return dispatch => {
    dispatch(requestCookTimes())
    return getCookTimes()
      .then(cookTimes => {
        dispatch(receiveCookTimes(cookTimes))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
