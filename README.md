jQuery-sticky
=============

## 基于jQuery开发的一个sticky组件

## 简介
当元素滚动快要超出视区的时候，根据修改参数来固定住元素。

## 使用方法
1. 引入仓库build目录下的sticky.js或者在你的脚本代码前面粘上文件里的代码
2. ```$(selector).sticky(cfg)```
3. 可配置参数为cfg{Object}:
	* top{number}:距离视区顶部的像素值。
	* callback{function}:吸住顶部之后的回调函数

使用后如同百度搜索拦的这个效果:
