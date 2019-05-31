/*
  与函数一样，类也可以使用表达式的形式定义

  下例中的类名是 MyClass 而不是 Me，Me 只在 Class的内部代码可用，指代当前类
*/


const MyClass = class Me {
  getClassName() {
    return Me.name
  }
}

let tmp = new MyClass()
console.log(tmp.getClassName())       // Me
console.log(Me.name)                  // Uncaught ReferenceError: Me is not defined

let test = new MyClass()