function Student(props) {
  this.name = props.name
}

Student.prototype.hello = function() {
  console.log(`Hello ${this.name}`)
}

function PrimaryStudent(props) {
  Student.call(this, props)
  this.grade = props.grade
}

// 创建一个新的空函数F
function F(){}

// 让F的原型对象指向Student的原型对象
F.prototype = Student.prototype

// 让PrimaryStudent的原型对象指向F的实例对象
PrimaryStudent.prototype = new F()

// 把PrimaryStudent的原型对象的构造函数修复为PrimaryStudent，当前是Student
PrimaryStudent.prototype.constructor = PrimaryStudent

// 在PrimaryStudent的原型对象上在添加一个方法 ---> 加不加无所谓
PrimaryStudent.prototype.getGrade = function() {
  console.log(`I'm in Grade ${this.grade}`)
}

var roger = new PrimaryStudent({
  name: 'Roger',
  grade: 2
})

// 自己的原型对象上的方法
roger.getGrade()           // I'm in Grade 2

// 继承自Student的原型对象的方法
roger.hello()              // Hello Roger