// {
  // 1、内置执行器
  // 区别于 Generator 函数执行需要用到next()方法，async函数的执行跟普通函数一模一样

  /*
  async function foo() {
    await 1
    await 2
    await 3
    return 'ending'
  }

  let promise = foo()

  promise.then(res => {
    console.log(res)     // ending  || undefined
  })
}

{
  async function bar() {
    let result = await 'test'
    console.log('result', result)
  }

  // bar()      // result test

  let promise = bar()
  promise.then(res => {
    console.log('res', res)     // res undefined
  })
}

*/

{
  async function bar() {
    await delay(2000)
    await delay(3000)
    return '等待完毕...'
  }

  let promise = bar()

  promise.then(res => {
    console.log('return', res)
  }).catch(err => {
    console.error(err)
  })

  function delay(ms) {
    console.log(`等待${ms}毫秒后再执行`)
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms)
    })
  }
}