import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RecipeCard from './RecipeCard'
import { getRecipesList } from '../../actions/recipesList'

class ListRecipes extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getRecipesList())
  }

  render() {
    const { recipesList, classes, isLoading } = this.props
    return (
      <Container maxWidth="md" className={classes.recipeList}>
        <Grid container spacing={6}>
          {!isLoading && recipesList.map(recipe => (
            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
              <RecipeCard classes={classes} recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipesList: state.recipesList
  }
}

export default connect(mapStateToProps)(ListRecipes)

ListRecipes.propTypes = {
  classes: PropTypes.object,
  recipesList: PropTypes.array,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func
}
