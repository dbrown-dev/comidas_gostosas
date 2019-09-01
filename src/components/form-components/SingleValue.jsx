import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  singleValue: {
    fontSize: theme.typography.fontSize
  }
})

const SingleValue = ({ classes, innerProps, children }) => (
  <Typography className={classes.singleValue} {...innerProps}>
    {children}
  </Typography>
)

export default withStyles(styles)(SingleValue)

SingleValue.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.any.isRequired,
  classes: PropTypes.string.isRequired
}
