export const SHOW_ERROR = 'IS_ERROR'

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
