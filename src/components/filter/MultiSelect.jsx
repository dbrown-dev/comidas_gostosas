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
import T from 'prop-types'

const MultiSelect = ({
  classes,
  options,
  selectedOptions,
  handleChange,
  isLoaded,
  name,
  label
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={`multi-select-${name}`} className={classes.white}>
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

export default MultiSelect

MultiSelect.propTypes = {
  classes: T.object,
  options: T.arrayOf(T.object).isRequired,
  selectedOptions: T.arrayOf(T.string).isRequired,
  handleChange: T.func.isRequired,
  isLoaded: T.bool.isRequired,
  name: T.string.isRequired,
  label: T.string.isRequired
}
