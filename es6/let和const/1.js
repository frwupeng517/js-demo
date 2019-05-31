
function test(){
  for (var i = 0; i < 3; i++) {
    console.log(i)
  }
  console.log(i)
}

test()       // 0 1 2 3

function foo() {
  for (let i = 0; i < 3; i++) {
    console.log(i)   // 0 1 2
  }
  console.log(i)     // Uncaught ReferenceError: i is not defined
}

foo()