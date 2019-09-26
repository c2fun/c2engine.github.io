/*包含什么*/
include_iconlist=[
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/animation.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/craphics.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/optimization.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/audio.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/physical.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/script.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/versioncontrol.png"
];

include_iconlisthighlight=[
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/animation.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/craphics.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/optimization.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/audio.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/physical.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/script.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/versioncontrol.png"
];

include_checkboxid=[
"include-checkbox-animation",
"include-checkbox-craphics",
"include-checkbox-optimization",
"include-checkbox-audio",
"include-checkbox-physical",
"include-checkbox-script",
"include-checkbox-versioncontrol"
];

include_title=[
	"动画",
	"图形",
	"优化",
	"音频",
	"物理",
	"脚本",
	"版本控制"
];

include_animation=[
	"可重定向的动画",
	"在运行时完全控制动画的权重",
	"在动画播放中进行事件调用",
	"复杂的状态机层次结构和转换",
	"面部动画混合形状"
];

include_craphics=[
	"基于Englighten的Realtime GlobalIllumination",
	"基于物理的着色",
	"反射探头",
	"由曲线和梯度驱动的模块化粒子系统",
	"直观的UI工具"
];

include_optimization=[
	"高级内存分析",
	"基于Umbra的遮挡剔除",
	"资源捆绑",
	"细节级别支持",
	"构建大小剥离",
	"多线程任务系统"
];

include_audio=[
	"实时混音和母带处理",
	"混音器的层级、快照和预定义效果"
];

include_physical=[
	"包含全面的效果器、关节和碰撞机的Box2D",
	"NVIDIA Physx3.3"
];

include_script=[
	"C#、JavaScript或者Boo",
	"具有先进自动化寻路和导航网格的AI功能"
];

include_versioncontrol=[
	"为Perforce和Plastic SCM提供完全集成的支持"
];

include_li_list=[include_animation,include_craphics,include_optimization,include_audio,include_physical,include_script,include_versioncontrol];

function initInclude(){
	var html="";
	for (var i = 0; i < include_iconlist.length; ++i) {
	html+=
		"<li class='include-checkbox-li' id='"+include_checkboxid[i]+"'>"+
		 "<img src='"+include_iconlist[i]+"'></img>"+
		 "<p>"+include_title[i]+"</p>"+
		"</li>";
	};
	$(".include-checkbox-ul").append(html);

	html="";
	$(".include-content-ul").append(
		"<div class='include-content-li-1'></div>"+
		"<div class='include-content-li-2'></div>"+
		"<div class='clear'></div>");
	$(".include-content-li-1").append("<img class='include-content-img' src='"+include_iconlisthighlight[0]+"'></img>");
	$(".include-content-li-2").append("<h1 class='include-content-title'>"+include_title[0]+"</h1><ul class='include-content-content'></ul>");
	for (var i = 0; i < include_animation.length; ++i) {
		html+="<li>"+include_animation[i]+"</li>";
	};
	$(".include-content-content").append(html);
}

$(document).ready(function(){
	initInclude();
	var checkboxlist = $('.include-checkbox-ul').children('.include-checkbox-li');

	for (var i = 0; i < checkboxlist.length; ++i) {
		$(checkboxlist[i]).find('img').attr('src',include_iconlist[i]);
		$(checkboxlist[i]).find('p').html(include_title[i]);
	};
	$('.include-checkbox-li').mouseover(function () {
		for (var i = 0; i < checkboxlist.length; ++i) {
			if ($(checkboxlist[i]).attr('id') == $(this).attr('id')) {
				if($(checkboxlist[i]).find('img').attr('src') == include_iconlist[i]){
					$(checkboxlist[i]).find('img').attr('src',include_iconlisthighlight[i]);
					$('.include-content-li-1').find('img').attr('src',include_iconlisthighlight[i]);
					$('.include-content-li-2').find('h1').html(include_title[i]);
					var html =""; //li_list[i];
					var length =  include_li_list[i].length;
					for(var j = 0; j < length; ++j){
					 	html +="<li>"+include_li_list[i][j]+"</li>";
					}
					$('.include-content-content').children().remove();
					$('.include-content-content').append(html);
				}
			}else{
				if($(checkboxlist[i]).find('img').attr('src') == include_iconlisthighlight[i] ){
					$(checkboxlist[i]).find('img').attr('src',include_iconlist[i]);
				}
			}
		};
	});
});

/*vr/ar*/

vrar_iconlist=[
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/tourism.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/fitting.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/property.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/military.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/unchecked/nationaldayapp.png"
];

vrar_iconlisthighlight=[
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/tourism.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/fitting.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/property.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/military.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/checked/nationaldayapp.png",
];

vrar_contentimg=[
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/tourism.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/fitting.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/property.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/military.png",
	"http://cdn.c2engine.com/c2engine/img2/platformintroduction/nationaldayapp.png"
];

