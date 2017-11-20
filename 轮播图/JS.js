/**
 * Created by darling on 2017/11/9.
 */
/*1.设置线型按钮图标的颜色
  1.1获取线型按钮
  1.2获取当前按钮的索引值
  1.3给当前按钮设置颜色
2.定义向下翻页按钮
  2.1定义数组，存放类名
  2.2获取li元素
  2.3计算一次数组
  2.4给li元素重新设置类名
  2.5重新计算线型按钮的索引值
  2.6重新设置按钮颜色*/
/*
window.onload=function () {
    var lineB=document.getElementsByClassName("line")[0].getElementsByTagName("a"),
        index=0,
        imgArray=["list1","list2","list3","list4","list5","list6"],
        list=document.getElementsByClassName("pic")[0].getElementsByTagName("li");
    function lineColor() {
        for(var i in lineB){
            //用字符串操作把字符串转换成数字
            // alert("hhh");
            if(i-0+1) lineB[i].style.backgroundColor="#ccc";
        }
        lineB[index].style.backgroundColor="#700000";
        lineColor();
    }
    //定义向下翻页按钮
    function nextPic() {
        imgArray.unshift(imgArray[5]);//将最后一个元素赋值添加到第一个
        imgArray.pop();//然后将最后一个元素删除
        for(var i in list){
            if(i-0+1) list.setAttribute("class",imgArray[i]);
        }
        index++;
        if(index>5){
            index=0;
        }
        lineColor();
    }
    //绑定事件
    /!*document.addEventListener("click",function () {
        var el=event.target.parentNode.parentNode;
        if(el.getAttribute("class"=="list3")){
            nextPic();
        }
    });*!/
    function prePic() {
        imgArray.push(imgArray[0]);//将最后一个元素赋值添加到第一个
        imgArray.shift();//然后将最后一个元素删除
        for(var i in list){
            if(i-0+1) list.setAttribute("class",imgArray[i]);
        }
        index--;
        if(index<0){
            index=5;
        }
        lineColor();
    }
    document.addEventListener("click",function () {
        var el=event.target.parentNode.parentNode;
        if(el.getAttribute("class"=="list3"))   nextPic();
        else if(el.getAttribute("class"=="list3")) prePic();
    });
    var timer=setInterval(nextPic,2000);
    document.getElementsByClassName("container")[0].onmouseover=function () {
        clearInterval(timer);
    };
    document.getElementsByClassName("container")[0].onmouseover=function () {
        timer=setInterval(nextPic,2000);
    }
};*/
window.onload=function () {
    var lineB=document.getElementsByClassName("line")[0].getElementsByTagName("a");
    var index=0,imgArray=["list1","list2","list3","list4","list5","list6"];
    var list=document.getElementsByClassName("pic")[0].getElementsByTagName("li");
    //设置颜色
    function lineColor() {
        for(var i in lineB){
            if(i-0+1) lineB[i].style.backgroundColor="#ccc";
        }
        lineB[index].style.backgroundColor="#A80000"
    }
    // lineColor();
    // lineB[0].style.backgroundColor="#A80000";

    //向上翻页
    function prePic() {
        imgArray.push(imgArray[0]);//把数组的第一个元素添加到最后
        imgArray.shift();//然后把第一个元素删除
        //重新设置li的class
        for(var i in list){
            if(i-0+1) list[i].setAttribute("class",imgArray[i]);
        }
        index--;
        if(index<0){
            index=5;
        }
        lineColor();
    }
    //向下翻页
    function nextPic() {
        imgArray.unshift(imgArray[5]);//把数组的最后一个元素添加到最前
        imgArray.pop();//然后把最后一个元素删除
        //重新设置li的class
        for(var i in list){
            if(i-0+1) list[i].setAttribute("class",imgArray[i]);
        }
        index++;
        if(index>5){
            index=0;
        }
        lineColor();
    }
    //绑定事件
    document.addEventListener("click",function () {
        var el=event.target.parentNode.parentNode;//获取li元素
        if(el.getAttribute("class")=="list3")  nextPic();
        else if(el.getAttribute("class")=="list1") prePic();
    });
};