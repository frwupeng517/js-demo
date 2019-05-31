

// console.log(color)
// var color = function() {
//   console.log('aaa')
// }

// var color = 'red';
// var size = 31;

  // var name = 'xm';
	// var age = 18;
	// function name() {
	// 	console.log(name);
	// 	var name = 'xh';
	// 	var age = 10;
	// }
  // name();
  


  /*
    注意：
    （1）、如果函数是通过 “函数声明” 的方式定义的，遇到与函数名相同的变量时，不论函数与变量的位置顺序如何，预解析时函数声明会覆盖掉var声明的变量
      console.log(fn)    // ƒ fn() {}

      function fn() {}

      var fn = 32

    （2）、如果函数是通过 “函数表达式” 的方式定义的，遇到与函数名相同的变量时，会视同两个var声明的变量，后者会覆盖前者
      console.log(fn);         // undefined
      var fn = function() {};
      var fn = 32;
      console.log(fn)          // 32

    （3）、两个通过 “函数声明” 的方式定义的同名函数，后者会覆盖前者
      console.log(fn);     // ƒ fn() {console.log('你好 世界')}

      function fn() {console.log('hello world')}

      function fn() {console.log('你好 世界')}

    

    
  */

 // 练习：
 var fn = 32

 function fn() {
   alert('eeee')
 }

 console.log(fn)          // 32
 fn()                     // Uncaught TypeError: fn is not a function
 console.log(typeof fn)   // number

 // 按照上面的预解析规则，预解析第一步时，fn会被赋值为 function fn() {alert('eeee')}；第二步从上到下逐步执行时，由于函数fn声明提前，优于var声明的fn执行了，
 // 所以fn会被覆盖为一个Number类型的基本数据类型变量，而不是一个函数，其值为32


  

  

  



