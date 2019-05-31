/*
  caller 属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为 null
*/

function outer() {
  inner()
}

function inner() {
  console.log(inner.caller)
}

outer()
// ƒ outer() {
//   inner()
// }

// 解耦函数名

function anotherOuter() {
  anotherInner()
}

function anotherInner() {
  console.log(arguments.callee.caller)
}

anotherOuter()
// ƒ anotherOuter() {
//   anotherInner()
// }

function testCaller() {
  console.log(arguments.callee.caller)
}

testCaller() // null