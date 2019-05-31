// WeakSet 与 Set 类似，也是不重复值的集合。主要有两个区别
// 1、WeakSet的成员只能是对象，不能是其它类型的值
// 2、WeakSet中的对象都是弱引用，垃圾回收机制不考虑WeakSet对该对象的引用
{
  let ws = new WeakSet()
  // ws.add('123')               // Uncaught TypeError: Invalid value used in weak set
  // ws.add([1])                    // WeakSet {Array(1)}
  ws.add({a: 3})

  console.log(ws)       
}

{
  // WeakSet(Iterable)  WeakSet 构造函数可接受一个数组或类数组对象作为参数
  let arr = [[1,2], [3,4]]
  let ws = new WeakSet(arr)

  console.log(ws)              // WeakSet {Array(2), Array(2)}

  // 注意：是数组arr的成员 成为WeakSet的成员，而不是数组arr本身。因此，数组的成员只能是对象，否则就会报错

  let b = [3,4]
  /*
    let ws2 = new WeakSet(b)    
    console.log(ws2)            // Uncaught TypeError: Invalid value used in weak set
    
  */
}

{
  {
    function ab() {
      console.log(my)
      var my = 'c'
    }
    var my = 'a'
    ab()
    console.log(my)
    my = 'c'
  }
}

{
  let ws = new WeakSet()
  let arr = [1, 2, 3]
  let obj = {id: 123456}

  // 增加：add
  ws.add(obj)
  ws.add(arr)

  // 是否存在：has
  console.info(ws.has(arr))   // true
  console.info(ws.has(obj))   // true

  // 删除：delete
  ws.delete(arr)
  console.info(ws.has(arr))   // false

  // ******* WeakSet 没有size属性，没有办法遍历它的成员，它的成员都是弱引用，随时可能消失，
  // ******* 遍历机制无法保证成员的存在，很可能刚刚遍历就结束了，成员就取不到了
  console.info(ws.size)       // undefined

}

