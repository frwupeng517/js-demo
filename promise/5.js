{
  Promise.resolve().then(()=>{
    console.log('1')
    setTimeout(()=>{
      console.log('2')
    },0)
  })

  setTimeout(()=>{
    console.log('3')
    Promise.resolve().then(()=>{
      console.log('4')
    })
  }, 3000)

  // 1 2 3 4


  // 1 3 4 2

  // 1 2 3 4   ---> 3000
}

{
  var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
  });
  setTimeout(()=>console.log("d"), 0)
  r.then(() => console.log("c"));
  console.log("b")

  // a b c d

}

{
  setTimeout(function(){console.log(4)},0); 
  
  new Promise(function(resolve){ 
    console.log(1) 
    for( var i=0 ; i<10000 ; i++ ){
      //  i==9999 && resolve() 
    } 
    console.log(2) 
  }).then(function(){ 
    console.log(5) 
  }); 
  console.log(3);

  // 1  2  3  4 

}

/*
还有一段在知乎上挺热闹的代码，有人不解为什么不是输出 1 2 3 4 5，其实按照上面的分析步骤就完全可以解释这个问题
另外一个会让人感到迷惑的地方就是 resolve回调函数内部的那几行代码，输出1以后接着跑1000次循环才调用resolve方法，其实resolve()的意思是把 Promise对象实例的状态从pending变成 fulfilled（即成功）
成功的回调就是对应的then方法。所以resolve() 后面的 console.log(2) 会先执行，因为 resolve() 回调函数是在本轮事件循环的末尾执行

同理，如果把代码中的 resolve() 去掉，也就是说 Promise 实例的状态一直保持在pending，就永远不会输出5了
*/