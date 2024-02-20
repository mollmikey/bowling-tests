/* eslint-disable no-unused-vars */
export function getMatrix(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    let temp = []
    for (let i = 0; i < n; i++) {
      temp.push(0)
    }
    arr.push(temp)
  }
  return arr
}

export function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value
  return matrix
}
