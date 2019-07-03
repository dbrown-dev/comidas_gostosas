import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, FieldArray } from 'formik'
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  TextField,
  MenuItem,
  Select,
  Checkbox,
  Input,
  ListItemText,
  Button,
  InputLabel,
  FormControl
} from '@material-ui/core'
import Thumb from './Thumb'
import { Debug } from '../util/Debug'
import FileInput from './FileInput'

const AddRecipeForm = ({
  classes,
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  handleReset,
  seasonList,
  timeList,
  categoriesList
}) => {
  return (
    <Form>
      <Container maxWidth={'lg'}>
        <Box mt={3}>
          <Paper className={classes.recipePaper} elevation={10}>
            <Box mb={3}>
              <Typography>What is the Secret Recipe?</Typography>
              <Grid
                container
                spacing={0}
                direction="column"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item lg={7} />
                <TextField
                  error={errors.title && touched.title}
                  label="Title"
                  name="title"
                  className={classes.textField}
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.title && touched.title && errors.title}
                  margin="normal"
                />
                <TextField
                  select
                  name="season"
                  label="Season"
                  className={classes.textField}
                  value={values.season}
                  onChange={handleChange('season')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Select a season"
                  margin="normal"
                >
                  {seasonList.map(season => (
                    <MenuItem key={season.id} value={season.id}>
                      {season.season}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  name="cookTimeId"
                  label="Cook Time"
                  className={classes.textField}
                  value={values.cookTimeId}
                  onChange={handleChange('cookTimeId')}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Select a cooking time"
                >
                  {timeList.map(time => (
                    <MenuItem key={time.id} value={time.id}>
                      {time.timeOptions}
                    </MenuItem>
                  ))}
                </TextField>
                <FormControl>
                  <InputLabel htmlFor="category-select">Category</InputLabel>
                  <Select
                    multiple
                    className={classes.textField}
                    value={values.cuisineCategories}
                    onChange={handleChange('cuisineCategories')}
                    input={<Input id="category-select" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {categoriesList &&
                      categoriesList.map(category => (
                        <MenuItem
                          key={category.id}
                          value={category.categoryName}
                        >
                          <Checkbox
                            checked={
                              values.cuisineCategories.indexOf(
                                category.categoryName
                              ) > -1
                            }
                          />
                          <ListItemText primary={category.categoryName} />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <Grid item />
              </Grid>
            </Box>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <FieldArray name="instructions">
                {({ push, remove }) => (
                  <React.Fragment>
                    {values.instructions &&
                      values.instructions.length > 0 &&
                      values.instructions.map((instruction, index) => (
                        <>
                          <TextField
                            error={
                              errors[`instructions[${index}].instruction`] &&
                              touched[`instructions[${index}].instruction`]
                            }
                            multiline
                            rows="4"
                            placeholder="Enter Instruction Text"
                            name={`instructions[${index}].instruction`}
                            className={classes.textField}
                            value={values[`instructions[${index}].instruction`]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={
                              errors[`instructions[${index}].instruction`] &&
                              touched[`instructions[${index}].instruction`] &&
                              errors[`instructions[${index}].instruction`]
                            }
                            margin="normal"
                          />
                          <FileInput
                            name={`instructions[${index}].image`}
                            label="Instruction Photo:"
                            touched={touched}
                            errors={errors}
                            setFieldValue={setFieldValue}
                          />
                          <Button name="close" onClick={() => remove(index)}>
                            Delete{' '}
                          </Button>

                          {values.instructions[index].image && (
                            <Thumb file={values.instructions[index].image} />
                          )}
                        </>
                      ))}
                    <Button
                      onClick={() => push({ instruction: '', image: '' })}
                      primary
                    >
                      Add Instruction
                    </Button>
                  </React.Fragment>
                )}
              </FieldArray>
            </Grid>
          </Paper>
        </Box>
        <Debug />
      </Container>
    </Form>
  )
}

export default AddRecipeForm
