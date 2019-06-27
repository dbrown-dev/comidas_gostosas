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


  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    onFilterChange({season, time, category})
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange({season, time, category})
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
              onChange={handleSeasonChange}
              input={<Input id="season-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={season.indexOf(name) > -1} />
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
              onChange={handleTimeChange}
              input={<Input id="time-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {cookTime.map(time => (
                <MenuItem key={time.id} value={time.timeOptions}>
                  <Checkbox checked={cookTime.indexOf(time) > -1} />
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
