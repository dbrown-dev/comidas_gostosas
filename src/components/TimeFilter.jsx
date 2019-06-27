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

const TimeFilter = ({ classes, cookTime, timeState, handleTimeChange }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="time-select">Time</InputLabel>
        <Select
          multiple
          value={timeState}
          onChange={handleTimeChange}
          input={<Input id="time-select" />}
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
