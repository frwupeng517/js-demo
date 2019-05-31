/*
  static 静态方法不会被实例继承，而是直接通过类来调用
*/
class Foo {
  static classMethod() {
    return 'hello'
  }
}

console.log(Foo.classMethod())          //  hello

let foo = new Foo()
// foo.classMethod()                       // Uncaught TypeError: foo.classMethod is not a function


/*
  注意，如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例
*/

class Bar {
  static foo() {
    this.baz()
  }
  static baz() {
    console.log('static')
  }
  baz() {
    console.log('not static')
  }
}

Bar.foo()                       // static