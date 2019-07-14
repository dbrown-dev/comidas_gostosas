import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'

import Header from '../Header'
import { addValidationSchema } from '../../utilities/yup'
import { useStyles } from '../../style/muiStyles'
import AddRecipeForm from './AddRecipeForm'
import {
  getCookTimes,
  getSeasons,
  getCategories,
  postRecipe
} from '../../utilities/api'

const initialValues = {
  title: '',
  season: '',
  image: '/images/good.png',
  timeOptions: '',
  cuisineCategories: [],
  instructions: [
    {
      instruction: '',
      image: '/images/food.png'
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
  console.log(values)
  postRecipe(values)
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
  }, 500)
}

const AddRecipe = props => {
  const classes = useStyles(props)

  const [seasonList, setSeasonList] = useState()
  const [timeList, setTimeList] = useState()
  // const [categoriesList, setCategoriesList] = useState()
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getTimeOptions = async () => {
      try {
        const timeListData = await getCookTimes()
        setTimeList(timeListData)
      } catch {
        setIsError(true)
      }
    }
    getTimeOptions()
  }, [])

  useEffect(() => {
    const getSeasonOptions = async () => {
      try {
        const seasonListData = await getSeasons()
        setSeasonList(seasonListData)
      } catch {
        setIsError(true)
      }
    }
    getSeasonOptions()
  }, [])

  // useEffect(() => {
  //   const getCategoriesOptions = async () => {
  //     try {
  //       const categoriesListData = await getCategories()
  //       setCategoriesList(categoriesListData)
  //     } catch {
  //       setIsError(true)
  //     }
  //   }
  //   getCategoriesOptions()
  // }, [])

  return (
    <>
      <Header classes={classes} displayFilter={false} />
      <Formik
        initialValues={initialValues}
        validationSchema={addValidationSchema}
        onSubmit={handleSubmit}
      >
        {seasonList &&
          timeList &&
          (props => (
            <AddRecipeForm
              {...props}
              classes={classes}
              seasonList={seasonList}
              timeList={timeList}
            />
          ))}
      </Formik>
    </>
  )
}

export default AddRecipe
