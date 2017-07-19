$(document).ready(function(){
	var Fobj = {};
	Fobj.imgs = ['../duhootImgs/p2255028780.webp.jpg',
				 '../duhootImgs/p511146957.webp.jpg',
				 '../duhootImgs/p2457983084.webp.jpg',
				 '../duhootImgs/p2457983084.webp.jpg']
	Fobj.drop = function(clickObj,dropObj,speed){
		clickObj.click(function(){
			dropObj.slideToggle(speed);
		})
	};
	Fobj.drop($('.Drop1 span:first'),$('.Drop1 ul:first'),'slow');
	Fobj.drop($('.Drop2 span:first'),$('.Drop2 ul:first'),'slow');
	$('.popUp span:first').click(function(){
		$('.popUp').fadeOut();
	})

	$('.rowImg1 img').each(function(i,e){
		$(this).click(function(){
			$('.popUp').fadeIn()
			$('.popUp img:first').attr('src',Fobj.imgs[i]);
		})
		
	})



	$('.rowImg2 img').each(function(i,e){
		$(this).click(function(){
			$('.popUp').fadeIn()
			$('.popUp img:first').attr('src',Fobj.imgs[i]);
		})
		
	})
	$('.rowImg3 img').each(function(i,e){
		$(this).click(function(){
			$('.popUp').fadeIn()
			$('.popUp img:first').attr('src',Fobj.imgs[i]);
		})
		
	})
	$('.rowImg4 img').each(function(i,e){
		$(this).click(function(){
			$('.popUp').fadeIn()
			$('.popUp img:first').attr('src',Fobj.imgs[i]);
		})
		
	})
	
})