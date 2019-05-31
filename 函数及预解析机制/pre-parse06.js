var a = 1;
function fn() {
  console.log(a);
  var a = 2;
}
fn();            // undefined
console.log(a);  // 1

// 对比两段代码，唯一的区别就是fn函数内的变量a的作用域问题，前者属于函数作用域，后者属于全局作用域，所以导致输出结果完全不同


var a = 1;
function fn() {
  console.log(a);
  a = 2;
}
fn();            // 1
console.log(a);  // 2