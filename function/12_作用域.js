/*

console.log(a)

var a = 'js'    // undefined

console.log(a)

a = 'js'            // Uncaught ReferenceError: a is not defined

*/

// 函数的链式调用
var operation = {
  add: function(m,n){
    console.log(m+n)
    return this
  },
  minus: function(m,n){
    console.log(m-n)
    return this
  }
}
operation.add(1,2).minus(3,1)  // 3 2

// 函数内部在定义函数
function a() {
  var i = 0
  var b = function() {
    console.log(++i)
  }
  return b   // function(){console.log(++i)}
}
var c = a()  // function(){console.log(++i)}
c()         // (function(){console.log(++i)})()

// console.log(i)    // Uncaught ReferenceError: i is not defined

// 变量始终保存在内存中
function f1() {
  var n = 999
  nAdd = function(){
    n += 1
  }
  function f2() {
    console.log(n)
  }
  return f2
}
var result = f1()
result()          // 999
nAdd()
result()          // 1000