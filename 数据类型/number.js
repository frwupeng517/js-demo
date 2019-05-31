/*
  5、Number 类型
  浮点数值
  （1）、由于保存浮点数值需要的内存空间是保存整数值的两倍，js引擎会不失时机的将浮点数值转为整数值
  var num1 = 10.0   // 解析为10

  （2）、浮点数的小数点前面可以没有整数，但不推荐这种写法
  var num1 = 0.3
  var num2 = .2    // 不推荐

  （3）、js引擎会将小数点后面带有6个零以上的浮点数转为科学计数法表示的值，例如：0.0000003 会被转换成 3e-7

  （4）、由于浮点数计算存在误差，因此，永远不要测试某个特定的浮点数值
  console.log(0.1 + 0.2)         // 0.30000000000000004
  if(0.1 + 0.2 == 0.3) { // 不要做这样的测试
    alert('0.1 加 0.2 等于 0.3')
  } else{
    alert('0.1 加 0.2 不等于 0.3')
  }
  // 0.1 加 0.2 不等于 0.3

  NaN
  非数值（Not a Number），是一个特殊的数值，如果操作两个数值，但是不能正确返回数值，就会返回NaN（这样就可以避免报错）

  alert(0 / 0)     // NaN 
  alert(8 / 0)     // Infinity
  alert(-2 / 0)    // -Infinity

  NaN的两个特点：
  任何涉及NaN的操作，都会返回NaN
  alert(NaN / 0)     // NaN
  alert(NaN + '1')   // NaN1 (涉及字符串拼接的除外)
  alert(NaN + 1)     // NaN
  alert(NaN * 1)     // NaN

  NaN不大于，不小于，不等于任何数，包括NaN
  alert(NaN > 3)      // false
  alert(NaN < 0)      // false
  alert(NaN == 0)     // false
  alert(NaN == NaN)   // false
  alert(NaN > NaN)    // false
  alert(NaN < NaN)    // false

  isNaN() 函数接受一个参数，该参数可以是任意类型，如果该参数可以转为数值，则返回false；如不能转为数值，则是一个NaN，返回true
  alert(isNaN(10))          // false （10本来就是一个数字）
  alert(isNaN('10'))        // false （字符串10可以转为数字10）
  alert(isNaN('10str'))     // true  
  alert(isNaN('str'))       // true  
  alert(isNaN(true))        // false （可以转为数字1）
  alert(isNaN(NaN))         // true
  alert(isNaN({age: 3}))    // true   （先调用对象的valueOf() 方法，若返回数字则为false，反之为true）

  在基于对象调用 isNaN() 方法时，会首先调用 valueOf() 方法，如果返回值不可以转为数字，则基于这个返回值调用 toString() 方法，再测试返回值
    var obj1 = {
      name: 'Jim',
      age: 3,
      valueOf: function() {  // 返回一个数字
        return this.age
      }
    }
    var obj2 = {
      name: 'Jim',
      age: 3,
      valueOf: function() {  // 返回一个字符串
        return this.name
      }
    }
    var obj3 = {
      name: 'Jim',
      age: 3,
      score: {
        chinese: 96,
        math: 99,
        toString: function() {
          return 99
        }
      },
      valueOf: function() {  // 返回一个对象
        return this.score
      }
    }
    
    alert(isNaN(obj1))    // false （重写了 valueOf() 方法，返回一个数字3）
    alert(isNaN(obj2))    // true   （valueOf() 方法返回一个字符串 'Jim'，这个字符串不能被转为数字）
    alert(isNaN(obj3))    // true   （valueOf() 方法返回了一个对象，尽管该对象重写了 toString()方法，但是并没有执行，此处不解 ~~~）
  
  数值转换
  一共提供了三个转型函数：
  Number()：用于任何数据类型
  parseInt(), parseFloat()：专门用于把字符串转为数值

  Number() 转换规则：
  （1）、Boolean类型的值，true 和 false 分别被转为1 和 0
  （2）、null 值返回 0， undefined 返回 NaN
  （3）、字符串类型分为以下几种情况：
      如果字符串中只包含数字，则将其转为十进制数值（前导的0会被忽略）
      如果字符串中包含有效的浮点数，则将其转为对应的浮点数值（前导的0会被忽略）
      如果字符串中包含有效的十六进制数，则将其转为对应的十进制数
      如果是空字符串，则将其转为0
      除了以上情况之外的字符，一律转为NaN
  alert(Number(true))          // 1
  alert(Number(null))          // 0
  alert(Number(undefined))     // NaN
  alert(Number('32'))          // 32
  alert(Number('000011'))      // 11
  alert(Number('-3'))          // -3
  alert(Number('3.14'))        // 3.14
  alert(Number('0.1'))         // 0.1
  alert(Number('.1'))          // 0.1
  alert(Number('0xf'))         // 15
  alert(Number(''))            // 0
  alert(Number('{}'))          // NaN

  parseInt() 转换规则：
  （1）、忽略字符串前面的空格，直至找到第一个非空格字符（如果第一个字符不是数字或者负号，则转为NaN；不同于Number()，空字符串也转为NaN）
  （2）、如果找到的第一个有效字符是数字，则会依次解析后面的字符，直至结束或遇到非字符
  （3）、不同于Number()将所有进制转为十进制，parseInt()可以正确解析八进制和十六进制数据

  alert(parseInt(null))         // NaN
  alert(parseInt(undefined))    // NaN
  alert(parseInt('blue123'))    // NaN
  alert(parseInt('123blue'))    // 123
  alert(parseInt('string'))     // NaN
  alert(parseInt(true))         // NaN
  alert(parseInt(3.14))         // 3
  alert(parseInt(.1))           // 0
  alert(parseInt('070'))        // 70  (ECMAScript 3 认为是 56（八进制），ECMAScript 5 认为是 70（十进制）)
  alert(parseInt('70'))         // 70
  alert(parseInt('0xf'))        // 15
  alert(parseInt('0xAF'))       // 175

  鉴于上面处理八进制数时的困惑，parseInt() 函数提供了第二个参数，转换时的基数（不填则默认是10）。这样使得程序的可读性更强，js引擎在解析时也不会造成困惑

  alert(parseInt('070', 8))    // 56
  alert(parseInt('070'))       // 70
  alert(parseInt('AF', 16))    // 175
  alert(parseInt('AF'))        // NaN


  parseFloat() 转换规则：
  （1）、字符串中第一个小数点是有效地，第二个小数点是无效的，因此后面的字符串将会被忽略
  （2）、只解析十进制的数，没有第二个参数。因此，十六进制的数始终被转换为0
  （3）、如果字符串解析后是一个整数，或者小数点后面都是0，则被转换为一个整数

  alert(parseFloat('3.14'))     // 3.14
  alert(parseFloat('.1'))       // 0.1
  alert(parseFloat('0.66'))     // 0.66
  alert(parseFloat('0.6.3'))    // 0.6
  alert(parseFloat('AF'))       // NaN
  alert(parseFloat('070'))      // 70
  alert(parseFloat('0xf'))      // 0
  alert(parseFloat('3.0000'))   // 3
  alert(parseFloat('00011'))    // 11
  alert(parseFloat('123blue'))  // 123
*/
  




 



  
 
  