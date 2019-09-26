// JavaScript Document
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
                "<ul class='uu-ul-head'>"+
                    "<li><a href='#'>平台介绍</a>"+
                            "<ul class='main-nav-menu' style='display:none;'>"+
                                "<li><a href='platformintroduction.html?index=index-editor'>编辑器</a></li>"+
                                "<li><a href='platformintroduction.html?index=index-h5'>HTML5</a></li>"+
                                "<li><a href='platformintroduction.html?index=index-vrar'>VR/AR</a></li>"+
                            "</ul>"+
                    "</li>"+
                    "<li><a href='show.html'>案例展示</a></li>"+
                    "<li><a href='#'>开发者</a>"+
                        "<ul class='main-nav-menu' style='display:none;'>"+
                            "<li><a href='study_1.html'>学习教程</a></li>"+
                            "<li><a href='http://c2engine.com/social' target='_blank'>互动社区</a></li>"+
                            "<li><a href='searchcoo.html'>寻求合作</a></li>"+
                        "</ul>"+
                    "</li>"+
                    "<li><a href='channelcoo.html'>渠道合作</a></li>"+
                "</ul>"+
                "<ul class='uu-right'>"+
                    "<li class='li-login'><button id='fa-user' class='fa fa-user' aria-hidden='true'>登录</button>"+
                        "<ul class='main-nav-right' style='display:none;'>"+

                        "</ul>"+
                    "</li>"+
                    "<li><a href='download.html'><span class='btn-primary preview'>获取C²engine</span></a></li>"+
                "</ul>"+
                "</div>"+
            "</div>"+
        "</div>");

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
                    $(this).find("ul").stop(true, false).slideUp(300)
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
                    $(this).find("ul").stop(true, false).slideUp(300)
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
    });

}

function ResetTopLayout(){
if($(window).width() > 1140){
$('#down-uu').slideDown(0);
}else{
$('#down-uu').slideUp(0);
}
}

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
login:"generallyLogin.action",
register:"generallyRegister.action"
};

var login=ajaxUrl["uri"] + ajaxUrl["login"];
var register=ajaxUrl["uri"] + ajaxUrl["register"];

function createLogin() {
    $(".container-outer").remove();
    $("body").append(
        "<div class='container-outer'>" +
        "<div class='container container-login'>" +
        "<form class='form_login-user'>" +
        "<div class='form-pic'>" +
        "<img src='http://cdn.c2engine.com/c2engine/img2/logo.png' width='184' height='64'  alt=''/>" +
        "</div>" +
        "<div class='lay_input-user'>" +
        "<label>用户名</label>" +
        "<input type='text' class='lay_name focus-input' name='username' />" +
        "<div></div>"+
        "</div>" +
        "<div class='lay_input-user'>" +
        "<label>密码</label>" +
        "<input type='password' class='lay_name focus-input' name='password' />" +
        "<div></div>"+
        "</div>" +
        "<button type='button' class='lay_button'>登录</button>" +
        "<div class='lay_footer'>" +
        "<a href='javascript:void(0)' class='btn-reg'>注册账号</a>" +
        "</div>" +
        "</form>" +
        "</div>" +
        "</div>");
}

function createRegister() {
    $(".container-outer").remove();
    $("body").append(
        "<div class='container-outer'>" +
        "<div class='container container-register'>" +
        "<form class='form_reg'>" +
        "<div class='form-pic'>" +
        "<img src='http://cdn.c2engine.com/c2engine/img2/logo.png' width='184' height='64'  alt=''/>" +
        "</div>" +
        "<div class='lay_input-reg'>" +
        "<label>用户名</label>" +
        "<input type='text' class='lay_reg focus-input' name='username' />" +
        "<div></div>"+
        "</div>" +
        "<div class='lay_input-reg'>" +
        "<label>邮箱地址</label>" +
        "<input type='text' class='lay_reg focus-input' name='e-mail' />" +
        "<div></div>"+
        "</div>" +
        "<div class='lay_input-reg'>" +
        "<label>密码</label>" +
        "<input type='password' class='lay_reg focus-input' name='password' />" +
        "<div></div>"+
        "</div>" +
        "<div class='lay_input-reg'>" +
        "<label>确认密码</label>" +
        "<input type='password' class='lay_reg focus-input' name='password-repeat' />" +
        "<div></div>"+
        "</div>" +
        "<div class='lay_input-reg'>" +
        "<label>验证码</label>" +
        "<input type='text' class='tr_reg focus-input' name='tryNum' />" +
        "<div></div>"+
        "</div>" +
        "<div class='lay_input-ver'>" +
        "</div>"+
        "<span id='result'>换一个</span>"+
        "<div class='lay_box'>" +
        "<label>" +
        "<input type='checkbox' checked='checked' class='check_box' />同意<a href='./untiy3d.html' style='color: rgb(0,174,239);'>网站使用条款</a>" +
        "</label>" +
        "</div>" +
        "<button type='button' class='lay_send'>立即注册</button>" +
        "<div class='lay_footer'>" +
        "<a href='javascript:void(0)' class='lay_gt'>已有账号？现在登录</a>" +
        "</div>" +
        "</form>" +
        "</div>" +
        "</div>");
}

