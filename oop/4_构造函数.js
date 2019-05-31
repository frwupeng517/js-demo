function Student(name) {
  this.name = name
}

Student.prototype.hello = function() {
  console.log('Hello ' + this.name)
}

var xiaoming = new Student('小明')
var xiaohong = new Student('小红')

xiaoming.hello()  // Hello 小明
xiaohong.hello()  // Hello 小红