// 函数体内的this对象，就是定义时所在的对象，而不是调用时所在的对象

function Timer() {
  this.s1 = 0
  this.s2 = 0

  // 箭头函数
  setInterval(() => this.s1++, 1000)

  // 普通函数
  setInterval(function(){
    this.s2++
  }, 1000)
}

var timer = new Timer()
setTimeout(() => console.log('s1:', timer.s1), 3000)  // s1: 3
setTimeout(() => console.log('s2:', timer.s2), 3000)  // s2: 0
