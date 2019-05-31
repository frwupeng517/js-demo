{
  // es5中判断比较两个值是否相等，只能使用 == 或 ===
  // == 先转换再比较 会隐式转换数据类型
  // === 仅比较不转换 有两个特殊情况，NaN不严格等于NaN，+0 严格等于 -0
  
  console.log('NaN === NaN', NaN === NaN)                     // NaN === NaN false
  console.log('0 === -0', 0 === -0)                           // 0 === -0 true

  console.log('NaN === NaN', Object.is(NaN, NaN))             // NaN === NaN true
  console.log('0 === -0', Object.is(0, -0))                   // 0 === -0 false
}

{
  // 关于 == 是先将两个操作数转换成同一种数据类型，再比较

  // 1、如果一个操作数是布尔值，则将其转为数值，false -> 0，true -> 1
  console.log('true == \'true\'', true == 'true')             // true == 'true' false
  console.log('true == 1', true == 1)                         // true == 1 true
  console.log('true === 1', true === 1)                       // true === 1 false

  // 2、如果一个操作数是字符串，另一个操作数是数值，则先将字符串转为数值
  console.log('23 == \'23\'', 23 == '23')                     // 23 == '23' true
  console.log('"test" == 23', 'test' == 23)                   // "test" == 23 false

  // 3、如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型按照前面的规则去比较
  console.log('obj == 23', {name: "张三", age: 18} == 23)     // obj == 23 false

  // 4、 null == undefined
  console.log('null == undefined', null == undefined)         // null == undefined true
}

{
  // Object.assign(target, source1, source2, ...)  将源对象所有的 ** 可枚举 ** 属性复制到目标对象

  // 如果参数不是对象，则先转成对象，后返回
  console.log(Object.assign(2))           // Number {2}

  // null 和 undefined无法转成对象，这里就分两种情况
  // （1）、作为首参数（目标对象），会报错
  // console.log(Object.assign(null))                  
  // console.log(Object.assign(undefined, {a: 1}))
  // Uncaught TypeError: Cannot convert undefined or null to object
  // （2）、非首参数（源对象），由于无法转成对象，会直接跳过
  console.log(Object.assign({a: 1}, null))        // {a: 1}
  console.log(Object.assign({a: 1}, undefined))   // {a: 1}
  console.log(Object.assign({a: 1}, NaN))         // {a: 1}

  
}

