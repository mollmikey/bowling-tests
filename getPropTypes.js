/* eslint-disable no-unused-vars */
export default function getPropTypes(obj) {
  return Object.values(obj).map((item) => typeof item)
}
