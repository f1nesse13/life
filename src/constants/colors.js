/* eslint-disable no-console */
import { generateRandomColorPalette } from '@helpers/randomValues'

const INACTIVE_COLORS = ['#1f1f1f']

const RANDOM_COLORS = [
  '#10b8eb',
  '#FFF700',
  '#A7F432',
  '#FF00CC',
  '#FF6EFF',
  '#FF3855',
  '#ffb703',
  '#fb8500',
]
const RED_COLORS = ['#ffebee', '#ef9a9a', '#ef5350', '#f44336', '#e53935', '#b71c1c', '#ff1744']
const GREEN_COLORS = ['#27db17', '#3cff00', '#5cbd36', '#8cdba9', '#00ab6b', '#39f077']
const BLUE_COLORS = ['#00c9a7', '#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8']
const PINK_COLORS = ['#fe1aa4', '#ff10f0', '#ff80cd', '#ffcceb', '#ff00f4', '#fb6f92']
const PURPLE_COLORS = [
  '#b269ff',
  '#d1c4e9',
  '#9575cd',
  '#673ab7',
  '#512da8',
  '#311b92',
  '#b388ff',
  '#651fff',
  '#6200ea',
]
const RAINBOW_COLORS = ['#a800ff', '#0079ff', '#00f11d', '#ffef00', '#ff7f00', '#ff0900']
const ALL_COLORS = [
  ...RANDOM_COLORS,
  ...RED_COLORS,
  ...GREEN_COLORS,
  ...BLUE_COLORS,
  ...PINK_COLORS,
  ...PURPLE_COLORS,
  ...RAINBOW_COLORS,
]
const singleR = generateRandomColorPalette(ALL_COLORS, 1)
const paletteR = generateRandomColorPalette(ALL_COLORS, 10)

export default {
  inactive: { default: INACTIVE_COLORS },
  active: {
    default: RANDOM_COLORS,
    red: RED_COLORS,
    green: GREEN_COLORS,
    blue: BLUE_COLORS,
    pink: PINK_COLORS,
    purple: PURPLE_COLORS,
    rainbow1: RAINBOW_COLORS,
    hyper: ALL_COLORS,
    singleR,
    paletteR,
  },
}
