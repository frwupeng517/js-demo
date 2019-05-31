// 轮播图片数组
var imgs = [
  {"index": 0, "url": "img/slider_01.jpg"},
  {"index": 1, "url": "img/slider_02.jpg"},
  {"index": 2, "url": "img/slider_03.jpg"},
  {"index": 3, "url": "img/slider_04.jpg"},
  {"index": 4, "url": "img/slider_05.jpg"}
]

var slider = {
  IMGWIDTH: 0, // 每张轮播图的宽度
  DURATION: 1000, // 每次轮播的总时长
  DISTANCE: 0, // 每次轮播的总距离
  STEPS: 200, // 每次轮播的总步数
  WAIT: 3000, // 保存自动轮播之间的等待时间
  interval: 0,  // 轮播每一步的时间间隔
  step: 0, // 轮播每一步的步长
  moved: 0, // 本次轮播已经移动的步数
  timer: null, // 保存当前动画的序号
  canAuto: true, // 能否自动轮播

  init() { // 轮播的初始化方法
    // 获得轮播图的宽度
    let carousel = document.getElementById('carousel'),
        carouselWidth= window.getComputedStyle(carousel, null).getPropertyValue('width') || carousel.currentStyle('width')
    this.IMGWIDTH = parseFloat(carouselWidth)

    this.interval = this.DURATION/this.STEPS

    this.updateView()
  },

  move(n) { // 启动一次轮播，n 表示要移动的轮播图的个数
    if(this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    // 获得id为sliders的div计算后的left
    let left = parseFloat(window.getComputedStyle(document.getElementById('sliders'), null).left)
    // 计算 DISTANCE = IMGWIDTH * n
    this.DISTANCE = n > 0 ? this.IMGWIDTH * n : 1
    // 计算 step = DISTANCE/STEPS
    this.step = this.DISTANCE/this.STEPS
    if(n < 0) {
      
    }
  },

  updateView() { // 根据图片数组的内容，更是视图
    // 设置id为sliders的div的宽为 IMGWIDTH * imgs的length
    let sliders = document.getElementById('sliders')
    sliders.style.width = this.IMGWIDTH * imgs.length + 'px'

    for(var i = 0, divs='', dots=''; i < imgs.length; i++) {
      // 拼接轮播图片
      divs += `<div class="slider lf"><a href="#"><img src="${imgs[i].url}"></a></div>`
      // 拼接控制的圆点
      
    }
    sliders.innerHTML = divs
  }
}

window.addEventListener('load', function(){
  slider.init()
})