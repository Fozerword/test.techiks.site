var swiper = new Swiper(".mySwiper", {
			      	navigation: {
			          nextEl: ".swiper-button-next",
			          prevEl: ".swiper-button-prev",
			        },
			        
		      	});
var ok=false;




$(window).resize(function(){
	if(window.screen.width<768)
	{
		var menu_mobi=	'<input type="checkbox" id="nav-toggle" hidden>'+
	    				'<nav class="nav">'+
		        			'<label for="nav-toggle" class="nav-toggle" onclick></label>'+
							'<a href="#"><img src="img/png/NAAM1.png" alt="" class="logo"></a>'+
		        			'<ul>'+
					            '<li><a href="#1">À la carte</a>'+
					            '<li><a href="#2">Wijnkaart</a>'+
					            '<li><a href="#3">Lunchmenu</a>'+
					            '<li><a href="#4">Contact</a>'+
					        '</ul>'+
					        '<div class="socialMb">'+
					        '<button class="social start">Fb</button>'+
							'<button class="social">lg</button>'+
							'<button class="social">Tw</button>'+
							'<button class="social end">Yt</button>'+
							'</div>'+
				    	'</nav>';
		$('#socialE').removeClass("offset-5");
		$('#socialE').removeClass("offset-6");
		$('#socialE').addClass("offset-3");	  
		$('#imgNa').removeClass('col-md-3');
		$('#imgNa').addClass('col-md-4');	    	
		$('#menu').empty();
		$('#social').empty();	    	
		$('body').append(menu_mobi);
		ok=true;
	}
	if(window.screen.width>768 && ok)
	{
		var menu=	'<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-0"><img src="img/png/NAAM1.png" alt="изображение отсутствует" class="logo"></div>'+
				'<div class="col-xxl-6 col-xl-7 col-lg-7 col-md-8">'+
					'<ul class="menu">'+
						'<li><a href="index.html">À la carte</a></li>'+
						'<li><a href="index.html">Wijnkaart</a></li>'+
						'<li><a href="index.html">Lunchmenu</a></li>'+
						'<li><a href="index.html">Contact</a></li>'+
					'</ul>'+
				'</div>'+
				'<div class="offset-1 col-xxl-2 col-xl-2 col-lg-2 col-md-3" id="off">'+
					'<h5 id="phon">+32 9 282 57 25</h5>'+
				'</div>';
		var btns=		'<button class="social start">Fb</button>'+
						'<button class="social">lg</button>'+
						'<button class="social">Tw</button>'+
						'<button class="social end">Yt</button>';			
		$('#imgNa').removeClass('col-md-4');
		$('#imgNa').addClass('col-md-3');
		$('#nav-toggle').remove();
		$('.nav').remove();	    	
		$('#menu').html(menu);
		$('#social').append(btns);
		ok=false;		
	}

	if(window.screen.width<1400 && window.screen.width>768){
	$('#off').removeClass("offset-1");
	$('#socialE').removeClass("offset-6");
	$('#socialE').addClass("offset-5");
	}
	else{
		$('#off').addClass("offset-1");
		$('#socialE').removeClass("offset-5");
		$('#socialE').addClass("offset-6");
	}
	if(window.screen.width<1200 && window.screen.width>768){
		$('#social').removeClass('offset-3');
		$('#social').addClass('offset-2');
		$('#socialE').removeClass("offset-5");
		$('#socialE').addClass("offset-4");
	}
	else{
		$('#social').removeClass('offset-2');
		$('#social').addClass('offset-3');
		$('#socialE').removeClass("offset-4");
		$('#socialE').addClass("offset-5");
	}
});




if(window.screen.width<768)
	{
		var menu_mobi=	'<input type="checkbox" id="nav-toggle" hidden>'+
	    				'<nav class="nav">'+
		        			'<label for="nav-toggle" class="nav-toggle" onclick></label>'+
		            		'<a href="#"><img src="img/png/NAAM1.png" alt="" class="logo"></a>'+
		        			'<ul>'+
					            '<li><a href="#1">À la carte</a>'+
					            '<li><a href="#2">Wijnkaart</a>'+
					            '<li><a href="#3">Lunchmenu</a>'+
					            '<li><a href="#4">Contact</a>'+
					        '</ul>'+
					    	'<div class="socialMb">'+
						        '<button class="social start">Fb</button>'+
								'<button class="social">lg</button>'+
								'<button class="social">Tw</button>'+
								'<button class="social end">Yt</button>'+
								'</div>'+
					    	'</nav>';

		$('#socialE').removeClass("offset-5");
		$('#socialE').removeClass("offset-6");
		$('#socialE').addClass("offset-3");	  
		$('#imgNa').removeClass('col-md-3');
		$('#imgNa').addClass('col-md-4');	    	
		$('#menu').empty();
		$('#social').empty();	    	
		$('body').append(menu_mobi);
		ok=true;
	}
	if(window.screen.width<1400 && window.screen.width>768){
	$('#off').removeClass("offset-1");
	$('#socialE').removeClass("offset-6");
	$('#socialE').addClass("offset-5");
	}
	else{
		$('#off').addClass("offset-1");
	}
	if(window.screen.width<1200 && window.screen.width>768){
		$('#social').removeClass('offset-3');
		$('#social').addClass('offset-2');
		$('#socialE').removeClass("offset-5");
		$('#socialE').addClass("offset-4");
	}
	else{
		$('#social').removeClass('offset-2');
		$('#social').addClass('offset-3');
	}
