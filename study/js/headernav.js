// JavaScript Document
function initTopNav(){
	$('#top-menu').children().remove();
	$('#top-menu').append(
		"<div class='uu-header'>"+
			"<div class='container'>"+
				"<div class='uu-logo'>"+
					"<a href='../index.html'>"+
						"<img src='http://cdn.c2engine.com/c2engine/img/logo.png' width='55' alt=''/>"+
					"</a>"+
				"</div>"+
				"<div id='uu-bar'><a class='fa fa-reorder'></a></div>"+
				"<div id='down-uu'>"+
					"<ul class='uu-ul-head'>"+
						"<li><a href='#'>平台介绍</a>"+
							"<ul class='main-nav-menu' style='display:none;'>"+
								"<li><a href='../platformintroduction.html?index=index-editor'>编辑器</a></li>"+
								"<li><a href='../platformintroduction.html?index=index-h5'>HTML5</a></li>"+
								"<li><a href='../platformintroduction.html?index=index-vrar'>VR/AR</a></li>"+
							"</ul>"+
						"</li>"+
						"<li><a href='../show.html'>案例展示</a></li>"+
						"<li><a href='#'>开发者</a>"+
							"<ul class='main-nav-menu' style='display:none;'>"+
								"<li><a href='index.html'>学习教程</a></li>"+
								"<li><a href='http://bbs.c2engine.com/forum.php' target='_blank'>互动社区</a></li>"+
								"<li><a href='../searchcoo.html'>寻求合作</a></li>"+
							"</ul>"+
						"</li>"+
						"<li><a href='../channelcoo.html'>渠道合作</a></li>"+
						"<li></li>"+
					"</ul>"+
					"<ul class='uu-right'>"+
						"<li><a href='http://bbs.c2engine.com/member.php?mod=register' target='_blank'><span class='glyphicon glyphicon-user' aria-hidden='true'></span>登录</a></li>"+
						"<li><a href='download.html'><span class='btn-primary'>即将上线 敬请期待</span></a></li>"+
					"</ul>"+
				"</div>"+
			"</div>"+
		"</div>"+
		"<div class='sub-header'>"+
			"<div class='container'>"+
				"<div class='sub-logo'><h1>C²engine</h1></div>"+
			"<div id='sub-bar'><div><span id='pic-sub'></span></div></div>"+
			"<div id='sub-down'>"+
				"<ul class='sub-ul-head'>"+
					"<li onclick='clickdoc()'><span id='doc'>文档</span></li>"+
					"<li onclick='clickvideo()'><span id='video'>视频教程</span></li>"+
					"<li onclick='clickapi()'><span id='api'>API</span></li>"+
					"<li onclick='clickfaq()'><span id='faq'>FAQ</span></li>"+
				"</ul>"+
			"</div>"+
		"</div>");

	var nav = $(".uu-ul-head");			
	//add indicator and hovers to submenu parents
	nav.find("li").each(function() {
		if ($(this).find("ul").length > 0) {
			if($(window).width() > 1123){
				//show subnav on hover
				$(this).mouseenter(function() {
					$(this).find("ul").stop(true, true).slideDown();
				});
				
				//hide submenus on exit
				$(this).mouseleave(function() {
					$(this).find("ul").stop(true, true).slideUp();
				});
			}else{
				$(this).click(function() {
				 	$(this).find("ul").stop(true, true).slideToggle();
				});
			}
		}
	});

	$('#uu-bar').click(function(){
		$('#down-uu').slideToggle();
	});	

	$('#sub-bar').click(function(){
		$('#sub-down').slideToggle();
	});
}

$(document).ready(function(){
	$("<link>").attr({rel:'stylesheet',type:'text/css',href:'../font-awesome-4.6.3/css/font-awesome.min.css'}).appendTo("head");
	initTopNav();
});

$(window).resize(function(){
	initTopNav();
});


function clickdoc(){
	var newDate = (new Date).getTime();
	$("#main").attr("src","doc/index.html?win=doc&"+"newDate="+newDate);
	$("#doc").addClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickvideo(){
	var newDate = (new Date).getTime();
	$("#main").attr("src","doc/index.html?win=video&"+"newDate="+newDate);
	$("#doc").removeClass("sec_header_span");
	$("#video").addClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickapi(){
	var newDate = (new Date).getTime();
	$("#main").attr("src","html/index.html?"+"newDate="+newDate);
	$("#doc").removeClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").addClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickfaq(){
	var newDate = (new Date).getTime();
	$("#main").attr("src","doc/index.html?win=faq&"+"newDate="+newDate);
	$("#doc").removeClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").addClass("sec_header_span");
}


  /*            
        $(document).ready(function() {
            $(window).bind("resize",resizeWindow);
            function resizeWindow(e){
                window.location.reload();
            }
        });
       */ 