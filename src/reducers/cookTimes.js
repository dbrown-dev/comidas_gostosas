import {
  RECEIVE_COOKTIMES
} from '../actions/cookTimes'

const initialState = {}

const cookTimes = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_COOKTIMES:
      return {
        isLoaded: true,
        data: action.cookTimes
      }
    default:
      return state
  }
}

export default cookTimes
