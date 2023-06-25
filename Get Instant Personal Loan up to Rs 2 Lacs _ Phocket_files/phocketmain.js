function getMsgHandler(){""!=document.getElementById("mobileNoField").value?(document.getElementById("successMsg").innerHTML="Message Sent Successfully!",document.getElementById("errorMsg").style.display="none"):document.getElementById("errorMsg").innerHTML="Please enter your mobile number!",fetch("https://phocket.in/getApp?mobileNumber="+document.getElementById("mobileNoField").value+"&device=ANDROID")}$(document).ready(function(){$("#testimonial-slider").owlCarousel({items:2,itemsDesktop:[1e3,2],itemsDesktopSmall:[979,2],itemsTablet:[768,1],pagination:!0,autoPlay:!0})}),$(function(){var e=navigator.userAgent.toLowerCase().indexOf("mobile")>-1;$("#phocketFooterScr").on("click",function(){$("HTML, BODY").animate({scrollTop:$(document).height()-$(window).height()},1e3)}),$("#phocketPricing").on("click",function(){e?$("html, body").animate({scrollTop:720},1e3):$("HTML, BODY").animate({scrollTop:750},1e3)}),$("#phocketFeature").on("click",function(){e?$("html, body").animate({scrollTop:2600},1e3):$("HTML, BODY").animate({scrollTop:1560},1e3)}),$("#phocketWorking").on("click",function(){e?$("html, body").animate({scrollTop:4100},1e3):$("HTML, BODY").animate({scrollTop:2280},1e3)}),$("#phocketMedia").on("click",function(){e?$("html, body").animate({scrollTop:5730},1e3):$("HTML, BODY").animate({scrollTop:3900},1e3)}),$("#phocketBlogs").on("click",function(){e?$("html, body").animate({scrollTop:6190},1e3):$("HTML, BODY").animate({scrollTop:4610},1e3)}),$("#phocketTestimonials").on("click",function(){e?$("html, body").animate({scrollTop:5010},1e3):$("HTML, BODY").animate({scrollTop:3380},1e3)})});	$(function() {
	$('.phocket-menu-icon').on('click', function() {
		$('.phocket-menu-items').toggleClass('open');
	});
	$('.phocket-main-home').on('click', function() {
		$('.phocket-menu-items').removeClass('open');
	});
	$('.header-a').on('click', function() {
		$('.phocket-menu-items').toggleClass('open');
	});
	$('.main-banner').on('click', function() {
		$('.phocket-menu-items').removeClass('open');
	});
	$('#getApp').on('click', function() {
		$('.get-phocket-app').toggleClass('open');
	});
});

