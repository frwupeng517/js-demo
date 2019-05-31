/*
  4-2、借用构造函数
  用于解决原型中包含引用类型值所带来的的问题
  基本思想是在子类型构造函数中调用父类型的构造函数，通过call()或apply()方法在（将来）新创建的对象上执行构造函数

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
      console.log(`My name is ${this.name}, I'm ${this.age} years old`)
    }
  }

  function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
  }
  function Teacher(name, age, height) {
    Person.apply(this, [name, age]);
    this.height = height;
  }

  var student = new Student("Jim", 9, 4);
  var teacher = new Teacher('Mr Lee', 33, 1.75);

  student.say();  // My name is Jim, I'm 9 years old
  teacher.say();  // My name is Mr Lee, I'm 33 years old

  通过这种方式，子类型不仅可以继承父类型，还可以向父类型构造函数传递参数

  如何解决原型中包含引用类型值带来的问题？

  function Person() {
    this.course = ['chinese', 'math'];
  }
  function Student() {
    Person.call(this);
  }

  var s1 = new Student();

  console.log(s1.course);       // ["chinese", "math"]
  s1.course.push('english');
  console.log(s1.course);       // ["chinese", "math", "english"]

  var s2 = new Student();
  console.log(s2.course);       // ["chinese", "math"]

  利用call方法将this绑定到了实例对象，所以即便修改了引用类型的值，也只是在实例对象的作用域范围内，不影响其他实例

  弊端：方法都在构造函数中定义，如果在父类型的原型对象中定义方法，对子类型还是不可见的

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.say = function() {
    console.log(`My name is ${this.name}`);
  }

  function Student(name, age) {
    Person.call(this, name, age);
  }

  var s = new Student("Jim", 2);
  s.say();     // Uncaught TypeError: s.say is not a function
*/
  
  
  