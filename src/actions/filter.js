export const UPDATE_SEASON_FILTER = 'UPDATE_SEASON_FILTER'
export const UPDATE_TIME_FILTER = 'UPDATE_TIME_FILTER'
export const UPDATE_CATEGORY_FILTER = 'UPDATE_CATEGORY_FILTER'
const seasonFieldName = 'season'
const timeFieldName = 'time'
const categoryFieldName = 'category'

export const setSeasonFilter = values => {
  return {
    type: UPDATE_SEASON_FILTER,
    seasons: values
  }
}

export const setTimeFilter = values => {
  return {
    type: UPDATE_TIME_FILTER,
    times: values
  }
}

export const setCategoryFilter = values => {
  return {
    type: UPDATE_CATEGORY_FILTER,
    categories: values
  }
}

export const updateRecipesList = (name, values) => {
  switch (name) {
    case seasonFieldName:
      return setSeasonFilter(values)
    case timeFieldName:
      return setTimeFilter(values)
    case categoryFieldName:
      return setCategoryFilter(values)
    default:
      return null
  }
}
