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
import PropTypes from 'prop-types'

const TimeFilter = ({ classes, cookTime, timeState, handleTimeChange }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="time-select" className={classes.white}>Time</InputLabel>
        <Select
          multiple
          className={classes.select}
          value={timeState}
          onChange={handleTimeChange}
          input={<Input id="time-select" />}
          inputProps={{
            classes: {
                icon: classes.icon,
            },
        }}
          renderValue={selected => selected.join(', ')}
        >
          {cookTime && cookTime.map(time => (
            <MenuItem key={time.id} value={time.timeOptions}>
              <Checkbox checked={timeState.indexOf(time.timeOptions) > -1} />
              <ListItemText primary={time.timeOptions} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

export default TimeFilter

TimeFilter.propTypes = {
  classes: PropTypes.object,
  cookTime: PropTypes.array,
  timeState: PropTypes.array,
  handleTimeChange: PropTypes.func
}
