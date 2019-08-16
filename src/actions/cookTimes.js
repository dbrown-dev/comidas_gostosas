import { getCookTimes } from '../utilities/api'
import { showError, mapApiDataToOptionsForSelectComponent } from './'

export const RECEIVE_COOKTIMES = 'RECEIVE_COOKTIMES'
export const REQUEST_COOKTIMES = 'REQUEST_COOKTIMES'

export const receiveCookTimes = cookTimes => {
  return {
    type: RECEIVE_COOKTIMES,
    cookTimes: mapApiDataToOptionsForSelectComponent(cookTimes)
  }
}

export const requestCookTimes = () => {
  return {
    type: REQUEST_COOKTIMES
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
