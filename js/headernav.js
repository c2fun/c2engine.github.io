// JavaScript Document
$(document).ready(function(){
	$("<link>").attr({rel:'stylesheet',type:'text/css',href:'./plugin/font-awesome-4.6.3/css/font-awesome.min.css'}).appendTo("head");
	$("<link>").attr({rel:'stylesheet',type:'text/css',href:'css/main.css'}).appendTo("head");
	$("<link>").attr({rel:'stylesheet',type:'text/css',href:'css/login-css.css'}).appendTo("head");
	$("<scr"+"ipt>").attr({rel:'reload',type:'text/JavaScript',src:'./js/md5.js'}).appendTo("head");
	var src="./plugin/eruda/eruda.min.js";
	initTopNav();
	ResetTopLayout();
	if(!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
	$("<scr"+"ipt>").attr({rel:'reload',type:'text/JavaScript',src:'./plugin/eruda/eruda.min.js'}).appendTo("head");

	eruda.init();
});

$(function () {
	var ajaxUrl = {
		uri: "http:\/\/wan3.cn:8080\/c2hub\/",
		test: "http:\/\/localhost:8080\/c2hub\/",
		login:"generallyLogin.action",
		register:"generallyRegister.action",
		email:"sendEmail.action",
		reset:"resetPwd.action"
	};
	var login=ajaxUrl["uri"] + ajaxUrl["login"];
	var register=ajaxUrl["uri"] + ajaxUrl["register"];
	var submitEmail = ajaxUrl["uri"] + ajaxUrl["email"];
	var reset = ajaxUrl["uri"] + ajaxUrl["reset"];
	var loginTag = false;														//用于记录登陆成功之后的标示，避免登陆成功之后点击登陆按钮依然唤起登陆窗口
	var saveTag = true;
	var imgUrl = "http://www.c2engine.com:8080/c2hub/getImage.action?code=";	//验证码图片获取地址
	var sessionKey = "C2_OFFICIAL_USERNAME";									//目前用于下载界面逻辑判断
	var sessionGuestName = "C2_GUEST_NAME";										//没有选择记住账号时将用户名保存到session中，会随界面关闭而销毁
	var resetUName = "";
	var resetSign = "";
	
	function createLogin() {
	    $(".container-outer").remove();
	    $("body").append(
	        "<div class='container-outer'>" +
		        "<div class='container container-login'>" +
			        "<form class='form_login-user'>" +
				        "<div class='form-pic'>" +
				        	"<img src='./img/logo_new.png' width='72%' height='72%' style='margin-top: -120px;' alt=''/>" +
				        "</div>" +
			        	"<h4 class='register-title'>登录账号</h4>" +
				        "<div class='lay_input-user'>" +
					        "<!-- <label>用户名</label> -->" +
					        "<input type='text' class='lay_name focus-input' name='username' placeholder='电子邮件'/>" +
				        "<div></div>"+
				        "</div>" +
					    "<div class='lay_input-user'>" +
					        "<!-- <label>密码</label> -->" +
					        "<input type='password' class='lay_name focus-input' name='password' placeholder='密码'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<div class='lay_box'>" +
					        "<label style='top:0;'>" +
					        	"<input style='width:0;height:0;display:none;' type='checkbox' class='check_box' id='agreerule' tabindex='5'/><label id='rulelabel' for='agreerule'>记住账号</label>" +
					        "</label>" +
					        "<a href='javascript:void(0)' class='lay_forget-pwd'>忘记密码？</a>" + 
				        "</div>" +
				        "<button type='button' class='lay_button'>登录</button>" +
				        "<div class='lay_footer'>" +
				        	"<a class='lay_gt-msg'>还没有C²ENGINE账号？</a>" +
				        	"<a href='javascript:void(0)' class='btn-reg' style='margin:0 138px;'>注册账号</a>" +
				        "</div>" +
			        "</form>" +
		        "</div>" +
	        "</div>");
	    
	    $(".lay_box").css("margin-top", "-2px");
		if (localStorage.getItem("checkState") == "true") {
        	$(".check_box")[0].checked = true;
        } else if (localStorage.getItem("checkState") == "false") {
			$(".check_box")[0].checked = false;
        }
	}

	function createRegister() {
	    $(".container-outer").remove();
	    $("body").append(
	        "<div class='container-outer'>" +
		        "<div class='container container-register'>" +
		        	"<!-- <div>" +
		        		// "<img src='http://cdn.c2engine.com/c2engine/img2/logo_login.png' width='184' height='64'  alt=''/>" +
		        	"<img src='./img/logo_new.png' width='184' height='64'  alt=''/>" +
		        	"</div> -->" +
			        "<form class='form_reg'>" +
				        "<div class='form-pic'>" +
				        	"<img src='./img/logo_new.png' width='72%' height='72%' style='margin-top: -120px;' alt=''/>" +
				        "</div>" +
				        "<h4 class='register-title'>注册账号</h4>" +
				        "<!-- <div class='lay_input-reg'>" +
				        "<label>用户名</label>" +
				        "<input type='text' class='lay_reg focus-input' name='username' />" +
				        "<div></div>"+
				        "</div> -->" +
				        "<div class='lay_input-reg'>" +
					        "<!-- <label>邮箱地址</label> -->" +
					        "<input type='text' class='lay_reg focus-input' name='e-mail' placeholder='电子邮件'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<div class='lay_input-reg'>" +
					        "<!-- <label>密码</label> -->" +
					        "<input type='password' class='lay_reg focus-input' name='password' placeholder='密码'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<div class='lay_input-reg'>" +
					        "<!-- <label>确认密码</label> -->" +
					        "<input type='password' class='lay_reg focus-input' name='password-repeat' placeholder='确认密码'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<div class='lay_input-reg'>" +
					        "<!-- <label>验证码</label> -->" +
					        "<input type='text' class='tr_reg focus-input' name='tryNum' placeholder='验证码'/>" +
				        "</div>" +
				        "<div class='lay_input-ver' title='点击图片换一张'>" +
				        	"<img id='verfiy-code' src=''/>" +
				        "</div>" +
				        "<span id='result'>点击图片换一张</span>"+
				        "<div id='verfiy-code-info'></div>"+
				        "<div class='lay_box'>" +
					        "<label>" +
					        	"<input style='width:0;height:0;display:none;' type='checkbox' name='check_box' class='check_box' id='agreerule' tabindex='5'/><label style='width: 119px;' id='rulelabel' for='agreerule'>我已经阅读并同意</label><a href='./service_terms.html' id='service-items' style='color: rgb(0,174,239); margin-left: -14px;' target='_blank' >服务条款</a>" +
					        	"<div id='terms-service'></div>" +
					        "</label>" +
				        "</div>" +
				        "<button type='button' class='lay_send'>注册</button>" +
				        "<div class='lay_footer'>" +
				        	"<a class='lay_gt-msg'>已有C²ENGINE账号？</a>" +
				        	"<a href='javascript:void(0)' class='lay_gt' style='margin: 0 151px;'>登录</a>" +
				        "</div>" +
			        "</form>" +
		        "</div>" +
	        "</div>");
	    $(".lay_box label").css("margin-top", "-8px");
	    $(".check_box").css("margin-top", "11px");
	}
	
	function createFrogetPwd() {
		$(".container-outer").remove();
		$("body").append(
			"<div class='container-outer'>" +
		        "<div class='container container-login'>" +
			        "<form class='form_login-user'>" +
				        "<div class='form-pic'>" +
				        	"<img src='./img/logo_new.png' width='72%' height='72%' style='margin-top: -120px;' alt=''/>" +
				        "</div>" +
			        	"<h4 class='register-title'>找回密码</h4>" +
				        "<div class='lay_input-user'>" +
					        "<input type='text' class='lay_name focus-input' name='email' placeholder='电子邮件'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<div class='lay_gt-msg'>请填入您注册时使用的电子邮箱，您将会收到关于如何重置密码的电子邮件指示。</div>" + 
				        "<button type='button' class='lay_submit'>提交</button>" +
				        "<div class='lay_footer'>" +
				        	"<a class='lay_gt-msg'>找到了您的密码？</a>" +
				        	"<a href='javascript:void(0)' class='lay_gt'>登录</a>" +
				        "</div>" +
			        "</form>" +
		        "</div>" +
	        "</div>"
		);
	}
	
	var showLogin = function () {
		if (loginTag) return;
		createLogin();
		
		$(".check_box").on("click", function () {
			if ($(".check_box")[0].checked) {
				localStorage.setItem("checkState",true);
			} else {
				localStorage.setItem("checkState",false);
			}
		});
		
		$("input[name='username']").on("blur", checkLoginEmail);
	    //password blur
	    $("input[name='password']").on("blur", checkLoginPwd);
	};

	function checkLoginEmail () {
	    var username=$("input[name='username']").val();
	    //empty
	    $(".lay_input-user").eq(0).find("div").empty();
	    if(username==""){
	        //$(".lay_input-user:nth-child(2) .lay_name").addClass("error");
	    	$(".lay_input-user").eq(0).find("input").addClass("error");
	        $(".lay_input-user").eq(0).find("div").text("请输入邮件地址");
	    }else{
	        // $(".lay_input-user:nth-child(2) .lay_name").removeClass("error");
	    	$(".lay_input-user").eq(0).find("input").removeClass("error");
	    }
	}

	function checkLoginPwd () {
	    $(".lay_input-user").eq(1).find("div").empty();
	    var psd=$("input[name='password']").val();
	        if(psd==""){
	            //$(".lay_input-user:nth-child(3) .lay_name").addClass("error");
	        	$(".lay_input-user").eq(1).find("input").addClass("error");
	            $(".lay_input-user").eq(1).find("div").text("请输入密码");
	        }else{
	        	$(".lay_input-user").eq(1).find("div").text("");
	        	$(".lay_input-user").eq(1).find("input").removeClass("error");
	            //$(".lay_input-user:nth-child(3) .lay_name").removeClass("error");
	        }
	    }
	
	//登录界面显示
	$("body").on("click", ".lay_gt,#fa-user", showLogin);
	
	//注册界面显示
	$("body").on("click", ".btn-reg", function () {
	    createRegister();
	    registerCheckBoxState = false;
	    //clause
	    $("body").on("change",".check_box", checkRegisterBox);
	
	    $("input[name='username']").on("blur",checkUsername);
	    //password blur
	    $("input[name='password']").on("blur",checkPwd);
	    //password blur
	    $("input[name='password-repeat']").on("blur",checkRepeatPwd);
	    //email blur
	    $("input[name='e-mail']").on("blur",checkEmail);
	    //$("input[name='check_box']").on("click", checkBoxState);
	    //校验验证码
	    $("input[name='tryNum']").on("blur",checkVerifyCode);
	    //刷新验证码
	    $("#verfiy-code").on("click",function () {
	        createCode();
	    });
	    createCode();
	});
	
	function checkRegisterBox () {
		if ($(".check_box")[0].checked) {
			$("#terms-service").text("");
			registerCheckBoxState = true;
		} else {
			$("#terms-service").text("您必须同意使用条款。");
			registerCheckBoxState = false;
		}
	}

	//忘记密码界面
	$("body").on("click", ".lay_forget-pwd", function () {
        createFrogetPwd();
	});
	
	//提交并接受发送邮件结果回调
	$("body").on("click", ".lay_submit", function () {
		var email = $(".lay_input-user").find("input")[0].value;
		var result = checkSubmitEmail(email);
		if (!result) {
			return ;
		}
        tagIndex = 0;
        $(".lay_submit").attr("disabled","disabled");
        var interForgetTime = setInterval(setForgetWaitText, 1000);
		$.post(submitEmail, {
				"email":email,
				"appid":"123456789",
				"sign":"2d3515de2b2274b05b0086520e2bd717"
			},
			function (data) {
				clearInterval(interForgetTime);
				$(".lay_submit").removeAttr("disabled");
				$(".lay_submit").text("提交");
				switch (data.errorCode) {
				case "0":
					$(".lay_input-user").find("div").text("");
					emailHasSend();
					break;
				case "-1":
					$(".lay_input-user").find("div").text("AppID错误！");
					break;
				case "-2":
					$(".lay_input-user").find("div").text("sign签名错误！");
					break;
				case "-3":
					$(".lay_input-user").find("div").text("请输入有效的电子邮件地址！");
					break;
				case "-4":
					$(".lay_input-user").find("div").text("该邮件尚未注册！");
					break;
				case "-5":
					$(".lay_input-user").find("div").text("邮件发送失败！");
					break;
				}
			}, 'json'
		);
	});

	var setForgetWaitText = function () {
		switch (tagIndex) {
			case 0:
				$(".lay_submit").text("请稍等.");
				break;
			case 1:
				$(".lay_submit").text("请稍等..");
				break;
			case 2:
				$(".lay_submit").text("请稍等...");
				break;
		}
		if (tagIndex >= 2) {
			tagIndex = 0;
		} else {
			tagIndex++;
		}
	};
	
	var checkSubmitEmail = function (email) {
		var emailStr = /^([a-z0-9A-Z]+[_]?)+[a-z0-9A-Z]@[a-z0-9A-Z]+([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z0-9A-Z]{2,}$/;
		if (email == "" || email == undefined) {
			$(".lay_input-user").find("div")[0].innerHTML  = "请输入邮件";
			return false;
		} else if (emailStr.test(email) == false) {
			$(".lay_input-user").find("div")[0].innerHTML  = "请输入有效的电子邮件地址";
			return false;
		} else {
			$(".lay_input-user").find("div")[0].innerHTML  = "";
			return true;
		}
	};
	
	var checkBoxState = function () {
		if ($(".check_box")[0].checked) {
			//saveTag = true;
			$("#terms-service").text("");
			return true;
		} else {
			$("#terms-service").text("您必须同意使用条款。");
			//saveTag = false;
			return false;
		}
	};
	
	var emailHasSend = function () {
		$(".lay_input-user").css("display", "none");
		$(".lay_footer").css("display", "none");
		$(".lay_submit").css("display", "none");
		$(".lay_gt-msg").text("请登陆您的邮箱，按邮件提示找回密码");
		$(".lay_gt-msg").css("margin-bottom", "7vh");
		$(".register-title").text("邮件已发送！");
		$(".form_login-user").css("height", "249px");
	};

    var code ; //在全局定义验证码
    //产生验证码
    function createCode() {
        code = "";
        var codeLength = 4;//验证码的长度
        var checkCode = $(".lay_input-ver");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
            's','t','u','v','w','x','y','z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
        }
        //checkCode.text(code) ;//把code值赋给验证码
        var time = new Date().getTime();
        var w = $(".lay_input-ver").width();
        var h = $(".lay_input-ver").height();
        $("#verfiy-code").attr("src", imgUrl + code + "&timestamp=" + time + "&w=" + w + "&h=" + h);
    }
    /**
     * 检验验证码
     */
    function checkVerifyCode() {
        var inputCode = $("input[name='tryNum']").val().toUpperCase(); //取得输入的验证码并转化为大写
        if(inputCode.length <= 0) { //若输入的验证码长度为0
//            $(".lay_input-reg").eq(4).find("div").html("请输入验证码");
        	$("#verfiy-code-info").html("请输入验证码");//则弹出请输入验证码
            $(".lay_input-reg:nth-child(6) .tr_reg").addClass("error");
            // $(".lay_send").attr("disabled","disabled");
			return false;
        } else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
//            $(".lay_input-reg").eq(4).find("div").html("验证码错误");
            $("#verfiy-code-info").html("验证码输入错误");//则弹出验证码输入错误
            $(".lay_input-reg:nth-child(6) .tr_reg").addClass("error");
            createCode();//刷新验证码
            $("input[name='tryNum']").val("") ;//清空文本框
            // $(".lay_send").attr("disabled","disabled");
			return false;
        } else {
            $(".lay_send").removeAttr("disabled");
            $(".lay_input-reg:nth-child(6) .tr_reg").removeClass("error");
            $("#verfiy-code-info").empty();
            $(".lay_input-reg").eq(4).find("div").empty();
			return true;
        }
    }

    function checkUsername () {
        //empty
        $(".lay_input-reg").eq(0).find("div").empty();
        var username=$("input[name='username']").val();
        //昵称格式：限16个字符，支持中英文、数字、减号或下划线
        var userStr = /^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{4,20}$/;
        if(username==""||userStr.test(username)==false){
            $(".lay_input-reg:nth-child(2) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(0).find("div").text("昵称支持4-20位英文、数字、减号或下划线");
            // $(".lay_send").attr("disabled","disabled");
            return false;
        }else{
            $(".lay_input-reg:nth-child(2) .lay_reg").removeClass("error");
            // $(".lay_send").removeAttr("disabled");
            return true;
        }
    }


    function checkPwd() {
        //在显示提示信息之前将所在位置其他提示信息清空
        //$(".lay_input-reg").eq(2).find("div").empty();
        //$(".lay_input-reg").eq(3).find("div").empty();

        var psd=$("input[name='password']").val();
        var psdRepeat=$("input[name='password-repeat']").val();

        // 6-20 位，字母、数字、字符
        // var psdStr = /^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}':;,\\[\].<>/?！￥…（）—【】‘；：”“’。，、？]){6,20}$/;
        var psdStr = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;

        if(psd==""||psdStr.test(psd)==false){
            $(".lay_input-reg").eq(1).find("div").text("必须有7个以上字符，至少包含1个数字和1个字母，不能有空格");
            $(".lay_input-reg").eq(2).find("div").empty();
            $(".lay_input-reg:nth-child(4) .lay_reg").addClass("error");
            $(".lay_input-reg:nth-child(5) .lay_reg").removeClass("error");
            // $(".lay_send").attr("disabled","disabled");
            return false;
		}else if(psd.includes(" ")) {
			$(".lay_input-reg").eq(1).find("div").text("必须有7个以上字符，至少包含1个数字和1个字母，不能有空格");
            $(".lay_input-reg").eq(2).find("div").empty();
            $(".lay_input-reg:nth-child(4) .lay_reg").addClass("error");
            $(".lay_input-reg:nth-child(5) .lay_reg").removeClass("error");
            // $(".lay_send").attr("disabled","disabled");
            return false;
        }else if(psdRepeat==psd){
            $(".lay_input-reg").eq(1).find("div").empty();
            $(".lay_input-reg:nth-child(4) .lay_reg").removeClass("error");
            $(".lay_input-reg:nth-child(5) .lay_reg").removeClass("error");
            return true;
        }else if(psdRepeat!=psd){
            if(psdRepeat==""){
                $(".lay_input-reg").eq(1).find("div").empty();
                $(".lay_input-reg:nth-child(4) .lay_reg").removeClass("error");
                $(".lay_input-reg:nth-child(5) .lay_reg").removeClass("error");
                // $(".lay_send").attr("disabled","disabled");
                return false;
            }else{
                $(".lay_input-reg:nth-child(4) .lay_reg").removeClass("error");
                $(".lay_input-reg:nth-child(5) .lay_reg").addClass("error");
                $(".lay_input-reg").eq(2).find("div").text("您必须输入匹配的密码");
                // $(".lay_send").attr("disabled","disabled");
                return false;
            }
        }else{
            $(".lay_input-reg:nth-child(4) .lay_reg").removeClass("error");
            // $(".lay_send").removeAttr("disabled");
            return true;
        }
    }

    function checkRepeatPwd() {

        //在显示提示信息之前将所在位置其他提示信息清空
        $(".lay_input-reg").eq(3).find("div").empty();
        var psd=$("input[name='password']").val();
        var psdRepeat=$("input[name='password-repeat']").val();

        // 6-20 位，字母、数字、字符
        // var psdStr = /^([A-Z]|[a-z]|[0-9]|[`~!@#$%^&*()+=|{}':;,\\[\].<>/?！￥…（）—【】‘；：”“’。，、？]){6,20}$/;
        var psdStr = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;

        if(psdRepeat==""||psdStr.test(psdRepeat)==false){
            $(".lay_input-reg:nth-child(5) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(2).find("div").text("您必须输入匹配的密码");
            // $(".lay_send").attr("disabled","disabled");
            return false;
        }else if(psdRepeat!=psd){
            $(".lay_input-reg:nth-child(5) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(2).find("div").text("您必须输入匹配的密码");
            // $(".lay_send").attr("disabled","disabled");
            return false;
        }else{
            $(".lay_input-reg:nth-child(5) .lay_reg").removeClass("error");
            $(".lay_input-reg").eq(2).find("div").text("");
            // $(".lay_send").removeAttr("disabled");
            return true;
        }
    }

    function checkEmail() {
        //$(".lay_input-reg").eq(1).find("div").empty();
        var email=$("input[name='e-mail']").val();

        //邮箱正则表达式对象
        // var emailStr = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var emailStr = /^([a-z0-9A-Z]+[_]?)+[a-z0-9A-Z]@[a-z0-9A-Z]+([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-z0-9A-Z]{2,}$/;

        if(email==""){
//            $(".lay_input-reg:nth-child(3) .lay_reg").addClass("error");
        	$(".lay_input-reg").eq(0).find("input").addClass("error");
            $(".lay_input-reg").eq(0).find("div").text("请输入有效的电子邮件地址");
            return false;
		}else if (email.length >= 35) {
			$(".lay_input-reg").eq(0).find("input").addClass("error");
            $(".lay_input-reg").eq(0).find("div").text("邮件长度需要小于35个字符");
            return false;
        }else if(emailStr.test(email)==false){
//            $(".lay_input-reg:nth-child(3) .lay_reg").addClass("error");
        	$(".lay_input-reg").eq(0).find("input").addClass("error");
            $(".lay_input-reg").eq(0).find("div").text("请输入有效的电子邮件地址");
            return false;
        }else{
        	$(".lay_input-reg").eq(0).find("div").text("");
            $(".lay_input-reg:nth-child(3) .lay_reg").removeClass("error");
            // $(".lay_button").removeAttr("disabled");
            return true;
        }
    }


	var b_login =false;
    var h_login_001 =false;
    var h_login_002 =false;
    var h_login_003 =false;
	/**
	 * 登录函数
	 */
	function isNotLogin() {
	    var username=$("input[name='username']").val();
	    var psd=$("input[name='password']").val();
	    
	    if (username == null || psd == null || username == "" || psd == "") {
	    	checkLoginEmail();
	    	checkLoginPwd();
	    	return;
	    }
	    //设置button在请求恢复之前不可点击
	    $(".lay_button").attr("disabled","disabled");

	    $.post(login,{
	    username:username,
	    password:psd
		},function(data){
			//设置button在请求接收到之后可点击
	    	$(".lay_button").removeAttr("disabled");
	        var username=$("input[name='username']").val();
	        var psd=$("input[name='password']").val();
	        switch (data.errorCode){
	            //success
	            case "0":
	            	if ($(".check_box")[0].checked) {
	            		localStorage.setItem("username", encodeURIComponent(username));
	            		localStorage.setItem("password", encodeURIComponent(psd));
	            	} else {
	            		localStorage.setItem("username", "");
	            		localStorage.setItem("password", "");
						sessionStorage.setItem(sessionGuestName, username);
						sessionStorage.setItem(sessionKey, username);
	            	}
	                $(".top-text-welcome").css("display", "block");
	                $("#fa-user").text(username);
	                $("#logout").remove();
//	                $(".main-nav-right").append("<li id='account-center'>账号中心</li>");
	                $(".main-nav-right").append("<li id='logout'>注销</li>");
	                $(".icon-arrow").addClass("fa fa-chevron-down");
	                $(".container-outer").remove();
	                loginTag = true;
	                if($("#fa-user").width()>140){
	                	if (username.length > 30) {
	                		$("#fa-user").text(username.slice(0,30)+"...");
	                	}
	                    $("#fa-user").attr("title",username);
	                }
	                setUserIconAni();
	                if(b_login == true) {
	                    b_login = false;

	                    window.open("http://pan.baidu.com/s/1dF7rJDR");

	                }
	                if(h_login_003 == true) {
	                    h_login_003 = false;
                        window.open("http://pan.baidu.com/s/1dF7rJDR");
	                }
                    if(h_login_002 == true) {
                        h_login_002 = false;
                        window.open("http://pan.baidu.com/s/1c12tugg");
                    }
                    if(h_login_001 == true) {
                        h_login_001 = false;
                        window.open("http://pan.baidu.com/s/1jHEVSWY");
                    }
	                break;
	            //error
	            case "-2":
	                $(".lay_input-user").eq(1).find("div").text("账号或密码错误");
	                $(".lay_input-user").eq(1).find("input").addClass("error");
	                $("#logout").remove();
	                $("#fa-user").text("登录");
	                $("#fa-user").removeAttr("disabled");
	                break;
	            case "-1":
	                $("#logout").remove();
	                $("#fa-user").text("登录");
	                $("#fa-user").removeAttr("disabled");
	                if(username==""){
	                	$(".lay_input-user").eq(0).find("input").addClass("error");
	                    $(".lay_input-user").eq(0).find("div").text("请输入用户名");
	                }else if(psd==""){
	                	$(".lay_input-user").eq(1).find("input").addClass("error");
	                    $(".lay_input-user").eq(1).find("div").text("请输入密码");
	                }else {
	                	$(".lay_input-user").eq(1).find("input").removeClass("error");
	                	$(".lay_input-user").eq(1).find("input").removeClass("error");
	                }
	                break;
	        }
	        //设置button在请求接收到之后可点击
	    	$(".lay_button").removeAttr("disabled");
	    },'json');
	}

	//login
	$("body").on("click", ".lay_button", function () {
	    isNotLogin();
	});
	/**
	 * 注册函数
	 */
    function isNotRegister() {
        var username=$("input[name='username']").val();
        var psd=$("input[name='password']").val();
        var email=$("input[name='e-mail']").val();
        var psdRepeat=$("input[name='password-repeat']").val();
        var verfiyCode = $("input[name='tryNum']").val();
        var timestamp=new Date().getTime();
        var sign=hex_md5("123456789"+timestamp+"ajkshjkdfhjksdhfjdasd12345");
        
        if ((verfiyCode==""||psd==""||email==""||verfiyCode==null||psd==null||email==null) && psdRepeat == psd) {
        	return ;
        }
		if (!(checkEmail() && checkPwd() && checkRepeatPwd() && checkVerifyCode())) {
			return;
		}
		if (!registerCheckBoxState) {
			$("#terms-service").text("您必须同意使用条款。");
			return;
		} else {
			$("#terms-service").text("");
		}
        $(".lay_send").attr("disabled", "disabled");
		tagIndex = 0;
		var interTime = setInterval(setWaitText, 1000);
        $(".lay_send").attr("disabled", "disabled");

        $.post(register,{
            username:email,
            password:psd,
            email:email,
            appid:123456789,
            sign:sign,
            timestamp:timestamp
        },function (data) {
            console.log(data.errorCode);
			clearInterval(interTime);
			$(".lay_send").text("注册");
            switch (data.errorCode){
                case "0":
                    $(".top-text-welcome").css("display", "block");
                    $("#fa-user").text(email);
                    $("#logout").remove();
//                    $(".main-nav-right").append("<li id='account-center'>账号中心</li>");
                    $(".main-nav-right").append("<li id='logout'>注销</li>");
                    $(".icon-arrow").addClass("fa fa-chevron-down");
                    $(".container-outer").remove();
					sessionStorage.setItem(sessionKey, email);
					sessionStorage.setItem(sessionGuestName, email);
                    loginTag = true;
					//名称长度设置
                    if($("#fa-user").width()>140) {
                    	if (email.length > 30) {
                    		$("#fa-user").text(email.slice(0,30)+"...");
                    	}
                        $("#fa-user").attr("title",email);
                    }
                    setUserIconAni();
                    if(b_login == true) {
                        b_login = false;
                        window.open("http://pan.baidu.com/s/1dF7rJDR");
                    }
                    if(h_login_003 == true) {
                        h_login_003 = false;
                        window.open("http://pan.baidu.com/s/1dF7rJDR");
                    }
                    if(h_login_002 == true) {
                        h_login_002 = false;
                        window.open("http://pan.baidu.com/s/1c12tugg");
                    }
                    if(h_login_001 == true) {
                        h_login_001 = false;
                        window.open("http://pan.baidu.com/s/1jHEVSWY");
                    }
                    break;
                case "-4":
                    //$(".lay_input-reg:nth-child(2) .lay_reg").addClass("error");
                	$(".lay_input-reg").eq(0).find("input").addClass("error");
                    $(".lay_input-reg").eq(0).find("div").text("您已经有一个账户了，请登录");
                    $("#logout").remove();
                    $("#fa-user").text("登录");
                    $("#fa-user").removeAttr("disabled");
                    break;
                case "-1":
                    $("#logout").remove();
                    $("#fa-user").text("登录");
                    $("#fa-user").removeAttr("disabled");
                    if(username==""){
                        $(".lay_input-reg").eq(0).find("input").addClass("error");
                        $(".lay_input-reg").eq(0).find("div").text("请输入用户名");
                    }else if(psd==""){
                        $(".lay_input-reg").eq(2).find("input").addClass("error");
                        $(".lay_input-reg").eq(2).find("div").text("请输入密码");
                    }else if(email==""){
                        $(".lay_input-reg").eq(1).find("input").addClass("error");
                        $(".lay_input-reg").eq(1).find("div").text("请输入有效的电子邮件地址");
                    }else {
                    	$(".lay_input-reg").eq(0).find("input").removeClass("error");
                    	$(".lay_input-reg").eq(2).find("input").removeClass("error");
                    	$(".lay_input-reg").eq(1).find("input").removeClass("error");
                    }
                    break;
                case "-6":
                    $(".lay_input-reg").eq(1).find("input").addClass("error");
                    $(".lay_input-reg").eq(1).find("div").text("请输入有效的电子邮件地址");
                    break;
                default:
                    $("#terms-service").text("注册失败");
            }
            $(".lay_send").removeAttr("disabled");
        },'json');
    }

	var setWaitText = function () {
		switch (tagIndex) {
			case 0:
				$(".lay_send").text("请稍等.");
				break;
			case 1:
				$(".lay_send").text("请稍等..");
				break;
			case 2:
				$(".lay_send").text("请稍等...");
				break;
		}
		if (tagIndex >= 2) {
			tagIndex = 0;
		} else {
			tagIndex++;
		}
	};	

    //注册前判断
    $("body").on("click", ".lay_send", function () {
        var username=$("input[name='username']").val();
        var email=$("input[name='e-mail']").val();
        var psd=$("input[name='password']").val();
        var psdRepeat=$("input[name='password-repeat']").val();
        var tryNum=$("input[name='tryNum']").val();
        var state = $(".check_box")[0].checked;

        if(username!=""&&email!=""&&psd!=""&&psdRepeat!=""&&tryNum!=""&&state==true){
            isNotRegister();
        }else{
            checkUsername();
            checkEmail();
            checkPwd();
            checkRepeatPwd();
            checkVerifyCode();
            checkBoxState();
            /*
            if(username!=""){
                checkUsername();
            }else if(email!=""){
                checkEmail();
            }else if(psd!=""){
                checkPwd();
            }else if(psdRepeat!=""){
                checkRepeatPwd();
            }else if(tryNum!=""){
                checkVerifyCode();
            }
            */
        }
    });

    $("body").on("click",".form_login-user, .form_reg, .form_reset-user",function (event) {
        event.stopPropagation();
    });
    $("body").on("click",".container-outer",function () {
        $(this).remove();
    });

    $("body").on("click", "#logout", function () {
        localStorage.setItem("username", "");
		localStorage.setItem("password", "");
		sessionStorage.setItem(sessionKey, "");
		sessionStorage.setItem(sessionGuestName, "");
        $("#logout").remove();
        if (location.href.indexOf("method=reset")) {
        	if (location.port != "") {
        		window.location = location.protocol + "//" + location.hostname + ":" + location.port + location.pathname;
        	} else {
        		window.location = location.protocol + "//" + location.hostname + location.pathname;
        	}
        } else {
        	location.reload();
        }
    });
    
    //显示重置成功界面
    var showResetSuccessView = function () {
    	$(".container-outer").remove();
		$("body").append(
			"<div class='container-outer'>" +
		        "<div class='container container-reset'>" +
			        "<form class='form_reset-user' style='height: 330px;'>" +
				        "<div class='form-pic'>" +
				        	"<img src='./img/logo_new.png' width='72%' height='72%' style='margin-top: -120px;' alt=''/>" +
				        "</div>" +
			        	"<h4 class='register-title'>密码重置成功！</h4>" +
					    "<div class='lay_gt-msg'>您的密码已重置成功,请登录！</div>"+
				        "<button type='button' class='lay_reset'>确定</button>" +
			        "</form>" +
		        "</div>" +
	        "</div>"
		);
		$(".lay_reset").on("click", function () {
			if (location.port != "") {
        		window.location = location.protocol + "//" + location.hostname + ":" + location.port + location.pathname;
        	} else {
        		window.location = location.protocol + "//" + location.hostname + location.pathname;
        	}
		});
    };
    
    //打开界面时已经登录
    var logined = function () {
    	$("#fa-user").text(decodeURIComponent(localStorage.getItem("username")));
		sessionStorage.setItem(sessionKey, decodeURIComponent(localStorage.getItem("username")));
		sessionStorage.setItem(sessionGuestName, decodeURIComponent(localStorage.getItem("username")));
        $(".top-text-welcome").css("display", "block");
        $("#logout").remove();
//        $(".main-nav-right").append("<li id='account-center'>账号中心</li>");
        $(".main-nav-right").append("<li id='logout'>注销</li>");
        $(".icon-arrow").addClass("fa fa-chevron-down");
        loginTag = true;
        
        setUserIconAni();
    };
    
    //检测登录状态函数
    var checkLoginState = function () {
    	
		//检测打开当前界面参数是否为重置密码
    	checkOpenUrl();
    	if (localStorage.getItem("username") == "" || localStorage.getItem("username") == undefined
        		|| localStorage.getItem("username") == undefined) {	//判断cookie值
            $("#logout").remove();
            $("#fa-user").text("登录");
            $("#fa-user").removeAttr("disabled");
			checkSession();
        }else{
        	logined();		//已登陆如何显示
        }
    };

	var checkSession = function () {
		// sessionStorage.setItem(sessionGuestName, email);
		var sessGuest = sessionStorage.getItem(sessionGuestName);
		if (sessGuest == "" || sessGuest == null || sessGuest == undefined) {

		} else {
			$(".top-text-welcome").css("display", "block");
			$("#fa-user").text(sessGuest);
			$("#logout").remove();
	//        $(".main-nav-right").append("<li id='account-center'>账号中心</li>");
			$(".main-nav-right").append("<li id='logout'>注销</li>");
			$(".icon-arrow").addClass("fa fa-chevron-down");
			loginTag = true;
        	setUserIconAni();
		}
	};
    //检测打开该界面的url
    var checkOpenUrl = function () {
    	var url = location.href;
    	var params = url.substring(url.indexOf("?") + 1, url.length);
    	var pArr = params.split("&");
    	for (var int = 0; int < pArr.length; int++) {
			var aEle = pArr[int].split("=");
			if (aEle[0] == "method" && aEle[1] == "reset") {
				showResetView();
			} else if (aEle[0] == "acc") {
				resetUName = aEle[1];
			} else if (aEle[0] == "sign") {
				resetSign = aEle[1];
			} else if (aEle[0] == "method" && aEle[1] == "forgetPwd") {
				createFrogetPwd();
			}
		}
    };
    //显示重置密码界面
    var showResetView = function () {
    	$(".container-outer").remove();
		$("body").append(
			"<div class='container-outer'>" +
		        "<div class='container container-reset'>" +
			        "<form class='form_reset-user'>" +
				        "<div class='form-pic'>" +
				        	"<img src='./img/logo_new.png' width='72%' height='72%' style='margin-top: -120px;' alt=''/>" +
				        "</div>" +
			        	"<h4 class='register-title'>重置您的密码</h4>" +
				        "<div class='lay_input-user'>" +
					        "<input type='password' class='lay_name focus-input' name='new-pwd' placeholder='新密码'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<div class='lay_input-user'>" +
					        "<input type='password' class='lay_name focus-input' name='ensure-pwd' placeholder='确认密码'/>" +
					        "<div></div>"+
				        "</div>" +
				        "<button type='button' class='lay_reset'>提交</button>" +
			        "</form>" +
		        "</div>" +
	        "</div>"
		);
		addResetViewEvent();
    };
    
    var newPwdEvent = function(){
    	var newPwd = $('input[name=new-pwd]').val();
    	var psdStr = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;
		newPwd = $('input[name=new-pwd]').val();
		if (!psdStr.test(newPwd)) {
			$(".lay_input-user").eq(0).find("input").addClass("error");
			$(".lay_input-user").eq(0).find("div").text("必须有7个以上字符，至少包含1个数字和1个字母，不能有空格");
			return false;
		} else {
			$(".lay_input-user").eq(0).find("input").removeClass("error");
			$(".lay_input-user").eq(0).find("div").text("");
			return true;
		}
	};
	
	var repetPwdEvent = function(){
		var repPwd =  $('input[name=ensure-pwd]').val();
		var psdStr = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{7,35}$/;
		repPwd = $('input[name=ensure-pwd]').val();
		if (!psdStr.test(repPwd)) {
			$(".lay_input-user").eq(1).find("input").addClass("error");
			$(".lay_input-user").eq(1).find("div").text("您必须输入匹配的密码");
			return false;
		} else {
			if (repPwd != $('input[name=new-pwd]').val()) {
    			$(".lay_input-user").eq(1).find("input").addClass("error");
    			$(".lay_input-user").eq(1).find("div").text("您必须输入匹配的密码");
    			return false;
    		} else {
    			$(".lay_input-user").eq(1).find("input").removeClass("error");
    			$(".lay_input-user").eq(1).find("div").text("");
    			$(".lay_reset").removeAttr("disabled");
    			return true;
    		}
		}
	};
    
    var addResetViewEvent = function () {
    	var newPwd = $('input[name=new-pwd]').val();
    	var repPwd =  $('input[name=ensure-pwd]').val();
    	var psdStr = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
    	/*
    	 * 增加事件监听
    	 */
    	$(".lay_reset").css("disabled", "disabled");
    	$("input[name='new-pwd']").on("blur", newPwdEvent);
    	$("input[name='ensure-pwd']").on("blur", repetPwdEvent);
    	
    	$(".lay_reset").on("click", function () {
    		if (!(newPwdEvent() && repetPwdEvent())) {
    			return;
    		}
    		newPwd = $('input[name=new-pwd]').val();
    		$.get(reset, {
    			"id":123456789,
    			"account": resetUName,
    			"pwd": hex_md5(newPwd),
    			"sign":resetSign
    		},function (data) {
    			switch (data.errorCode) {
    			case "0":
    				showResetSuccessView();
    				break;
    			default:
    				$(".lay_input-user").eq(1).find("input").addClass("error");
    				$(".lay_input-user").eq(1).find("div").text("重置失败，请重试！");
    			}
    		}, 'json');
    	});
    };
    
    //检测登录状态
    checkLoginState();
    
    $(".down-btn").on("click",function () {
    //    if((getCookie('username'))==null||(getCookie('username'))==""||(getCookie('username'))=="undefined"){
    //	if(sessionStorage.getItem(sessionKey)==null||sessionStorage.getItem(sessionKey)==""||sessionStorage.getItem(sessionKey)=="undefined"){
    //        createLogin();
    //        b_login = true;
    //    }else{
            window.open("http://pan.baidu.com/s/1gf3nEUZ");
    //    }
    });
    //C²engine 0.9.3.0
    $(".down-btn005, .try").on("click",function () {
        if(sessionStorage.getItem(sessionKey)==null||sessionStorage.getItem(sessionKey)==""||sessionStorage.getItem(sessionKey)=="undefined"){
            //    if((localStorage.getItem('username'))==null||(localStorage.getItem('username'))==""||(localStorage.getItem('username'))=="undefined"){
            createLogin();
            h_login_003 = true;
        }else{
            window.open("http://pan.baidu.com/s/1jH8Xcnc");
        }
    });
    //C²engine 0.9.2.5
    $(".down-btn004").on("click",function () {
        if(sessionStorage.getItem(sessionKey)==null||sessionStorage.getItem(sessionKey)==""||sessionStorage.getItem(sessionKey)=="undefined"){
            //    if((localStorage.getItem('username'))==null||(localStorage.getItem('username'))==""||(localStorage.getItem('username'))=="undefined"){
            createLogin();
            h_login_003 = true;
        }else{
            window.open("http://pan.baidu.com/s/1gf3nEUZ");
        }
    });
    //C²engine 0.9.1.5
    $(".down-btn003").on("click",function () {
        if(sessionStorage.getItem(sessionKey)==null||sessionStorage.getItem(sessionKey)==""||sessionStorage.getItem(sessionKey)=="undefined"){
            //    if((localStorage.getItem('username'))==null||(localStorage.getItem('username'))==""||(localStorage.getItem('username'))=="undefined"){
            createLogin();
            h_login_003 = true;
        }else{
            window.open("http://pan.baidu.com/s/1dF7rJDR");
        }
    });
    //C²engine 0.9.0.9
    $(".down-btn002").on("click",function () {
        // if(getCookie(cookieKey)==null||getCookie(cookieKey)==""||getCookie(cookieKey)=="undefined"){
        if((sessionStorage.getItem(sessionKey))==null||(sessionStorage.getItem(sessionKey))==""||(sessionStorage.getItem(sessionKey))=="undefined"){
            createLogin();
            h_login_002 = true;
        }else{
            window.open("http://pan.baidu.com/s/1c12tugg");
        }
    });
    //C²engine 0.9.0.0
    $(".down-btn001").on("click",function () {
       if((sessionStorage.getItem(sessionKey))==null||(sessionStorage.getItem(sessionKey))==""||(sessionStorage.getItem(sessionKey))=="undefined"){
    	// if(getCookie(cookieKey)==null||getCookie(cookieKey)==""||getCookie(cookieKey)=="undefined"){
            createLogin();
            h_login_001 = true;
        }else{
            window.open("http://pan.baidu.com/s/1jHEVSWY");
        }
    });




    var text=$("#fa-user").text();
        if($("#fa-user").width()>140){
        	if (username.length > 30) {
        		$("#fa-user").text(text.slice(0,30)+"...");
        	}
            $("#fa-user").attr("title",text);
        }
});
/**
 * 顶栏初始化
 */
function initTopNav(){
    $('#top-menu').children().remove();
    $('#top-menu').append(
        "<div class='uu-header'>"+
            "<div class='container'>"+
                "<div class='uu-logo'>"+
                    "<a href='index.html'>"+
                    "<img src='http://cdn.c2engine.com/c2engine/img2/logo.png' width='55' alt=''/>"+
                    "</a>"+
                "</div>"+
                "<div id='uu-bar'><a class='fa fa-reorder'></a></div>"+
                "<div id='down-uu'>"+

            "<div class='title_new_container' style='display: none;' href=#>" +
                "<a class='set-page-index' href=#>设为主页</a>" +
                "<div class='top-user-info'>" +
                    "<a class='top-text-welcome'>您好，</a>" +
                         "<button id='fa-user' class='fa fa-user' aria-hidden='true'></button>&nbsp;" +
                            "<i class='icon-arrow'></i>" +
                     "<ul class='main-nav-right' style='display:none;'></ul>" +
                "</div>"+
                "<li class='item item3'><a href='http://bbs.c2engine.com' target='_blank'>社区</a></li>"+
                "<li class='item item2 item3'><a href='#'>开发者中心</a>" +
                    "<ul class='main-nav-menu' style='display:none;'>"+
                        "<li><a href='http://wiki.c2engine.com' target='_blank'>学习教程</a></li>"+
                        "<li><a href='http://bbs.c2engine.com' target='_blank'>互动社区</a></li>"+
                    "</ul>"+
                "</li>"+
            "</div>"+




                "<ul class='uu-ul-head'>"+
                    "<li><a href='#'>关于</a>"+
                            "<ul class='main-nav-menu' style='display:none;'>"+
                                "<li class='border_n'><a href='platformintroduction.html?index=index-editor'>编辑器</a></li>"+
                                "<li><a href='platformintroduction.html?index=index-h5'>HTML5</a></li>"+
                                "<li><a href='platformintroduction.html?index=index-vrar'>VR/AR/MR</a></li>"+
                            "</ul>"+
                    "</li>"+
                    "<li><a href='show.html'>案例展示</a></li>"+
//                    "<li><a href='http://wiki.c2engine.com' target='_blank'>学习</a>"+
//                        "<ul class='main-nav-menu' style='display:none;'>"+
//                            "<li><a href='http://wiki.c2engine.com' target='_blank'>学习教程</a></li>"+
//                            "<li><a href='http://bbs.c2engine.com' target='_blank'>互动社区</a></li>"+
//                        "</ul>"+
                    "</li>"+
//                    "<li><a href='channelcoo.html'>商务合作</a></li>"+
//                    "<li class='ziyuan'><a href='http://bbs.c2engine.com/forum.php?gid=66' target='_blank'>免费游戏资源</a></li>"+
                "</ul>"+
                "<ul class='uu-right'>"+
                    "<li class='li-login'>" +
                    "<!-- <button id='fa-user' class='fa fa-user' aria-hidden='true'>登录</button> "+
                        "<ul class='main-nav-right' style='display:none;'>"+
                        "</ul> -->"+
                    "</li>"+
                    "<li><a href='download.html'><span class='btn-primary preview'>获取C²engine</span></a></li>"+
                "</ul>"+
                "</div>"+
            "</div>"+
        "</div>");
    
//    $("#top-head").append(
//        "<div class='title_new_container' href=#>" +
//
//                "<a class='set-page-index' href=#>设为主页</a>" +
//
//                "<div class='top-user-info'>" +
//                    "<a class='top-text-welcome'>您好，</a>" +
//                    "<button id='fa-user' class='fa fa-user' aria-hidden='true'></button>&nbsp;" +
//                    "<i class='icon-arrow'></i>" +
//
//                    "<ul class='main-nav-right' style='display:none;'></ul>" +
//                "</div>"+
//            "<li class='item'><a href='http://bbs.c2engine.com' target='_blank'>社区</a></li>"+
//            "<li class='item'><a href='show.html'>开发者中心</a></li>"+
//
//        "</div>");





    
    
    var navRight = $(".uu-right");
    //add indicator and hovers to submenu parents
    navRight.find("li").each(function() {
        if ($(this).find("ul").length > 0) {
            if($(window).width() > 1140){
                //show subnav on hover
                $(this).mouseover(function() {
                    $(this).find("ul").stop(true, false).slideDown(300);
                });

                //hide submenus on exit
                $(this).mouseleave(function() {
                    $(this).find("ul").stop(true, false).slideUp(300);
                });
            }else{
                $(this).click(function() {
                    $(this).find("ul").stop(true, false).slideToggle(300);
                });
            }
        }
    });

    var nav = $(".uu-ul-head");
    //add indicator and hovers to submenu parents
    nav.find("li").each(function() {
        if ($(this).find("ul").length > 0) {
            if($(window).width() > 1140){
                //show subnav on hover
                $(this).mouseover(function() {
                    $(this).find("ul").stop(true, false).slideDown(300);
                });
                //hide submenus on exit
                $(this).mouseleave(function() {
                    $(this).find("ul").stop(true, false).slideUp(300);
                });
            }else{
                $(this).click(function() {
                    $(this).find("ul").stop(true, false).slideToggle(300);
                });
            }
        }
    });

    var title_new = $(".title_new_container");
    //add indicator and hovers to submenu parents
    title_new.find("li").each(function() {
        if ($(this).find("ul").length > 0) {
            if($(window).width() > 1140){
                //show subnav on hover
                $(this).mouseover(function() {
                    $(this).find("ul").stop(true, false).slideDown(300);
                });
                //hide submenus on exit
                $(this).mouseleave(function() {
                    $(this).find("ul").stop(true, false).slideUp(300);
                });
            }else{
                $(this).click(function() {
                    $(this).find("ul").stop(true, false).slideToggle(300);
                });
            }
        }
    });


    $('#uu-bar').click(function(){
        $('#down-uu').slideToggle();

//        $('#down-uu').append(
//                "<div class='title_new_container' href=#>" +
//
//                "<a class='set-page-index' href=#>设为主页</a>" +
//
//                "<div class='top-user-info'>" +
//                "<a class='top-text-welcome'>您好，</a>" +
//                "<button id='fa-user' class='fa fa-user' aria-hidden='true'></button>&nbsp;" +
//                "<i class='icon-arrow'></i>" +
//
//                "<ul class='main-nav-right' style='display:none;'></ul>" +
//                "</div>"+
//                "<li class='item'><a href='http://bbs.c2engine.com' target='_blank'>社区</a></li>"+
//                "<li class='item'><a href='show.html'>开发者中心</a></li>"+
//
//                "</div>");

    });

}
/**
* 用户鼠标放置触发事件
*/
function setUserIconAni(){
	
	$("#fa-user,.icon-arrow").mouseover(function () {
		$("#fa-user").css("color","rgb(8, 190, 255)");
		$(".main-nav-right").css("display", "block");
		$(".icon-arrow").css("color","rgb(8, 190, 255)");
		$(".icon-arrow").css("transform", "rotate(180deg)");
		$(".icon-arrow").css("transition", "0.3s");
	});
	$(".main-nav-right").mouseover(function () {
		$(".main-nav-right").stop(true, false).slideDown(300);
	});
	$(".top-user-info").mouseleave(function () {
		$("#fa-user").css("color","white");
		$(".icon-arrow").css("color","white");
		$(".icon-arrow").css("transform", "rotate(360deg)");
		$(".icon-arrow").css("transition", "0.3s");
		$(".main-nav-right").stop(true, false).slideUp(400);
	});
}

function ResetTopLayout(){
	if($(window).width() > 1140){
		$('#down-uu').slideDown(0);
	}else{
		$('#down-uu').slideUp(0);
	}
}

$(window).resize(function(){
	ResetTopLayout();
});

/**
 * 获取相应cookie对应的值
 */
var getCookie = function(sName) {
    if (document.cookie.length > 0) {
        var nameStart = document.cookie.indexOf(sName+"=");
        if (nameStart != -1) {
            nameStart = nameStart + sName.length + 1;
            var nameEnd = document.cookie.indexOf(";", nameStart);
            if (nameEnd == -1) {
                nameEnd = document.cookie.length;
            }
            return decodeURIComponent(document.cookie.substring(nameStart, nameEnd));
        }
    }
};
