/*
  insertBefore 方法用于将某个节点插入父节点内部的指定位置

  var insertBefore = parentNode.insertBefore(newNode, referenceNode)

  insertBefore 接受两个参数，第一个参数是所要插入的新节点，第二个参数是父节点内部的一个子节点，newNode 将插入在 referenceNode 这个子节点的前面
*/

var p = document.createElement('p')
p.textContent = 'something here'
document.getElementById('div1').insertBefore(p, document.getElementById('div1').firstChild)

/*
  注意：
      1、第二个参数不能省略，否则会报错  Uncaught TypeError: Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only 1 present.
      2、如果第二个参数为 null，则新节点将插入在父节点内部的最后位置，即变成最后一个子节点
      3、不存在 insertAfter 方法，如果新节点要插入在父节点的某个子节点后面，可以用 insertBefore结合 nextSibling
          parent.insertBefore(newNode, s.nextSibling)
*/