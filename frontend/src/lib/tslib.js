var objectProto = Object.prototype
var getOwnPropertySymbols = Object.getOwnPropertySymbols
var propertyIsEnumerable = objectProto.propertyIsEnumerable

export function __assign() {
  __assign = Object.assign || function assign(target, ...sources) {
    sources.forEach((source) => {
      for (const key in source) {
        if (objectProto.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    })

    return target
  }

  return __assign(...arguments)
}

export function __rest(source, exclude) {
  const target = {}

  for (const key in source) {
    if (objectProto.hasOwnProperty.call(source, key) && exclude.indexOf(key) < 0) {
      target[key] = source[key]
    }
  }

  if (source != null && typeof getOwnPropertySymbols === 'function') {
    for (const symbol of getOwnPropertySymbols(source)) {
      if (exclude.indexOf(symbol) < 0 && propertyIsEnumerable.call(source, symbol)) {
        target[symbol] = source[symbol]
      }
    }
  }

  return target
}

export function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) {
    for (let index = 0, length = from.length, current; index < length; index += 1) {
      if (current || !(index in from)) {
        if (!current) {
          current = Array.prototype.slice.call(from, 0, index)
        }

        current[index] = from[index]
      }
    }
  }

  return to.concat(current || Array.prototype.slice.call(from))
}