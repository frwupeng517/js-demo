var obj = {}

obj.name = 'Dan'
obj.say = function(){
  console.log(`My name is ${this.name}`)
}

obj.say() // this 指向全局中的 obj对象，所以输出 Dan

var fn = obj.say

fn()  // 相当于 function(){console.log(`My name is ${this.name}`)}()  this 指向 window，而 window没有name属性


// call 方法  可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数
fn.call(obj)

// 同上面一样，this指向 window，而call方法让this指向了obj，然后在obj的作用域中运行，所以输出 Dan

