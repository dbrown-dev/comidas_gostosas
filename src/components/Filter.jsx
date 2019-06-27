import React from 'react'
import { Paper, Grid, Select, FormControl, InputLabel, MenuItem, Checkbox, Input, ListItemText } from '@material-ui/core'

const names = [
  'Summer',
  'Winter',
  'Autumn',
  'Spring',
];


export default ({ classes, handleFilterChange, cookTime, onFilterChange }) => {

  const [seasonState, setSeason] = React.useState([])
  const [timeState, setTime] = React.useState([...cookTime])
  const [categoryState, setCategory] = React.useState([])


  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    onFilterChange({timeState, categoryState})
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  return (
    <Paper elevation="15" className={classes.filter}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="season-select">Season</InputLabel>
            <Select
              multiple
              value={seasonState}
              onChange={handleSeasonChange}
              input={<Input id="season-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={seasonState.indexOf(name) > -1} />
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
              value={timeState}
              onChange={handleTimeChange}
              input={<Input id="time-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {cookTime.map(time => (
                <MenuItem key={time.id} value={time.id}>
                  <Checkbox checked={timeState.indexOf(time) > -1} />
                  <ListItemText primary={time.timeOptions} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-select">Category</InputLabel>
            <Select
              multiple
              value={category}
              onChange={handleCategoryChange}
              input={<Input id="category-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={category.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
    </Paper>
  )
}
