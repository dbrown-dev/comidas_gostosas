import {
  RECEIVE_SEASONS
} from '../actions/seasons'

const initialState = {}

const seasons = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SEASONS:
      return {
        isLoaded: true,
        data: action.seasons
      }
    default:
      return state
  }
}

export default seasons
