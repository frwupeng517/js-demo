{
  let arr = [1,2,2,3,4,4]
  let s = new Set(arr)

  console.log(s)          // {1, 2, 3, 4}
  console.log([...s])     // [1, 2, 3, 4]

}

{
  let s = new Set()
  s.add(1)
  s.add(2)
  s.add(3)
  s.add(2)

  console.log(s)          // {1, 2, 3}
  console.log(s.size)     // 3

  console.log('has', s.has(1))      // has true
  console.log('has', s.has('1'))    // has false

  s.delete(1)
  console.log('delete', s)          // delete Set(2) {2, 3}

  s.clear()
  console.log('clear', s)           // clear Set(0) {}

}

{
  let list = new Set(['red', 'yellow', 'blue', 'green'])

  for(let item of list.keys()) {
    console.log(item)               // 'red', 'yellow', 'blue', 'green'
  }

  for(let item of list.values()) {
    console.log(item)               // 'red', 'yellow', 'blue', 'green'
  }

  for(let item of list.entries()) {
    console.log(item)             
    // ["red", "red"]
    // ["yellow", "yellow"]
    // ["blue", "blue"]
    // ["green", "green"]
  }
}

{
  let set = new Set(['red', 'green', 'blue'])
  let arr = [...set]
  console.log(arr)            // ["red", "green", "blue"]

  let arr2 = [2,3,4,3,2,5]
  let unique = [...new Set(arr2)]

  console.log(unique)         // [2, 3, 4, 5]
}