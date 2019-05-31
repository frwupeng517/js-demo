/*
  由于每一个 Symbol 值都是不相等的，这意味着 Symbol 可以作为标识符，用于对象的属性名，这样就能保证不会出现同名属性
*/

// 第一种写法
{
  let s = Symbol('name')

  let a = {}

  a[s] = 'Kobe'

  console.log(a)                      // {Symbol(name): "Kobe"}
}

// 第二种写法
{
  let s = Symbol('name')

  let a = {
    [s]: 'Kobe'
  }

  console.log(a)                      // {Symbol(name): "Kobe"}
}

// 第三种写法
{
  let s = Symbol('name')

  let a = {}

  Object.defineProperty(a, s, {value: 'Kobe'})

  console.log(a)                      // {Symbol(name): "Kobe"}
}

/*
  这里需要注意集中错误的写法
*/

// 针对写法一：不能使用点运算符，因为点运算符后面总是跟着一个字符串，所以不会读取Symbol的标识名
{
  let s = Symbol('name')

  let a = {}

  a.s = 'Kobe'

  console.log(a)                // {s: "Kobe"}
}

// 针对写法二：要带中括号，不能直接写 Symbol 变量名
{
  let s = Symbol('name')

  let a = {
    s: 'Kobe'
  }

  console.log(a)              // {s: "Kobe"}
}

// 针对写法三：不能把 Symbol 值转为字符串
{
  let s = Symbol('name')

  let a = {}

  // Object.defineProperty(a, [s], {value: 'Kobe'})      // Uncaught TypeError: Cannot convert a Symbol value to a string

}