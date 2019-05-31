/*
  Node.nextSibling 属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回 null
*/

var div1 = document.getElementById('div1'),
    div2 = document.getElementById('div2');

console.log(div1.nextSibling)
console.log(div1.nextSibling == div2)  // true

/*
  注意：该属性还包括文本节点和注释节点。如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格
*/


/*
  Node.previousSibling 属性返回当前节点前面、距离最近的一个同级节点。（其他同 nextSibling）
*/