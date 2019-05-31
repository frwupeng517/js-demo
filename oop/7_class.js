class Student {
  constructor(name) {
    this.name = name
  }
  hello() {
    console.log(`Hello ${this.name}`)
  }
}

class PrimaryStudent extends Student {
  constructor(name, grade) {
    super(name)
    this.grade = grade
  }
  getGrade() {
    console.log(`I'm in Grade ${this.grade}`)
  }
}

var xiaoming = new PrimaryStudent('小明', 3)

xiaoming.getGrade()   // I'm in Grade 3
xiaoming.hello()      // Hello 小明