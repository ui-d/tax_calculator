export function dictionaryToArray(dict) {
  var arr = []

  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      arr.push([key, dict[key]])
    }
  }

  return arr
}
