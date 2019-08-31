import React from 'react'
import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  Input,
  ListItemText
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  formControl: {
    margin: theme.spacing(3),
    width: 250,
    display: 'flex',
    wrap: 'nowrap'
  },
  label: {
    color: theme.palette.primary.main
  },
  select: {
    '&:before': {
      borderColor: theme.palette.primary.main
    },
    '&:after': {
      borderColor: theme.palette.primary.main
    }
  },
  icon: {
    fill: theme.palette.primary.main
  }
})

const MultiSelect = ({
  options,
  classes,
  selectedOptions,
  handleChange,
  isLoaded,
  name,
  label
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`multi-select-${name}`} className={classes.label}>
          {label}
        </InputLabel>
        <Select
          multiple
          name={name}
          className={classes.select}
          value={selectedOptions}
          onChange={handleChange}
          input={<Input id={`multi-select-${name}`} />}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
          renderValue={selected => selected.join(', ')}
        >
          {isLoaded &&
            options.map(option => (
              <MenuItem key={option.id} value={option.label}>
                <Checkbox
                  checked={selectedOptions.indexOf(option.label) > -1}
                />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

export default withStyles(styles)(MultiSelect)

MultiSelect.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.object),
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
