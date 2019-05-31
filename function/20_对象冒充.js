/*
  对象冒充：是指将父类的属性和方法一起传给子类作为特权属性和特权方法
*/

function Person(name, age) {
  this.name = name
  this.age = age
  this.say = function() {
    console.log('hello')
  }
}

Person.prototype.walk = function() { // 此方法没有继承，用 s.walk() 调用报错
  console.log('walk...')
}

function Son(name, age, grade) {
  this.newMethod = Person
  this.newMethod(name, age)
  delete this.newMethod
  this.grade = grade
}

var s = new Son('xiaoming', 8, 3)
console.log(s.say())           // hello
//console.log(s.walk())          // Uncaught TypeError: s.walk is not a function

// Son类只继承了Person类的特权属性和方法，并没有继承Person类的共用属性和方法