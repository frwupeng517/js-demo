/*
  removeChild 方法接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点
*/

var p1 = document.getElementById('p1')
var span = p1.querySelector('span')
p1.removeChild(span)  // span 节点被删除掉了

// 如果要删除某一个节点本身   ----- 一定要在待删除的元素节点的父节点上调用
var p2 = document.getElementById('p2')
p2.parentNode.removeChild(p2)

/*
  注意：
      1、被删除的节点依然存在于内存中，但不再是 DOM 的一部分。所以，一个节点移除以后，依然可以使用它，比如插入到另一个节点下面
      2、如果参数节点不是当前节点的子节点，removeChild 方法将报错
*/