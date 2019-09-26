 $(document).ready(function(){

    $("#ykbf").hide();
    var w=window.innerWidth;
	$("#bf-poster,#bf-btn").click(function(){
	    $("#bf-poster,#bf-btn").hide();
	    // if(browser.versions.mobile){
	    // 	$("#movie").append("<video autoplay='autoplay' controls='controls' style='width: 100%; display: block;'>"+
		   //  		"<source src='http://cdn.c2engine.com/c2engine/movie/muguang/muguang.mp4' type='video/mp4' >"+
		   //  		"<source src='http://cdn.c2engine.com/c2engine/movie/muguang/muguang.webm' type='video/webm' >你的浏览器不支持html5标签</video>");
	    // }else{
			$("#movie").append(
				//"<embed id='youku-html5player-video' src='http://player.youku.com/player.php/sid/XNjc1MTgzMzk2/v.swf' allowFullScreen='true' quality='high' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>"
				"<iframe id='youku-html5player-video' src='http://player.youku.com/embed/XMTg2NTcxMDY1Ng==' frameborder=0 'allowfullscreen'></iframe>"
				);    
			$("#youku-html5player-video").width($("#bf-poster").width());
			$("#youku-html5player-video").height($("#youku-html5player-video").width() * 0.7);
		// }
	    $("#ykbf").css("display","block");
	    $("#ykbf").css("height","400px");
	    if(w<=768&&w>449){
	        $("#ykbf").css("margin-top","20px");
	        $("#ykbf").css("height","350px");
	    }
	    if(w<=449){
	        $("#ykbf").css("margin-top","20px");
	        $("#ykbf").css("height","240px");
	    }
	});

 	$('.game-show').mouseover(function(){
 		$(this).find('.playvideo').addClass('playvideo-mouseover');
 	})

 	$('.game-show').mouseout(function(){
		$(this).find('.playvideo').removeClass('playvideo-mouseover');
	});

	$('.game-show').click(function(){
		var url=$(this).find('.movefield').attr('src');
		$('.pout-movie-common').find('.movie-playfield iframe').attr('src',url);
		$("#movie iframe").remove();
		$("#bf-poster,#bf-btn").show();
		lockbodystroll(1);
		$(".pout-movie-common").fadeIn(300);
		var moviewidth = $(".pout-movie-common .movie-playfield").width();
		$(".movie-playfield iframe").width(moviewidth);
		$(".movie-playfield iframe").height(moviewidth * 0.7);
	});

	$('.movie-img-show').click(function(){
		var url=$(this).find('.movefield').attr('src');
		if(url != null){
			$('.pout-movie-common').find('.movie-playfield iframe').attr('src',url);
			$("#movie iframe").remove();
			$("#bf-poster,#bf-btn").show();
			lockbodystroll(1);
			$(".pout-movie-common").fadeIn(300);
			var moviewidth = $(".pout-movie-common .movie-playfield").width();
			$(".movie-playfield iframe").width(moviewidth);
			$(".movie-playfield iframe").height(moviewidth * 0.7);
		}
	});

 	$('.threed-show-half').mouseover(function(){
 		$(this).find('.playvideo').addClass('playvideo-mouseover');
 	})

 	$('.threed-show-half').mouseout(function(){
		$(this).find('.playvideo').removeClass('playvideo-mouseover');
	});

	$("#show_3d_al").click(function(){
		 if ((navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i))) {
			window.open("http://wan3.cn/threejs/e_commerce/index.html");
		}
        else if ((navigator.userAgent.match(/(phone|pad|pod|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			$(".pimg").hide();
			$("#sh_common_iframe").attr("src" ,"http://wan3.cn/threejs/e_commerce");
			lockbodystroll(2);
		}
		else {
			$(".pimg").show();
			$(".pimg").attr("src","http://cdn.c2engine.com/c2engine/img/show/sh_ds.png");
			$("#sh_common_iframe").attr("src" ,"http://wan3.cn/threejs/e_commerce/index_t.html");
			lockbodystroll(2);
		}
    });

    $("#show_3d_house").click(function(){
    	if ((navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i))) {
			window.open("http://wan3.cn/threejs/sandTable/index.html");
		}
        else if ((navigator.userAgent.match(/(phone|pad|pod|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			$(".pimg").hide();
		    $("#sh_common_iframe").attr("src" ,"http://wan3.cn/threejs/sandTable");
			lockbodystroll(2);
		}
		else {
			$(".pimg").show();
			$(".pimg").attr("src","http://cdn.c2engine.com/c2engine/img/show/sh_lp.png");
		    $("#sh_common_iframe").attr("src" ,"http://wan3.cn/threejs/sandTable/index_L.html");
			lockbodystroll(2);
		}
    });

    $("#show_3d_education").click(function(){
    	if ((navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i))) {
			window.open("http://wan3.cn/threejs/panda/index.html");
		}
        else if ((navigator.userAgent.match(/(phone|pad|pod|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			$(".pimg").hide();
		    $("#sh_common_iframe").attr("src" ,"http://wan3.cn/threejs/panda/index.html");
			lockbodystroll(2);
		}
		else {
			$(".pimg").show();
			$(".pimg").attr("src","http://cdn.c2engine.com/c2engine/img/show/sh_pd.png");
			$("#sh_common_iframe").attr("src" ,"http://wan3.cn/threejs/panda/index_t.html");
			lockbodystroll(2);
		}
    });

    $("#close-mov-common").click(function(){
        $(".pimg").attr("src","");
		$("#sh_common_iframe").attr("src" ,"");
		unlockbodystroll(2);
    });

    $("#close-movie-common").click(function(){
        $('.pout-movie-common').find('.movie-playfield iframe').children().remove();
        unlockbodystroll(1);
    });


	function isBrowser(){ 
	    var Sys={}; 
	    var ua=navigator.userAgent.toLowerCase(); 
	    var s; 
	    (s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]: 
	    (s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]: 
	    (s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]: 
	    (s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]: 
	    (s=ua.match(/version\/([\d.]+).*safari/))?Sys.safari=s[1]:0; 
	    if(Sys.ie){//Js判断为IE浏览器 
	        alert('http://www.phpernote.com'+Sys.ie); 
	        if(Sys.ie=='9.0'){//Js判断为IE 9 
	        	
	        }else if(Sys.ie=='8.0'){//Js判断为IE 8 
	        	
	        }else{ 
	        	
	        } 
	    } 
	    if(Sys.firefox){//Js判断为火狐(firefox)浏览器 
	        alert('http://www.phpernote.com'+Sys.firefox); 
	    } 
	    if(Sys.chrome){//Js判断为谷歌chrome浏览器 
	        alert('http://www.phpernote.com'+Sys.chrome); 
	    } 
	    if(Sys.opera){//Js判断为opera浏览器 
	        alert('http://www.phpernote.com'+Sys.opera); 
	    } 
	    if(Sys.safari){//Js判断为苹果safari浏览器 
	        alert('http://www.phpernote.com'+Sys.safari); 
	    } 
	} 
});

$(window).resize(function(){
	$("#youku-html5player-video").width($("#bf-poster").width());
	$("#youku-html5player-video").height($("#bf-poster").height());
	var moviewidth = $(".pout-movie-common .movie-playfield").width();
	$(".movie-playfield iframe").width(moviewidth);
	$(".movie-playfield iframe").height(moviewidth * 0.7);
});

function lockbodystroll(switch_id){
	$("#movie iframe").remove();
	$("#bf-poster,#bf-btn").show();
	$('body').css('overflow','hidden');
	$('body').on('touchmove',function(e){
		e.preventDefault();
	},false);
	if(switch_id == 1){
		$('.pout-movie-common').css('overflow','hidden');
		$(".pout-movie-common").fadeIn(300);
	}else if(switch_id == 2){
		$('.pout-ng-common').css('overflow','hidden');
		$(".pout-ng-common").fadeIn(300);
	}
};


function unlockbodystroll(switch_id){
	$('body').css('overflow','auto');
	$('body,iframe').unbind('touchmove');
	if(switch_id == 1){
		$('.pout-movie-common').css('overflow','auto');
		$(".pout-movie-common").fadeOut(300);
	}else if(switch_id == 2){
		$('.pout-ng-common').css('overflow','auto');
		$(".pout-ng-common").fadeOut(300);
	}
};

