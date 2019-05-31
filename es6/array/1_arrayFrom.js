/*
  Array.from() 方法用于将类数组对象转为真正的数组
*/


{
  let arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    length: 4
  }

  let arr = Array.from(arrayLike)

  console.log(arr)                 // ["a", "b", "c", "d"]
}

{
  let ps = document.querySelectorAll('p')

  let result = Array.from(ps).filter(p => {
    return p.textContent > 100
  })

  console.log(result)              // [p, p, p]
}
