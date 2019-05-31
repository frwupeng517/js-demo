const input = document.getElementById('input')
const output = document.getElementById('output')

// 需要代理的数据对象（相当于Vue实例的data属性）
const data = {
  text: '123456'
}

let myText = new Proxy(data, {
  set(target, property, value) {
    if(property === 'text') {
      // 更新值
      target[property] = value

      // 更新视图
      output.innerHTML = value
      input.value = value

      return true
    } else{
      return false
    }
  }
})

// 初始化值
myText.text = data.text

input.addEventListener('input', function(e) {
  myText.text = e.target.value
})