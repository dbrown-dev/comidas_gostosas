import React from 'react'
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'

import Filter from './filter/Filter'

const Header = ({ classes, displayFilter }) => {
  return (
    <>
      <Container maxWidth={false} className={classes.photoBanner}>
        <Typography className={classes.appTitle}>Comida Gostosa</Typography>
      </Container>
      <AppBar position="static">
        <Toolbar>
          {displayFilter && <Filter
            classes={classes}
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
