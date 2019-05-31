{
  var arr = [1,2,3]

  let iteratorObj = arr[Symbol.iterator]()

  console.info(iteratorObj.next())    // {value: 1, done: false}
  console.info(iteratorObj.next())    // {value: 2, done: false}
  console.info(iteratorObj.next())    // {value: 3, done: false}
  console.info(iteratorObj.next())    // {value: undefined, done: true}
}

{
  function* gen() {
    yield 'a'
    yield 'b'
    return 'c'
  }

  let iteratorObj = gen()

  console.info(iteratorObj)           
  console.info(iteratorObj.next())   // {value: "a", done: false}
}

{
  let set = new Set()
  set.add([1, 2, 3, 4, 5])

  console.info('set', set)

  set.forEach(item => console.info(item))
}

{
  let map = new Map()

  map.set(1, 'hello')
  map.set([1,2,3], 'world')

  console.info('map', map)
  // console.info(map[Symbol.iterator]())
  // console.info(map[Symbol.iterator]().next())
  // console.info(map[Symbol.iterator]().next())
  // console.info(map[Symbol.iterator]().next())

  map.forEach(item => console.info(item))
}