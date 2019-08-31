import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'ramda'
import { withStyles } from '@material-ui/styles'

import RecipeCard from './RecipeCard'
import { getRecipesList } from '../../actions/recipesList'

const styles = theme => ({
  recipeList: {
    marginTop: theme.spacing(5)
  }
})

const RecipeList = ({ recipesList, classes, dispatch }) => {
  useEffect(() => {
    dispatch(getRecipesList())
  }, [dispatch])

  return (
    <Container maxWidth="md" className={classes.recipeList}>
      <Grid container spacing={6}>
        {recipesList.isLoaded &&
          recipesList.data.map(recipe => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = ({ recipesList }) => {
  return {
    recipesList
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(RecipeList)

RecipeList.propTypes = {
  classes: PropTypes.object,
  recipesList: PropTypes.object,
  dispatch: PropTypes.func
}
