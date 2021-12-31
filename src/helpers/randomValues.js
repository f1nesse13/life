import { isArray } from './types'

const randomNumber = (upperLimit = 0) => {
  Math.round(Math.random * upperLimit)
}

export const randomPick = (valuesArray) => {
  if (isArray(valuesArray)) {
    const index = randomNumber(valuesArray.length - 1)
    return valuesArray[index]
  }
  throw Error('Must pass an array of values. Use randomNumber for integers')
}
