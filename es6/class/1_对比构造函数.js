function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return `(${this.x} + ${this.y})`
}

var p = new Point(1,2)
console.log(p.toString())                   // (1 + 2)


// es6
class Foo{
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return `(${this.x} + ${this.y})`
  }
}

var f = new Foo(5,6)
console.log(f.toString())               // (5 + 6)