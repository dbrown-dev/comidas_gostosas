import {
  UPDATE_SEASON_FILTER,
  UPDATE_TIME_FILTER,
  UPDATE_CATEGORY_FILTER
} from '../actions/filter'

const initialState = {
  selectedSeasons: [],
  selectedTimes: [],
  selectedCategories: []
}

function filter(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEASON_FILTER:
      return {
        ...state,
        selectedSeasons: action.seasons
      }

    case UPDATE_TIME_FILTER:
      return {
        ...state,
        selectedTimes: action.times
      }

    case UPDATE_CATEGORY_FILTER:
      return {
        ...state,
        selectedCategories: action.categories
      }

    default:
      return state
  }
}

export default filter
