/*
  replaceChild 方法用于将一个新节点，替换当前节点的某一个子节点

  var replacedNode = parentNode.replaceChild(newChild, oldChild);

  replaceChild 方法接受两个参数，第一个参数 newChild 是用来替换的新节点，第二个参数 oldChild 是将要被替换的子节点
  返回值是被替换的那个 oldChild
*/

var aa = document.querySelector('a')
var h1 = document.createElement('h1')
h1.textContent = 'replace child'
aa.parentNode.replaceChild(h1, aa)