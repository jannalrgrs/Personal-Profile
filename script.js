$(document).ready(function(){
		$('.one').click(function(){
			$(this).toggleClass(".changeBackground")
			.text('clicked');
	});
		//this only applies to what your interacting with on the screen
		$(".one").mouseenter(function(){
			$(this).fadeTo("fast",0.25)
		});
		$(".one").fadeTo("slow", 1.0);
			$(this).mouseleave(function(){
		});
	});