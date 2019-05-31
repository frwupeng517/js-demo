/*
  参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求职
*/
let x = 99
function foo(p = x+1){
  console.log(p)
}
foo()             // 100

x = 100
foo()             // 101