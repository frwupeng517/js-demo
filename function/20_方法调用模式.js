/*
  除了声明时定义的形式参数，每个函数接收两个附加的参数：this 和 arguments，this 的值取决于调用的模式

  JS 中一共有 四种调用模式：方法调用模式、函数调用模式、构造器调用模式 和 apply 调用模式
  
*/

/*
1、方法调用模式
    当一个函数被保存为对象的一个属性时，我们称它为一个方法。 当一个方法被调用时，this 被绑定到该对象
    this到对象的绑定发生在调用的时候

var obj = {
  value: 0,
  increment: function(num) {
    this.value += typeof num === 'number' ? num : 1
  }
}

obj.increment()
console.log(obj.value) // 1

obj.increment(2)
console.log(obj.value) // 3

*/

/*
2、函数调用模式
  当一个函数并非一个对象的属性时，那么它被当做一个函数来调用
  var result = sum(3,4)
  当函数以此模式调用时，this 被绑定到全局对象，这被认为是语言设计上的一个错误。如果语言设计正确，当内部函数调用时，this 应该仍然绑定到外部函数的this变量

  var value = 9
  var obj = {
    value: 0,
    increment: function(num) {
      this.value += typeof num === 'number' ? num : 1      // obj 调用方法，this 指向 obj，value 就是 0
    },
    double: function() {
      function helper () {
        return this.value = add(this.value, this.value)    // obj 调用 double 方法，double 内部的this 指向obj，double 其实返回的是helper 方法
      }                                                    // 此时的helper 更准确的说是一个内部函数，因为它不是对象的属性，它可以理解成 var helper = function(){}
      return helper()                                      // 所以 helper 函数内部的this指向 全局对象 window
    }
  }

  function add(a,b) {
    return a + b
  }

  obj.increment(3)
  console.log(obj.value)   // 3
  console.log(obj.double()) // 18
  -----------------------------------------------------------------------------------------------
  var value = 9
  var obj = {
    value: 0,
    increment: function(num) {
      this.value += typeof num === 'number' ? num : 1      // obj 调用方法，this 指向 obj，value 就是 0
    },
    double: function() {
      var _this = this      // double 作为obj对象的属性，是一个方法，当 double 被 obj调用时，this指向obj。这里把this赋值给一个变量_this，所以_this就还是obj
      function helper () {
        return _this.value = add(_this.value, _this.value)    
      }                                                       
      return helper()                                         
    }
  }

  function add(a,b) {
    return a + b
  }

  obj.increment(3)
  console.log(obj.value)   // 3
  console.log(obj.double()) // 6
*/

/*
  3、构造器调用模式
    如果在一个函数前面带上 new 来调用，那么将创建一个隐藏连接到该函数的 prototype 成员的新对象，同时，this也会被绑定到那个新对象

    var Quo = function (str) {
      this.status = str
    }
    // 给 Quo 的所有实例提供一个名为 get_status 的公共方法
    Quo.prototype.get_status = function() {
      return this.status
    }

    // 构造一个 Quo 实例
    var myQuo = new Quo("hello")
    console.log(myQuo.get_status())   // hello
*/

/*
  4、Apply 调用模式
    apply 方法让我们构建一个参数数组并用其去调用函数，它也允许我们选择 this 的值
    apply 方法接收两个参数，第一个是将被绑定给 this 的值，第二个就是参数数组
*/

// 构造一个包含两个数字的数组，并将它们相加
var arr = [3,4]
var sum = add.apply(null, arr)

function add(a, b) {
  return a + b
}

console.log(sum)    // 7

