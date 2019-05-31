var o1 = [1,2,3]
var o2 = {a: 1}
var o3 = function(){return 1}
var o4 = new Date()

console.log(o1 instanceof Array)       // true
console.log(typeof o1)                 // object
console.log(o2 instanceof Object)      // true
console.log(typeof o3)                 // function
console.log(o3 instanceof Function)    // true
console.log(o4 instanceof Date)        // true