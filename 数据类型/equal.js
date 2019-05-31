/*
  二、相等操作符
  1、相等和不想等：自动隐式转换，先转换再比较
  规则：
  （1）、如果有一个操作数是布尔值，则在比较之前先将其转为数值，false 转为 0，true 转为 1
  （2）、如果有一个操作数是字符串，另一个操作数是数值，则在比较之前先将字符串转为数值
  （3）、如果有一个操作是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则比较
  （4）、如果两个操作数都是对象，则比较它们是不是同一个对象。如果都指向同一个对象，则返回true，否则，返回false

  alert(true == 1)                  // true
  alert(true == 2)                  // false
  alert(false == 0)                 // true
  alert(false == [])                // true
  alert(0 == '')                    // true
  alert('5' == 5)                   // true
  alert('blue' == true)             // false （'blue'转为数值是NaN）
  alert('blue' == 1)                // false
  alert(null == undefined)          // true
  alert(undefined == 0)             // false
  alert(undefined == false)         // false
  alert(null == false)              // false
  alert(undefined == undefined)     // true
  alert(null == null)               // true
  alert(undefined == [])            // false
  alert(NaN == NaN)                 // false
  alert(NaN != NaN)                 // true
  alert([] != [])                   // true
  alert({age: 3} == 3)              // false
  alert({age: 3, valueOf: function(){return this.age}} == 3)   // true

  2、全等和不全等：仅比较不转换
*/
  alert(5 === '5')              // false （不同数据类型，不相等）
  alert(null === undefined)     // false （二者是类似的值，但是不同类型的值）
  
  
