function ResetSubLayout(){
	if($(window).width() > 1140){
		$('#sub-down').slideDown(0);
	}else{
		$('#sub-down').slideUp(0);
	}
	$('#content-body-div').height($(window).height() - 123 +"px");
}

function clickdoc(){
	var newDate = (new Date).getTime();
	$("#main-iframe").attr("src","doc/index.html?win=doc&"+"newDate="+newDate);
	$("#doc").addClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickvideo(){
	var newDate = (new Date).getTime();
	$("#main-iframe").attr("src","doc/index.html?win=video&"+"newDate="+newDate);
	$("#doc").removeClass("sec_header_span");
	$("#video").addClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickapi(){
	var newDate = (new Date).getTime();
	$("#main-iframe").attr("src","html/index.html?"+"newDate="+newDate);
	$("#doc").removeClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").addClass("sec_header_span");
	$("#faq").removeClass("sec_header_span");
}
function clickfaq(){
	var newDate = (new Date).getTime();
	$("#main-iframe").attr("src","doc/index.html?win=faq&"+"newDate="+newDate);
	$("#doc").removeClass("sec_header_span");
	$("#video").removeClass("sec_header_span");
	$("#api").removeClass("sec_header_span");
	$("#faq").addClass("sec_header_span");
}

$(document).ready(function(){
	$('#sub-bar').click(function(){
		$('#sub-down').slideToggle();
	});
	var url = document.location.toString();
	var arrObj = url.split("?");
	if(arrObj.length > 1)
	{
		var arrPara = arrObj[1].split("&");
		var arr;
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
	ResetSubLayout();
});

$(window).resize(function(){
	ResetSubLayout();
});