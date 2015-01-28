/**
 * Created by wenshui on 15/1/26.
 * @base jQuery
 */

window.Sticky = (function () {
    'use strict';
    /**
     * Sticky类.
     * @param {Object} config - 参数对象
     */
    function Sticky(config) {
        var i;
        // 参数检测
        if (config.el && typeof config.el == 'string') {
            this.el = $(config.el);
        }
        for (i in config) {
            if (i == 'top' || i == 'bottom') {
                if (typeof config[i] == 'number' || typeof config[i] == 'string') {
                    this.type = i;
                    this[i] = config[i];
                }
            }
        }

        if (config.target && typeof config.target == 'string') {
            this.target = config.target;
        } else {
            this.target = window;
        }

        if (typeof config.callback == 'function') {
            this.callback = config.callback;
        }

        // 初始化监听函数
        this.init();
    }
    Sticky.prototype.init = function () {
        var el = this.el,
            target = this.target,
            type = this.type,
            value = this[type],
            callback = this.callback;

        var originTop,
            originLeft;
        // 纪录元素初始位置
        if (target === window) {
            originTop = el._originTop = el.offset().top;
            originLeft = el._originLeft = el.offset().left;
        } else {
            originTop = el._originTop = el.offset().top - target.offset().top;
            originLeft = el._originLeft = el.offset().left - target.offset().left;
        }
        // 需要添加的样式
        var fixedStyle = {
            position: "fixed",
            left: originLeft,
            margin: 0
        };
        fixedStyle[type] = this[type];
        // 保存元素原来的样式
        el._originStyles = {
            position: el.css("position"),
            top: el.css("top"),
            left: el.css("left"),
            margin: el.css("margin")
        };
        console.log(el);
        // 监听滚动事件
        var currentScroll;
        $(target).on("scroll",function(){
            currentScroll = (type == 'top')? originTop - value : originTop - $(target).height();
            console.log(currentScroll);
            if($(target).scrollTop() >= currentScroll){
                el.css(fixedStyle);
                //执行回调
                if(callback && !el.data("bindSticky")){
                    callback(true);
                }
                // 标记已经绑定sticky的元素
                el.data("bindSticky",true);
            } else {
                el.css(el._originStyles);
                if(callback && el.data("bindSticky")){
                    callback(false);
                }
                // 取消标记已经绑定sticky的元素
                el.data("bindSticky",false);
            }
        });
    };
    Sticky.prototype.destory = function () {
        var el = this.el,
            target = this.target;
        $(target).unbind('scroll');
        el.css(el._originStyles);
        el.data("bindSticky",false);
    };
    return Sticky;
})();