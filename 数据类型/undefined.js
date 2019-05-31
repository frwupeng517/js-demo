/*
  2、Undefined类型
  Undefined类型只有一个特殊的值，即undefined。声明变量但未加以初始化时，该变量的值就是 undefined

  未初始化和未声明是完全不同的，前者会被赋值为 undefined，后者会报错。但是使用 typeof 操作符检测时，两者都会返回 undefined

  var a 
  console.log(a)          // undefined （声明但未初始化）
  console.log(b)          // Uncaught ReferenceError: b is not defined （报错：b 未定义）

   

*/
  var a
  console.log(typeof a)     // undefined  
  console.log(typeof b)     // undefined 

  
  
  