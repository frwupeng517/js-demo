const myClass = class Me{
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  getClassName() {
    return Me.name
  }
}

let emp = new myClass()

console.log('hasOwnProrperty', emp.hasOwnProperty('getClassName'))   // hasOwnProrperty false

console.log('hasOwnProperty', emp.hasOwnProperty('x'))               // hasOwnProperty true

console.log('hasOwnProperty', emp.hasOwnProperty('y'))               // hasOwnProperty true

console.log(Object.keys(emp))                                        // ["x", "y"]