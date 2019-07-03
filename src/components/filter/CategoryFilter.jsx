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

const CategoryFilter = ({ classes, categories, categoryState, handleCategoryChange }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="category-select" className={classes.white}>Category</InputLabel>
      <Select
        multiple
        className={classes.select}
        value={categoryState}
        onChange={handleCategoryChange}
        input={<Input id="category-select" />}
        inputProps={{
          classes: {
              icon: classes.icon,
          },
      }}
        renderValue={selected => selected.join(', ')}
      >
        {categories && categories.map(category => (
          <MenuItem key={category.id} value={category.categoryName}>
            <Checkbox
              checked={categoryState.indexOf(category.categoryName) > -1}
            />
            <ListItemText primary={category.categoryName} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
  )
}

export default CategoryFilter

CategoryFilter.propTypes = {
  classes: PropTypes.object,
  categories: PropTypes.array,
  categoryState: PropTypes.array,
  handleCategoryChange: PropTypes.func
}