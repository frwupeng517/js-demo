// {
  /*
    Object.create(proto, [propertiesObject]) 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
      proto  新创建对象的原型对象
    
    返回值：一个新对象，带着指定的原型对象和属性
 

  let proto = function say() {
    return 'hello world'
  }

  let obj = Object.create(proto)

  console.log(obj)

}

{
  let proto = new Proxy({}, {
    get(target, targetKey) {
      return targetKey in target ? target[targetKey] : targetKey 
    }
  })

  let obj = Object.create(proto)

  console.log(obj)
  console.log(obj.a)   // a
}

{
  let dom = new Proxy({}, {
    get(target, property) {
      return function(attrs={}, ...childrens) { // 参数默认值，rest参数
        let el = document.createElement(property)
        if(Object.keys(attrs) && Object.keys(attrs).length > 0){
          for(let prop of Object.keys(attrs)){
            el.setAttribute(prop, attrs[prop])
          }
        }

        for(let child of childrens){
          if(typeof child === 'string'){
            let textNode = document.createTextNode(child)
            el.appendChild(textNode)
          }
        }

        return el
      }
    }
  })

  let el = dom.div({id: 'test', class: 'form-group'}, 'hello', 'world')

  document.body.appendChild(el)
}

{
  let obj = {
    foo() {
      return function(a, b) {
        return a + b
      }
    }
  }

  console.log(obj.foo()(3,4))
}

{
  function foo(obj={}, ...texts){
    console.log('obj', obj)
    console.log('texts', texts)
  }

  foo('hello')
}

*/

{
  let dom = new Proxy({}, {

    // 返回的是一个函数，获取Proxy对象的属性则必须调用该函数并按要求传参
    get(target, property) {
      return function(attrs, ...childrens) { // 第一个参数是新元素属性的集合，其它的参数可以是子元素或文本节点
        let el = document.createElement(property)
        
        // 添加属性
        for(let attr of Object.keys(attrs)) {
          el.setAttribute(attr, attrs[attr])
        }

        // 插入子元素
        for(let children of childrens) {
          if(typeof children === 'string') {
            children = document.createTextNode(children)
          }
          el.appendChild(children)
        }

        return el
      }
    }
  })

  let el = dom.div(
    {id: 'main', class: 'container'}, 
    dom.h1({}, '使用Proxy插入节点'), 
    dom.ul({}, 
      dom.li({}, 'Proxy'), 
      dom.li({}, 'Reflect')
    )
  )

  document.body.appendChild(el)
}