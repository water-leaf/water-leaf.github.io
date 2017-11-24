/**
 * Created by darling on 2017/11/23.
 */
$(document).ready(function(){
    $("#rotateArrow").click(function(){
        var n=Math.floor(Math.random()*8);
        //floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
        //random() 方法可返回介于 0 ~ 1 之间的一个随机数。
        switch (n){
            case 0:rotateFun(45,"恭喜你获得5元代金券！");break;
            case 1:rotateFun(90,"恭喜你获得1元代金券！");break;
            case 2:rotateFun(135,"恭喜你获得10元代金券！");break;
            case 3:rotateFun(180,"很遗憾，你没有中奖！");break;
            case 4:rotateFun(225,"恭喜你获得20元代金券！");break;
            case 5:rotateFun(270,"恭喜你获得50元代金券！");break;
            case 6:rotateFun(315,"恭喜你获得30元代金券！");break;
            case 7:rotateFun(360,"很遗憾，你没有中奖！");break;
        }
        rotateFun(deg,result);
    });
    function rotateFun(deg,result) {
        $("#rotateArrow").rotate({
            angle:0,//初始位置
            duration:6000,//旋转的时间(6秒)
            animateTo:deg+1800,//旋转角度
            callback:function () {//旋转停止后调用的函数
                $("#result").show();
                $("#result p").html(result);
            }
        })
    }
    $("#close").click(function () {
        $("#result").hide();
    });
    setInterval(function () {
        $("#user ul").animate({"top":"-22px"},700,function(){
            //当动画执行完一次后，把第一个li追加到最后
            $(this).append($("#user li:first"));
            $(this).css("top",0);
        });
    },1000)
});