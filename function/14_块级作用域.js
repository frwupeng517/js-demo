/*

function outputNumber(count) {
  for(var i = 0; i <count; i++) {
    console.log(i)
  }
  var i
  console.log(i)
}

outputNumber(5)

*/

function outputNumber(count) {
  (function() {
    for(var i = 0; i < count; i++) {
      console.log(i)
    }
  })()
  console.log(i)  // Uncaught ReferenceError: i is not defined
}

outputNumber(5)