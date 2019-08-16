import { getMeasurements } from '../utilities/api'
import { showError } from './'

export const RECEIVE_MEASUREMENTS = 'RECEIVE_MEASUREMENTS'
export const REQUEST_MEASUREMENTS = 'REQUEST_MEASUREMENTS'

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
