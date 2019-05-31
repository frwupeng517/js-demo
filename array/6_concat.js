/*
  concat() 方法用于合并两个或多个数组，不会改变原数组，而是返回新数组
*/

var arr1 = ['a', 'b', 'c']
var arr2 = ['d', 'e', 'f']

console.log(arr1.concat(arr2))  // (6) ["a", "b", "c", "d", "e", "f"]

console.log(arr1)               // (3) ["a", "b", "c"]
console.log(arr2)               // (3) ["d", "e", "f"]

// 连接3个数组
var n1 = [1,2,3],
    n2 = [4,5,6],
    n3 = [7,8,9]
console.log(n1.concat(n2,n3))  // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 合并嵌套数组
var a1 = ['apple', 'huawei']
var a2 = [['samsuang', 'mi'], 'oppo']
console.log(a1.concat(a2))              // ["apple", "huawei", Array(2), "oppo"]