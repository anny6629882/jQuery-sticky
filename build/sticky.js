(function(t){var o={init:function(o){return this.each(function(){var i=t(this),n={render:function(o,n){i.data("bindSticky",true);var e=i._originTop=i.offset().top,s=i._originLeft=i.offset().left;var r={position:"fixed",top:n,left:s};i._originStyles={position:i.css("position"),top:i.css("top"),left:i.css("left")};if(o=="bottom"){r.top="auto";r.bottom=n;t(window).on("scroll",function(){if(t(window).scrollTop()>=e+t(window).height()){i.css(r)}else{i.css(i._originStyles)}})}else{t(window).on("scroll",function(){if(t(window).scrollTop()>=e-n){i.css(r)}else{i.css(i._originStyles)}})}},run:function(){var t,n,e=o.top,s=o.bottom;if(i.data("bindSticky")){return}if(!e&&s){t="bottom";n=s}else{t="top";n=e}this.render(t,n)}};n.run()})},destroy:function(){return this.each(function(){t(window).unbind(".sticky")})}};t.fn.sticky=function(i){if(o[i]){return o[i].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof i==="object"||!i){return o.init.apply(this,arguments)}else{t.error("Method "+i+" does not exist on jQuery.sticky")}}})(jQuery);