var arr = [1,2,3,4,5]

// 读取
console.log(arr[1])             // 2
console.log(arr['1'])           // 2
console.log(arr['01'])          // undefined
console.log(arr[01])            // 2

/*
  出现上面这种情况的主要原因是 arr[1] 中的 1 会被Javascript 解释器通过调用 toString 方法隐式转换成字符串
  所以 arr['1'] 和 arr['01']其实是指两个不同位置上的元素，而 arr[1] 和 arr[01] 都被转换成了 arr['1']
*/




// 获取长度
console.log(arr.length)         // 5

// 添加元素
arr[5] = 6
console.log(arr)                // (6) [1, 2, 3, 4, 5, 6]

// delete 删除某位上的值，但是数组长度不会改变，只是把被delete的元素变为undefined
delete arr[0]
console.log(arr.length)        // 6
console.log(arr[0])            // undefined
console.log(arr)               // (6) [empty, 2, 3, 4, 5, 6]
