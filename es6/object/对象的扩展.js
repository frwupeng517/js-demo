{
  // 属性名表达式如果是一个对象，默认情况下会自动调用toString()方法，将对象转为字符串[object Object]

  let obj1 = {name: 'Jim Green'}
  let obj2 = {
    age: 12,
    toString() {
      return 'override toString function'
    }
  }

  let newObj = {
    [obj1]: 'test obj1',
    [obj2]: 'test obj2'
  }

  console.info(newObj)    // {[object Object]: "test obj1", override toString function: "test obj2"}
}

{
  // 基于以上原因，下例中的 [obj1] 和 [obj2] 都将得到 [object Object]，所以后面的值会覆盖前面的值，newObj最终也就只有一个 [object Object] 属性

  let obj1 = {name: 'Jim Green'}
  let obj2 = {age: 12}

  let newObj = {
    [obj1]: 'test obj1',
    [obj2]: 'test obj2'
  }

  console.info(newObj)    // {[object Object]: "test obj2"}
}