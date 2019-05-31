var docFrag = document.createDocumentFragment()

var li = document.createElement('li')
li.textContent = 'vue 深入'
docFrag.appendChild(li)

document.getElementById('ul').appendChild(docFrag)