vrar_checkboxid=[
	"vrar-checkbox-0",
	"vrar-checkbox-1",
	"vrar-checkbox-2",
	"vrar-checkbox-3",
	"vrar-checkbox-4"
];

vrar_knowmore=[
	"http://bbs.c2engine.com/forum.php?mod=viewthread&tid=80&extra=page%3D1",
	"http://bbs.c2engine.com/forum.php?mod=viewthread&tid=82&extra=page%3D1",
	"http://bbs.c2engine.com/forum.php?mod=viewthread&tid=81&extra=page%3D1	",
	"http://bbs.c2engine.com/forum.php?mod=viewthread&tid=83&extra=page%3D1",
	"http://bbs.c2engine.com/forum.php?mod=viewthread&tid=84&extra=page%3D1"
];

vrar_title=[
	"旅游",
	"试衣",
	"房产",
	"军事",
	"国庆献礼"
];

vrar_animation=[
	"C²engine的VR旅游解决方案可以为景区提供旅游文化的衍生性体验，为旅游事业创收"
];

vrar_craphics=[
	"C²engine的VR试衣系统让服装设计企业提高其设计过程中的沟通、效率、成本及展示等问题"
];

vrar_optimization=[
	"C²engine的VR房产应用将大大提高设计方案的展示效果，让消费者提前感知到未来房屋建筑的结构与装修状况"
];

vrar_audio=[
	"C²engine作为中国陆军专用引擎，通过原创的VR军事解决方案来提高军队训练的效率及成本问题，助力祖国军事力量的发展"
];

vrar_physical=[
	"C²engine通过AR技术让大家在社区报上看到“养老院-长者之家”全新装修后3D建筑模型，使居民或游客燃放环保安全的AR礼花。"
];

vrar_script=[
	"6666"
];

vrar_versioncontrol=[
	"7777"
];

vrar_li_list=[vrar_animation,vrar_craphics,vrar_optimization,vrar_audio,vrar_physical,vrar_script,vrar_versioncontrol];

function initARVR(){
var html="";
for (var i = 0; i < vrar_iconlist.length; ++i) {
	html+="<li class='vrar-checkbox-li' id='"+vrar_checkboxid[i]+"''>"+
			"<img src='"+vrar_iconlist[i]+"'></img>"+
			"<p>"+vrar_title[i]+"</p>"+
		"</li>";
};
$('.vrar-checkbox-ul').append(html);

$('.vrar-content-ul').append(
	"<div class='vrar-content-li-1'><img class='vrar-content-img' src='"+vrar_contentimg[0]+"'></img></div>"+
	"<div class='vrar-content-li-2'></div>"+
	"<div class='clear'></div>");
$('.vrar-content-li-2').append(
	"<p class='vrar-content-content'></p>"+
	"<a href='"+vrar_knowmore[0]+"' class='click-lookfor-more fa fa-angle-double-right' style='display:none;' target='_blank'>点击查看详情</a>");
$('.vrar-content-content').append("<li>"+vrar_li_list[0][0]+"</li>");
}

function getQueryString(name){
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null)
		return unescape(r[2]);
	return null;
}

function ScrollToDiv(divid){
	if (divid == null) {
		return;
	};

	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? ('html') : $('body')):$('html,body');
	$body.animate({
		scrollTop: $('#'+divid).offset().top +"px"
	},1000);
}

$(document).ready(function(){
	initARVR();

	var checkboxlist = $('.vrar-checkbox-ul').children('.vrar-checkbox-li');
	$('.vrar-checkbox-li').mouseover(function () {
		for (var i = 0; i < checkboxlist.length; ++i) {
			if ($(checkboxlist[i]).attr('id') == $(this).attr('id')) {
				if($(checkboxlist[i]).find('img').attr('src') == vrar_iconlist[i]){
					$(checkboxlist[i]).find('img').attr('src',vrar_iconlisthighlight[i]);
					$('.vrar-content-li-1').find('img').attr('src',vrar_contentimg[i]);
					$('.vrar-content-li-2').find('a').attr('href',vrar_knowmore[i]);
					var html =""; //li_list[i];
					var length =  vrar_li_list[i].length;
					for(var j = 0; j < length; ++j){
					 	html +="<li>"+vrar_li_list[i][j]+"</li>";
					}
					$('.vrar-content-content').children().remove();
					$('.vrar-content-content').append(html);
				}
			}else{
				if($(checkboxlist[i]).find('img').attr('src') == vrar_iconlisthighlight[i] ){
					$(checkboxlist[i]).find('img').attr('src',vrar_iconlist[i]);
				}
			}
		};
		
	});
	
});

window.onload = function(){
	ScrollToDiv(getQueryString('index'));
}