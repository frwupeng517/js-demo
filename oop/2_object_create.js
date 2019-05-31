/*
  Object.create() 方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有
*/

// 原型对象
var Student = {
  name: 'student',
  age: 12,
  run: function() {
    console.log(this.name + ' is running...')
  }
}

function createStudent(name) {
  // 基于Student 原型创建一个对象
  var s = Object.create(Student)

  // 初始化新对象
  s.name = name
  return s
}

var xiaoming = createStudent('Xiao Ming')
xiaoming.run()                              // Xiao Ming is running...
console.log(xiaoming.__proto__ == Student)  // true