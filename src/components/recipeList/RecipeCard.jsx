import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  recipeCard: {
    maxWidth: 345
  },
  cardMedia: {
    height: 140
  },
  cardTitle: {
    minHeight: 80
  }
})

const RecipeCard = ({ recipe, classes }) => {
  return (
    <Card className={classes.recipeCard}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image={recipe.image}
          title={recipe.title}
        />
        <CardContent>
          <Box className={classes.cardTitle}>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            Season: {recipe.season}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Time: {recipe.timeOptions}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {recipe.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Link to={`/${recipe.id}`}>
          <Button size="small" color="secondary">
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(RecipeCard)

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired
}
