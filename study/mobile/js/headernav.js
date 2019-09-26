// JavaScript Document
window.onload = function(){
	document.getElementById("top-menu").innerHTML="<div class='uu-header'><div class='container'><a href='http://wan3.cn/forum/liangxin/upload/forum.php' target='_blank'><div class='uu-site'><div class='web-site'>liangxin.org<span></span></div><canvas id='myCanvas' width='120' height='29'>五边形</canvas></div></a><div class='uu-logo'><a href='../index.html'><img src='http://cdn.c2engine.com/c2engine/img/logo.png' width='55' alt=''/></a></div><div id='uu-bar'><div></div><div></div><div></div></div><div id='down-uu'><ul class='uu-ul-head'><li class='dotted'><a href='../c2_editor.html'>C²engine</a></li><li class='dotted'><a href='../show.html'>展示</a></li><li class='dotted'><a href='index.html' target='_blank'>学习中心</a></li><li class='dotted'><a href='http://bbs.c2engine.com' target='_blank'>社区</a></li><li class='dotted'><a href='../vr.html'>VR</a></li><li class='dotted'><a href='http://bbs.c2engine.com/forum.php' target='_blank'>开发平台</a></li><li class='dotted'><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=42' target='_blank'>申请投资</a></li><li class='dotted'><a href='../about_opportunity.html'>工作机会</a></li></ul><ul class='uu-right'><li class='dotted'><a href='http://bbs.c2engine.com/member.php?mod=register' target='_blank'><span class='glyphicon glyphicon-user' aria-hidden='true'></span>登录</a></li><li class='dotted'><a href='../download.html'><span class='btn-primary'>获取C²engine</span></a></li></ul></div></div></div>"+
	"<div class='sub-header'><div class='container'><div class='sub-logo'><h1>C²engineengine</h1></div><div id='sub-bar'><div><span id='pic-sub'></span></div></div><div id='sub-down'><ul class='sub-ul-head'><li onclick='clickdoc()'><span id='doc'>文档</span></li><li onclick='clickvideo()'><span id='video'>视频教程</span></li><li onclick='clickapi()'><span id='api'>API</span></li><li onclick='clickfaq()'><span id='faq'>FAQ</span></li></ul></div></div></div>";
        var myCanvas=document.getElementById("myCanvas");
        var context=myCanvas.getContext("2d");
        context.fillStyle='rgb(77,75,77)';
        context.lineWidth=0;
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(0,19);
        context.lineTo(50,29);
        context.lineTo(100,19);
        context.lineTo(100,0);
        context.closePath();
        context.fill();
		var abc=document.getElementById('down-uu');
		var fff=document.getElementById('uu-bar');
		document.getElementById('uu-bar').addEventListener('click',function(){
			$(abc).slideToggle();
			});
		var sub=0;
		document.getElementById('sub-bar').addEventListener('click',function(){
			$("#sub-down").slideToggle();
			sub++;
			$("#pic-sub").css("transform","rotate("+180*sub+"deg)");
		});
			
	var url = document.location.toString();
	var arrObj = url.split("?");
	if(arrObj.length > 1)
	{
		var arrPara = arrObj[1].split("&");
		var arr
		for(var i = 0; i < arrPara.length;i++)
		{
			arr = arrPara[i].split("=");
			if(arr !=null && arr[0] == "study" && arr[1] == "doc")
			{

				clickdoc();
			}else if(arr !=null && arr[0] == "study" && arr[1] == "video")
			{
				clickvideo();
			}else if(arr !=null && arr[0] == "study" && arr[1] == "faq")
			{
				clickfaq();
			}else if(arr !=null && arr[0] == "study" && arr[1] == "api")
			{
				clickapi();
			}
		}
	}else{
		clickdoc();
	}
}

window.onresize = function(){
	document.getElementById("top-menu").innerHTML="<div class='uu-header'><div class='container'><a href='http://wan3.cn/forum/liangxin/upload/forum.php' target='_blank'><div class='uu-site'><div class='web-site'>liangxin.org<span></span></div><canvas id='myCanvas' width='120' height='29'>五边形</canvas></div></a><div class='uu-logo'><a href='../index.html'><img src='http://cdn.c2engine.com/c2engine/img/logo.png' width='55' alt=''/></a></div><div id='uu-bar'><div></div><div></div><div></div></div><div id='down-uu'><ul class='uu-ul-head'><li class='dotted'><a href='../c2_editor.html'>C²engine</a></li><li class='dotted'><a href='../show.html'>展示</a></li><li class='dotted'><a href='index.html' target='_blank'>学习中心</a></li><li class='dotted'><a href='http://bbs.c2engine.com' target='_blank'>社区</a></li><li class='dotted'><a href='../vr.html'>VR</a></li><li class='dotted'><a href='http://bbs.c2engine.com/forum.php' target='_blank'>开发平台</a></li><li class='dotted'><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=42' target='_blank'>申请投资</a></li><li class='dotted'><a href='../about_opportunity.html'>工作机会</a></li></ul><ul class='uu-right'><li class='dotted'><a href='http://bbs.c2engine.com/member.php?mod=register' target='_blank'><span class='glyphicon glyphicon-user' aria-hidden='true'></span>登录</a></li><li class='dotted'><a href='../download.html'><span class='btn-primary'>获取C²engine</span></a></li></ul></div></div></div>"+
	"<div class='sub-header'><div class='container'><div class='sub-logo'><h1>C²engineengine</h1></div><div id='sub-bar'><div><span id='pic-sub'></span></div></div><div id='sub-down'><ul class='sub-ul-head'><li onclick='clickdoc()'><span id='doc'>文档</span></li><li onclick='clickvideo()'><span id='video'>视频教程</span></li><li onclick='clickapi()'><span id='api'>API</span></li><li onclick='clickfaq()'><span id='faq'>FAQ</span></li></ul></div></div></div>";
        var myCanvas=document.getElementById("myCanvas");
        var context=myCanvas.getContext("2d");
        context.fillStyle='rgb(77,75,77)';
        context.lineWidth=0;
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(0,19);
        context.lineTo(50,29);
        context.lineTo(100,19);
        context.lineTo(100,0);
        context.closePath();
        context.fill();
		var abc=document.getElementById('down-uu');
		var fff=document.getElementById('uu-bar');
		document.getElementById('uu-bar').addEventListener('click',function(){
			$(abc).slideToggle();
			});
		var sub=0;
		document.getElementById('sub-bar').addEventListener('click',function(){
			$("#sub-down").slideToggle();
			sub++;
			$("#pic-sub").css("transform","rotate("+180*sub+"deg)");
		});
}



function clickdoc(){
	$("#main").attr("src","doc/index.html?win=doc");
	$("#doc").addClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickvideo(){
	$("#main").attr("src","doc/index.html?win=video");
	$("#doc").removeClass("sec_header_span");
	$("#video").addClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickapi(){
	$("#main").attr("src","html/index.html");
	$("#doc").removeClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").addClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickfaq(){
	$("#main").attr("src","doc/index.html?win=faq");
	$("#doc").removeClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").addClass("sec_header_span");
}

 
    
