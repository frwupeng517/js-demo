var add = function (a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    }
  }
  return a + b
}

/*
  add('hello', 'world')   // {name: "TypeError", message: "add needs numbers"}
*/

try {
  add('seven')
} catch (e) {
  document.writeln(e.name + ': ' + e.message)   // TypeError: add needs numbers
}