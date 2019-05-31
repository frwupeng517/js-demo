/*
  3、Null 类型
  Null 类型也只有一个特殊的值 null，null值表示一个空对象指针
  使用 typeof 操作符检测 null 值时会返回 "object"
  var a = null
  console.log(typeof a)    // object

  null 和 undefined 之间的关系：
  （1）、undefined 值派生自 null 值，所以二者相比较（==）总是返回true
    console.log(undefined == null)    // true
    console.log(undefined === null)   // false
  
  （2）、无论何时，都没有必要显示的为一个变量赋值为 undefined
  （3）、如果一个变量用于在将来保存对象，则可以将其初始化为 null
*/
  
  