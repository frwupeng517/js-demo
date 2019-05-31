/*
  6、Boolean 类型
  Boolean() 转换规则：
  （1）、String类型：任何非空字符串都转为true，空字符串转为false
  （2）、Number类型：任何非零数值（包括Inifity）都转为true，0 和 NaN 转为false
  （3）、Object类型：任何对象都转为true，null 转为false
  （4）、Undefined类型：转为false
*/
  alert(Boolean('true'))      // true
  alert(Boolean('false'))     // true
  alert(Boolean(''))          // false
  alert(Boolean(25))          // true
  alert(Boolean(-0.1))        // true
  alert(Boolean(Infinity))    // true
  alert(Boolean(0))           // false
  alert(Boolean(NaN))         // false
  alert(Boolean({}))          // true
  alert(Boolean([]))          // true
  alert(Boolean(null))        // false
  alert(Boolean(undefined))   // false