$("body").on("click", ".lay_gt,#fa-user", function () {

createLogin();

$("input[name='username']").on("blur",function () {

    var username=$("input[name='username']").val();

    //empty
    $(".lay_input-user").eq(0).find("div").empty();

        if(username==""){
            $(".lay_input-user:nth-child(2) .lay_name").addClass("error");
            $(".lay_input-user").eq(0).find("div").text("请输入用户名");
        }else{
            $(".lay_input-user:nth-child(2) .lay_name").removeClass("error");
        }

    });
    //password blur
    $("input[name='password']").on("blur",function () {

    $(".lay_input-user").eq(1).find("div").empty();

    var psd=$("input[name='password']").val();

        if(psd==""){
            $(".lay_input-user:nth-child(3) .lay_name").addClass("error");
            $(".lay_input-user").eq(1).find("div").text("请输入密码");
        }else{
            $(".lay_input-user:nth-child(3) .lay_name").removeClass("error");
        }
    });
});

$("body").on("click", ".btn-reg", function () {

    createRegister();

    //clause
        $("body").on("change",".check_box",function () {

        if($(".check_box").prop("checked")){
            $(".lay_send").removeAttr("disabled");
        }else{
            $(".lay_send").attr("disabled","disabled");
        }
    });


    $("input[name='username']").on("blur",testA);

//password blur
    $("input[name='password']").on("blur",testB);
//password blur
    $("input[name='password-repeat']").on("blur",testC);
//email blur
    $("input[name='e-mail']").on("blur",testD);

//校验验证码
    $("input[name='tryNum']").on("blur",testE);
//刷新验证码
    $("#result").on("click",function () {
        createCode();
    });

    createCode();
});


    var code ; //在全局定义验证码
