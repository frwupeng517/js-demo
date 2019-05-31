/*
  应用二：由于HTTP是一种无状态协议，执行一次请求后服务器无法记住是从哪个客户端发起的请求，因此当需要实时把服务器数据更新到客户端时通常采用的方法是长轮询和Websocket。
  这里也可以用 Generator 函数来实现长轮询
*/

{
  // 请求的方法
  function* ajax() {
    yield new Promise((resolve, reject) => {
      // 此处用一个定时器来模拟请求数据的耗时，并约定当返回的json中code为0表示有新数据更新
      setTimeout(() => {
        resolve({code: 0})
      }, 200)
    })
  }

  // 长轮询的方法
  function update() {
    let promise = ajax().next().value    // 返回的对象的value属性是一个 Promise 实例对象
    promise.then(res => {
      if(res.code != 0) {
        setTimeout(() => {
          console.log('2秒后继续查询.....')
          update()
        }, 2000)
      } else{
        console.log(res)
      }
    })
  }

  update()
}