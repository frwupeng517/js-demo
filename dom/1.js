var div = document.querySelector('div')
console.log(div.nodeName)    // DIV
console.log(div.nodeType)    // 1
console.log(div.nodeValue)   // null

/*
  nodeValue 属性返回一个字符串，表示当前节点本身的文本值
            只有文本节点（text）和 注释节点（comment）有文本值，可以返回结果，其他一律返回 null
*/