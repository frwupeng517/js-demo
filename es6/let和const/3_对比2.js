var a = []

for(let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i)
  }
}

a[6]()

/*
  let 声明的变量只在本轮循环中有效，所以每一次循环的 i 都是一个新的变量，并且 Javascript 引擎内部会记住上一轮循环的值
*/


for(let i = 0; i < 3; i++){
  let i = 'abc'
  console.log(i) // 'abc'
}

/*
  for 循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
  上面代码中 abc 输出了三次，表明函数内部的变量 i 和 循环变量 i 不在同一个作用域，有各自单独的作用域
*/

