import React, { useEffect } from 'react'
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
import { connect } from 'react-redux'
import { getSeasonsList } from '../../actions/seasons';

const SeasonFilter = ({
  classes,
  seasons,
  selectedSeasons,
  handleSeasonChange,
  isLoading,
  dispatch
}) => {

  useEffect(() => {
    dispatch(getSeasonsList())
  }, [dispatch])

  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="season-select" className={classes.white}>
          Season
        </InputLabel>
        <Select
          multiple
          name="season"
          className={classes.select}
          value={selectedSeasons}
          onChange={handleSeasonChange}
          input={<Input id="season-select" />}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
          renderValue={selected => selected.join(', ')}
        >
          {seasons.isLoaded &&
            seasons.data.map(season => (
              <MenuItem key={season.id} value={season.season}>
                <Checkbox checked={selectedSeasons.indexOf(season.season) > -1} />
                <ListItemText primary={season.season} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    selectedSeasons: state.filter.selectedSeasons,
    seasons: state.seasons,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(SeasonFilter)

SeasonFilter.propTypes = {
  classes: PropTypes.object,
  seasons: PropTypes.object,
  selectedSeasons: PropTypes.array,
  handleSeasonChange: PropTypes.func,
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool
}
