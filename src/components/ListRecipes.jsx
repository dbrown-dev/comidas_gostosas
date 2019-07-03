import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import RecipeCard from './RecipeCard'
import { getRecipesSummary } from '../utilities/api'
import { setRecipesList } from '../actions/recipesList'

class ListRecipes extends React.Component {
  getRecipesList = async () => {
    const { dispatch } = this.props
    try {
      const recipesListData = await getRecipesSummary()
      dispatch(setRecipesList(recipesListData))
    } catch {
      throw new Error('Error with fetching  recipes list from API')
    }
  }

  componentDidMount() {
    this.getRecipesList()
  }

  render() {
    const { recipesList, classes } = this.props
    console.log(recipesList)
    return (
      <Container maxWidth="md" className={classes.recipeList}>
        <Grid container spacing={6}>
          {recipesList[0] && recipesList[0].map(recipe => (
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
