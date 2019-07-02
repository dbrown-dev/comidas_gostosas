export const ADD_RECIPES = 'ADD_RECIPES'


export const setRecipesList = recipes => {
  return {
    type: ADD_RECIPES,
    recipes
  }
}
