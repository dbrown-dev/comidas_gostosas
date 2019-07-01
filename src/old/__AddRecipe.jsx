import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'

import { Debug } from '../components/util/Debug'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Thumb from './Thumb'
import {
  TextInput,
  SelectInput,
  FileInput,
  TextAreaInput
} from './util/FormHelper'

import { getCookTimes } from '../components/util/api'

const styles = {
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20px'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '20px'
  }
}

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  season: Yup.string().required('Required'),
  timeOption: Yup.string().required('Required'),
  image: Yup.mixed().required('Required'),
  instructions: Yup.array().of(
    Yup.object({
      instruction: Yup.string().required('Required'),
      image: Yup.mixed().required('Required')
    })
  )
})

const handleSubmit = values => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
  }, 500)
}

const initialValues = {
  title: '',
  season: '',
  image: '',
  cookTimeId: '',
  cuisineCategories: [],
  instructions: [
    {
      instruction: '',
      image: null
    }
  ],
  ingredients: [
    {
      ingredientName: '',
      quantity: '',
      ingredientGroup: '',
      measurementName: ''
    }
  ]
}

class AddRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = { seasons: ['Summer', 'Autumn', 'Winter', 'Spring'] }
  }

  showCookTimeOptions = cookTimeOptions => {
    this.setState({ cookTimeOptions })
  }

  componentDidMount() {
    getCookTimes(this.showCookTimeOptions)
  }

  render() {
    const { classes } = this.props
    if (this.state.cookTimeOptions) {
      return (
        <Container component="main" maxWidth="md">
                      <Typography component="h1" variant="h5">
              What's the Secret Recipe?
            </Typography>
          <CssBaseline />
          <div className={classes.paper}>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
                <Grid container spacing={10}>
                  <Form className={classes.form}>
                    <Grid
                      container
                      item
                      direction="column"
                      justify="center"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12}>
                      <Field
                        name="title"
                        placeholder="Enter your recipe title"
                        label="Title:"
                        component={TextInput}
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <Field
                        name="season"
                        label="Season:"
                        component={SelectInput}
                        options={this.state.seasons.map((option, i) => {
                          return (
                            <option key={i} value={option}>
                              {option}
                            </option>
                          )
                        })}
                        width={3}
                      />
                      </Grid>
                      <Grid item xs={12}>
                      <Field
                        name="cookTimeId"
                        label="Time:"
                        component={SelectInput}
                        width={3}
                        options={this.state.cookTimeOptions.map(option => {
                          return (
                            <option key={option.id} value={option.id}>
                              {option.timeOptions}
                            </option>
                          )
                        })}
                      />
                      </Grid>
                      <Field
                        name="image"
                        label="Main Photo:"
                        component={FileInput}
                        setFieldValue={setFieldValue}
                      />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                      {values.image && <Thumb file={values.image} />}
                    </Grid>
                    <FieldArray name="instructions">
                      {({ push, remove }) => (
                        <React.Fragment>
                          {values.instructions &&
                            values.instructions.length > 0 &&
                            values.instructions.map((instruction, index) => (
                              <>
                                <Field
                                  name={`instructions[${index}].instruction`}
                                  placeholder="Enter Instruction Text"
                                  label={`Instruction ${index + 1}`}
                                  component={TextAreaInput}
                                />
                                <Field
                                  name={`instructions[${index}].image`}
                                  label="Instruction Photo:"
                                  component={FileInput}
                                  setFieldValue={setFieldValue}
                                />
                                <Button
                                  name="close"
                                  onClick={() => remove(index)}
                                />

                                {values.instructions[index].image && (
                                  <Thumb
                                    size="medium"
                                    file={values.instructions[index].image}
                                  />
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

                    <FieldArray name="ingredients">
                      {({ push, remove }) => (
                        <React.Fragment>
                          {values.ingredients &&
                            values.ingredients.length > 0 &&
                            values.ingredients.map((ingredient, index) => (
                              <>
                                <Field
                                  name={`ingredients[${index}].ingredientName`}
                                  label="Name"
                                  component={SelectInput}
                                />

                                <Field
                                  name={`ingredients[${index}].quantity`}
                                  label="Quantity"
                                  component={TextInput}
                                />

                                <Field
                                  name={`ingredients[${index}].measurementName`}
                                  label="Measurement"
                                  component={SelectInput}
                                />

                                <Button
                                  name="close"
                                  onClick={() => remove(index)}
                                />
                              </>
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
                            Add Ingredient
                          </Button>
                        </React.Fragment>
                      )}
                    </FieldArray>

                    <Debug />
                  </Form>
                </Grid>
              )}
            </Formik>
          </div>
        </Container>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default withStyles(styles)(AddRecipe)
