// Symbol.for() 方法接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值，
// 如果有，就返回这个Symbol值；如果没有，就新建并返回一个以该字符串为名称的Symbol值

{
  let s1 = Symbol.for('abc')
  let s2 = Symbol.for('abc')

  console.info(s1 === s2)       // true

  let s3 = Symbol('foo')
  let s4 = Symbol('foo')

  console.info(s3 === s4)       // false
}

// Symbol.for('xxx)  和 Symbol('xxx') 都会生成新的Symbol，它们的区别是：
// Symbol.for() 会提供全局搜索，，首先检查给定的 key 是否已经存在，如果不存在才会创建
// Symbol() 则不会这样

{
  let i = 1
  let s1 = Symbol.for('abc')
  while(i <= 30) {
    let temp = Symbol.for('abc')
    if(s1 === temp) {
      break
    } else{
      console.log('temp, ' + temp.toString())
    }
    i++
  }
  // 直接跳出循环，没有打印输出，说明每次循环用 Symbol.for() 创建的Symbol都会在全局检索，并且相同Symbol比较是可以相等的
}

{
  let i = 1
  let s2 = Symbol('abc')
  while(i <= 30) {
    let temp = Symbol('abc')
    if(s2 === temp) {
      break
    } else{
      console.log('temp, ' + temp.toString())
    }
    i++
  }

  // 30 temp, Symbol(abc)
  // 说明每次循环用 Symbol() 创建的Symbol都是独一无二的，不等于任何值，因此循环30次就会创建30个Symbol
}

// Symbol.keyFor 方法返回一个 **已登记的** Symbol 类型值的key (Symbol.for() 有登记机制，而Symbol() 没有登记机制，因此，此方法不适用于后者)

{
  let s1 = Symbol.for('abc')
  console.log(Symbol.keyFor(s1))    // abc

  let s2 = Symbol('bar')
  console.log(Symbol.keyFor(s2))    // undefined
}