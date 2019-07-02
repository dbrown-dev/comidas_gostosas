const initialState = {
  error: { isError: false, message: '' },
  recipesList: [],
  cookTimes: [],
  categories: [],
  seasons: [],
  measurements: [],
  ingredients: [],
  currentRecipe: {},
  filter: { selectedSeasons: [], selectedTimes: [], selectedCategories: [] }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        wombats: [...state.wombats, action.wombat]
      }
    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter(wombat => wombat !== action.wombat)
      }
    default:
      return state
  }
}

export default rootReducer
