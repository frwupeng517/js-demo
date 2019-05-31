/*
  2、属性类型
  Object.defineProperty()方法：用于修改对象属性的默认特性
  这个方法接收三个参数：属性所在的对象，属性的名字和一个描述符对象。其中，描述符对象必须是以下两种之一（不能同时是两者）
  （1）、数据属性
  数据属性包含一个数据值的位置，在这个位置可以读取和写入值
  configurable：默认值为true。表示能否通过delete删除该属性，能否修改属性的特性，或者能否把属性修改为访问器属性
  enumerable：默认值为true。表示能否通过 for-in 循环返回属性
  writable：默认值为true。表示能否修改属性值
  value：默认值为undefined。包含这个属性的属性值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置

  var person = {
    age: 8,
    gender: 'male'
  };
  Object.defineProperty(person, "name", {
    enumerable: false,
    value: "Roger"
  });
  for(var key in person) {
    console.log(`key --> ${key}, value --> ${person[key]}`);
  }
  // key --> age, value --> 8
  // key --> gender, value --> male

  // "use strict"
  var person = {};
  Object.defineProperty(person, "name", {
    writable: false,
    value: "Roger"
  })
  console.log(person.name);       // Roger
  person.name = "Frank";
  console.log(person.name);       // Roger (Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>')

  // 通过修改name属性的writable将其变为只读属性，非严格模式下修改该属性无效，赋值操作被忽略；严格模式下会报错

  // "use strict";
  var person = {};
  Object.defineProperty(person, "name", {
    configurable: false,
    writable: true,
    value: "Roger"
  });
  console.log(person.name);       // Roger
  delete person.name;
  console.log(person.name);       // Roger    (configurable属性为false时，返回undefined)
  // Uncaught TypeError: Cannot delete property 'name' of #<Object> (严格模式下报错)

  注意：
  调用Object.defineProperty()方法时，如果不指定，configurable、enumerable和writable特性的默认值就都是false
  一旦把属性定义为不可配置的（configurable为false），就不能再把它设为可配置了。此时，再修改除 writable之外的特性，都会导致报错
  var person = {};
  Object.defineProperty(person, "name", {
    configurable: true,
    value: "Roger"
  });
  person.name = "Frank";
  console.log(person.name);                // Roger

  Object.defineProperty(person, "name", {
    writable: true,
    value: "Roger"
  });

  person.name = "Kobe";                   
  console.log(person.name);                // Kobe


  var person = {};
  Object.defineProperty(person, "name", {
    configurable: false,
    value: "Roger"
  });
  person.name = "Frank";
  console.log(person.name);                // Roger

  Object.defineProperty(person, "name", {  // Uncaught TypeError: Cannot redefine property: name
    writable: true,
    value: "Roger"
  });

  person.name = "Kobe";                   
  console.log(person.name);  

  （2）、访问器属性
  访问器属性不包含数据值，它们包含一对getter和setter函数（非必需）。共包含4个特性：
  configurable：默认值为true；表示能否通过delete删除属性，能否修改属性的特性，或者能否把属性修改为数据属性
  enumerable：默认值为true；表示能否通过for-in循环此属性
  get：默认值为undefined；在读取属性时调用函数
  set：默认值为undefined；在写入属性时调用函数

  var person = {
    name: 'Kobe',
    _number: 8
  }

  Object.defineProperty(person, 'number', {
    get: function() {
      return this._number;
    },
    set: function(newValue) {
      if(newValue > 8) {
        this._number = 24;
      }
    }
  })

  person.number = 9;
  console.log(person._number);          // 24

  
  Object.defineProperties() 方法：可以通过描述符一次定义多个属性，这个方法接收两个对象参数
  第一个对象是要添加和修改其属性的对象
  第二个对象与第一个对象中要添加或修改的属性一一对应

  var book = {};
  Object.defineProperties(book, {
    _year: {
      writable: true,
      value: 8
    },
    year: {
      get: function() {
        return this._year;
      },
      set: function(newValue) {
        if(newValue > 8) {
          alert('111')
          this._year = 24;
        }
      }
    }
  })
  console.log(book);    // {_year: 8}
  book.year = 9;
  console.log(book);    // {_year: 24}


  Object.getOwnPropertyDescriptor() 方法用于读取给定属性的描述符，这个方法接收两个参数：属性所在的对象和要读取其描述符的属性名称，返回值是一个对象。
  如果是访问器属性，这个对象包含 configurable, enumerable, get, set；
  如果是数据属性，这个对象包含 
*/
  var book = {};
  Object.defineProperties(book, {
    _year: {
      writable: true,
      value: 8
    },
    year: {
      get: function() {
        return this._year;
      },
      set: function(newValue) {
        if(newValue > 8) {
          alert('111')
          this._year = 24;
        }
      }
    }
  });

  var obj1 = Object.getOwnPropertyDescriptor(book, '_year');
  var obj2 = Object.getOwnPropertyDescriptor(book, 'year');

  console.log(obj1);   // {value: 8, writable: true, enumerable: false, configurable: false}
  console.log(obj2);   // {get: ƒ, set: ƒ, enumerable: false, configurable: false}
  
  
 
             
  
  