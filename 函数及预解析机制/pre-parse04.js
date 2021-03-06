var a = 1;
function fn(a) {
  console.log(a);     // 999
  a = 2;
  console.log(a)      // 2
}
fn(999);
console.log(a);       // 1

/*
  预解析步骤：
  （1）、全局作用域内，为a赋值为undefined，把函数fn提升到最前面；fn函数作用域内，函数参数在预解析时也视同局部变量，为其赋初始值 undefined
  （2）、执行fn函数，传入实参999，为局部变量a赋值为999并输出；重新为a赋值为2，输出2
  （3）、由于全局作用域下的a被赋值为1，而函数作用域内部的a是访问不到的，因此直接输出1
*/