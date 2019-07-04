import { getSeasons } from '../utilities/api'

export const RECEIVE_SEASONS = 'RECEIVE_SEASONS'
export const REQUEST_SEASONS = 'REQUEST_SEASONS'
export const SHOW_ERROR = 'IS_ERROR'

export const receiveSeasons = seasons => {
  return {
    type: RECEIVE_SEASONS,
    seasons: seasons
  }
}

export const requestSeasons = () => {
  return {
    type: REQUEST_SEASONS
  }
}

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getSeasonsList = () => {
  return dispatch => {
    dispatch(requestSeasons())
    return getSeasons()
      .then(seasons => {
        dispatch(receiveSeasons(seasons))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
