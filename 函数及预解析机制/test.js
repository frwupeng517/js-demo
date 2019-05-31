/*
  // 使用 var 声明的变量，预解析时，会将变量声明提前到作用域的顶端
  console.log(a)   // undefined
  var a = 1

  console.log(a)   // Uncaught ReferenceError: a is not defined
  a = 1
*/

console.log(a)
var a = 1
console.log(a)

function a() {
  console.log(2)
}

// console.log(a)
// var a = 3
// console.log(a)

// function a() {
//   console.log(4)
// }

// console.log(a)

// a()

