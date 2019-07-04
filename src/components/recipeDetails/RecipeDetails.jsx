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

const RecipeDetails = ({ recipe, classes }) => {
  console.log(recipe, classes)
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
                  Time: {recipe.timeOptions}
                </Typography>
                <Typography variant="subtitle1">
                  Rating: {recipe.rating}
                </Typography>
                <Typography variant="subtitle1">
                  Cusine Categories:{' '}
                  {recipe.cuisineCategories.map((category, i, arr) => {
                    return arr.length === i + 1 ? (
                      <span>{category}</span>
                    ) : (
                        <span>{category}, </span>
                      )
                  })}
                </Typography>
              </Grid>
              <Grid item>
                <img className={classes.recipePhoto} src={recipe.image} />
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
                    <ListItem key={ingredient.id}>
                      {ingredient.measurementName === 'None' ? (
                        <ListItemText
                          primary={`${ingredient.quantity} ${ingredient.name}`}
                        />
                      ) : (
                          <ListItemText
                            primary={`${ingredient.quantity} ${
                              ingredient.measurementName
                              } of ${ingredient.name}`}
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



export default RecipeDetails

RecipeDetails.propTypes = {
  classes: PropTypes.object,
  recipe: PropTypes.object
}
