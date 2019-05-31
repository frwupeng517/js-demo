function Student(props) {
  this.name = props.name || 'Unamed'
}

Student.prototype.hello = function() {
  console.log(`Hello ${this.name}`)
}

// PrimaryStudent 构造函数
function PrimaryStudent(props) {
  Student.call(this, props)
  this.grade = props.grade || 1
}

// 空函数
function F() {}

// 让F的原型对象指向Student的原型对象
F.prototype = Student.prototype

// 把 PrimaryStudent 的原型指向一个新的实例对象F，F对象的原型正好指向Student对象的原型
PrimaryStudent.prototype = new F()

// console.log(PrimaryStudent.prototype.constructor)
/*
  // 由于F的原型对象指向了Student的原型对象，name，F的原型对象的构造函数也就变成了Student的原型对象的构造函数
  ƒ Student(props) {
    this.name = props.name || 'Unamed'
  }
*/

// 把 PrimaryStudent 原型的构造函数修复为 PrimaryStudent
PrimaryStudent.prototype.constructor = PrimaryStudent

// 在PrimaryStudent的原型对象上定义方法（其实，也就是F的原型对象）
PrimaryStudent.prototype.getGrade = function() {
  return this.grade
}


var xiaoming = new PrimaryStudent({
  name: '小明',
  grade: 5
})

xiaoming.hello()                   // Hello 小明
console.log(xiaoming.getGrade())   // 5