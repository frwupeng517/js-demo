function Product(name, price) {
  this.name = name
  this.price = price

  if(price < 0) {
    throw RangeError('Can\'t create product ' + this.name + ' with a negative price')
  }

  console.log('name: ' + this.name +' , price:' + this.price)
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = 'food'
}

function Toy(name, price) {
  Product.call(this, name, price)
}

var cheese = new Food('feta', 5)   // name: feta , price:5
var fun = new Toy('robot', 55)     // name: robot , price:55