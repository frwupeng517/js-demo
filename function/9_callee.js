/*
  arguments 对象有一个名叫 callee 的属性，该属性是一个指针，指向拥有这个 arguments 对象的函数
*/

function fun(num) {
  // console.log(arguments)
  if (num <= 1) {
    return 1
  } else{
    return num * fun(num -1)
  }
}

console.log(fun(5)) // 120   1*2*3*4*5

// 函数名解耦

var bar = function (num) {
  if (num <= 1) {
    return 1
  } else{
    return num * arguments.callee(num - 1)
  }
}


var foo = bar
console.log(foo(10))   // 3628800