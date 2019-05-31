/*
  sort() 方法默认会按照字符串的Unicode编码排序
*/

var arr = [9, 80, 2]
console.log(arr.sort())  // [2, 80, 9]


console.log(arr.sort(function(a, b) {      // [2, 9, 80]
  return a -b
}))