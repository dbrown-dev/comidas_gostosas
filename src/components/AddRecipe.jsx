import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Debug } from './Debug'

import Thumb from './Thumb'

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
  <div>
    <h1>Add your Comida Gostosa</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        instructions: Yup.array().of(
          Yup.object({
            instruction: Yup.string().required('Required'),
            image: Yup.mixed().required('Required')
          })
        ),
        image: Yup.mixed().required()
      })}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
        }, 500)
      }}
    >
      {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
        <Form>
          <label>Title:</label>
          <Field name="title" type="text" placeholder="Enter a title for this recipe"/>
          <ErrorMessage name="title" />
          <div>
            <label>Please select a cover photo for this recipe:</label>
            <input
              name="image"
              type="file"
              onChange={event => {
                setFieldValue('image', event.currentTarget.files[0])
              }}
            />
            <Thumb file={values.image} />
          </div>
          <label>Season:</label>
          <Field name="season" component="select" />
          <ErrorMessage name="season" />
          <label>Time:</label>
          <Field name="timeOptions" component="select" />
          <ErrorMessage name="timeOptions" />
          <label>Instructions:</label>
          <FieldArray name="instructions">
            {({ push, remove }) => (
              <React.Fragment>
                {values.instructions &&
                  values.instructions.length > 0 &&
                  values.instructions.map((instruction, index) => (
                    <div key={index}>
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
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => push({ name: '', email: '' })}
                >
                  Add Another Step
                </button>
              </React.Fragment>
            )}
          </FieldArray>
          <button type="submit" disabled={isSubmitting}>
            Add Recipe
          </button>
          <Debug />
        </Form>
      )}
    </Formik>
  </div>
)

export default AddRecipe
