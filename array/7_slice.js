/*
  slice(begin, end) 方法返回一个从开始到结束（不包括结束）选择的数组的一部分 浅拷贝 到一个新的数组对象。且原数组不会被修改
*/

var phone = ['apple', 'huawei', 'mi', '360', 'nokia']

console.log(phone.slice(1,2))    // ['huawei']
console.log(phone.slice(3))      // ['360', 'nokia']
console.log(phone.slice(2, -1))  // ['mi', '360']

// begin 和 end 均不设置，则表示截取全部
console.log(phone.slice())        // ['apple', 'huawei', 'mi', '360', 'nokia']

// 设置 begin，不设置 end，则从begin位置开始到最后一个元素（包含最后一个元素）
console.log(phone.slice(2))       // ['mi', '360', 'nokia']

// begin 为负数，则表示从原数组的倒数第几个元素开始截取，slice(-2) 表示从数组的倒数第二个元素到最后一个元素（包含最后一个元素）
console.log(phone.slice(-2))      // ['360', 'nokia']
console.log(phone.slice(-1))      // ['nokia']

// end 为负数，表示在原数组中的倒数第几个元素结束抽取  slice(-2, -1) 表示抽取了原数组中的倒数第2个元素到最后一个元素（不包含最后一个元素）
console.log(phone.slice(-2, -1))          // ['360']
console.log(phone.slice(1, -3))           // ['huawei']

// 如果 end 大于数组长度，则会返回截取到最后一个元素的数组（包含最后一个数组）
console.log(phone.slice(3, phone.length + 3))        // ['360', 'nokia']


/*
  slice 不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组，如果元素是一个对象引用，slice会拷贝这个对象引用到新数组，
  当被引用的对象发生改变时，数组中这个元素也会发生改变
*/
var obj = {name: 'roger', age: 28}
var arr = [obj, 'javascript', 'koa']

var arr1 = arr.slice(0, 2)
console.log(arr1)                      // (2) [{…}, "javascript"]
console.log(arr1[0].age)               // 28

obj.age = 18
console.log(arr1[0].age)               // 18


/*
  Array.prototype.slice.call(arguments)  将一个类数组对象转成新数组
*/
function fun() {
  return Array.prototype.slice.call(arguments)
}

console.log(fun(1,2,3))            // (3) [1, 2, 3]