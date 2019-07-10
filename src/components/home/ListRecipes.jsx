import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RecipeCard from './RecipeCard'
import { getRecipesList } from '../../actions/recipesList'

const ListRecipes = ({ recipesList, classes, isLoading, dispatch }) => {
  
  useEffect(() => {
    dispatch(getRecipesList())
  }, [dispatch])

  return (
    <Container maxWidth="md" className={classes.recipeList}>
      <Grid container spacing={6}>
        {recipesList.isLoaded && recipesList.data.map(recipe => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <RecipeCard classes={classes} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    recipesList: state.recipesList
  }
}

export default connect(mapStateToProps)(ListRecipes)

ListRecipes.propTypes = {
  classes: PropTypes.object,
  recipesList: PropTypes.object,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func
}
