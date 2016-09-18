$(function(){
	$('.nav-icons').on('click',function(){
		$('.header-nav').toggleClass('header-nav-show');
		$('.nav-icons').toggleClass('close-nav-icons');
	});

	function HeaderSmall(){
		$('header').addClass('scrollHeader');
		$('header .header-logo').addClass('scrollHeaderLogo');
		$('header .header-logo a').addClass('scrollHeaderLogo-a');
		$('.header-nav').addClass('scrollHeader-nav');
		$('header .container').removeClass('header-divide');
	}

	function HeadBig(){
		$('header').removeClass('scrollHeader');
		$('header .header-logo').removeClass('scrollHeaderLogo');
		$('header .header-logo a').removeClass('scrollHeaderLogo-a');
		$('.header-nav').removeClass('scrollHeader-nav');
		$('header .container').addClass('header-divide');
	}

	if($(window).scrollTop()>=100){
		HeaderSmall();
	}

	$(window).scroll(function(){
		var scrollTopValue=$(this).scrollTop();
		if (scrollTopValue>=100) {
			HeaderSmall();
		}else{
			HeadBig();
		}
	})
})