var arr1 = new Array(5)

console.log(arr1)      // (5) [empty × 5]
console.log(arr1[0])   // (5) undefined

var arr2 = [undefined, 1]
console.log(arr1[0] == arr2[0])     // true

var arr3 = [1,,2]
console.log(arr3)      // (3) [1, empty, 2]

var arr4 = [1,2,]
console.log(arr4)      // [1, 2]   
console.log(arr4.length)   // 2  数组的最后一个元素允许留一个逗号，但是啥也没有