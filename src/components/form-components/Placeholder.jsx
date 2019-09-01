import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16
  }
})

const Placeholder = ({ classes, innerProps = {}, children }) => (
  <Typography
    color="textSecondary"
    className={classes.placeholder}
    {...innerProps}
  >
    {children}
  </Typography>
)

export default withStyles(styles)(Placeholder)

Placeholder.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.object,
  classes: PropTypes.object.isRequired
}
