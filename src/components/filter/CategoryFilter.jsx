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
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCategoriesList } from '../../actions/categories'

const CategoryFilter = ({
  classes,
  categories,
  selectedCategories,
  handleCategoryChange,
  isLoading,
  dispatch
}) => {

  useEffect(() => {
    dispatch(getCategoriesList())
  }, [])

  return (
    <Grid item xs={12} sm={6} md={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category-select" className={classes.white}>
          Category
        </InputLabel>
        <Select
          multiple
          name="category"
          className={classes.select}
          value={selectedCategories}
          onChange={handleCategoryChange}
          input={<Input id="category-select" />}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
          renderValue={selected => selected.join(', ')}
        >
          {!isLoading &&
            categories.map(category => (
              <MenuItem key={category.id} value={category.categoryName}>
                <Checkbox
                  checked={selectedCategories.indexOf(category.categoryName) > -1}
                />
                <ListItemText primary={category.categoryName} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    selectedCategories: state.filter.selectedCategories,
    categories: state.categories,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(CategoryFilter)

CategoryFilter.propTypes = {
  classes: PropTypes.object,
  categories: PropTypes.array,
  selectedCategories: PropTypes.array,
  handleCategoryChange: PropTypes.func,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func
}
