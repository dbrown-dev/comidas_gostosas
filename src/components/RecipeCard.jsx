import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@material-ui/core'


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
        <Button size="small" color="secondary">
          Details
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
