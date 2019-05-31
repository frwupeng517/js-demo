/*
  Symbol 函数前不能用 new 运算符，否则会报错。因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性
*/

{
  let s = Symbol()
  console.log(typeof s)      // symbol

  // let s2 = new Symbol()      // Uncaught TypeError: Symbol is not a constructor
}


/*
  Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了防止当控制台全部都是输出 Symbol()时，不利于区分
*/

{
  let s1 = Symbol('foo')      
  let s2 = Symbol('bar')

  console.log(s1)             // Symbol(foo)
  console.log(s2)             // Symbol(bar)

  console.log(s1.toString())      //  'Symbol(foo)'
  console.log(s2.toString())      //  'Symbol(bar)'
} 


/*
  如果 Symbol 的参数是一个对象，则会调用该对象的 toString() 方法，将其转为字符串，然后才生成一个 Symbol 值
*/

{
  let obj = {
    name: 'Roger',
    say: function() {
      return `My name is ${this.name}`
    },
    toString() {
      return 'hello world'
    }
  }

  let s = Symbol(obj)

  console.log(s)                  // Symbol(hello world)
}


/*
  Symbol 函数的参数只是表示对当前 Symbol 值得描述，因此相同参数的 Symbol 函数的返回值是不相等的
*/

{
  // 没有参数的情况
  let s1 = Symbol()
  let s2 = Symbol()

  console.log(s1 == s2)         // false

  // 有参数的情况
  let s3 = Symbol('foo')
  let s4 = Symbol('foo')

  console.log(s3 == s4)        // false
}


/*
  Symbol 值不能与其他类型的值进行运算，会报错
*/

{
  let s = Symbol()
  // console.log(`${s} is a Symbol`)           // Uncaught TypeError: Cannot convert a Symbol value to a string
  // console.log('here is a symbol' + s)       // Uncaught TypeError: Cannot convert a Symbol value to a string
}


/*
  Symbol 值可以显示转为字符串
*/

{
  let s = Symbol('my symbol')
  console.log(String(s))            // 'Symbol(my symbol)'
  console.log(s.toString())         // 'Symbol(my symbol)'
}

/*
  Symbol 值可以转为布尔值，不可以转为Number
*/

{
  let s = Symbol('my symbol')

  console.log(Boolean(s))                   // true
  console.log(!s)                           // false

  if(s) {
    console.log('Symbol 可以转为布尔值')    // Symbol 可以转为布尔值
  }

  // console.log(Number(s))                  // Uncaught TypeError: Cannot convert a Symbol value to a number
  // console.log(s + 2)                      // Uncaught TypeError: Cannot convert a Symbol value to a number
}