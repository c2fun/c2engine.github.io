var height;
	if(browser.versions.mobile){
			dynamicLoading.css("mobile/css/main.css");
			dynamicLoading.css("mobile/css/index.css");
			dynamicLoading.js("mobile/js/headernav.js");
			function hidmenu(){
				if(!$("#down-uu").is(":hidden")){
					$("#down-uu").slideToggle();
				}
				if(!$("#sub-down").is(":hidden")){
					$("#sub-down").slideToggle();
				}
			}
		}else{
			dynamicLoading.css("css/main.css");
			dynamicLoading.css("css/index.css");
			dynamicLoading.js("js/headernav.js");
		}
		function checkJsLoad(JsName){
			var js = /js$/i.test(JsName);
			var es = document.getElementsByTagName(js?'script':'link');
			for(var i=0;i<es.length;i++)
			{
				if(es[i][js?'src':'href'].indexOf(JsName) != -1){
					return true;
				}
			}
			checkJsLoad(JsName);
		}

		function reinitIframe(){  
		var iframe = document.getElementById("main");  
		try{  
		    var bHeight = iframe.contentWindow.document.body.scrollHeight;  
		    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;  
		    if(height != dHeight){  
		    	height = dHeight;
			    iframe.height = dHeight; 
			  }
		}catch (ex){}  
		}  
		  
		var timer1 = window.setInterval("reinitIframe()", 500); //定时开始  
		  
		function reinitIframeEND(){  
		var iframe = document.getElementById("main");  
		try{  
		    var bHeight = iframe.contentWindow.document.body.scrollHeight;  
		    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;  
		    var height = Math.max(bHeight, dHeight);  
		    iframe.height = height;  
		}catch (ex){}   
		window.clearInterval(timer1);  
		  
		}  