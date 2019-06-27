import React from 'react'
import { Container, Grid } from '@material-ui/core'
import RecipeCard from './RecipeCard'

export default ({ recipes, classes }) => {
  return (
    <Container maxWidth="md" className={classes.recipeList}>
      <Grid container spacing={4}>
        {recipes.map(recipe => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <RecipeCard classes={classes} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
