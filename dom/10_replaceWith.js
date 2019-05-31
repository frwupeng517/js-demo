/*
  replaceWith 方法使用参数节点，替换当前节点，也是没有返回值
*/

var parent = document.createElement('div')
var child = document.createElement('p')
document.body.appendChild(parent)
parent.appendChild(child)

var span = document.createElement('span')
child.replaceWith(span)

/*
  childNode.remove() 方法用于从父节点移除当前节点，自己移除自己
*/
// span.remove()

/*
  childNode.before() 方法用于在当前节点的前面，插入一个或多个同级节点。两者拥有相同的父节点
                      该方法不仅可以插入元素节点，还可以插入文本节点
*/

var before = document.createElement('span')
span.before(before)
span.before('some text node')   // 插入文本节点

span.before('text1', 'text2', 'text3')  // 插入多个文本节点


/*
  childNode.after() 类比 before() 方法
*/