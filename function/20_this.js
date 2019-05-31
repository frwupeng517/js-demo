function test() {
  this.x = 1
  console.log(x)
}

test()           // 1  this 指向全局对象 window
console.log(x)   // 1

var a = 999
function test2() {
  this.a = 111
}
test2()
console.log(a)   // 111

function test3() {
  console.log(this.y)
}
var obj = {}
obj.y = 2
obj.m = test3
obj.m()            // 2 作为对象的方法，指向当前调用的对象