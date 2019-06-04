/*
  4、四种常见的JS内存泄漏
  4-1、意外的全局变量
  function foo() {
    bar = "this is a hidden global variable";
  }
  尽管变量bar位于函数作用域内，但是由于没有使用var关键字来声明，因此，JS会把bar挂载到全局对象中去，意外地创建了一个全局变量

  还有一种意外的全局变量可能由 this 创建
  function foo() {
    this.bar = "this is a hidden global variable";
  }
  foo();
  由于是在全局环境中调用foo，this会指向window，因此，bar也就成了全局变量

  解决方法：
  在 JS 文件首行加上"use strict"，使用严格模式来避免意外地全局变量。如果必须使用全局变量存储大量数据时，需要在使用完以后置为null或重新定义

  4-2、被遗忘的计时器或回调函数

  4-3、脱离DOM的引用
  如果把DOM节点存储为键值对或者数组的形式，此时，同样的DOM元素存在两个引用：一个在DOM树中，一个在键值对或数组中。将来需要把两个都清除
  var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
  };
  function doStuff() {
    image.src = 'http://some.url/image';
    button.click();
    console.log(text.innerHTML);
    // 更多逻辑
  }
  function removeButton() {
    // 按钮是 body 的后代元素
    document.body.removeChild(document.getElementById('button'));
    // 此时，仍旧存在一个全局的 #button 的引用
    // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。
  }

  如果代码中保存了表格某一个 <td> 的引用。将来决定删除整个表格的时候，直觉认为 GC 会回收除了已保存的 <td> 以外的其它节点。实际情况并非如此：此 <td> 是表格的子节点，子元素与父元素是引用关系。由于代码保留了 <td> 的引用，导致整个表格仍待在内存中。所以保存 DOM 元素引用的时候，要小心谨慎。

  4-4、闭包
  闭包的关键是匿名函数可以访问父级作用域的变量
  
*/

  