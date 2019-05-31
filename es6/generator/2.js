// {
//   function foo() {
//     console.log('hello world')    
//   }

//   setTimeout(foo, 2000)
// }

// {
//   function* f() {
//     console.log('执行了！')
//   }
  
//   var generator = f();
  
//   setTimeout(function () {
//     generator.next()
//   }, 2000);
// }

/*
  
*/



{
  function* gen() {
    yield
    yield
    return 'ending'
  }

  let it = gen()

  console.info(it.next())   // {value: undefined, done: false}
  console.info(it.next(666))
  console.info(it.next())   // {value: "ending", done: true}
}


{
  let obj = {}

  obj[Symbol.iterator] = function* (){
    yield 1
    yield 2
    yield 3
  }

  for(let value of obj) {
    console.info('value', value)
  }
}



{
  function* generator() {
    let result = yield 3
    yield result
  }

  let iterator = generator()

  console.info( iterator.next() )   // {value: 3, done: false}
  console.info( iterator.next() )   // {value: undefined, done: false}
}

{
  function* generator() {
    let result = yield 3
    yield result
    yield result
  }

  let iterator = generator()

  console.info( iterator.next() )   // {value: 3, done: false}
  console.info( iterator.next(2) )  // {value: 2, done: false}
  console.info( iterator.next() )   // {value: 2, done: false}
}

{
  function* generator() {
    let result = yield 3
    yield result
    result = 8
    yield result
  }

  let iterator = generator()

  console.info( iterator.next() )    // {value: 3, done: false}
  console.info( iterator.next(2) )   // {value: 2, done: false}
  console.info( iterator.next() )    // {value: 8, done: false}
}