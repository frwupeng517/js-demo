/*
  闭包：是指有权访问另一个函数作用域中的变量的   函数
*/

function createFunctions() {
  var result = new Array()

  for (var i = 0; i < 10; i++) {
    result[i] = function() {
      return i
    }
  }

  return result
}

console.log(createFunctions())               // (10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]