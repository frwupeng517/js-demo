// 构造函数
function Student(name) {
  this.name = name
  this.hello = function() {
    console.log('Hello ' + this.name)
  }
}

var xiaoming = new Student('小明')
console.log(xiaoming.name)     // 小明
xiaoming.hello()               // Hello 小明

console.log(Student.prototype.constructor)
console.log(xiaoming.constructor)
console.log(Student)

/*
  // 以上3个的输出结果
  ƒ Student(name) {
    this.name = name
    this.hello = function() {
      console.log('Hello ' + this.name)
    }
  }
*/



console.log(Student.prototype.constructor === Student)  // true

console.log(xiaoming instanceof Student)                // true