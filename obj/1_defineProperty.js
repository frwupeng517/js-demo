// 'use strict'

var person = {}

Object.defineProperty(person, 'name', {
  writeable: false,  // 只读
  value: 'Roger'
})

console.log(person.name)   // Roger
// person.name = 'Sara'       // 严格模式会报错 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(person.name)   // Roger

console.log('------------------------------------------------------------------------------')

var obj = {}

Object.defineProperty(obj, 'name', {
  configurable: false, // 不可用delete删除
  value: 'Lokie'
})

delete obj.name        // 无法删除  严格模式报错：Uncaught TypeError: Cannot delete property 'name' of #<Object>
console.log(obj.name)  // Lokie

// 一旦把属性定义为不可配置的，就不能再把它变回可配置的了

Object.defineProperty(obj, 'name', {   // 报错：Uncaught TypeError: Cannot redefine property: name
  configurable: true,
  value: 'Lokie'
})