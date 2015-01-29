jQuery-sticky
=============

## 基于jQuery开发的一个sticky组件

## 简介

当元素滚动快要超出视区的时候，根据修改参数来固定住元素，并支持回调。

## 初始化
---

```
// 创建一个 sticky 元素
    var sticky = new Sticky({
            el: '#id',
            top: 20, 
            callback: function(status) { 
              }
        });
```

## API
---

* ***el*** {String}

	需要跟随滚动的目标元素

* ***top*** {Number}

	基于顶部跟随滚动时设置；当元素距离当前可视窗口顶部的距离等于这个值时，开始触发跟随状态。

* ***bottom*** {Number}

	基于底部跟随滚动时设置；当元素距离当前可视窗口底部的距离等于这个值时，开始触发跟随状态。

* ***callback*** {Function}

	更改状态的回调函数，具有一个参数 status, 为 true 表示是 stick 状态, 为 false 为 unstick 状态。

#### [demo](http://backtonaturedemo.github.io/frontend/case/demo/jQuerySticky/sticky.html)


