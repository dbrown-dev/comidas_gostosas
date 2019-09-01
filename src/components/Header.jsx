import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = () => ({
  siteTitle: {
    fontSize: 20,
    fontWeight: 700
  }
})

const Header = ({ classes }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.siteTitle} color="secondary">
            Comidas Gostosas
          </Typography>
          <Link to='/add'>Add Recipe</Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default withStyles(styles)(Header)

Header.propTypes = {
  classes: PropTypes.shape({ siteTitle: PropTypes.string })
}
