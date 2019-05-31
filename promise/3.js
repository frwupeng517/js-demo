{
  // 通过 Promise对象来实现类似的求和方法
  function add(promiseX, promiseY) {
    return Promise.all([promiseX, promiseY]).then(values => {
      return values[0] + values[1]
    })
  }
  console.log('2秒以后查看x+y求和的结果')
  add(fetchX(), fetchY()).then(sum => {
    console.log('x + y 的和为：' + sum)      // x + y 的和为：3
  })

  function fetchX() {
    return new Promise(resolve => {
      resolve(1)
    }).then(res => {
      return res
    })
  }

  function fetchY() {
    return new Promise(resolve => {
      setTimeout(resolve, 2000, 2)
    }).then(res => {
      return res
    })
  }

}



/*
{
  // 日常开发中，可能会遇到一个函数的参数依赖于其它函数的返回值，如果其它函数的返回值不能先于执行该函数前返回，就不会得到我们预期的结果
  // 此例中，执行add函数时，传入的getValueX方法直接返回2，而getValueY方法存在1秒钟的延时，当前拿不到返回值，最终导致求和失败 
  function add(valueX, valueY) {
    console.log(valueX + valueY)  
  }

  add(getValueX(), getValueY())   // NaN  (valueX -> 2, valueY -> undefined)

  function getValueX() {
    return 2
  }

  // 模仿一个异步请求，1秒后返回数字3
  function getValueY() {
    setTimeout(() => {
      return 3
    }, 1000)
  }
}
*/
