/*
  4、继承
  JS中的继承主要是依靠原型链来实现的

  4-1、原型链
  简单回顾一下构造函数、原型和实例的关系
  （1）、每个构造函数都包含一个prototype属性指向原型对象
  （2）、每个原型对象都包含一个constructor指针指向构造函数
  （3）、每个实例都包含一个[[prototype]]指针指向原型对象

  原型链的基本思想就是利用原型，让一个引用类型继承另一个引用类型的属性和方法

  具体说就是让原型对象等于另一个类型的实例，由于该实例包含指向其原型对象的指针，因此，此时的原型对象也包含了另一个原型对象的指针。层层向上直到一个对象的原型对象是null。根据定义，null没有原型，并作为原型链中的最后一个环节

  function Person() {
    
  }
  Person.prototype = {
    leg: 4,
    ear: 2
  }

  function Student() {
    
  }

  // 让Student的原型对象等于Person的实例，因此Student的原型对象也包含了指向Person的原型对象的指针
  Student.prototype = new Person();

  // 给Student的原型对象添加方法
  Student.prototype.say = function() {
    console.log(`I have ${this.ear} ears and ${this.leg} legs.`);
  }

  var student = new Student();
  student.say();   // I have 2 ears and 4 legs. 
  console.log(student.toString());  // [object Object]

  console.log(Object.getPrototypeOf(student) === Student.prototype);  // true (student实例的原型对象就是Student.prototype)
  console.log(Person.prototype.isPrototypeOf(student));               // true （student实例存在于Person对象的原型链上）
  console.log(student instanceof Person);                             // true （student就是Person对象的实例）
  console.log(student.hello());                                       // Uncaught TypeError: student.hello is not a function

  // 图3

  图中所示，红色的粗线条代表的就是原型链，绿色细线条代表是构造函数与其原型对象之间的关联
  执行 student.say()，student实例自己没有say方法，于是沿着原型链在它的原型对象是找到了，但是该原型对象中并没有ear和leg属性，由于该原型对象包含了指向Person原型对象的指针，因此，继续沿着原型链向上查找，在Person的原型对象上找到了ear和leg属性
  执行 student.toString()，student实例没有提供该方法，于是沿着原型链逐级向上查找，由于所有引用类型都继承自Object，最终在Object的原型对象上找到了
  执行 student.hello()，student实例没有提供该方法，沿着原型链逐级向上查找，都没有找到该方法，因此会报错


  注意：
  （1）、通过原型链实现继承时，不能使用对象字面量创建原型方法，否则会重写原型链

  function Person() {
      
  }
  Person.prototype = {
    say: function() {
      console.log('hello world');
    }
  }

  function Student() {
    
  }

  // 让Student的原型对象等于Person的实例，因此Student的原型对象也包含了指向Person的原型对象的指针
  Student.prototype = new Person();

  // 使用对象字面量给Student创建原型方法
  Student.prototype = {
    class: 2,
    grade: 1
  }

  var student = new Student();
  student.say();                // Uncaught TypeError: student.say is not a function
  
  // 图4
  此例中，先是把Person的实例赋值给Student的原型对象，构建出了一条图中红色粗线部分显示的原型链。然后，使用对象字面量的方法使得Student的原型对象指向了一个实例对象，切断了原来的原型链，重新构建出图中蓝色粗线部分的原型链，自然就找不到say方法了

  （2）、给原型添加方法的代码一定要放在替换原型的语句之后。如子类型重写父类型中的某个方法，或在子类型中添加一个父类型中不存在的方法

  function Person() {
      
  }
  Person.prototype = {
    say: function() {
      console.log('hello world');
    }
  }

  function Student() {
    
  }

  // 让Student继承Person
  Student.prototype = new Person();

  // 子类型重写父类型中的方法
  Student.prototype.say = function() {
    console.log(`I'm Iron man`)
  }

  // 子类型中添加一个父类型中不存在的方法
  Student.prototype.walk = function() {
    console.log('walk with legs')
  }

  var student = new Student();

  student.say();                // I'm Iron man
  student.walk();               // walk with legs

  // 图5
  首先确定了Student继承Person这一继承关系，Student原型对象可以读取到Person原型对象中的say方法，然后为Student原型对象添加的重写和新方法，会覆盖掉原来的say方法

  function Person() {
      
  }
  Person.prototype = {
    say: function() {
      console.log('hello world');
    }
  }

  function Student() {
    
  }

  // 子类型重写父类型中的方法
  Student.prototype.say = function() {
    console.log(`I'm Iron man`)
  }

  // 子类型中添加一个父类型中不存在的方法
  Student.prototype.walk = function() {
    console.log('walk with legs')
  }

  // 让Student继承Person
  Student.prototype = new Person();

  var student = new Student();
  

  console.log(Person.prototype.isPrototypeOf(student));  // true
  student.say();                // hello world
  student.walk();               // Uncaught TypeError: student.walk is not a function

  与前面唯一的区别就是继承关系是在Student原型对象添加方法之后确定的，尽管student实例和Person的原型对象依然在同一条原型链上，但是会用Person原型对象中的属性和方法覆盖掉Student原型对象中的属性和方法，导致输出和前面的不一样

  原型链弊端：
  （1）、针对属性值是引用类型的情况，当某一个实例对象改变该共享属性时，其它实例也会随之改变

  function Person() {
    this.course = ['chinese', 'math'];
  }
  function Student() {

  }
  Student.prototype = new Person();

  var student1 = new Student();

  console.log(student1.course);      // ["chinese", "math"]

  student1.course.push('english');
  var student2 = new Student();
  console.log(student2.course);      // ["chinese", "math", "english"]

  （2）、创建子类型的实例时，不能向父类型的构造函数中传递参数。实际上就是一旦给父类型的构造函数传递参数，就会影响所有的实例对象

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Student() {

  }
  // 此处调用父类型的构造函数是需要传参的
  Student.prototype = new Person('Bob', 12); 

  var s1 = new Student();
  var s2 = new Student();

  console.log(s1.name);     // Bob
  console.log(s2.name);     // Bob

*/
  


  

  
  


