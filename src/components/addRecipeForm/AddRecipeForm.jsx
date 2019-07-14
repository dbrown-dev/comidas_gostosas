import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, Field, FieldArray } from 'formik'
import TextFieldInput from './TextFieldInput'
import SelectInput from './SelectInput'
import MultiSelectInput from './MultiSelectInput'
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Button,
  IconButton,
  Divider,
  Fab
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Thumb from './Thumb'
import { Debug } from '../util/Debug'
import FileInput from './FileInput'
import AutoCompleteInput from './AutoCompleteInput'
import { getIngredientsList } from '../../actions/ingredients'
import { getMeasurementsList } from '../../actions/measurements'
import {getCategoriesList} from '../../actions/categories'

const AddRecipeForm = ({
  classes,
  values,
  touched,
  errors,
  setFieldValue,
  isSubmitting,
  seasonList,
  timeList,
  dispatch,
  ingredients,
  measurements,
  categories
}) => {
  useEffect(() => {
    dispatch(getIngredientsList())
    dispatch(getMeasurementsList())
    dispatch(getCategoriesList())
  }, [dispatch])

  return (
    <Form>
      <Container maxWidth={'lg'}>
        <Box mt={3}>
          <Paper className={classes.recipePaper} elevation={10}>
            <Box mb={3}>
              <Typography>What is the Secret Recipe?</Typography>
              <Grid container>
                <Grid
                  container
                  direction="column"
                  alignItems="flex-start"
                  lg={8}
                >
                  <Field
                    name="title"
                    label="Title"
                    className={classes.textField}
                    component={TextFieldInput}
                  />
                  <Field
                    name="season"
                    label="Season"
                    className={classes.textField}
                    options={seasonList}
                    component={SelectInput}
                  />
                  <Field
                    name="timeOptions"
                    label="Cook Time"
                    className={classes.textField}
                    options={timeList}
                    component={SelectInput}
                  />
                  {categories.isLoaded && <Field
                    name="cuisineCategories"
                    label="Categories"
                    className={classes.textField}
                    options={categories.data}
                    component={MultiSelectInput}
                    optionName="categoryName"
                  />}
                  <FileInput
                    name="image"
                    label="Main Photo:"
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                  />
                </Grid>
                <Grid lg={4} container>
                  {values.image && false && (
                    <Thumb
                      className={classes.addRecipePhoto}
                      file={values.image}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
            >
              <FieldArray name="instructions">
                {({ push, remove }) => (
                  <React.Fragment>
                    <Typography variant="h5" component="h2">
                      Instructions:
                    </Typography>
                    {values.instructions &&
                      values.instructions.length > 0 &&
                      values.instructions.map((instruction, index) => (
                        <Paper
                          className={classes.instruction}
                          key={instruction.id}
                        >
                          <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                          >
                            <Grid item lg={9}>
                              <Field
                                name={`instructions[${index}].instruction`}
                                label="Enter Instruction Text"
                                multiline
                                rows="3"
                                className={classes.textAera}
                                component={TextFieldInput}
                              />
                              <FileInput
                                name={`instructions[${index}].image`}
                                label="Instruction Photo:"
                                touched={touched}
                                errors={errors}
                                setFieldValue={setFieldValue}
                              />
                            </Grid>
                            <Grid alignItems="center" container lg={1}>
                              {values.instructions[index].image && false && (
                                <Thumb
                                  className={classes.instructionThumb}
                                  file={values.instructions[index].image}
                                />
                              )}
                            </Grid>
                            <Grid justify="flex-end" container xs={1}>
                              <IconButton
                                aria-label="Delete"
                                name="close"
                                onClick={() => remove(index)}
                              >
                                <DeleteIcon fontSize="medium" />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Paper>
                      ))}
                    <Button
                      onClick={() => push({ instruction: '', image: '' })}
                      primary
                    >
                      Add New Instruction
                    </Button>
                  </React.Fragment>
                )}
              </FieldArray>
              <FieldArray name="ingredients">
                {({ push, remove }) => (
                  <React.Fragment>
                    <Divider variant="middle" />
                    <Typography variant="h5" component="h2">
                      Ingredients:
                    </Typography>
                    {values.ingredients &&
                      values.ingredients.length > 0 &&
                      values.ingredients.map((ingredient, index) => (
                        <Paper
                          className={classes.instruction}
                          key={ingredient.id}
                        >
                          <Grid
                            container
                            direction="row"
                            justify="space-between"
                          >
                            {ingredients.isLoaded && (
                              <Field
                                name={`ingredients[${index}].ingredientName`}
                                label="Ingredient"
                                placeholder="Search for an Ingredient"
                                suggestions={ingredients.data}
                                component={AutoCompleteInput}
                                propRef="name"
                              />
                            )}
                            <Field
                              name={`ingredients[${index}].quantity`}
                              label="Quantity"
                              component={TextFieldInput}
                            />
                            {measurements.isLoaded && (
                              <Field
                                name={`ingredients[${index}].measurementName`}
                                label="Measurement"
                                suggestions={measurements.data}
                                component={AutoCompleteInput}
                                propRef="measurementName"
                              />
                            )}
                            <Field
                              name={`ingredients[${index}].ingredientGroup`}
                              label="Ingredient Group"
                              component={TextFieldInput}
                            />
                            <IconButton
                              aria-label="Delete"
                              name="close"
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon fontSize="medium" />
                            </IconButton>
                          </Grid>
                        </Paper>
                      ))}
                    <Button
                      onClick={() =>
                        push({
                          ingredientName: '',
                          quantity: '',
                          ingredientGroup: '',
                          measurementName: ''
                        })
                      }
                      primary
                    >
                      Add Another Instruction
                    </Button>
                  </React.Fragment>
                )}
              </FieldArray>
              <Fab
                color="primary"
                aria-label="Add"
                type="submit"
                className={classes.fab}
              >
                {/* disabled={isSubmitting} */}
                <AddIcon />
              </Fab>
            </Grid>
          </Paper>
        </Box>
        <Debug />
      </Container>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    measurements: state.measurements,
    ingredients: state.ingredients,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddRecipeForm)

AddRecipeForm.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  setFieldValue: PropTypes.func,
  isSubmitting: PropTypes.func,
  seasonList: PropTypes.array,
  timeList: PropTypes.array,
  dispatch: PropTypes.func,
  ingredients: PropTypes.object,
  measurements: PropTypes.object,
  categories: PropTypes.object
}
