function foo (x, y) {
  y = y || 'world'
  console.log(x, y)   
}

foo('hello')                // hello world
foo('hello', '')            // hello world
foo('hello', 'roger')       // hello roger
foo('hello', false)         // hello world
foo('hello', undefined)     // hello world

/*
上例中，给y赋值为空字符串，false，undefined时，赋值无效

*/

console.log('-------------------------------------------------------')

function test (x, y = 'world') {
  console.log(`es6 参数默认值: ${x}, ${y}`)
}

test('hello')                 // es6 参数默认值: hello, world
test('hello', false)          // es6 参数默认值: hello, false
test('hello', '')             // es6 参数默认值: hello, 
test('hello', undefined)      // es6 参数默认值: hello, world
test('hello', null)           // es6 参数默认值: hello, null

console.log('-------------------------------------------------------')

/*
function foo(x=5, x, y) {
  // let x = 1;
  // console.log(x)   // Uncaught SyntaxError: Identifier 'x' has already been declared


  console.log(x, x, y)
}

// foo(5,6,7)     // Uncaught SyntaxError: Duplicate parameter name not allowed in this context

*/

let x = 'test'
function bar(x, y=x){
  console.log(x, y)
}
bar('kill')      // kill kill