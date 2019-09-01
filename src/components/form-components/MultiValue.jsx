import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Chip } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { makeStyles, emphasize } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  }
}))

export const MultiValue = ({ removeProps, isFocused, children }) => {
  const classes = useStyles()
  return (
    <Chip
      tabIndex={-1}
      label={children}
      className={clsx(classes.chip, {
        [classes.chipFocused]: isFocused
      })}
      onDelete={removeProps.onClick}
      deleteIcon={<CancelIcon {...removeProps} />}
    />
  )
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
  }).isRequired
}
