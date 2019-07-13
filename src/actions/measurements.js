import { getMeasurements } from '../utilities/api'

export const RECEIVE_MEASUREMENTS = 'RECEIVE_MEASUREMENTS'
export const REQUEST_MEASUREMENTS = 'REQUEST_MEASUREMENTS'
export const SHOW_ERROR = 'IS_ERROR'

export const receiveMeasurements = measurements => {
  return {
    type: RECEIVE_MEASUREMENTS,
    measurements: measurements
  }
}

export const requestMeasurements = () => {
  return {
    type: REQUEST_MEASUREMENTS
  }
}

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const getMeasurementsList = () => {
  return dispatch => {
    dispatch(requestMeasurements())
    return getMeasurements()
      .then(measurements => {
        dispatch(receiveMeasurements(measurements))
      })
      .catch(error => {
        dispatch(showError(error.message))
      })
  }
}
