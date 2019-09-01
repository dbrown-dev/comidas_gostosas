import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  }
})

const NoOptionsMessage = ({ classes, children, innerProps }) => (
  <Typography
    color="textSecondary"
    className={classes.noOptionsMessage}
    {...innerProps}
  >
    {children}
  </Typography>
)

export default withStyles(styles)(NoOptionsMessage)

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  classes: PropTypes.string.isRequired
}
