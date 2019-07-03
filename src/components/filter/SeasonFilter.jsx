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

const SeasonFilter = ({ classes,  seasons, seasonState, handleSeasonChange }) => {
  return (
        <Grid item xs={12} sm={6} md={4}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="season-select" className={classes.white}>Season</InputLabel>
            <Select
              multiple
              className={classes.select}
              value={seasonState}
              onChange={handleSeasonChange}
              input={<Input id="season-select" />}
              inputProps={{
                classes: {
                    icon: classes.icon,
                },
            }}
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

SeasonFilter.propTypes = {
  classes: PropTypes.object,
  seasons: PropTypes.array,
  seasonState: PropTypes.array,
  handleSeasonChange: PropTypes.func
}