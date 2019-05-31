/*

{
  // sleep 函数返回一个 Promise 实例，表示一段时间以后才会发生的结果，过了 ms 毫秒以后，Promise 实例的状态变为 resolved，就会触发 then 方法绑定的回调函数

  function sleep(ms) {
    return new Promise((resolve, reject) => {
      console.log('作出承诺："将来"一定会执行')
      setTimeout(resolve, ms, 'done')
    })
  }

  sleep(1000).then(res => {
    console.log(res)
  })
}



{
  // 1、Promise 新建后就会立即执行
  let promise = new Promise((resolve, reject) => {
    console.log('作出承诺："将来"一定会执行！')
    resolve('resolved')
  })

  promise.then(res => {
    console.log(res)
  })

  console.log('test')

  // 作出承诺："将来"一定会执行！
  // test
  // resolved

  // 示例中，Promise 新建后立即执行，输出 "作出承诺："将来"一定会执行！"，当前脚本所有同步任务执行完以后再执行 then 方法
}




{
  // 3、调用 resolve 或 reject 并不会终结 Promise 的参数函数的执行
  new Promise((resolve, reject) => {
    resolve(1)
    console.log(2)
  }).then(res => {
    console.log(res)
  })

  // 2
  // 1

  // 示例中，调用resolve(1)以后，后面的console.log(2)还是执行了，并且会先执行。resolved 回调函数是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务
}

{
  // 通常，调用 resolve 或 reject以后，Promise的使命就完成了，后续操作应该放在then方法里面，而不要直接写在resolve或reject的后面

  // 在resolve或reject前面加上return
  new Promise((resolve, reject) => {
    return resolve(1)
    console.log(2)
  }).then(res => {
    console.log(res)
  })
  // 1

  // 后续操作放在then方法里
  new Promise((resolve, reject) => {
    resolve(2)
  }).then(res => {
    console.log(res)
    console.log(1)
  })

  // 2
  // 1
}


*/

{
  // 2、resolve和reject函数的参数会被分别传递给回调函数，reject函数的参数通常是Error对象的实例，表示抛出错误；resolve函数的参数除了正常值以外，还可能是另一个Promise实例
  let p1 = new Promise(reject => {
    reject(new Error('P1 fail... ...'))
  })
  let p2 = new Promise(resolve => {
    resolve(p1)
  })

  p2.then(res => console.log(res))
    .catch(err => console.log(err))
  
  // Error: P1 fail... ...
}

{
  // 异步加载图片的例子
  function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
      let image = new Image()

      image.onload = function() {
        resolve(url)
      }

      image.onerror = function() {
        reject(new Error(`can't find the image: ${url}`))
      }

      image.src = url
      document.body.appendChild(image)

    })
  }

  loadImageAsync('https://www.baidu.com/img/xinshouye_c9d9de2ff40fa160f807f75f34db4ad0.gif')
}