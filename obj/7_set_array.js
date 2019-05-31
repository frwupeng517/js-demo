{
  // set 和 array 对比

  let set = new Set()
  let arr = new Array()

  // 增
  set.add({t:1})
  arr.push({t:1})

  console.log('set_add arr_add', set, arr)


  // 查
  console.log(set.has({t:1}))
  console.log(arr.find(item => item.t))
}