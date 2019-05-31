{
  // 传统的Object只能用字符串当键名
  let obj = {}
  let foo = 123
  obj.foo = 456

  console.log(obj)   // {foo: 456}

  obj[foo] = 789

  console.log(obj)    // {123: 789, foo: 456}
}

{
  // Map 与 Object 类似，也是键值对的集合，但是键的范围不局限于字符串，各种类型的值都可以用作键
  // Map 构造方法可接受具有 Iterator 接口、且每一个成员都是一个双元素的数组的数据结构
  // 例如：当数组作为参数，该数组的成员是一个个表示键值对的数组
  
  let items = [
    ['name', '张三'], ['age', 28]
  ]
  
  let map = new Map(items)
  
  console.info(map)     // {"name" => "张三", "age" => 28}
}

{
  let map = new Map()

  // 增加：set(key, value)
  map.set('1', 'aaa')
  map.set(1, 'bbb')
  map.set(['a'], 5)
  map.set(['a'], 6)
  map.set(undefined, 7)
  map.set(undefined, 8)
  map.set(null, 9)
  map.set(null, 10)
  map.set(NaN, 11)
  map.set(NaN, 12)

  console.info(map)       // {"1" => "aaa", 1 => "bbb", Array(1) => 5, Array(1) => 6, undefined => 8, null => 10, NaN => 12}

  // 读取：get(key)

    // 1、如果key不存在，则返回 undefined
    console.info(map.get('key'))            // undefined

    // 2、如果对同一个键重复赋值，后面的值将覆盖前面的值
    let map_repeat = new Map()
    map_repeat.set(4, 'hello')
    map_repeat.set(4, 'world')

    console.info(map_repeat)              // {4 => "world"}

    // 3、关于基本数据类型，只有两个key严格相等(===)，Map 才将其视为一个key，例如上面的字符串1和数字1是两个不同的键
    // 由于 undefined 和 null 这两个键自身各自都是严格相等的，因此上例中重复添加undefined和null时，均被后面的值覆盖
    // 值得注意的是尽管NaN !== NaN，但是在Map中视为相等
    console.info(map.get(undefined))      // 8
    console.info(map.get(null))           // 10
    console.info(map.get(NaN))            // 12

    // 4、关于引用类型，只有对同一个对象的引用，map 才视其为同一个键，如上面的 map.set(['a'], 5) 和 map.set(['a'], 6) 表面看起来键是相同的，但是内存地址不同
    // 不仅set值的时候没有后者覆盖前者，直接用 ['a'] 做key去取值也是取不到的
    console.info(map.get(['a']))          // undefined
  
  // 获取Map的成员总数：size
  console.info('map的成员个数：', map.size)  // map的成员个数： 7

  // has(key)：返回一个布尔值，表示某个键是否在Map中
  console.info(map.has(NaN))      // true

  // delete(key)：删除某个键，删除成功返回true，删除失败返回false
  console.info(map.delete(undefined))   // true
  console.info(map.has(undefined))      // false

  // clear()：清空所有成员，没有返回值
  map.clear()
  console.info(map.size)            // 0
}

{
  /*
    keys()：返回键名的遍历器
    values()：返回键值的遍历器
    entries()：返回所有成员的遍历器
    forEach()：遍历Map的所有成员

  */
  let map = new Map([
    ['name', 'Jim Green'],
    ['age', 23]
  ])

  console.log(map.keys())       // MapIterator {"name", "age"}
  for(let key of map.keys()) {
    console.log('key', key)     // key name    key age
  }

  for(let value of map.values()) {
    console.log('value', value)     // value Jim Green    value 23
  }

  for(let [key, value] of map.entries()) {
    console.log('key', key, 'value', value)
    // key name value Jim Green
    // key age value 23
  }

  map.forEach((key, value) => {
    console.log('key', key, 'value', value)
    // key name value Jim Green
    // key age value 23
  })
}

{
  // Map 转为数组
  let map = new Map().set(true, 7).set({o: 3}, 8)
  let arr = [...map]

  console.log(arr)                 // [[true, 7], [{o: 3}, 8]]
  console.log(Array.isArray(arr))   // true
}