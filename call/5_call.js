var name = 'tms'

var obj = {}
obj.name = 'wms'
obj.say = function(){
  console.log(`this is system for ${this.name}`)
}

var fn = obj.say

// call 方法的参数是一个对象，如果参数为空、null和undefined，则默认传入全局对象
fn.call()               // this is system for tms
fn.call(null)           // this is system for tms
fn.call(undefined)      // this is system for tms
fn.call(window)         // this is system for tms

fn.call(obj)            // this is system for wms



