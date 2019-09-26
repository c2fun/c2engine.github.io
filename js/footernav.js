// JavaScript Document
function initfooterNav(){
	document.getElementById("bottom-menu").innerHTML=
		"<div class='container uu-footer'>"+
			"<div class='container-footer'><ul><li class='footer-enum-li'><a href='about_company.html'>公司简介</a></li><li class='footer-enum-li'><a href='about_company.html#c2_addr'>联系方式</a></li><li><a href='about_opportunity.html' style='display: none;'>人才招聘</a></li></ul></div>"+
			"<ul class='container-footer-ul'><li><div class='QRcode-footer uu_footer'><img src='http://cdn.c2engine.com/c2engine/img2/index/weixin_code.png'/><p>C²engine资讯平台</p></div></li>"+
		"</div>"+
		"<div class='container gongan'>"+
		"<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502202202'><img src='http://cdn.c2engine.com/c2engine/img2/index/wangjing.png'/><p>沪公网安备 31011502202202号</p></a>"+
		"<a><p>沪ICP备15042356号-2</p></a>"+
		"</div>";

	$('.uu_footer div span').click(function(){
		var w=window.innerWidth;
		if(w<=878){
	    $(this).next().slideToggle();
	    if($(this).css('background-image').match('plus')){
	        $(this).css('background-image','url(http://cdn.c2engine.com/c2engine/img2/minus.png)')
	    }
	    else{
	        $(this).css('background-image','url(http://cdn.c2engine.com/c2engine/img2/plus.png)')
	    }
	  }
	});
}

$(document).ready(function(){
	initfooterNav();
});

$(window).resize(function(){
	initfooterNav();
});