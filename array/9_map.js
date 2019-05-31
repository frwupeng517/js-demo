/*
  map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
*/

var array1 = [1, 7, 9 ,0]
const map1 = array1.map(x => x * 2)
console.log(map1)                   // [2, 14, 18, 0]

/*
  var new_array = arr.map(function callback(currentValue[, index [, array]]) {
    // Return elemment for new_array
  }[, thisArg])

  map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组

*/

// 求数组中每个元素的平方根
var numbers = [1, 4, 9]
var roots = numbers.map(Math.sqrt)
console.log(roots)                          // [1, 2, 3]

// 使用 map 重新格式化数组中的对象
var kvArray = [{name: 'roger', age: 27}, {name: 'sara', age: 28}, {name: 'muhan', age: 1}]

// var newArray = kvArray.map(
//   function(k) {
//     var temp = {}
//     temp[k.name] = k.age
//     return temp
//   }
// )
/*
var newArray = kvArray.map(function(k) {
  Object.defineProperty(k, 'checked', {
    value: false,
    configurable: true,
    writable: true
  })
  return k
})
*/

var newArray = kvArray.map(function(k) {
  k.checked = false
  return k
})

console.log(JSON.stringify(newArray))              // [{"name":"roger","age":27,"checked":false},{"name":"sara","age":28,"checked":false},{"name":"muhan","age":1,"checked":false}]