{
  // for...in 循环：只能获得对象的键名，不能获得键值
  // for...of 循环：允许遍历获得键值
  var arr = ['red', 'green', 'blue']
  
  for(let item in arr) {
    console.log('for in item', item)
  }
  /*
    for in item 0
    for in item 1
    for in item 2
  */

  for(let item of arr) {
    console.log('for of item', item)
  }
  /*
    for of item red
    for of item green
    for of item blue
  */

}


{
  // 对于普通的对象，没有部署原生 iterator 接口，直接使用 for...of 会报错

  var obj = {
    'name': 'Jim Green',
    'age': 12
  }

  // for(let key of obj) {
  //   console.log('for of obj', key)
  // }
  // Uncaught TypeError: obj is not iterable

  // 可以使用 for...in循环遍历键名
  for(let key in obj) {
    console.log('for in key', key)
  }
  /*
    for in key name
    for in key age
  */

  // 也可以使用 Object.keys(obj) 方法将对象的键名生成一个数组，然后遍历这个数组
  for(let key of Object.keys(obj)) {
    console.log('key', key)
  }
  /*
    key name
    key age
  */
  
}

{
  // for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键
  let arr = [1, 2, 3]
  arr.set = 'world'
  Array.prototype.name = 'hello'

  for(let item in arr) {
    console.log('item', item)
  }

  /*
    item 0
    item 1
    item 2
    item set
    item name
  */

  for(let value of arr) {
    console.log('value', value)
  }

  /*
    value 1
    value 2
    value 3
  */

  /**   总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组 */
}


{
  let arr = [1, 2, 3, 5, 9]

  // 无法中途跳出forEach循环，break命令或return命令都不能奏效
  arr.forEach(item => {
    if(item % 2 === 0) {
      return
    }
    console.log('item', item)
  })
  /*
    item 1
    item 3
    item 5
    item 9
  */

  // 可以与break、continue和return配合使用，跳出循环
  for(let item of arr) {
    if(item % 2 === 0) {
      break
    }
    console.log('item', item)
  }
  // item 1
}