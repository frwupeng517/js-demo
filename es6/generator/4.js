/*
  假定某公司的年会上有一个抽奖活动，总共6个人可以抽6次，每抽一次，抽奖机会就会递减
  按照常规做法就需要声明一个全局的变量来保存剩余的可抽奖次数，而全局变量会造成全局污染，指不定什么时候就被重新赋值了，所以往往并不被大家推荐

  事实上，抽奖通常是每个人自己来抽，每抽一次就调用一次抽奖方法，而不是点一次就一次性就全部运行完，是可暂停的，这个不就是 Generator 函数的意义所在吗？
*/
/*
{
  let count = 6  // 声明一个全局变量

  // 具体抽奖逻辑的方法
  function draw() {
    // 执行一段抽奖逻辑
    // ...
    // 执行完毕

    console.log(`剩余${count}次`)
  }

  // 执行抽奖的方法
  function startDrawing(){
    if(count > 0) {
      count--
      draw(count)
    }
  }


  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '开始抽奖'
  document.body.appendChild(btn)

  document.getElementById('start').addEventListener('click', function(){
    startDrawing()
  }, false)

}
*/
{
  // 具体抽奖逻辑的方法
  function draw(count) {
    // 执行一段抽奖逻辑
    // ...

    console.log(`剩余${count}次`)
  }

  // 执行抽奖的方法
  function* remain(count) {
    while(count > 0) {
      count--
      yield draw(count)
    }
  }

  let startDrawing = remain(6)

  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '开始抽奖'
  document.body.appendChild(btn)

  document.getElementById('start').addEventListener('click', function(){
    startDrawing.next()
  }, false)
}

