(function($){
	$.fn.playMusic=function(){
		var iframe=$(this),
			src=iframe.attr('src');
		if(src[src.indexOf('auto')+5]=='0'){
			iframe.attr('src',src.replace(/auto=0/,'auto=1'));
			// 图片转圈
			iframe.siblings('img:eq(0)').addClass('playRotion');
		};
	},

	$.fn.stopMusic=function(){
		var iframe=$(this),
			src=iframe.attr('src');
		if(src[src.indexOf('auto')+5]=='1'){
			iframe.attr('src',src.replace(/auto=1/,'auto=0'));
			// 图片停止转圈
			iframe.siblings('img:eq(0)').removeClass('playRotion');
		};
	},

	$.fn.toggleMusic=function(){
		var iframe=$(this),
			src=iframe.attr('src');
		if(src[src.indexOf('auto')+5]=='0'){
			iframe.attr('src',src.replace(/auto=0/,'auto=1'));
			// 图片转圈
			iframe.siblings('img:eq(0)').addClass('playRotion');
		}else{
			iframe.attr('src',src.replace(/auto=1/,'auto=0'));
			// 图片停止转圈
			iframe.siblings('img:eq(0)').removeClass('playRotion');
		}
	},

	$.fn.playThisStopOther=function(){
		var iframe=$(this),
			src=iframe.attr('src');
		$('iframe').removeClass('playThis')
		iframe.addClass('playThis');
		var iframes=$('iframe:not(.playThis)');
		for(var i=0,len=iframes.length;i<len;i++){
			var srci=$(iframes[i]).attr('src');
			if(srci[srci.indexOf('auto')+5]=='1'){
				$(iframes[i]).attr('src',srci.replace(/auto=1/,'auto=0'));
				$(iframes[i]).siblings('img:eq(0)').removeClass('playRotion');
			}
		}
		if(src[src.indexOf('auto')+5]=='0'){
			iframe.attr('src',src.replace(/auto=0/,'auto=1'));
			// 图片转圈
			iframe.siblings('img:eq(0)').addClass('playRotion');
		}else{
			iframe.attr('src',src.replace(/auto=1/,'auto=0'));
			// 图片停止转圈
			iframe.siblings('img:eq(0)').removeClass('playRotion');
		}
	}
})(jQuery);