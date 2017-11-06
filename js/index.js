//header监测鼠标滚动
$(function(){
	//检测滚动条
	$(window).scroll(function(){ 
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if (t <= 0) { 
			$("header").stop().animate({opacity : 0,top : -$('header').height()},250).removeClass('footer-col');
			$('.top').fadeOut()
		}else if(t >= $('#contact').offset().top-20){
			$('header').stop().animate({opacity : 1,top : 0},250).addClass('footer-col');
		}else {
			$("header").stop().animate({opacity : 1,top : 0},250).removeClass('footer-col');
			if(t >= $('#skill .one').offset().top-$(window).height() && t <= $('#skill .one').offset().top){
				setTimeout(function(){
					$('#skill .one').addClass('jiaodu');
				},490)
			}else if (t >= $('#about').offset().top) {
				$('.top').fadeIn()
			}
		} 
		//导航监听
		var navHeight = $(window).height()-$('header').height();
//		console.log(navHeight);
		$('.slide').each(function(){
			var target=parseInt($(this).offset().top-$(window).scrollTop()+600);
			var i=$(this).index();
//			console.log(target);
			if (target<=0) {
				$('#menu li').removeClass('nav-active');
				$('#menu li').eq(i).addClass('nav-active');
				$('#submenu li').removeClass('nav-active');
				$('#submenu li').eq(i).addClass('nav-active');
			}
			else if($(document).height()==$(window).scrollTop()+$(window).height()){
				$('#menu li').removeClass('nav-active');
				$('#menu li').eq($('.slide').length-1).addClass('nav-active');
				$('#submenu li').removeClass('nav-active');
				$('#submenu li').eq($('.slide').length-1).addClass('nav-active');
			}
		});
	})
	//点击滚动
	$('#menu li,#submenu li').click(function(){
		$(this).addClass('nav-active').siblings().removeClass('nav-active');
		var i=$(this).index();
		$('body, html').animate({scrollTop:$('.slide').eq(i).offset().top},500);
		$('#submenu').slideUp()
	});
	$('#myproject').click(function(){
		$('body, html').animate({scrollTop:$('#project').offset().top},500);
	})
	$('.top').click(function(){
		$('body, html').animate({scrollTop:0},500);
	})
})
//子导航下拉
$(function(){
	$('#submenu-btn').click(function(){
		$('#submenu').slideToggle()
	})
	$('#myheader').siblings().click(function(){
		$('#submenu').slideUp()
	})
})

//作品栏piad端
var mySwiper = new Swiper ('.swiper-container', {
	loop: true,	
	speed: 1000,
	grabCursor : true,
	// 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
	effect : 'cube',
	cube: {
	  slideShadows: true,
	  shadow: true,
	  shadowOffset: 50,
	  shadowScale: 0.6
	}	
})
//footer表单
$(function(){
	$('#user').blur(function(){
		$('#user+.erron').hide()
	})
	$('#tel').blur(function(){
		if (!$(this).val().match(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/)) {
			$('#tel+.erron').show().html('格式有误')
		}else{
			$('#tel+.erron').hide()
		}
	})
	$('#tijao').click(function(){
		if ($('#user').val()=='') {
			$('.erron').eq(0).show().html('未输入');
		} else if($('#tel').val()==''){
			$('.erron').eq(1).show().html('未输入');
		}else if($('#liuyan').val()==''){
			$('.erron').eq(2).show().html('未输入');
		}else{
			$('.erron').hide()
			alert('提交成功，感谢你的留言。')
		}
	})
})
