/*
  Object.setPropertyOf 方法的作用与 __proto__ 相同，用来设置一个对象的 prototype 对象，返回参数对象的本身。它是 ES6 正式推荐的设置原型对象的方法

  语法格式： Object.setPrototypeOf(object, property)
*/
{
  const o = Object.setPrototypeOf({}, null)

  // 类似于下面的写法

  // function (obj, proto) {
  //   obj.__proto__ = proto
  //   return obj
  // }
}

{
  let proto = {}
  let obj = {x : 10}

  Object.setPrototypeOf(obj, proto)

  proto.name = 'Kobe'
  proto.age = 40

  for(var key in obj) {
    console.log(key)
  }

  // x
  // name
  // age

  console.log(Object.getPrototypeOf(obj))   // {name: "Kobe", age: 40}
}

{
  function Fun() {

  }

  let f = new Fun()

  console.log(Object.getPrototypeOf(f) === Fun.prototype)   // true
}