/*
  4-2、组合继承
  就是将原型链和借用构造函数两种方法组合在一起实现继承，这也是JS中最常用的继承模式
  思路：使用原型链实现对原型属性和方法的继承，通过借用构造函数实现对实例属性的继承

  
*/
  function Person(name) {
    this.name = name;
    this.course = ['chinese', 'math'];
  }
  Person.prototype.say = function() {
    console.log(`My name is ${this.name}`);
  }

  function Student(name, age) {
    Person.call(this, name);     // 继承实例属性
    this.age = age;
  }

  // 继承原型属性和方法
  Student.prototype = new Person();

  // 添加子类方法
  Student.prototype.sayAge = function() {
    console.log(`I'm ${this.age} years old`);
  }

  // 重写父类方法
  Student.prototype.say = function() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old`);
  }

  var s1 = new Student('Bob', 8);

  // 修改引用类型值的属性
  s1.course.push('english');

  s1.sayAge();                  // I'm 8 years old
  s1.say();                     // My name is Bob, I'm 8 years old
  console.log(s1.course);       // ["chinese", "math", "english"]

  var s2 = new Student('Jim', 11);
  console.log(s2.course);       // ["chinese", "math"]
  
  