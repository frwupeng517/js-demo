/*
  const 并不是变量的值不能改，而是变量指向的那个内存地址所保存的数据不能改
        对于基本数据类型，值就保存在变量指向的那个内存地址，因此，等同于常亮
        对于引用类型数据（主要是对象和数组），变量指向的是内存地址，实际上是一个指针
*/

const foo = {}
foo.name = 'kate'
foo.age = 28
console.log(foo)         // {name: "kate", age: 28}

// foo = {}                  // Uncaught TypeError: Assignment to constant variable.

/*
  如果真的想冻结一个对象，应该使用 Object.freeze 方法
  下例中，常量 bar 指向一个冻结的对象，所以添加新属性无效，严格模式下还会报错
*/
const bar = Object.freeze({})
bar.name = 'kobe'
console.log(bar)        // {}