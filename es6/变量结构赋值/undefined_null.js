// es6 内部使用 严格相等运算符，判断一个位置是否有值，所以，只有当一个数组成员严格等于 undefined，默认值才会生效
{
  let [x, y = 'b'] = ['a', undefined]

  // (y = undefined) === undefined ?
  // y = b


  console.log(x)   // a
  console.log(y)   // b
}

{
  let [x, y = 'b'] = ['a']

  console.log(x)   // a
  console.log(y)   // b
}


// 如果一个数组成员是 null，默认值就不会生效，因为 null 不严格等于 undefined
{
  let [x, y = 'b'] = ['a', null]

  // (y = null) === undefined ?
  // y = null


  console.log(x)   // a
  console.log(y)   // null
}

// 对象的结构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
{
  let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
  console.log(baz)  // aaa
  // console.log(foo)  // Uncaught ReferenceError: foo is not defined
}

{
  let {message : msg = "hello world"} = {}
  console.log(msg)      // hello world
  console.log(message)  // Uncaught ReferenceError: message is not defined
}
