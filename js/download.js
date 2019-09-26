/**
 * Created by wangxiuhong on 2016/12/30.
 */
$(function () {

    $("#bf-btn").click(function(){
        $("#bf-poster,#bf-btn").hide();

        $(".video-out").append(
            "<iframe id='player-video' src='http://player.youku.com/embed/XMTg5MDc3NjcwMA==' frameborder=0 'allowfullscreen'></iframe>"
        );
        $("#player-video").width($("#bf-poster").width());
        $("#player-video").height($("#bf-poster").height());

    });

});