import React from 'react'
import { Formik, Form } from 'formik'

import Header from './Header'
import { addValidationSchema } from './util/yup'
import { useStyles } from './util/muiStyles'
import AddRecipeForm from './AddRecipeForm/AddRecipeForm'

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

const handleSubmit = values => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
  }, 500)
}

const Home = props => {
  const classes = useStyles(props)
  return (
    <>
      <Header
        classes={classes}
        displayFilter={false}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={addValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting, handleSubmit, setFieldValue }) => (
          <AddRecipeForm classes={classes} values={values} isSubmitting={isSubmitting} handleSubmit={handleSubmit} setFieldValue={setFieldValue} />
        )}
      </Formik>
    </>
  )
}

export default Home