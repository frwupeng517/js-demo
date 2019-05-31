/*
  JS中的对象定义为：无序属性的结合，其属性可以包含基本值、对象或者函数

  1、定义对象的方式
  （1）、Object构造函数
  var student = new Object();
  student.name = 'Jim Green';
  student.gender = 'Male';
  student.age = 8;
  student.say = function() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old`);
  }

  student.say();      // My name is Jim Green, I'm 8 years old
  
  （2）、对象字面量
  var student = {
    name: 'Jim Green',
    gender: 'Male',
    age: 8,
    say: function() {
      console.log(`My name is ${this.name}`)
    }
  }

  student.say();    // My name is Jim Green
*/
  

