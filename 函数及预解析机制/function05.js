/*
  5、间接调用
  apply()和 call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值。
  首先，apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是 Array 的实例，也可以是arguments 对象。

  function add(a, b) {
    console.log(a + b);
  }

  function sum1(a, b) {
    add.apply(window, [a, b]);
  }

  function sum2(a, b) {
    add.apply(this, arguments)
  }

  sum1(1, 2);    // 3
  sum2(3, 5);    // 8


  call()方法与 apply()方法的作用相同，它们的区别仅在于接收参数的方式不同。对于 call()方法而言，第一个参数是 this 值没有变化，变化的是其余参数都直接传递给函数。换句话说，在使用call()方法时，传递给函数的参数必须逐个列举出来
  
*/
  var color = 'red';
  var obj = {
    color: 'blue'
  };

  function getColor() {
    console.log(this.color)
  }

  getColor.call(this)    // red
  getColor.call(obj)     // blue

  

  







