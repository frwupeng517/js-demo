/*
  document.querySelector() 方法接受一个 CSS选择器 作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有，则返回null
*/

var el1 = document.querySelector('.myclass');
var el2 = document.querySelector('#myParent > [ng-click]');



/*
  document.querySelectorAll() 方法与之类似，返回的是一个NodeList对象，包含所有匹配给定选择器的节点
  这两个方法的参数，可以是逗号分隔的多个CSS选择器，一个返回匹配的第一个，一个返回所有的
*/

var match = document.querySelector('div.note, div.alert')
console.log(match)            // <div class="note">note</div>

var matchs = document.querySelectorAll('div.note, div.alert')
console.log(matchs)            // NodeList(5) [div.note, div.note, div.alert, div.alert, div.alert]