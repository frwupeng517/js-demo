/*
  子类必须在 constructor 方法中调用 super 关键字，否则新建实例时会报错
  如果不调用super方法，子类就得不到this对象


  如果子类没有定义 constructor 方法，这个方法会被默认添加


  另外，在子类的构造函数中，只有调用 super 之后，才可以使用 this 关键字，否则会报错
*/
class Point {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  toString() {
    return `x: ${this.x}, y: ${this.y}`
  }
}


class ColorPoint extends Point {

  constructor(x, y, color) {
    super(x,y) // 调用父类的 constructor(x, y)
    this.color = color
  }

  toString() {
    return this.color + super.toString()   // 调用父类的 toString() 方法
  }

}

let cp = new ColorPoint('apple', 'tomato', 'red')
console.log(cp.toString())                            // redx: apple, y: tomato

