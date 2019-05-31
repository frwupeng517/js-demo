{
  // let ws = new WeakSet([1,2])   // Uncaught TypeError: Invalid value used in weak set

  let ws = new WeakSet([[1,2], [3,4]])
  console.log(ws)
}