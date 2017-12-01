/**
 * Created by darling on 2017/11/29.
 */
window.onload = function () {
    var myMusic = document.getElementById("myMusic");
    var btn = document.getElementById("btn");
    var txt = document.getElementById("text");
    var content = document.getElementById("content");
    var songName=document.getElementById("songName");
    var name=document.getElementById("name");
    var onOff = true;
    var wth=name.style.width;
    function roll() {
        for(var j=0;j<wth*1;j++){
            songName.style.left=-5*j+"px";
        }
}
roll();
    btn.onclick = function () {
        if (onOff) {
            myMusic.play();
            this.className = "rotate";
            onOff = false;
        }
        else {
            myMusic.pause();
            this.className = "";
            onOff = true;
        }
    };
    var lrc = txt.value.split("[");//获取歌词并切割
    var html = "";
    for (var i = 0; i < lrc.length; i++) {
        var arr = lrc[i].split("]");
        var times = arr[0].split(".");
        var time=times[0].split(":");
        var ct=time[0]*60+time[1]*1;
        if(arr[1]){
            html+="<p id="+ct+">"+arr[1]+"</p>";
       }
    }
    content.innerHTML=html;
    var aP=document.getElementsByTagName("p");
    var n=0;
    myMusic.addEventListener("timeupdate",function () {
        // console.log(this.currentTime);
        var cur=parseInt(this.currentTime);
        if(document.getElementById(cur)){
            for(var i=0;i<aP.length;i++){
                aP[i].style.color="#625959";
            }
            document.getElementById(cur).style.color="red";
            if(aP[n+11].id==cur){
                content.style.top=-20*n+"px";
                n++;
            }
        }
    });
    myMusic.addEventListener("ended",function () {
        btn.className="";
        onOff=true;
    })
};