jQuery-sticky
=============

## 基于jQuery开发的一个sticky组件

## 简介

当元素滚动快要超出视区的时候，根据修改参数来固定住元素，并支持回调。

## 使用方法

```
var sticky = new Sticky({
            el: selector,
            top: 40,
            callback: function () {
               alert(1);
            }
        });
```

* el {string}: 吸顶或吸底的元素,写jquery选择器就行
* top || bottom {number}: 吸住的时候距离顶部或底部的px高度
* callback {function}: 吸住的时候处罚的回调