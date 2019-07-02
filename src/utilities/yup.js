import * as Yup from 'yup'

export const addValidationSchema = Yup.object({
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