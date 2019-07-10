import {
  RECEIVE_MEASUREMENTS
} from '../actions/measurements'

const initialState = {}

const measurements = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MEASUREMENTS:
      return {
        isLoaded: true,
        data: action.measurements
      }
    default:
      return state
  }
}

export default measurements
