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
  },0)
}
