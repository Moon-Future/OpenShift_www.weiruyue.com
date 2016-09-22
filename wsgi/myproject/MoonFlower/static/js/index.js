$(function(){
	// 大图轮播
	var bannerBg=$('.bannerBox ul.bannerBg li')
	var bannerCircle=$('.bannerBox ul.bannerCircle li');
	var len=bannerBg.length;

	function goto_index(index){
		bannerBg.filter(':eq('+index+')').fadeIn('slow').addClass('show');
		bannerCircle.filter(':eq('+index+')').addClass('selected');
		bannerBg.filter(':eq('+index+')').siblings().fadeOut('slow').removeClass('show');
		bannerCircle.filter(':eq('+index+')').siblings().removeClass('selected');
	}

	var timer_func=function(){
		var index=bannerBg.filter('.show').index();
		if(index>=len-1){ //index>2
			goto_index(0);
		}else{
			goto_index(index+1);
		}
	}

	var timer=setInterval(timer_func,3000)

	$('.bannerBox').on('mouseover',function(){
		clearInterval(timer);
	})
	$('.bannerBox').on('mouseout',function(){
		timer=setInterval(timer_func,3000)
	})


	$('.right-arrow').on('click',function(){
		var index=bannerBg.filter('.show').index();
		if(index>=len-1){ //index>2
			goto_index(0);
		}else{
			goto_index(index+1);
		}
	})
	$('.left-arrow').on('click',function(){
		var index=bannerBg.filter('.show').index();
		if(index<=0){ //index>2
			goto_index(len-1);
		}else{
			goto_index(index-1);
		}
	})
	$('.bannerCircle li').on('click',function(){
		var index=$(this).index();
		goto_index(index);
	})

	//末尾婚礼音乐
	$(window).scroll(function(){
		var scrollTopValue=$(window).scrollTop();
		var data_src=$('.love iframe').attr('data-src');
		// console.log(scrollTopValue);
		if(scrollTopValue>=1200 && !$('.love iframe').hasClass('hasPlay')){
			$('.love iframe').attr('src',data_src);
			$('.love iframe').addClass('hasPlay');
		}
	})

	//鼠标移入图片显示阴影
	var imgW=$('.insertPic div:eq(0) img').css('width');
	$('.wraper').css({'width':imgW,'height':imgW});
	$('.poem').css({'width':imgW});
	$(window).on('resize',function(){
		var imgW=$('.insertPic div:eq(0) img').css('width');
		$('.wraper').css({'width':imgW,'height':imgW});
		$('.poem').css({'width':imgW});
	})
	$('.insertPic > div').on('mouseenter',function(){
		$(this).children('.wraper').fadeIn();
	})
	$('.insertPic > div').on('mouseleave',function(){
		$(this).children('.wraper').fadeOut();
	})
})
