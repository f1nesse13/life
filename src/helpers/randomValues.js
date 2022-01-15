import { isArray } from './types'

const randomNumber = (upperLimit = 0) => Math.round(Math.random() * upperLimit)

export const randomPick = (valuesArray) => {
  if (isArray(valuesArray)) {
    const index = randomNumber(valuesArray.length - 1)
    return valuesArray[index]
  }
  throw Error('Must pass an array of values. Use randomNumber for integers')
}

const generateRandomColor = (colors) => randomPick(colors)

export const generateRandomColorPalette = (colors, numColors = 6) => {
  let colorArr = []
  while (colorArr.length < numColors) {
    const newColor = generateRandomColor(colors)
    if (!colorArr.includes(newColor)) {
      colorArr = [...colorArr, newColor]
    }
  }
  return colorArr
}
