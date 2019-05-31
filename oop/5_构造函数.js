function Student(props) {
  this.name = props.name || '匿名',
  this.grade = props.grade || 1
}

Student.prototype.hello = function() {
  console.log(`My name is ${this.name}, I'm in Grade ${this.grade}`)
}

function createStudent(props) {
  return new Student(props || {})
}

var xiaoming = new Student('小明')
xiaoming.hello()      // My name is 匿名, I'm in Grade 1