import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  recipePhoto: {
    width: 400,
    height: 400,
    objectFit: 'cover',
    borderRadius: 5
  },
  recipePaper: {
    padding: '20px 30px',
    marginBottom: theme.spacing(3)
  },
  greyRecipeBox: {
    backgroundColor: '#F5F4F4',
    padding: theme.spacing(1)
  }
})

const RecipeDetails = ({ recipe, classes }) => {
  return (
    <Container maxWidth={'lg'}>
      <Box mt={3}>
        <Paper className={classes.recipePaper} elevation={10}>
          <Box mb={3}>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item lg={7}>
                <Typography variant="h2" gutterBottom={true}>
                  {recipe.title}
                </Typography>
                <Typography variant="subtitle1">
                  Season: {recipe.season}
                </Typography>
                <Typography variant="subtitle1">
                  Time: {recipe.cookTime}
                </Typography>
                <Typography variant="subtitle1">
                  Rating: {recipe.rating}
                </Typography>
                <Typography variant="subtitle1">
                  Cusine Categories:{' '}
                  {recipe.cuisineCategories.map((category, i, arr) => {
                    return arr.length === i + 1 ? (
                      <span key={i}>{category}</span>
                    ) : (
                      <span key={i}>{category}, </span>
                    )
                  })}
                </Typography>
              </Grid>
              <Grid item>
                <img
                  className={classes.recipePhoto}
                  src={recipe.image}
                  alt={recipe.title}
                />
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item lg={3} className={classes.greyRecipeBox}>
              <Typography variant="h4">Ingredients:</Typography>
              <List>
                {recipe.ingredients.map(ingredient => {
                  return (
                    <ListItem key={ingredient.id + Math.random()}>
                      {ingredient.measurement === 'None' ? (
                        <ListItemText
                          primary={`${ingredient.quantity} ${ingredient.ingredient}`}
                        />
                      ) : (
                        <ListItemText
                          primary={`${ingredient.quantity} ${ingredient.measurement} of ${ingredient.ingredient}`}
                        />
                      )}
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
            <Grid item lg={8}>
              <Typography variant="h4">Instructions:</Typography>
              <List>
                {recipe.instructions.map(instruction => {
                  return (
                    <ListItem key={instruction.id}>
                      <ListItemText primary={instruction.instruction} />
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}

export default withStyles(styles)(RecipeDetails)

RecipeDetails.propTypes = {
  classes: PropTypes.object,
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.node.isRequired,
    rating: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    cookTime: PropTypes.node.isRequired,
    season: PropTypes.node.isRequired,
    cuisineCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        measurement: PropTypes.node.isRequired,
        quantity: PropTypes.node.isRequired,
        ingredient: PropTypes.node.isRequired
      })
    ).isRequired,
    instructions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        instruction: PropTypes.node.isRequired
      })
    ).isRequired
  })
}
