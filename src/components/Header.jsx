import React from 'react'
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'

import Filter from './Filter'

const Header = ({ classes, cookTime, onFilterChange, categories, seasons, displayFilter }) => {
  return (
    <>
      <Container maxWidth={false} className={classes.photoBanner}>
        <Typography className={classes.appTitle}>Comida Gostosa</Typography>
      </Container>
      <AppBar position="static">
        <Toolbar>
          {displayFilter && <Filter
            classes={classes}
            onFilterChange={onFilterChange}
            categories={categories}
            seasons={seasons}
            cookTime={cookTime}
          />}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header

Header.propTypes = {
  classes: PropTypes.object,
  cookTime: PropTypes.array, 
  onFilterChange: PropTypes.func,
  categories: PropTypes.array,
  seasons: PropTypes.array,
  displayFilter: PropTypes.bool
}
