/*
  Element.hidden 属性返回一个布尔值，表示当前元素的hidden属性，用来控制当前元素是否可见。该属性可读写

  注意：这个属性只有在 CSS 没有明确设定当前元素的可见性时才有效
*/

var btn = document.getElementById('btn')
var box = document.getElementById('box')

btn.addEventListener('click', function(){
  box.hidden = !box.hidden
})