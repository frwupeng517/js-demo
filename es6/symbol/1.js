{
  // Symbol 是ES6引入的一种新的原始数据类型，表示独一无二的值。它是Javascript语言的第7种数据类型
  // 前六种是 String, Number, Boolean, Object, undefined, null

  let s1 = Symbol();
  let s2 = Symbol();

  console.log(typeof s1)    // symbol   
  console.log(s1 == s2)     // false
  console.log(s1 === s2)    // false
}

{
  let s1 = Symbol('sumbol1')
  let s2 = Symbol('symbol2')

  console.log(s1)
  console.log(s2)
}

{
  let s1 = Symbol.for('aaa')
  let s2 = Symbol.for('bbb')

  console.info(s1)
  console.info(s2)
}

// 如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个Symbol值

{
  let obj = {
    a: 2,
    b: 3,
    add: function() {
      return this.a + this.b
    }
  }
  let s = Symbol(obj)
  console.info(s)      // Symbol([object Object])
}

{
  let obj = {
    a: 2,
    b: 3,
    add: function() {
      return this.a + this.b
    },
    // 重写对象的toString() 方法
    toString: function() {
      return 'overide toString'
    }
  }
  let s = Symbol(obj)
  console.info(s)      // Symbol(overide toString)
}

// Symbol值不能与其他类型的值进行运算，会报错

{
  let s = Symbol('hello world')
  // console.info("the symbol is: " + s)      //  Uncaught TypeError: Cannot convert a Symbol value to a string
  // console.info(`ths symbol is ${s}`)       //  Uncaught TypeError: Cannot convert a Symbol value to a string
}

// Symbol值可以显示的转为字符串

{
  let s = Symbol('hello world')
  console.info(s.toString())          // Symbol(hello world)
  console.info(typeof s.toString())   // string
}

// Symbol值可以转为布尔值，但是不能转为数值

{
  let s1 = Symbol()
  let s2 = Symbol('hello world')
  let s3 = Symbol('true')
  let s4 = Symbol('false')

  // 目测应该是  只要存在这个Symbol就会转为true
  console.info(Boolean(s1))   // true
  console.info(Boolean(s2))   // true
  console.info(Boolean(s3))   // true
  console.info(Boolean(s4))   // true

  console.info(Boolean(!s1))  // false
  console.info(Boolean(!s3))  // false
  console.info(!s4)           // false

  if(s4) {
    console.log('Symbol类型变量可以直接用于if判断')
  }
  // Symbol类型变量可以直接用于if判断

  let s5 = Symbol(5)   // ---> Symbol 接受的是字符串作为参数，Number类型数据应该也会调用toString方法
  console.info(s5)          // Symbol(5)
  console.info(Number(s5))  // Uncaught TypeError: Cannot convert a Symbol value to a number
}