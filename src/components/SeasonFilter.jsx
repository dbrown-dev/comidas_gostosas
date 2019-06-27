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

const SeasonFilter = ({ classes,  seasons, seasonState, handleSeasonChange }) => {
  return (
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="season-select" className={classes.white}>Season</InputLabel>
            <Select
              multiple
              value={seasonState}
              onChange={handleSeasonChange}
              input={<Input id="season-select" />}
              renderValue={selected => selected.join(', ')}
            >
              {seasons && seasons.map(season => (
                <MenuItem key={season.id} value={season.season}>
                  <Checkbox checked={seasonState.indexOf(season.season) > -1} />
                  <ListItemText primary={season.season} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

  )
}

export default  SeasonFilter