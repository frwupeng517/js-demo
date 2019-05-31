/*
  firstChild 属性返回当前节点的第一个子节点，如果当前节点没有子节点，则返回null
  
  注意：同nextSibling/previousSibling 类似，firstChild 返回的除了元素节点，还可能是文本节点或注释节点

  lastChild 同 firstChild
*/

var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')

console.log(p1.firstChild.nodeName)   // SPAN 
console.log(p2.firstChild.nodeName)   // #text  p元素与span元素之间有空白字符，这导致firstChild返回的是文本节点

/*
  childNodes 属性返回一个类数组对象（NodeList集合），成员包括当前节点的所有子节点
  从下例中可以看到，除了元素节点，childNodes属性的返回值还包括文本节点和注释节点
*/
var children = document.getElementById('ul').childNodes
console.log(children) // NodeList(7) [text, li, text, li, text, li, text]
for(var i = 0; i < children.length; i++) {
  console.log(children[i].nodeName)
}

// #text
// LI
// #text
// LI
// #text
// LI
// #text