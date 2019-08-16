export const mapApiDataToOptionsForSelectComponent = (data) => {
  return data.map(element => {
    return {
      ...element,
      label: Object.values(element)[1]
    }
  })
}
