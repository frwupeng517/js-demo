function foo() {
  console.log(arguments)     // Arguments [1, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  function bar() {
    console.log(arguments)   // Arguments [2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  }
  bar(2)
}

foo(1)