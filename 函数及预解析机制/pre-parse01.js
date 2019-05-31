/*
  预解析机制
    第一步：js运行时，会找所有的var和function关键字
      -、把所有var关键字声明的变量提升到各自作用域的顶部并赋初始值为undefined，简单说就是 “声明提前，赋值留在原地”
      -、函数声明提升
    第二步：从上至下逐行解析代码
*/

var color = 'red';
var size = 31;

function fn() {
  console.log(color);
  var color = 'blue';
  var size = 29;
}

fn();    // undefined

// 第一步：在全局作用域内查找所有使用var和function关键字声明的变量，把 color、size、fn 提升到全局作用域顶端并为其赋初始值；同理，在fn函数作用域内执行此操作
// 第二步：从上至下依次执行代码，调用fn函数时，按序执行代码，函数作用域内的输出语句中color此时仅赋初始值undefined 
