var Student = {
  name: 'robot',
  age: 12,
  run: function() {
    console.log(this.name + 'is running...')
  }
}

var xiaoming = {
  name: 'xiaoming'
}

xiaoming.__proto__ = Student

xiaoming.run();  // xiaomingis running...


/*
  所谓继承关系就是把一个对象的原型指向另一个对象
*/

var Bird = {
  name: 'robot',
  run: function() {
    console.log(this.name + 'is flying...')
  }
}

xiaoming.__proto__ = Bird

xiaoming.run()  // xiaomingis flying...