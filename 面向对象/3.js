/*
  3、创建对象
  面向对象的编程语言都有类的概念，通过类可以创建任意多个具有相同属性和方法的对象

  // 例如：Java中定义一个Student类
  public class Student {
	
    private String name; // 姓名
    private int age; // 年龄

    public Student(String name, int age) { //构造器
      super();
      this.name = name;
      this.age = age;
    }
    
    // 属性的getter和setter方法
    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public int getAge() {
      return age;
    }

    public void setAge(int age) {
      this.age = age;
    }
    
    // 自定义方法
    public void say() {
      System.out.println("姓名：" + this.name + "年龄：" + this.age);
    }

  }

  // 通过Student类来创建实例对象
  Student xiaoMing = new Student("XiaoMing", 12);
  Student xiaoHong = new Student("XiaoHong", 9);
  
  xiaoMing.say();   // 姓名：XiaoMing年龄：12
  xiaoHong.say();   // 姓名：XiaoHong年龄：9

  如果是通过JS来创建两个学生对象，可以用对象字面量或者Object构造函数创建单个的对象：
  var xiaoMing = {
    name: "XiaoMing",
    age: 12
  };
  var XiaoHong = {
    name: "XiaoHong",
    age: 9
  }
  这么做有两个明显的弊端，一是重复的代码太多，如果一个班级有60名学生，就要重复60次；二是可读性差，只知道是个对象，到底是个什么对象，学生的集合，人的集合还是其它？

  （1）、工厂模式
  用函数来封装以特定接口创建对象的细节
  function createStudent(name, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.say = function() {
      console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    };
    return obj;
  }

  var xiaoMing = createStudent('XiaoMing', 12);
  var xiaoHong = createStudent('XiaoHong', 8);
  xiaoMing.say();     // My name is XiaoMing, I'm 12 years old.
  xiaoHong.say();     // My name is XiaoHong, I'm 8 years old.

  弊端：这样做虽然很好的解决了代码重复的问题，但还是不知道创建的到底是个什么类型的对象

  （2）、构造函数模式
  使用自定义构造函数来定义对象类型的属性和方法，通常为了区别于普通函数，会将构造函数的首字母大写

  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
      console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    };
  }

  var xiaoMing = new Student('XiaoMing', 12);
  var xiaoHong = new Student('XiaoHong', 8);
  xiaoMing.say();     // My name is XiaoMing, I'm 12 years old.
  xiaoHong.say();     // My name is XiaoHong, I'm 8 years old.

  与工厂模式相比，有以下几个不同的地方：
  -、没有显示的创建对象
  -、直接将属性和方法赋给了this对象
  -、没有return语句

  使用new操作符创建自定义对象，主要经历了4个步骤：
  -、创建一个新对象
  -、将this指向新对象
  -、为新对象添加属性
  -、返回新对象

  对象都有一个constructor属性用于标识对象的类型，该属性指向创建对象的构造函数

  console.log(xiaoMing.constructor)

  // ƒ Student(name, age) {
  //   this.name = name;
  //   this.age = age;
  //   this.say = function() {
  //     console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  //   };
  // }

  console.log(xiaoMing.constructor == Student)                  // true
  console.log(xiaoMing.constructor == xiaoHong.constructor)     // true
  console.log(xiaoMing instanceof Student)                      // true
  console.log(xiaoMing instanceof Object)                       // true

  构造函数与普通函数的唯一区别，就在于调用方式。任何函数，只要使用new操作符来调用就可以作为构造函数，如果不通过new操作符来调用，那就是普通函数

  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
      console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    };
  }

  // 将Student当作构造函数（this指向实例对象）
  var xiaoMing = new Student('XiaoMing', 12);   
  xiaoMing.say();     // My name is XiaoMing, I'm 12 years old.

  // 将Student当作普通函数（由于Student函数属于全局作用域，因此实际上是window.Student()，this指向window）
  Student('Bob', 9);
  say();              // My name is Bob, I'm 9 years old.

  // 在特定的作用域中调用函数（this指向obj）
  var obj = new Object();
  Student.call(obj, 'Ryan', 30);
  console.log(obj);       // {name: "Ryan", age: 30, say: ƒ}
  obj.say();              // My name is Ryan, I'm 30 years old.

  弊端：由于方法也是对象（如果对象的属性是一个函数就称之为方法），这就意味着每次实例化一个对象，都重新创建了一个对象
  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.say = new Function(`My name is ${this.name}, I'm ${this.age} years old.`);
  }

  为了解决这个问题，似乎可以把方法提出来
  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.say = say;
  }
  function say() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  }

  var xiaoHong = new Student('XiaoHong', 8);
  xiaoHong.say();       // My name is XiaoHong, I'm 8 years old.

  这样做的话同样存在问题，首先是封装性不太好，对象的某些属性必须依赖于全局的属性；其次，我们期望全局作用域内的函数say只能用于构造函数Student，这样就跟js的理念相冲突了

  （3）、原型模式
  每个函数都有一个prototype属性，prototype属性是一个指针，指向函数的原型对象，该对象包含所有实例对象共享的属性和方法
  function Student() {

  }
  Student.prototype.name = 'Bob';
  Student.prototype.age = 12;
  Student.prototype.say = function() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  }

  var xiaoMing = new Student();
  var xiaoHong = new Student();

  xiaoMing.say();   // My name is Bob, I'm 12 years old.
  xiaoHong.say();   // My name is Bob, I'm 12 years old.

  与构造模式不同的时，所有实例对象访问的都是相同的属性和同一个say方法

  对比prototype和constructor
  prototype：每个函数都有一个 prototype属性，指向一个原型对象
  constructor：每个对象都有一个 constructor属性，指向创建该对象的构造函数

  // 此处放图1
  
  通过构造函数创建的实例对象内部都包含一个指针（内部属性），指向构造函数的原型对象，这个指针就是[[Prototype]]。换句话说，实例对象与构造函数没有直接关系
  但是，脚本中没有标准的方式访问[[Prototype]]，一些现代浏览器中可以通过__proto__属性来访问

  __proto__属性是一个访问器属性，其中包含了getter（读取器）和 setter（设置器）
  getter：暴露了一个对象的内部[[Prototype]]，这个值就是构造器函数的prototype属性，如：Array.prototype, Object.prototype
  setter：允许对象的[[Prototype]]被更改

  // 此处放图2

  console.log(xiaoMing.__proto__);      // {name: "Bob", age: 12, say: ƒ, constructor: ƒ}
  console.log(xiaoMing.__proto__ === Student.prototype);  // true

  虽然无法直接访问 [[Prototype]] 属性，但可以通过 isPrototypeOf() 方法来测试一个对象是否存在于另一个对象的原型链上

  prototypeObj.isPrototypeOf(object)
  参数：在object对象的原型链上搜寻
  返回值：Boolean

  console.log(Student.prototype.isPrototypeOf(xiaoMing));   // true
  console.log(Student.prototype.isPrototypeOf(xiaoHong));   // true
  // 说明实例对象 xiaoMing和xiaoHong都存在于Student.prototype的原型链上
  

  尽管部分现代浏览器都实现了__proto__属性，但是该属性从未被包含在ECMA规范中，因此不推荐使用。

  从ES5开始，[[Prototype]] 可以通过 Object.getPrototypeOf() 访问器访问，用于返回指定对象的原型

  console.log(Object.getPrototypeOf(xiaoHong));  // {name: "Bob", age: 12, say: ƒ, constructor: ƒ}
  console.log(Object.getPrototypeOf(xiaoHong) === Student.prototype);   // true

  当为某个实例对象添加同名属性时，这个属性就会屏蔽掉原型对象中保存的同名属性，也就是说，如果实例对象自己有某个属性，就不会去它的原型对象上找

  xiaoMing.name = 'XiaoMing';

  console.log(xiaoMing.name);   // XiaoMing
  console.log(xiaoHong.name);   // Bob

  为了进一步对比，可以删除掉实例对象 xiaoMing 的属性name，然后再访问该属性

  delete xiaoMing.name;

  console.log(xiaoMing.name);   // Bob
  console.log(xiaoHong.name);   // Bob

  当前测试的是属性值是基本类型的情况，如果属性值是引用类型就不再屏蔽了

  function Student() {
    
  }
  Student.prototype = {
    name: 'Bob',
    age: 12,
    course: ['Chinese', 'Math']
  }

  var xiaoMing = new Student();
  var xiaoHong = new Student();

  xiaoMing.name = 'XiaoMing';
  console.log(xiaoMing.name);       // XiaoMing
  console.log(xiaoHong.name);       // Bob

  xiaoMing.course.push('English');
  console.log(xiaoMing.course);     // ["Chinese", "Math", "English"]
  console.log(xiaoHong.course);     // ["Chinese", "Math", "English"]


  如果需要判断一个属性是存在于实例对象中，还是原型对象中，可以使用 obj.hasOwnProperty(prop) 方法

  xiaoMing.name = 'XiaoMing';

  console.log(xiaoMing.hasOwnProperty('name'));   // true     --- 来自实例
  console.log(xiaoHong.hasOwnProperty('name'));   // false    --- 来自原型
  // 实例对象xiaoMing有自己的name属性，xiaoHong则没有 

  in操作符：只要通过对象能够访问到给定的属性（不管是对象自身的属性还是原型对象的属性），都返回true
  hasProperty()：只有属性存在于对象时才返回true

  xiaoMing.name = 'XiaoMing';

  console.log('name' in xiaoMing);                // true
  console.log(xiaoMing.hasOwnProperty('name'));   // true

  console.log('name' in xiaoHong);                // true
  console.log(xiaoHong.hasOwnProperty('name'));   // false

  因此，要判断一个属性是原型中的属性，只需要同时满足in返回true，hasOwnProperty()返回false即可

  xiaoMing.name = 'XiaoMing';

  // 判断一个属性仅存在于对象的原型中
  function checkPropertyInPrototype(Object, prop) {
    return (prop in Object) && !Object.hasOwnProperty(prop)
  }

  console.log(checkPropertyInPrototype(xiaoMing, 'name'));    // false
  console.log(checkPropertyInPrototype(xiaoHong, 'name'));    // true

  for-in 循环不仅会遍历对象自身的属性，还会遍历对象原型的属性（这里说的属性必须是可枚举的）

*/
  function Student() {

  }
  Student.prototype.name = 'Bob';
  Student.prototype.age = 12;
  Student.prototype.say = function() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  }

  var xiaoHong = new Student();
  xiaoHong.gender = 'female';

  for(var prop in xiaoHong) {
    console.log(prop +' --> '+ xiaoHong[prop]);
  }
  /*
  gender --> female
  name --> Bob
  age --> 12
  say --> function() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
  }
  */

  /*
    弊端：所有实例只能共享属性，无法通过构造函数初始化参数

    4、组合构造函数模式和原型模式
    这也是创建自定义类型的最常见方式，构造函数模式用于定义实例属性，原型模式用于定义方法和共有的属性
  */
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype = {
    say: function() {
      console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
    }
  }

  var xiaoMing = new Person('XiaoMing', 12);
  var xiaoHong = new Person('xiaoHong', 9);

  xiaoMing.say();     // My name is XiaoMing, I'm 12 years old.
  xiaoHong.say();     // My name is xiaoHong, I'm 9 years old.




  

  
  

  

  
  
  

  
  

  
  
  
  