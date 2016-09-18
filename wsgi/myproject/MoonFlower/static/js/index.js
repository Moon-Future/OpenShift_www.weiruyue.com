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

	var timer=setInterval(function(){
		var index=bannerBg.filter('.show').index();
		if(index>=len-1){ //index>2
			goto_index(0);
		}else{
			goto_index(index+1);
		}
	},3000)

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

	// 音乐播放
	$('.insertPic ul li').on('mouseenter',function(){
		if($(this).children('.playButton').is(':hidden') && $(this).children('.stopButton').is(':hidden')){
			$(this).children('.playButton').show();
		}
	})
	$('.insertPic ul li').on('mouseleave',function(){
		if($(this).children('.stopButton').is(':hidden')){
			$(this).children('.playButton').hide();
		}
	})
	$('.playButton').on('click',function(){
		$(this).siblings('iframe').playThisStopOther();
		$(this).hide();
		$(this).siblings('.stopButton').show();
	})
	$('.stopButton').on('click',function(){
		$(this).siblings('iframe').stopMusic();
		$(this).hide();
		$(this).siblings('.playButton').show();
	})

	//末尾婚礼音乐
	$(window).scroll(function(){
		var scrollTopValue=$(window).scrollTop();
		var src=$('.love iframe').attr('src');
		// console.log(scrollTopValue);
		if(scrollTopValue>=1400 && src[src.indexOf('auto')+5]=='0' && !$('.love iframe').hasClass('hasPlay')){
			// console.log('标记');
			$('.love iframe').addClass('hasPlay');
			$('.love iframe').playThisStopOther();
			$('.stopButton').hide();
		}
	})
})
