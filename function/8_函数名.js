/*
  函数实际上也是对象，每个函数都是 Function 类型的实例，函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定，也就是说，一个函数可能会有多个名字

  下例中 将sum赋值给 anotherSum（使用不带圆括号的函数名是访问函数指针，而非调用函数），此时，anotherSum 和 sum 都指向同一个函数

  即使将sum设置为 null，但不影响 anotherSum
*/



function sum (sum1, sum2) {
  return sum1 + sum2
}

console.log(sum(10, 20))          // 30

var anotherSum = sum

sum = null

console.log(anotherSum(22, 44))   // 66