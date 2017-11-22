
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
    //设置自动轮播
    timer=setInterval(nextPic,2000);
    document.getElementById("container").onmouseover=function () {
        clearInterval(timer);
    }
    document.getElementById("container").onmouseout=function () {
        timer=setInterval(nextPic,2000);
    }
};
