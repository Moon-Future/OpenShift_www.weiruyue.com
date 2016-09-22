$(function(){
	var numMusicImg=$('.musicImg').length;
	var index=0; //已经往左移几个img
	$('.select-next').on('click',function(){
		var leftValue=parseFloat($('.musicSlide').css('left'));
		var leftImgNum=leftValue/imgWidth; //读取已经向左移动了多少个img
		var imgWidth=$('.musicImg').width();
		if((numMusicImg-index)>3){ //后面img大于3个才能往下翻页
			if((numMusicImg-index)>=5){ //一次移动两个，显示三个
				$('.musicSlide').animate({left:leftValue-imgWidth*2},1000);
				index+=2;
			}else{
				$('.musicSlide').animate({left:leftValue-imgWidth},1000);
				index++;
			}
		}else{
			$('.musicSlide').animate({left:leftValue-20},300);
			$('.musicSlide').animate({left:leftValue},300);
		}
	});
	$('.select-pre').on('click',function(){
		var leftValue=parseFloat($('.musicSlide').css('left'));
		var imgWidth=$('.musicImg').width();
		if(index!=0){
			if(index>=2){
				$('.musicSlide').animate({left:leftValue+imgWidth*2},1000);
				index-=2;
			}else{
				$('.musicSlide').animate({left:leftValue+imgWidth},1000);
				index--;
			}
		}else{
			$('.musicSlide').animate({left:'20px'},300);
			$('.musicSlide').animate({left:'0'},300);
		}
	});
})