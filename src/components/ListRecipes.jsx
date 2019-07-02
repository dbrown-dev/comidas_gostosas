import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import RecipeCard from './RecipeCard'
import { getRecipesSummary } from '../utilities/api'
import { setRecipesList } from '../actions/recipesList'



const ListRecipes = ({ recipesList, classes, dispatch }) => {
  const getRecipesList = async () => {
    try {
      const recipesListData = await getRecipesSummary()
      dispatch(setRecipesList(recipesListData))
    } catch {
      throw new Error('Error with fetching  recipes list from API')
    }
  }
  getRecipesList()

  return (
    <Container maxWidth="md" className={classes.recipeList}>
      <Grid container spacing={6}>
        {recipesList.map(recipe => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <RecipeCard classes={classes} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    recipesList: state.recipesList
  }
}

export default connect(mapStateToProps)(ListRecipes)
