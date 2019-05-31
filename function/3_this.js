var xiaoming = {
  name: '小明',
  birth: 1990,
  age: function() {
    var _this = this                      // 在方法内部一开始就捕获this
    function getAgeFromBirth() {
      var y = new Date().getFullYear()
      return y - _this.birth              // this 指针只在age方法的函数内指向 xiaoming，在函数内部定义的函数，this指向了window
    }
    return getAgeFromBirth()
  }
}

console.log(xiaoming.age())            // NaN           // 28