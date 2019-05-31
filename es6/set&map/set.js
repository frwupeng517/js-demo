// set 本身是一个构造函数，用来生成 Set 数据结构
// set 类似数组，但是成员的值都是唯一的，没有重复值

{
  let s = new Set();
  let arr = [2, 4, 2, 5, 6, 3, 4]

  arr.forEach(item => s.add(item))

  console.log(s)        // Set(5) {2, 4, 5, 6, 3}
  console.log(s.size)   // 5

  for(let i of s) {
    console.log(i)
  }
}

{
  let s = new Set([1, 2, 3, 2, 4])
  console.log([...s])   // [1, 2, 3, 4]
}

{
  let s = new Set()
 
  // 增 add
  s.add(1).add(2).add('2').add(null).add(null).add(undefined).add(undefined).add(NaN).add(NaN)

  console.info(s)         // {1, 2, "2", null, undefined, NaN}
  console.info(s.size)    // 6

  // 删 delete
  s.delete(undefined)

  console.info(s)         // {1, 2, "2", null, NaN}
  console.info(s.size)    // 5

  // 查 has
  console.info(s.has(2))  // true

  // 清空 clear
  s.clear()
  console.log(s.size)     // 0

}

{
  // Array.from(Set set)  可将一个set实例转为一个数组

  let arr = [1, 2, 3, 4, 5]
  let set = new Set(arr)
  let convertArray = Array.from(set)

  console.info(set)                             // Set(5) {1, 2, 3, 4, 5}
  console.info(Array.isArray(convertArray))     // true
  console.info(convertArray)                    // [1, 2, 3, 4, 5]
}

{
  let set = new Set(['apple', 'pear', 'blueberry', 'cheery'])

  // keys()：返回键名的遍历器
  console.log(set.keys())     // SetIterator {"apple", "pear", "blueberry", "cheery"}
  for(let key of set.keys()) {
    console.log('key :' + key)   // key :apple ....
  }

  // values()：返回键值的遍历器
  for(let value of set.values()) {
    console.log('value:' + value)  // value:apple ....
  }

  // entries()：返回键值对的遍历器
  for(let [key, value] of set.entries()) {
    console.log('entries: ' + key, value)   // entries: apple apple
  }

  // forEach(callback)：callback回调函数依次传入三个值：键值、键名、集合本身
  set.forEach((value, key) => console.log(key + "-->" + value))  // apple-->apple

}

{
  let set = new Set([2, 3, 4, 5, 6])

  // 间接使用数组的map和filter方法
  let set_map = new Set([...set].map(item => item * 2))
  console.info(set_map)     // Set(5) {4, 6, 8, 10, 12}

  let set_filter = new Set([...set].filter(item => item %2 === 0))
  console.log(set_filter)   // Set(3) {2, 4, 6}
}

{
  let arr1 = new Set([1, 2, 3, 4, 5])
  let arr2 = new Set([2, 3, 4, 5, 6])

  // 并集
  let union = new Set([...arr1, ...arr2])
  console.log(union)         // Set(6) {1, 2, 3, 4, 5, 6}

  // 交集
  let has = new Set([...arr1].filter(item => arr2.has(item)))
  console.log(has)           // Set(4) {2, 3, 4, 5}

  // 差集
  let diff = new Set([...arr1].filter(item => !arr2.has(item)))
  console.log(diff)         // Set(1) {1}
}
