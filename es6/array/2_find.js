/*
  find() 方法用于找出  **第一个**  符合条件的数组成员
        它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，就返回undefined
*/


{
  let arr = [1, 3, -5, 0, -2]
  
  let result = arr.find(n => {
    return n < 0
  })

  console.log(result)            // -5
}

/*
  find 方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组
*/
{
  let arr = [1, 5, 10 ,15]

  let result = arr.find((value, index, arr) => {
    return value > 9
  })

  console.log(result)           // 10
}

/*
  findIndex() 方法用法与 find() 方法类似，返回第一个符合条件的数组成员的位置；如果所有成员都不符合条件，则返回 -1
*/
{
  let index = [1, 5, 10, 15].findIndex(n => {
    return n > 5
  })

  console.log(index)            // 2
}