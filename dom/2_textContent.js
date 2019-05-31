/*
  textContent 属性返回当前节点和它的所有后代节点的文本内容
              会自动忽略当前节点内部的 HTML 标签，返回所有文本内容
*/


var textContent = document.querySelector('p').textContent

console.log(textContent) // i am photograph i am a part of text

/*
  textContent 属性是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点，并且会自动转义HTML标签
*/

document.querySelector('p').textContent = '<span>let me show you how to replace text content by textContent attribute.</span>'

// <span>let me show you how to replace text content by textContent attribute.</span>

// 上面代码插入文本时，会将 <span> 标签解释为文本，而不会当做标签处理

/*
  如果要读取整个文档的内容，可以使用 document.documentElement.textContent
*/
console.log(document.documentElement.textContent)
/*
Document


  hello world

  <span>let me show you how to replace text content by textContent attribute.</span>
*/