import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  }
})

const Menu = ({ children, innerProps, classes }) => (
  <Paper square className={classes.paper} {...innerProps}>
    {children}
  </Paper>
)

export default withStyles(styles)(Menu)

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}
