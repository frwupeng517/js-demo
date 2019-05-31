/*
  ES5之前提供了 5种基本数据类型 和 1种引用数据类型
  基本数据类型：Undefined, Null, String, Number, Boolean
  引用数据类型：object

  ES6开始引入了一种新的基本数据类型 Symbol，表示独一无二的值

  一、基本数据类型
  1、typeof 操作符
  typeof 是一个操作符而不是函数，因此后面的圆括号可以用，但不是必须的

  "undefined" --- 如果这个值未定义（注意：包括未声明和未初始化）
  "string" --- 如果这个值是字符串
  "number" --- 如果这个值是数值
  "boolean" --- 如果这个值是布尔值
  "object" --- 如果这个值是null 或 引用数据类型
  "function" --- 如果这个值是函数（某些低版本浏览器对正则表达式也会返回function）
*/

console.log(typeof a)                 // undefined  （未定义的变量，使用typeof 操作符检测也会返回undefined）
console.log(typeof undefined)         // undefined
console.log(typeof null)              // object  （null 被认为是一个空的对象引用）
console.log(typeof('string'))         // string
console.log(typeof 3)                 // number
console.log(typeof true)              // boolean
console.log(typeof function(){})      // function
console.log(typeof [])                // object
console.log(typeof {})                // object
console.log(typeof /^\d/)             // object

