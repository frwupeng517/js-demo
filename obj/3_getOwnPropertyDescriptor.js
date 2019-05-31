/*
  Object.getOwnPropertyDescriptor 读取属性的特性
  这个方法接收两个参数：属性所在的对象和要读取其描述符的属性名称
  返回值是一个对象
*/

var book = {}

Object.defineProperties(book, {
  _year: {
    value: 2004
  },
  edition: {
    value: 1
  },
  year: {
    get: function(){
      return this._year
    },
    set: function(newVal) {
      if(newVal > 2004) {
        this._year = newVal
        this.edition += newVal - 2004
      }
    }
  }
})

var descriptor = Object.getOwnPropertyDescriptor(book, '_year')
console.log(descriptor.value)          // 2004
console.log(descriptor.configurable)   // false