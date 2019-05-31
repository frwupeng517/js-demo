var obj = {
  name: 'factory',
  zipcode: '518000',
  say: function(){
    console.log(this.name +' --- '+ this.zipcode)
  }
}

obj.say()               // factory --- 518000
delete obj.name
obj.say()               // undefined --- 518000


var brand = 'sumsung'
delete brand
console.log(brand)      // sumsung  delete 无法删除普通变量

obj.__proto__.price = 12800
console.log(obj.price)        // 12800
delete obj.price
console.log(obj.price)        // 12800
delete obj.__proto__.price
console.log(obj.price)        // undefined



var Person = function () { };
  Person.prototype.Say = function () {
  alert("Person say");
}
Person.prototype.Salary = 50000;
var Programmer = function () { };
Programmer.prototype = new Person();
Programmer.prototype.WriteCode = function () {
  alert("programmer writes code");
};
Programmer.prototype.Salary = 500;
var p = new Programmer();
p.Say();
p.WriteCode();
alert(p.Salary);