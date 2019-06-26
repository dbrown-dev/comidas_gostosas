import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import {
  Grid,
  Header,
  Container,
  Button,
  Icon,
  Divider
} from 'semantic-ui-react'

import { Debug } from './Debug'
import Thumb from './Thumb'
import {
  TextInput,
  SelectInput,
  FileInput,
  TextAreaInput
} from './util/FormHelper'

import { getCookTimes } from './util/api'

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

export default class ModifyRecipe extends React.Component {
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
    if (this.state.cookTimeOptions) {
      return (
        <Container>
          <Header as="h1">What's the Secret Recipe?</Header>
          <Divider />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
              <Form className="ui form small">
                <Grid>
                  <Header as="h2">Recipe Info</Header>
                  <Grid.Row columns={2}>
                    <Grid.Column width={8} floated="left">
                      <Field
                        name="title"
                        placeholder="Enter your recipe title"
                        label="Title:"
                        component={TextInput}
                      />
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
                      <Field
                        name="image"
                        label="Main Photo:"
                        component={FileInput}
                        setFieldValue={setFieldValue}
                      />
                    </Grid.Column>
                    <Grid.Column width={5} floated="right">
                      {values.image && <Thumb file={values.image} />}
                    </Grid.Column>
                  </Grid.Row>
                  <Header as="h2">Instructions</Header>
                  <Grid.Row>
                    <Grid.Column>
                      <Grid>
                        <FieldArray name="instructions">
                          {({ push, remove }) => (
                            <React.Fragment>
                              {values.instructions &&
                                values.instructions.length > 0 &&
                                values.instructions.map(
                                  (instruction, index) => (
                                    <Grid.Row
                                      className="ui segment stacked"
                                      columns={2}
                                      centered
                                    >
                                      <Grid.Column width={11} floated="left">
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
                                        <Icon
                                          link
                                          name="close"
                                          onClick={() => remove(index)}
                                        />
                                      </Grid.Column>
                                      <Grid.Column width={3} floated="right">
                                        {values.instructions[index].image && (
                                          <Thumb
                                            size="medium"
                                            file={
                                              values.instructions[index].image
                                            }
                                          />
                                        )}
                                      </Grid.Column>
                                    </Grid.Row>
                                  )
                                )}
                              <Button
                                onClick={() =>
                                  push({ instruction: '', image: '' })
                                }
                                primary
                              >
                                Add Instruction
                              </Button>
                            </React.Fragment>
                          )}
                        </FieldArray>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                  <Header as="h2">Ingredients</Header>
                  <Grid.Row>
                    <Grid.Column>
                      <Grid>
                        <FieldArray name="ingredients">
                          {({ push, remove }) => (
                            <React.Fragment>
                              {values.ingredients &&
                                values.ingredients.length > 0 &&
                                values.ingredients.map((ingredient, index) => (
                                  <Grid.Row
                                    className="ui segment stacked"
                                    columns={4}
                                    centered
                                  >
                                    <Grid.Column width={3} floated="left">
                                      <Field
                                        name={`ingredients[${index}].ingredientName`}
                                        label="Name"
                                        component={SelectInput}
                                      />
                                    </Grid.Column>
                                    <Grid.Column width={3} floated="left">
                                      <Field
                                        name={`ingredients[${index}].quantity`}
                                        label="Quantity"
                                        component={TextInput}
                                      />
                                    </Grid.Column>
                                    <Grid.Column width={3} floated="left">
                                      <Field
                                        name={`ingredients[${index}].measurementName`}
                                        label="Measurement"
                                        component={SelectInput}
                                      />
                                    </Grid.Column>
                                    <Grid.Column width={1} floated="left">
                                      <Icon
                                        link
                                        name="close"
                                        onClick={() => remove(index)}
                                      />
                                    </Grid.Column>
                                  </Grid.Row>
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
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Debug />
              </Form>
            )}
          </Formik>
        </Container>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}
