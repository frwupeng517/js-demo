{
  let map = new Map()
  let obj = {say: 'Hello World'}

  map.set(obj, 'content')
  console.log(map.get(obj))           // content

  console.log('has', map.has(obj))    // has true
  map.delete(obj)
  console.log('has', map.has(obj))    // has false
}

{
  let map = new Map()
  let arr = []

  // 增
  map.set('t', 1)
  arr.push({t: 1})

  console.info('map', 'arr', map, arr)        // {"t" => 1}   [{t: 1}]


  // 查
  let map_exist = map.has('t')
  let arr_exist = arr.find(item => item.t)

  console.info('map-exist  arr_exist', map_exist, arr_exist)     // map-exist  arr_exist true {t: 1}

  // 改
  map.set('t', 2)
  arr.forEach(item => item.t ? item.t = 2 : '')

  console.log('map-modify arr-modify', map, arr)                // {"t" => 2}   [{t: 2}]

  // 删
  map.delete('t')
  let index = arr.findIndex(item => item.t)
  arr.splice(index, 1)

  console.log('map-empty arr-empty', map, arr)                 // {} []
}