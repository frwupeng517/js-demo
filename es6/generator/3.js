{
  function* gen(x) {
    let y = 2 * (yield (x + 1))   
    let z = yield (y / 3)
    z = 88    // 注意看这里
    return x + y + z
  }

  let it = gen(5)

  console.log(it.next())   // {value: 6, done: false}
  console.log(it.next(9))  // {value: 6, done: false}
  console.log(it.next(2))  // 这里其实也很容易理解，参数2被赋值给了 z，但是函数体内又给 z 重新赋值为88， 最终 x + y + z = 5 + 18 + 88 = 111，返回 {value: 111, done: true}
}

/*
  



*/



