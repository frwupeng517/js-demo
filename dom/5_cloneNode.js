/*
  cloneNode 方法用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。返回值是一个克隆出来的新节点
*/
var aa = document.getElementById('aa')
aa.onclick = function() {
  alert(111)
}
var c1 = document.querySelector('a').cloneNode(true)
var c2 = document.querySelector('a').cloneNode(false)
document.body.appendChild(c1)
document.body.appendChild(c2)

console.log(c1)     // <a href="#" onclick="alert(1)">链接</a>       // <a href="#" id="aa">链接</a>
console.log(c2)     // <a href="#" onclick="alert(1)"></a>           // <a href="#" id="aa"></a>

/*
  （1）、克隆一个节点，会拷贝该节点的所有属性，但是会丧失 addEventListener 方法和 on-属性，添加在这个节点上的事件回调函数（直接写在元素上 onclick可以，回调函数不行）
  （2）、该方法返回的节点不在文档之中，即没有任何父节点，必须使用像 Node.appendChild 这样的方法添加到文档中
  （3）、克隆一个节点之后，DOM 可能会出现两个相同的属性，如 id，这时应该修改其中一个元素的 id 属性
*/