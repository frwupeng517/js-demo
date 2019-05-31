console.log(a);        // function a() {console.log(4);}

var a = 1;

console.log(a);       // 1

function a() {
  console.log(2);
}

console.log(a);       // 1

var a = 3;

console.log(a);       // 3

function a() {
  console.log(4);
}

console.log(a);       // 3

a();                  // 报错：不是一个函数

/*
  预解析步骤：
  （1）、找出当前相同作用域下所有使用var和function关键字声明的变量，由于所有变量都是同名变量，按照规则，权值最高的是最后一个声明的同名的function，所以第一行输出 function a() {console.log(4);}
  （2）、从上至下逐步执行代码，在第二行为变量a 赋值为1，因此输出了一个1
  （3）、执行到第一个函数a，由于没有调用，直接跳过不会输出里面的2，执行到下一行输出1
  （4）、继续执行，为a重新赋值为3，因此输出了一个3
  （5）、执行到第二个函数a，还是没有调用，直接跳过不会输出里面的4，执行到下一行输出3
  （6）、最后一行调用函数a，但由于预解析时率先把a赋值为一个函数代码段，后面依次为a赋值为1和3，因此，a是一个Number类型的基本变量，而不是一个函数了
*/