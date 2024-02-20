/* eslint-disable no-unused-vars */
export default function find(arr, searchDetails) {
  return arr.find((item) =>
    Object.values(item).includes(Object.values(searchDetails)[0])
  )
}

// Other method below :)

// //export default function find(arr, searchDetails) {
//   console.log(searchDetails)
//   return arr.find((item) => item.address === 'Wayne Manor')
// }
