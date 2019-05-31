var tmp = new Date()

function foo() {
  console.log(tmp)
  if(true) { // false
    var tmp = 'test'
  }
}

foo()                  // undefined

/*
  原意是if外层使用外部变量 date，内层使用内部变量 test，但是由于变量提成的缘故，不论if的循环条件是true还是false，
  tmp都会被提到foo函数的起始位置并被赋值为 undefined
*/