//产生验证码
    function createCode() {
        code = "";
        var codeLength = 4;//验证码的长度
        var checkCode = $(".lay_input-ver");
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
        }
        checkCode.text(code) ;//把code值赋给验证码
    }

    function testE() {

        var inputCode = $("input[name='tryNum']").val().toUpperCase(); //取得输入的验证码并转化为大写
        if(inputCode.length <= 0) { //若输入的验证码长度为0
            $(".lay_input-reg").eq(4).find("div").html("请输入验证码");//则弹出请输入验证码
            $(".lay_input-reg:nth-child(6) .tr_reg").addClass("error");
            $(".lay_send").attr("disabled","disabled");
        }else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
            $(".lay_input-reg").eq(4).find("div").html("验证码错误");//则弹出验证码输入错误
            $(".lay_input-reg:nth-child(6) .tr_reg").addClass("error");
            createCode();//刷新验证码
            $("input[name='tryNum']").val("") ;//清空文本框
            $(".lay_send").attr("disabled","disabled");
        }else{
            $(".lay_send").removeAttr("disabled");
            $(".lay_input-reg:nth-child(6) .tr_reg").removeClass("error");
            $(".lay_input-reg").eq(4).find("div").empty();
        }
    }

    function testA () {

        //empty
        $(".lay_input-reg").eq(0).find("div").empty();

        var username=$("input[name='username']").val();

        if(username==""){
            $(".lay_input-reg:nth-child(2) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(0).find("div").text("请输入用户名");
        }else{
            $(".lay_input-reg:nth-child(2) .lay_reg").removeClass("error");
        }

    }

    function testB() {

        //在显示提示信息之前将所在位置其他提示信息清空
        $(".lay_input-reg").eq(2).find("div").empty();

        var psd=$("input[name='password']").val();

        if(psd==""){
            $(".lay_input-reg:nth-child(4) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(2).find("div").text("请输入密码");
        }else{
            $(".lay_input-reg:nth-child(4) .lay_reg").removeClass("error");
        }
    }

    function testC() {

//在显示提示信息之前将所在位置其他提示信息清空
        $(".lay_input-reg").eq(3).find("div").empty();
        var psd=$("input[name='password']").val();
        var psdRepeat=$("input[name='password-repeat']").val();

        if(psdRepeat==""){
            $(".lay_input-reg:nth-child(5) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(3).find("div").text("请再次输入密码");
            $(".lay_send").attr("disabled","disabled");
        }else if(psdRepeat!=psd){
            $(".lay_input-reg:nth-child(5) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(3).find("div").text("请输入相同密码");
            $(".lay_send").attr("disabled","disabled");
        }else{
            $(".lay_input-reg:nth-child(5) .lay_reg").removeClass("error");
            $(".lay_send").removeAttr("disabled");
        }
    }

    function testD() {

        $(".lay_input-reg").eq(1).find("div").empty();

        var email=$("input[name='e-mail']").val();

        //邮箱正则表达式对象
        var emailStr = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;


        if(email==""){
            $(".lay_input-reg:nth-child(3) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(1).find("div").text("请输入邮箱地址");
            $(".lay_send").attr("disabled","disabled");
        }else if(emailStr.test(email)==false){
            $(".lay_input-reg:nth-child(3) .lay_reg").addClass("error");
            $(".lay_input-reg").eq(1).find("div").text("邮箱非法");
            $(".lay_send").attr("disabled","disabled");
        }else{
            $(".lay_input-reg:nth-child(3) .lay_reg").removeClass("error");
            $(".lay_send").removeAttr("disabled");
        }
    }


var b_login =false;

function isNotLogin() {
    var username=$("input[name='username']").val();
    var psd=$("input[name='password']").val();

    $.post(login,{
    username:username,
    password:psd
    },function(data){
        var username=$("input[name='username']").val();
        var psd=$("input[name='password']").val();
        switch (data.errorCode){

            //success
            case "0":
                sessionStorage.setItem("username",username);
                var setName=sessionStorage.getItem("username");
                $("#fa-user").text(setName);
                $("#fa-user").removeClass("fa-user");
                $("#logout").remove();
                $(".li-login ul").append("<li id='logout'>注销</li>");
                $(".container-outer").remove();
                $("#fa-user").attr("disabled","disabled");
                if($("#fa-user").width()>140){
                    $("#fa-user").text(username.slice(0,10)+"...");
                    $("#fa-user").attr("title",username);
                }
                if(b_login == true)
                {
                    b_login = false;
                    location.href="http://pan.baidu.com/s/1mi2m7A4";
                }
                break;
            //error
            case "-2":
                $(".lay_input-user").eq(1).find("div").text("密码错误");
                $(".lay_input-user:nth-child(3) .lay_name").addClass("error");
                $("#logout").remove();
                $("#fa-user").text("登录");
                $("#fa-user").removeAttr("disabled");
                break;
            case "-1":
                $("#logout").remove();
                $("#fa-user").text("登录");
                $("#fa-user").removeAttr("disabled");
                if(username==""){
                    $(".lay_input-user:nth-child(2) .lay_name").addClass("error");
                    $(".lay_input-user").eq(0).find("div").text("请输入用户名");
                }else if(psd==""){
                    $(".lay_input-user:nth-child(3) .lay_name").addClass("error");
                    $(".lay_input-user").eq(1).find("div").text("请输入密码");
                }else {
                    $(".lay_input-user:nth-child(2) .lay_name").removeClass("error");
                    $(".lay_input-user:nth-child(3) .lay_name").removeClass("error");
                }
                break;
        }
        return data.errorCode;
    },'json');
    return data.errorCode;
}

//login
$("body").on("click", ".lay_button", function () {
    console.log(isNotLogin());

});

    function isNotRegister() {
        var username=$("input[name='username']").val();
        var psd=$("input[name='password']").val();
        var psdRepeat=$("input[name='password-repeat']").val();
        var timestamp=new Date().getTime();
        var sign=hex_md5("123456789"+timestamp+"ajkshjkdfhjksdhfjdasd12345");

        $.post(register,{
            username:username,
            password:psd,
            appid:123456789,
            sign:sign,
            timestamp:timestamp
        },function (data) {
            switch (data.errorCode){
                case "0":
                    sessionStorage.setItem("username",username);
                    var setName=sessionStorage.getItem("username");
                    $("#fa-user").text(setName);
                    $("#fa-user").removeClass("fa-user");
                    $("#logout").remove();
                    $(".li-login ul").append("<li id='logout'>注销</li>");
                    $(".container-outer").remove();
                    $("#fa-user").attr("disabled","disabled");

                    if($("#fa-user").width()>140){
                        $("#fa-user").text(username.slice(0,10)+"...");
                        $("#fa-user").attr("title",username);
                    }
                    if(b_login == true)
                    {
                        b_login = false;
                        location.href="http://pan.baidu.com/s/1mi2m7A4";
                    }
                    break;
                case "-4":
                    $(".lay_input-reg:nth-child(2) .lay_reg").addClass("error");
                    $(".lay_input-reg").eq(0).find("div").text("用户名已存在");
                    $("#logout").remove();
                    $("#fa-user").text("登录");
                    $("#fa-user").removeAttr("disabled");
                    return false;
                    break;
                case "-1":
                    $("#logout").remove();
                    $("#fa-user").text("登录");
                    $("#fa-user").removeAttr("disabled");
                    if(username==""){
                        $(".lay_input-reg:nth-child(2) .lay_reg").addClass("error");
                        $(".lay_input-reg").eq(0).find("div").text("请输入用户名");
                    }else if(psd==""){
                        $(".lay_input-reg:nth-child(4) .lay_reg").addClass("error");
                        $(".lay_input-reg").eq(2).find("div").text("请输入密码");
                    }else {
                        $(".lay_input-reg:nth-child(0) .lay_reg").removeClass("error");
                        $(".lay_input-reg:nth-child(4) .lay_reg").removeClass("error");
                    }
                    break;
                default:
                    $(".lay_input-reg:nth-child(4) .lay_reg").addClass("error");
                    $(".lay_input-reg").eq(4).find("div").text("注册失败");
                    $("#logout").remove();
                    $("#fa-user").text("登录");
                    $("#fa-user").removeAttr("disabled");
            }
        },'json');
    }

//register
    $("body").on("click", ".lay_send", function () {
        var username=$("input[name='username']").val();
        var email=$("input[name='e-mail']").val();
        var psd=$("input[name='password']").val();
        var psdRepeat=$("input[name='password-repeat']").val();
        var tryNum=$("input[name='tryNum']").val();

        if(username!=""&&email!=""&&psd!=""&&psdRepeat!=""&&tryNum!=""){
            isNotRegister();
        }else{
            testA();
            testD();
            testB();
            testC();
            testE();
        }

        if(username!==""){
            testA();
        }else if(email!=""){
            testD();
        }else if(psd!=""){
            testB();
        }else if(psdRepeat!=""){
            testC();
        }else if(tryNum!=""){
            testE();
        }else{
            isNotRegister();
        }

    });

    $("body").on("click",".form_login-user,.form_reg",function (event) {
        event.stopPropagation();
    });
    $("body").on("click",".container-outer",function () {
        $(this).remove();
    });

    $("body").on("click", "#logout", function () {
        sessionStorage.clear();
        $("#logout").remove();
        location.reload();
    });

    if((sessionStorage.getItem('username'))==null||(sessionStorage.getItem('username'))==""||(sessionStorage.getItem('username'))=="undefined"){
        $("#logout").remove();
        $("#fa-user").text("登录");
        $("#fa-user").removeAttr("disabled");
    }else{
        $("#fa-user").text(sessionStorage.getItem('username'));
        $("#fa-user").removeClass("fa-user");
        $("#logout").remove();
        $(".li-login ul").append("<li id='logout'>注销</li>");
        $("#fa-user").attr("disabled","disabled");
    }
    $(".down-btn").on("click",function () {
        if((sessionStorage.getItem('username'))==null||(sessionStorage.getItem('username'))==""||(sessionStorage.getItem('username'))=="undefined"){
            createLogin();
            b_login = true;
            console.log(b_login);
        }else{
            location.href="http://pan.baidu.com/s/1mi2m7A4";
        }
    });

    var text=$("#fa-user").text();
        if($("#fa-user").width()>140){
            $("#fa-user").text(text.slice(0,10)+"...");
            $("#fa-user").attr("title",text);
        }

});

$(window).resize(function(){
ResetTopLayout();
});
