/*
  join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符
*/

var elements = ['fire', 'apple', 'pear']

console.log(elements.join())     // fire,apple,pear
console.log(elements.join(''))   // fireapplepear
console.log(elements.join('-'))  // fire-apple-pear