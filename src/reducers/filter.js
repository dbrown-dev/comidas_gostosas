import {
  UPDATE_SEASON_FILTER,
  UPDATE_TIME_FILTER,
  UPDATE_CATEGORY_FILTER
} from '../actions/filter'

const initialState = {
  selectedSeasons: {},
  selectedTimes: {},
  selectedCategories: {}
}

function filter(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEASON_FILTER:
      return {
        ...state,
        selectedSeasons: {
          isLoaded: true,
          data: action.seasons
        }
      }

    case UPDATE_TIME_FILTER:
      return {
        ...state,
        selectedTimes: {
          isLoaded: true,
          data: action.times
        }
      }

    case UPDATE_CATEGORY_FILTER:
      return {
        ...state,
        selectedCategories: {
          isLoaded: true,
          data: action.times
        }
      }

    default:
      return state
  }
}

export default filter
