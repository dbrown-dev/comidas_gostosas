import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'

const styles = () => ({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '45%'
  }
})

const Loading = ({ classes }) => (
  <CircularProgress className={classes.progress} color="secondary" />
)

export default withStyles(styles)(Loading)

Loading.propTypes = {
  classes: PropTypes.shape({ progress: PropTypes.string })
}
