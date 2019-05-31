
let dan = new class{
  constructor(name) {
    this.name = name
  }

  sayHello() {
    return `My name is ${this.name}`
  }
}('Dan')

console.log(dan.sayHello())                 // My name is Dan