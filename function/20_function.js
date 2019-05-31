function foo() {
  //
}

console.log(foo.prototype)
/*
  在js中函数就是对象，对象是“名/值”对的集合并拥有一个连到原型对象的隐藏连接。

  对象字面量产生的对象连接到 Object.prototype，函数对象连接到 Function.prototype（该原型对象本身连接到 Object.prototype）

  每个函数在创建时也随带一个 prototype 属性，它的值是一个拥有 constructor 属性且值为该函数的对象，

  {
    constructor: function foo() {},
    __propto__: Object
  }

*/

// 函数声明提前

add(1,2) // 3

function add (a, b) {
  console.log(a + b)
}

minus(3,2)     // Uncaught TypeError: minus is not a function

var minus = function (a, b) {
  console.log(a - b)
}