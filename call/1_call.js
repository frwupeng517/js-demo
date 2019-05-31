/*
  call() 方法调用一个函数，其具有一个指定的this值和分数列表
  fun.call(thisArg, arg1, arg2, arg3...)

  可以让call()中的对象调用当前对象所拥有的function，可以用call()来实现继承，写一个方法，然后让另外一个新的对象来继承它
*/

function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.catelog = 'food'
}

console.log(new Food('tamato', 5).name)    // tamato