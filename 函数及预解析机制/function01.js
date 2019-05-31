/*
  每个函数都是 Function类型的实例，也具有属性和方法。由于函数也是一个对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定

  1、函数的定义方式
  （1）、函数声明
  function add(a, b) {
    return a + b;
  }

  函数声明提升：在执行代码之前，会先读取函数声明，也就是说，可以把函数声明放在调用它的代码之后
  fn();   // 1
  function fn() {console.log(1)}

  （2）、函数表达式
  var add = function(a, b) {
    return a + b;
  };

  函数表达式看起来像是常规的变量赋值，由于其function关键字后面没有指定函数名，因此是一个匿名函数
  函数表达式必须先赋值，不具备函数声明提升的特性
  fn();   // Uncaught TypeError: fn is not a function
  var fn = function(){console.log(1)};

  由于函数声明提升这一特性，导致在某些情况下会出现意想不到的结果，例如：
  var flag = true;
  if(flag) {
    function fn() {
      console.log('flag 为true')
    }
  } else{
    function fn() {
      console.log('flag 为false')
    }
  }
  fn();
  // chrome, firefox, ie11  输出 flag 为true
  // ie10及以下 输出 flag 为false
  本意是想flag为true时输出 'flag 为true', flag为false时输出 'flag 为false'，为何结果却不尽相同呢？
  究其原因就在于函数声明提升，执行代码时首先读取函数声明，而 if...else...代码块同属于全局作用域，因此后面的同名函数会覆盖前面的函数，最终函数fn就只剩下一个 function fn(){console.log('flag 为false')}
  由于函数声明提升导致的这一结果令人大为意外，因此，js引擎会尝试修正错误，将其转换为合理状态，但不同浏览器版本的做法并不一致

  此时，函数表达式就可以解决这个问题
  var flag = true;
  var fn;

  if(flag) {
    fn = function() {
      console.log('flag 为true');
    }
  } else{
    fn = function() {
      console.log('flag 为false');
    }
  }
  fn()

  //chrome, firefox, ie7-11 均输出 flag 为true
  其实这个也很好理解，js预解析时，fn和flag均被初始化为undefined，然后代码从上到下逐行执行，首先给flag赋值为true，进入if语句，为fn赋值为 function fn(){console.log('flag 为true')}

  关于函数表达式，还有一种写法，命名函数表达式
  var add = function f(a, b) {
    console.log(a + b);
  }
  add(1,2);     // 3
  f(1,2);       // Uncaught ReferenceError: f is not defined

  var add = function f(a, b) {
    console.log(f);
  }
  console.log(add);
  add(3, 5);


  // ƒ f(a, b) {
  //   console.log(f);
  // }

  由此可见，f也是指向函数的指针，只在函数作用域内部可用

  （3）、Function构造函数
  var add = new Function('a', 'b', 'return a + b');

  不推荐这种写法，因为这种语句会导致解析两次代码，第一次是解析js代码，第二次解析传入构造函数中的字符串，从而影响性能
 
  
  
  
*/




  

