// 由于每一个Symbol值都是不相等的，这意味着Symbol可以用来作为对象的属性名，用于表示对象键值的唯一性
{
  let a = Symbol()
  let obj = {}

  // obj.a = 3             // {a: 3}  --> a 被解析成一个普通的字符串, 点运算符后面总是字符串

  // obj[a] = 3;           // {Symbol(): 3}

  /*                       // {Symbol(): 3}
  obj = {         
    [a]: 3
  }
  */

  Object.defineProperty(obj, a, {value: 3})   // {Symbol(): 3}

  console.info(obj)
}

// 

{
  let key = Symbol('id')
  let obj = {
    [key]: 123456789
  }

  console.info(obj)             // {Symbol(id): 123456789}

  console.info(obj.key)         // undefined   点运算符后面的是一个字符串，而不是变量

  console.info(obj[key])        // 123456789
}

// Symbol作为属性名 不会被 for in 或 for of 遍历，可以通过 Object.getOwnPropertySymbols() 方法 遍历
// Object.getOwnPropertySymbols() 方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值

{
  let a = Symbol('a')
  let b = Symbol('b')

  let obj = {
    [a]: 'hello',
    [b]: 'world',
    c: 'es6',
    d: 'dom'
  }

  for(let key in obj) {
    console.info(key + ' --> ' + obj[key])
  }

  /*
    c --> es6
    d --> dom
  */

  let objSymbols = Object.getOwnPropertySymbols(obj)
  console.info(objSymbols)    //  [Symbol(a), Symbol(b)]
  objSymbols.forEach(item => {
    console.info(item.toString() + ' --> ' + obj[item])
  })

  /*
    Symbol(a) --> hello
    Symbol(b) --> world
  */

  // Reflect.ownKeys 方法可以返回所有类型的键名，包括常规键名和Symbol键名
  let keyArray = Reflect.ownKeys(obj)
  console.log(keyArray)      //  ["c", "d", Symbol(a), Symbol(b)]
}