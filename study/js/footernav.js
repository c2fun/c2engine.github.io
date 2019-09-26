// JavaScript Document
document.getElementById("bottom-menu").innerHTML="<div class='container uu_footer'><div class='container_footer'><div><span>开发者</span><ul><li><hr class='hr_footer'/></li><li><a href='download.html'>获取C²engine</a></li><li><a href='http://wiki.c2engine.com' target='_blank'>文档</a></li><li><a href='http://wiki.c2engine.com' target='_blank'>视频教程</a></li><li><a href='http://wiki.c2engine.com' target='_blank'>FAQ</a></li><li><a href='http://wiki.c2engine.com' target='_blank'>API</a></li></ul>"+
"</div><div><span>社区</span><ul><li><hr class='hr_footer'/></li><li><a href='http://bbs.c2engine.com'>论坛</a></li><li><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=37' target='_blank'>问答中心</a></li><li><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=38' target='_blank'>BUG反馈</a></li><li><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=2' target='_blank'>开放平台</a></li><li><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=42' target='_blank'>申请投资</a></li></ul>"+
"</div><div><span>关于C²engine</span><ul><li><hr class='hr_footer'/></li><li><a href='about_company.html'>公司简介</a></li><li><a href='http://weibo.com/u/3738687645' target='_blank'>官方微博</a></li><li><a href='http://bbs.c2engine.com/forum.php?mod=forumdisplay&fid=36' target='_blank'>活动</a></li><li><a href='about_opportunity.html'>工作机会</a></li><li><a href='http://c2engine.com/about_company.html#c2_addr'>联系方式</a></li></ul></div>"+
"<div><span>VR</span><ul><li><hr class='hr_footer'/></li><li><a href='vr.html'>VR</a></li><li><a href='c2_vr.html'>VR行业</a></li></ul></div></div>"+
"<div class='weixin_footer uu_footer'><img src='http://cdn.c2engine.com/c2engine/img/index/weixin_code.png'/><div>C²engine公众号</div></div></div>"+
"<div class='container gongan'>"+
"<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502002202'><img src='http://cdn.c2engine.com/c2engine/img/index/wangjing.png'/><p>沪公网安备 31011502002202号</p></a>"+
"</div>";
var w=window.innerWidth;
    if(w<=878){
        $('.uu_footer div span').click(function(){
            $(this).next().slideToggle();
            if($(this).css('background-image').match('plus')){
                $(this).css('background-image','url(http://cdn.c2engine.com/c2engine/img/minus.png)')
            }
            else{
                $(this).css('background-image','url(http://cdn.c2engine.com/c2engine/img/plus.png)')
            }
        });
    }