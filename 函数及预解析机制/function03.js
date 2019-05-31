/*
  3、调用匿名函数
  对于函数声明和函数表达式，调用函数的方式就是在函数名（或变量名）后加一对圆括号
  function fn() {
    console.log('hello')
  }
  fn()

  // hello

  既然fn是一个函数指针，指代函数的代码段，那能否直接在代码段后面加一对圆括号呢？
  function fn() {
    console.log('hello')
  }()

  // Uncaught SyntaxError: Unexpected token )

  var fn = function() {
    console.log('hello')
  }()

  // hello

  分别对函数声明和函数表达式执行这一假设，结果出人意料。另外，前面也提到函数声明存在函数声明提升，函数表达式不存在，会不会是js引擎只要读到function关键字就认为这是一个函数呢？
  console.log(fn);   // ƒ fn() {console.log('hello');}
  function fn() {
    console.log('hello');
  }

  // 在function关键字前面加一个合法的字符，结果就把fn当做一个未定义的变量了
  console.log(fn);   // Uncaught ReferenceError: fn is not defined
  +function fn() {
    console.log('hello');
  }

  基于此可以大胆猜测，只要是function关键字开头的代码段，js引擎就会将其声明提前，所以函数声明后加一对圆括号会认为是语法错误。结合函数表达式后面直接加圆括号调用函数成功的情况，做出如下尝试：

  +function() {
    console.log('hello')
  }()

  -function() {
    console.log('hello')
  }()

  *function() {
    console.log('hello')
  }()

  /function() {
    console.log('hello')
  }()

  %function() {
    console.log('hello')
  }()

  // hello
  // hello
  // hello
  // hello
  // hello

  竟然全部成功了，只是这些一元运算符在此处并无实际意义，看起来令人费解。换成空格吧，又会被js引擎给直接跳过，达不到目的，因此可以用括号包裹起来

  (function() {
    console.log('hello');
  })();

  (function() {
    console.log('hello');
  }());

  // hello
  // hello

  无论怎么包，都可以成功调用匿名函数了，我们也不用再困惑调用匿名函数时，圆括号该怎么加了
*/


  


  
  



