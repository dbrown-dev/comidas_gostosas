import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Transition,
  List
} from 'semantic-ui-react'

import { Debug } from './Debug'
import Thumb from './Thumb'

const validationSchema = Yup.object({
  instructions: Yup.array().of(
    Yup.object({
      instruction: Yup.string().required('Required'),
      image: Yup.mixed().required('Required')
    })
  ),
  image: Yup.mixed().required()
})

const handleSubmit = values => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
  }, 500)
}

const initialValues = {
  title: '',
  season: '',
  image: null,
  timeOption: '',
  cuisineCategorie: [],
  instructions: [
    {
      instruction: '',
      image: null
    }
  ],
  ingredients: [
    {
      ingredientId: '',
      ingredientName: '',
      quantity: '',
      ingredientGroup: '',
      measurementName: ''
    }
  ]
}

const AddRecipe = () => (
  <>
    <Header as="h1" color="teal" textAlign="center">
      Add your Comida Gostosa
    </Header>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
        <Form>
          {/* Title form field */}
          <div className="ui labeled input">
            <div className="ui label label">Title</div>
            <Field
              name="title"
              type="text"
              placeholder="Enter a title for this recipe"
            />
            <ErrorMessage name="title" />
          </div>
          {/* Upload a cover photo */}
          <div>
            <label>Please select a cover photo for this recipe:</label>
            <input
              name="image"
              type="file"
              onChange={event => {
                setFieldValue('image', event.currentTarget.files[0])
              }}
            />
          </div>
          {/* Season form field */}
          <div className="ui labeled input">
            <div className="ui label label">Season</div>
            <Field name="season" component="select" />
            <ErrorMessage name="season" />
          </div>
          {/* Time form field */}
          <div className="ui labeled input">
            <div className="ui label label">Time</div>
            <Field name="timeOptions" component="select" />
            <ErrorMessage name="timeOptions" />
          </div>

          {values.image && <Thumb file={values.image} />}

          {/* Instructions form field */}
          <label>Instructions:</label>
          <FieldArray name="instructions">
            {({ push, remove }) => (
              <React.Fragment>
                {values.instructions &&
                  values.instructions.length > 0 &&
                  values.instructions.map((instruction, index) => (
                    <List.Item key={index}>
                      <div>
                        <div className="row">
                          <div className="col">
                            <Field
                              name={`instructions[${index}].instruction`}
                              component="textarea"
                              type="text"
                              placeholder="Enter some text for this instruction"
                            />
                            <ErrorMessage
                              name={`instructions[${index}].instruction`}
                            >
                              {msg => <div>{msg}</div>}
                            </ErrorMessage>
                          </div>
                          <div>
                            <label>Upload an Image for this Step:</label>
                            <input
                              name={`instructions[${index}].image`}
                              type="file"
                              onChange={event => {
                                setFieldValue(
                                  `instructions[${index}].image`,
                                  event.currentTarget.files[0]
                                )
                              }}
                            />
                            <Thumb file={values.instructions[index].image} />
                          </div>
                          <ErrorMessage name={`instructions[${index}].image`}>
                            {msg => <div>{msg}</div>}
                          </ErrorMessage>
                        </div>
                      </div>
                      <div className="col">
                        <button type="button" onClick={() => remove(index)}>
                          X
                        </button>
                      </div>
                    </List.Item>
                  ))}

                <Button
                  color="teal"
                  fluid
                  size="large"
                  type="button"
                  onClick={() => push({ name: '', email: '' })}
                >
                  Add Another Step
                </Button>
              </React.Fragment>
            )}
          </FieldArray>
          <button type="submit" disabled={isSubmitting}>
            Add Recipe
          </button>
          {/* <Debug /> */}
        </Form>
      )}
    </Formik>
  </>
)

export default AddRecipe
