/*
  4、String 类型
  字符串是不可变的，一旦创建，值就不能改变。如要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用新字符串来填充该变量
  var str = "java"
  str = "javascript" // 销毁掉原来的字符串，再用新字符串填充变量 str

  toString()方法 和 String()方法的区别：
  （1）、toString()方法适用于 String, Number, Boolean, Object，不可用于 Null 和 Undefined；String()方法则可以用于所有的

    var num = 1, bool = true
    alert(num.toString())         // '1'
    alert(bool.toString())        // 'true'
    alert(null.toString())        // Uncaught TypeError: Cannot read property 'toString' of null
    alert(undefined.toString())   // string.js:14 Uncaught TypeError: Cannot read property 'toString' of undefined

    alert(String(num))         // '1'
    alert(String(bool))        // 'true'
    alert(String(null))        // 'null'
    alert(String(undefined))   // 'undefined'
  
  （2）、toString()方法内部可以通过传递基数，输出二进制、八进制、十进制、十六进制的字符串值，默认是十进制

    var num = 10
    alert('不传基数，默认是十进制：' + num.toString())  // 不传基数，默认是十进制：'10'
    alert('二进制基数：' + num.toString(2))            // 二进制基数：'1010'
    alert('八进制基数：' + num.toString(8))            // 八进制基数：'12'
    alert('十六进制基数：' + num.toString(16))         // 十六进制基数：'a'

  字符串数值做加法运算 "+" 会拼接成新的字符串，其余的 "-", "*", "/", "%" 均会自动转成 Number类型，再计算
*/
  var num1 = '11', num2 = '2', num3 = 3
  alert(num1 + num2 + num3)   // '1123'
  alert(num1 - num2)          // 9
  alert(num1 + num2 - num3)   // 109
  alert(num1 * num2 * num3)   // 66
  alert(num1 / num2 / num3)   // 1.8333333333333333
  alert(num1 % num2 % num3)   // 1
  
  
  
  