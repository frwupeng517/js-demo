function add(a,b) {
  console.log(a + b)
}

function sub(a, b) {
  console.log(a - b)
}

add.call(sub, 5, 3)      // 8

function Animal() {
  this.name = 'animal'
  this.showName = function(){
    console.log(this.name)
  }
}

function Cat() {
  this.name = 'cat'
}

var animal = new Animal()
var cat = new Cat()

animal.showName.call(cat, '')  // 'cat'