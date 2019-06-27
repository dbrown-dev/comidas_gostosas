import React from 'react'
import { Paper, Grid, Select, FormControl, InputLabel, MenuItem, Checkbox, Input, ListItemText } from '@material-ui/core'

const names = [
  'Summer',
  'Winter',
  'Autumn',
  'Spring',
];


export default ({ classes, handleFilterChange, cookTime, onFilterChange }) => {

  const [season, setSeason] = React.useState([])
  const [time, setTime] = React.useState([])
  const [category, setCategory] = React.useState([])


  function handleChange(event) {
    setPersonName(event.target.value);
  }

  return (
    <Paper elevation="15" className={classes.filter}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="season-select">Season</InputLabel>
            <Select
              multiple
              value={season}
              onChange={handleChange}
              input={<Input id="season-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="time-select">Time</InputLabel>
            <Select
              color='inherit'
              multiple
              value={time}
              onChange={handleChange}
              input={<Input id="time-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {cookTime.map(time => (
                <MenuItem key={time} value={time}>
                  <Checkbox checked={personName.indexOf(time) > -1} />
                  <ListItemText primary={time} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-select">Category</InputLabel>
            <Select
              multiple
              value={category}
              onChange={handleChange}
              input={<Input id="category-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  )
}
