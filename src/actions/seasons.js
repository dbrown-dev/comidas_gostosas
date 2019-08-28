import { makeAPICall } from '../utilities/api'
import { showError } from './'

export const RECEIVE_SEASONS = 'RECEIVE_SEASONS'
export const REQUEST_SEASONS = 'REQUEST_SEASONS'

export const receiveSeasons = seasons => {
  return {
    type: RECEIVE_SEASONS,
    seasons
  }
}

export const requestSeasons = () => {
  return {
    type: REQUEST_SEASONS
  }
}

export const getSeasonsList = () => {
  return dispatch => {
    dispatch(requestSeasons())
    return makeAPICall('seasons')
      .then(({ body }) => {
        dispatch(receiveSeasons(body))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
