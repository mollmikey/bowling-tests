/* eslint-disable no-unused-vars */
export default function where(arr, searchDetails) {
  if (Object.values(searchDetails).length === 1) {
    return arr.filter((item) =>
      Object.values(item).includes(Object.values(searchDetails)[0])
    )
  }
  if (Object.values(searchDetails).length === 2) {
    return arr.filter(
      (item) =>
        Object.values(item).includes(Object.values(searchDetails)[0]) &&
        Object.values(item).includes(Object.values(searchDetails)[1])
    )
  }
}
