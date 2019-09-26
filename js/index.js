
$(document).ready(function(){
	$("div[name='pic']").hover(function() {
		$(this).find('.show-more-content-auto').animate({bottom:'0'}, {duration: 500});
		$(this).find('p').hide();
	},function(){
		$(this).find('.show-more-content-auto').animate({bottom:'-100%'}, {duration: 500});
		$(this).find('p').show();
	});
	/*$('#tutorial-entry,#interactive-entry,#cooperation-entry').hover(function(){
		//$(this).find('.show-content').animate({bottom:'100%'}, {duration: 500});
		$(this).find('.show-more-content').animate({top:'0'}, {duration: 500});
	},function(){
		//$(this).find('.show-content').animate({bottom:'0'}, {duration: 500});
		$(this).find('.show-more-content').animate({top:'100%'}, {duration: 500});
	});*/

    $('.single-item').slick({
          arrows: false,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          autoplay: false,
          autoplaySpeed: 3000,
          focusOnSelect:false,
          pauseOnHover:false,
          dots: false
    });

	$(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        prevArrow:"<button type='button' data-role='none' class='c2-slick-prev' aria-label='Previous' role='button' style='display: block;'></button>",
        nextArrow:"<button type='button' data-role='none' class='c2-slick-next' aria-label='Next' role='button' style='display: block;'></button>",
        responsive:[
            {   breakpoint: 768,
                settings:{
                    dots: false,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows:false
                }
            }
        ]
    });
	

	$("#playmov").click(function(){
	    $(".pout-ng").fadeIn(300);
	    	$(".pout-ng").append("<div class='movie-playfield'>"+
	            "<video autoplay='autoplay' controls='controls' style='width: 100%; display: block;'>"+
	                "<source src='http://cdn.c2engine.com/c2engine/movie/muguang.mp4' type='video/mp4' >"+
	                "<source src='http://cdn.c2engine.com/c2engine/movie/muguang.webm' type='video/webm>'"+ 
	                "你的浏览器不支持html5标签</video></div>");
    });
    $("#offmov").click(function(){
        $(".pout-ng").fadeOut(300);
        $(".movie-playfield").remove();
        });
    var h=window.innerHeight;
    var ut=h*0.98;
    function sliderdown(){
        $("body,html").animate({scrollTop: $('#index-select6').offset().top},1000);
    };
});


function load (){
	var st1 = document.getElementById("scrollto1");
	var st2 = document.getElementById("scrollto2");
	var st3 = document.getElementById("scrollto3");
	var st4 = document.getElementById("scrollto4");
	var st5 = document.getElementById("scrollto5");
	//给每张图片都设置touch相关事件
	st1.addEventListener('touchstart',touch,false);
    st1.addEventListener('touchmove',touch,false);
    //st1.addEventListener('touchend',touch,false);
    st2.addEventListener('touchstart',touch,false);
    st2.addEventListener('touchmove',touch,false);
    //st2.addEventListener('touchend',touch,false);
    st3.addEventListener('touchstart',touch,false);
    st3.addEventListener('touchmove',touch,false);
    //st3.addEventListener('touchend',touch,false);
    st4.addEventListener('touchstart',touch,false);
    st4.addEventListener('touchmove',touch,false);
    //st4.addEventListener('touchend',touch,false);
    st5.addEventListener('touchstart',touch,false);
    st5.addEventListener('touchmove',touch,false);
    //st5.addEventListener('touchend',touch,false);
    
 	var s = new Array(2);
 	//var e = new Array(2);
 	var m = new Array(2);
    function touch (event){
        var event = event||window.event;
        switch(event.type){
            case "touchstart":
                s[0]= event.touches[0].clientX;
                s[1] = event.touches[0].clientY;
                break;
            case "touchmove":
                m[0] = event.touches[0].clientX;
                m[1] = event.touches[0].clientY;
				var height = s[1]-m[1];
				//向上滑 向下拉
				if(height>=15&&height<20){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+1);
        		}if(height>=20&&height<30){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+2);
        		}else if(height>=30&&height<40){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+3);
        		}else if(height>=40&&height<60){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+4);
                }else if(height>=60&&height<80){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+5);
                }else if(height>=80&&height<100){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+6);
               }else if(height>=100&&height<120){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+7);
               }else if(height>=1200&&height<140){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+8);
               }else if(height>=140&&height<160){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+9);
               }else if(height>=160&&height<180){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			$('body').scrollTop(scrolltop+10);
               }else if(height>=180){
        			st1.removeEventListener("touchmove");
        			st2.removeEventListener("touchmove");
        			st3.removeEventListener("touchmove");
        			st4.removeEventListener("touchmove");
        			st5.removeEventListener("touchmove");
               }
                
        		//向下滑 向上拉
        		if(height<=-15&&height>-20){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			//此时height为负数 仍然用+
    				$('body').scrollTop(scrolltop-1);
        		}else if(height<=-20&&height>-30){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
        			//此时height为负数 仍然用+
    				$('body').scrollTop(scrolltop-2);
        		}
        		else if(height<=-30&&height>-40){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-3);
        		}else if(height<=-40&&height>-60){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-4);
        		}
        		else if(height<=-60&&height>-80){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-5);
        		}else if(height<=-80&&height>-100){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-6);
        		}else if(height<=-100&&height>-120){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-7);
        		}else if(height<=-120&&height>-140){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-8);
        		}else if(height<=-140&&height>-160){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-9);
        		}else if(height<=-160&&height>-180){
        			event.preventDefault();
        			var scrolltop = document.body.scrollTop;
    				$('body').scrollTop(scrolltop-10);
        		}else if(height<=-180){
        			st1.removeEventListener("touchmove");
        			st2.removeEventListener("touchmove");
        			st3.removeEventListener("touchmove");
        			st4.removeEventListener("touchmove");
        			st5.removeEventListener("touchmove");
        		}
                break;
        }

    }
    $('#scrollto1').click(function(){
    	//play_video($(this).attr('video'));
    });
    $('#scrollto2').click(function(){
    	//play_video($(this).attr('video'));
    });
    $('#scrollto3').click(function(){
    	//play_video($(this).attr('video'));
    });
    $('#scrollto4').click(function(){
    	//play_video($(this).attr('video'));
    });
    $('#scrollto5').click(function(){
    	//play_video($(this).attr('video'));
    });

    function play_video(url){
    	$(".pout-ng").fadeIn(300);
    	$(".pout-ng").append("<iframe src='"+ url+"' frameborder=0 'allowfullscreen'></iframe>");
    }
}
window.addEventListener('load',load,false);
// $("div[name='pic']").live({
// 	mouseenter:function(){
// 		$(this).find("p").stop(true, true).slideUp();
// 		$(this).find("span").stop(true, true).slideDown();
// 	},
// 	mouseleave:function(){
// 		$(this).find("p").stop(true, true).slideDown();
// 		$(this).find("span").stop(true, true).slideUp();
// 	}
// });

function sliderdown(){
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? ('html') : $('body')):$('html,body');
    $body.animate({
        scrollTop: $('#index-select6').offset().top +"px"
    },1000);
}