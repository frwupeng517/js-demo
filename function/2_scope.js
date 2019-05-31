'use strict'

function foo() {
  for(var i = 0; i < 100; i++) {
    // 由于 js 的变量作用域实际上函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的
  }
  i += 100
  console.log(i)         // 200
}

foo()



function bar() {
  for(let i = 0; i < 100; i++) {
    // let的作用域仅限代码块内部
  }
  i += 100
  console.log(i)
}

bar()                     // Uncaught ReferenceError: i is not defined




function test() {
  console.log(i)          // Uncaught ReferenceError: i is not defined
}

test()