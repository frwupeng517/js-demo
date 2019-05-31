var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i)
  }
}

a[6]()

/*
  1、此处存在两个作用域，一个是全局作用域，一个是函数作用域；全局作用域下存在两个变量a 和 i
  2、数组a中的每个元素都是 function(){console.log(i)}
  3、无论调用数组a中的哪个元素执行function函数，打印出来的i都是同一个，且一定是10
*/