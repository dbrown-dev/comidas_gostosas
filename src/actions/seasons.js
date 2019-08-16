import { getSeasons } from '../utilities/api'
import { showError, mapApiDataToOptionsForSelectComponent } from './'

export const RECEIVE_SEASONS = 'RECEIVE_SEASONS'
export const REQUEST_SEASONS = 'REQUEST_SEASONS'

export const receiveSeasons = seasons => {
  return {
    type: RECEIVE_SEASONS,
    seasons: mapApiDataToOptionsForSelectComponent(seasons)
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
    return getSeasons()
      .then(seasons => {
        dispatch(receiveSeasons(seasons))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
