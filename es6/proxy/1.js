

{
  let obj = {}
  let proxy = new Proxy(obj, {
    get(target, property) {
      console.log('target', target)          // target {}
      console.log('property', property)      // property a
      return 35
    }
  })

  console.log(proxy.a)                       // 35
  
}


{
  let obj = {
    a: 1
  }

  let newObj = new Proxy(obj, {
    get(target, property) {
      // console.log(target)
      // console.log(property)
      return property in target ? target[property] : new Error(`对象${target}中不存在${property}属性`)
    }
  })

  console.log(newObj)       // Proxy {a: 1}
  console.log(newObj.a)     // 1
  console.log(newObj.b)     // Error: 对象[object Object]中不存在b属性
}