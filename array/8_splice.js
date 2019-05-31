/*
  splice()方法通过删除现有元素 或 添加新元素来更改一个数组的内容

  array.splice(start [, deleteCount [, item1 [, item2 [,... ...]]]])

  start 指定修改的开始位置（从0开始）
        - 如果超出了数组的最大长度，则从数组末尾开始添加内容；
        - 如果是负值，则表示从数组末尾开始的第几位数（从-1计数）；
        - 如果负数的绝对值大于数组的长度，则表示开始位置为第0位

  deleteCount 可选，整数，表示要移除的数组元素的个数
        - 如果 deleteCount 是0，则不移除元素，这种情况下，至少应该添加一个新元素
        - 如果 deleteCount 大于 start之后的元素的总数，则从 start 后面的元素都会被删除掉（包含第start位）
        - 如果 deleteCount 被省略掉，则其相当于(arr.length - start)
  
  item1, item2, ... 可选，要添加进数组的元素， 从start位置开始。如果不指定，则splice() 将只删除数组元素
*/

var months = ['Jan', 'Feb', 'Mar', 'Apr']
months.splice(1, 0, 'Dec')  // start 是1，deleteCount 是0，表示在下标为1的位置插入一个元素，不移除元素
console.log(months)                   // ["Jan", "Dec", "Feb", "Mar", "Apr"]

months.splice(4, 1, 'May')   // 把下标为4位置的元素，删除一个
console.log(months)                   // ["Jan", "Dec", "Feb", "Mar", "May"]

months.splice(3, 3, 'July')  // 从下标为3的元素开始全部删掉，并在最后插入一个'July'
console.log(months)                   // ["Jan", "Dec", "Feb", 'July']

/*
  splice 方法使用 deleteCount 参数来控制是删除还是添加
  start 参数是必须的，表示开始的位置（从0开始计数），如：start = 0 从第一个开始，start >= array.length - 1 表示从最后一个开始
        - array.splice(start) 从 start 位置开始 删除 [start, end] 的元素
        - array.splice(start, deleteCount)   从 start 位置开始 删除 [start, count] 的元素
        - array.splice(start, 0, item1, item2, ...)   从 start 位置开始添加 item1, item2, ... 元素            
*/

var arr = ['fish', 'vegetable', 'pork', 'beaf', 'fruit', 'milk']

// 从第2位开始删除0个元素，插入 'egg'
arr.splice(2, 0, 'egg')
console.log(arr)         // ["fish", "vegetable", "egg", "pork", "beaf", "fruit", "milk"]

// 从第3位开始删除一个元素
arr.splice(3, 1)
console.log(arr)         // ["fish", "vegetable", "egg", "beaf", "fruit", "milk"]

// 从第2位开始删除一个元素，并添加一个元素 'chilken'
arr.splice(2, 1, 'chilken')
console.log(arr)          // ["fish", "vegetable", "chilken", "beaf", "fruit", "milk"]

// 从第0位开始删除2个元素，并添加3个元素 'watermelon', 'blueberry', 'grape'
arr.splice(0, 2, 'watermelon', 'blueberry', 'grape')
console.log(arr)          // ["watermelon", "blueberry", "grape", "chilken", "beaf", "fruit", "milk"]

// 从第2位开始删除2个元素
arr.splice(2, 2)
console.log(arr)          // ["watermelon", "blueberry", "beaf", "fruit", "milk"]

// 从第2位开始删除所有元素
arr.splice(2)
console.log(arr)     // ["watermelon", "blueberry"]