/*
  4、递归调用
  递归函数是在一个函数通过名字调用自身的情况下构成的
  一个经典的例子就是计算阶乘

  // 3! = 3*2*1
  // 4! = 4*3*2*1 = 4*3!
  function factorial(num) {
    if(num <= 1) {
      return 1
    }
    return num * factorial(num - 1)
  }

  console.log(factorial(5))   // 120
  console.log(factorial(4))   // 24

  如果现在把函数名factorial换成了jieCheng，执行jieCheng(5) 就会报错了，外面改了，里面也得改，如果是递归的层次较深就比较麻烦。事实上，这样的代码也是不够健壮的

  这里有两种解决方案：
  （1）、使用arguments.callee
  arguments.callee 是一个指向正在执行的函数的指针，函数名也是指向函数的指针，因此，可以在函数内部用 arguments.callee 来替代函数名
  function fn() {
    console.log(arguments.callee)
  }
  fn()

  // ƒ fn() {
  //   console.log(arguments.callee)
  // }

  function factorial(num) {
    if(num <= 1) {
      return 1
    }
    return num * arguments.callee(num - 1)
  }

  console.log(factorial(5))   // 120

  但在严格模式下，不能通过脚本访问 arguments.callee，访问这个属性会导致错误

  'use strict'
  function factorial(num) {
    if(num <= 1) {
      return 1
    }
    return num * arguments.callee(num - 1)
  }

  console.log(factorial(5))   
  // Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

  （2）、命名函数表达式
  var factorial = function jieCheng(num) {
    if(num <= 1) {
      return 1
    }
    return num * jieCheng(num - 1)
  };
  console.log(factorial(5))  // 120

  var result = factorial;
  console.log(result(4));    // 24
*/
  

  







