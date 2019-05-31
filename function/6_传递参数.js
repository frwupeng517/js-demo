/*
  ECMAScript 中所有函数的参数都是按值传递的（参数实际上是函数的局部变量）
  - 在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数，也就是 arguments对象中的一个元素）
  - 在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部
*/

function addTen(num) {
  num += 10
  return num
}

var count = 20

var result = addTen(count)

console.log(count)      // 20
console.log(result)     // 30


var obj = {num: 3}

var objResult = addTen(obj.num)

console.log(obj.num)    // 3
console.log(objResult)  // 13

function setName(obj) {
  obj.name = 'roger'
  obj = new Object()
  obj.name = 'sara'
}
var person = new Object()
setName(person)
console.log(person.name)   // roger