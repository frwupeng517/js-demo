/*
  函数声明：函数声明提升
*/

test()               // hello world!

function test() {
  console.log('hello world!')
}




/*
  函数表达式：使用前必须赋值（区别于函数声明，不存在提升）
*/

say()             // Uncaught TypeError: say is not a function

var say = function() {
  console.log('anything here...')
}