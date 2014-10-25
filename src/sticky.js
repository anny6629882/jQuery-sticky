/**
 * Created by wenshui on 14-10-25.
 *
 * Demo: 访问：仓库目录下sticky.html
 *
 * @param 参数列表
 * 		top : {number} 	距离顶部多少像素时吸住顶部
 */

(function( $ ){
    var methods = {
        init : function( options ) {
            return this.each(function(){
                // 插件主体
                var $this = $(this),
                    sticky = {
                        /**
                         * 实现滚动效果
                         */
                        render: function(kind,value){
                            // 标记已经绑定sticky的元素
                                $this.data("bindSticky",true);

                            // 记录元素原来的位置
                            var originTop = $this._originTop = $this.offset().top,
                                originLeft = $this._originLeft = $this.offset().left;

                            var fixedStyle = {
                                position: "fixed",
                                top: value,
                                left: originLeft
                            }

                            // 保存元素原来的样式
                            $this._originStyles = {
                                position: $this.css("position"),
                                top: $this.css("top"),
                                left: $this.css("left")
                            };

                            // 监听滚动事件
                            if(kind == "bottom"){
                                fixedStyle.top = "auto";
                                fixedStyle.bottom = value;
                                $(window).on("scroll",function(){
                                    if($(window).scrollTop() >= originTop + $(window).height()){
                                        $this.css(fixedStyle);
                                    } else {
                                        $this.css($this._originStyles);
                                    }
                                });
                            } else {
                                $(window).on("scroll",function(){
                                    if($(window).scrollTop() >= originTop - value){
                                        $this.css(fixedStyle);
                                    } else {
                                        $this.css($this._originStyles);
                                    }
                                });
                            }

                        },
                        /**
                         * 初始化
                         */
                        run: function(){
                            var kind,value,
                                top = options.top,
                                bottom = options.bottom;
                            // 一个元素只能绑定一次
                            if($this.data("bindSticky")){
                                return;
                            }
                            // 如果没有设置top与bottom,则默认top为0
                            if(!top && bottom){
                                kind = "bottom";                // sticky类型: bottom
                                value = bottom;
                            } else {
                                kind = "top";                   // sticky类型: top
                                value = top;
                            }
                            this.render(kind,value);
                        }
                }
                sticky.run();
            });
        },
        destroy : function( ) {
            return this.each(function(){
                $(window).unbind('.sticky');
            })
        }
    };
    $.fn.sticky = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.sticky' );
        }
    };
})( jQuery );

