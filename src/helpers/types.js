const getType = (value) =>
  Object.prototype.toString.call(value).split(' ')[1].slice(0, -1).toLowerCase()

export const isObject = (value) => getType(value) === 'object'
export const isArray = (value) => getType(value) === 'array'
export const isNumber = (value) => getType(value) === 'number'
export const isString = (value) => getType(value) === 'string'
export const isNull = (value) => getType(value) === 'null'
export const isUndefined = (value) => getType(value) === 'undefined'
export const isBoolean = (value) => getType(value) === 'boolean'
export const isRegex = (value) => getType(value) === 'regexp'
export const isNan = (value) => Number.isNaN(value)
