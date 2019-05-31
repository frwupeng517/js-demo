/*
  bind 方法用于将函数体内的 this 绑定到某个对象，然后返回一个新对象
*/

var obj = {}
obj.name = 'Kobe'
obj.say = function() {
  console.log('My name is ' + this.name)
}

// 此时的 fn 指代的是say方法，fn在全局作用域中，this 指向 window，所以是无法输出 name的
// var fn = obj.say                     // My name is 

var fn = obj.say.bind(obj)   // 强行把this绑定到obj对象
fn()  // My name is Kobe

//////////////////////////////////////////////////////////////////////////////////////////

var add = function (x,y) {
  console.log(x * this.m + y * this.n)
}

var obj = {
  m: 2,
  n: 3
}

var newAdd = add.bind(obj, 5)

newAdd(6)