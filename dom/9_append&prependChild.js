/*
  append 方法为当前节点追加一个或多个子节点，位置是最后一个元素子节点的后面
          该方法不仅可以添加元素子节点，还可以添加文本子节点
*/

var parent = document.body

// 添加元素子节点
var p = document.createElement('p')
parent.appendChild(p)

// 添加文本子节点
// parent.appendChild('hello')       // 实测会报错

// 添加多个元素子节点
var h1 = document.createElement('h1')
var h2 = document.createElement('h2')
parent.appendChild(h1, h2)              // 实测只插入了 h1