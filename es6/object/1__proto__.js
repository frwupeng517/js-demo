{
  let obj = {
    name: 'Kobe',
    age: 40
  }

  obj.__proto__.say = function() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old`)
  }

  obj.say()        // My name is Kobe, I'm 40 years old
}