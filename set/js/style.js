document.documentElement.style.fontSize=innerWidth/15+"px";
//下载图片开关
var sw = document.querySelector(".switch");
var on_off=document.querySelector(".on-off");
var n=1;
on_off.addEventListener("touchstart",function(ev){
    ev.preventDefault();
    n++;
    if(n%2==1){
        sw.style.background="#999";
        this.style.cssText="right";
    }else{
        sw.style.background="#148ad2";
        this.style.right=0;
    }
});
//视频自动播放开关
var sw01 = document.querySelector(".switch01");
var on_off01=document.querySelector(".on-off01");
var m=1;
on_off01.addEventListener("touchstart",function(ev){
    ev.preventDefault();
    m++;
    if(m%2==1){
        sw01.style.background="#999";
        this.style.cssText="right";
    }else{
        sw01.style.background="#148ad2";
        this.style.right=0;
    }
});
//字体大小
var sw02 = document.querySelector(".switch02");
var on_off02=document.querySelector(".on-off02");
var new_color=document.querySelector(".new-color");
var biao=document.querySelector(".no1");
sw02.addEventListener("touchstart",function(ev){
    ev.preventDefault();
    var swl=ev.changedTouches[0].clientX;
    var l=sw02.offsetWidth;
    on_off02.addEventListener("touchmove",function(ev){
        ev.preventDefault();
        var wwe=ev.changedTouches[0].clientX-swl;
        var onl=on_off02.offsetWidth;
        if(wwe<=0) wwe=0;
        if(wwe>=l) wwe=l;
        on_off02.style.left=wwe-(onl/2)+"px";
        new_color.style.width=wwe-(onl/2)+"px";
        biao.innerHTML=wwe;
    })
});
on_off02.addEventListener("touchend",function(ev){
    on_off02.touchmove=null;
});
//屏幕亮度
var sw03 = document.querySelector(".switch03");
var on_off03=document.querySelector(".on-off03");
var new_color03=document.querySelector(".new-color03");
var light =document.querySelector(".light");
var swW=sw03.offsetWidth;
var arr=[25,50,75,100,"自动"];
light.addEventListener("touchstart",function(i){
    for(var i=0;i<arr.length;i++){
    }

});


sw03.addEventListener("touchstart",function(ev){
    ev.preventDefault();
    var sw03l=ev.changedTouches[0].clientX;
    var sw33l=sw03.offsetWidth;
    on_off03.addEventListener("touchmove",function(ev){
        var wwe=ev.changedTouches[0].clientX-sw03l;
        var onl=on_off03.offsetWidth;
        if(wwe<=0) wwe=0;
        if(wwe>=sw33l) wwe=sw33l;
        on_off03.style.left=wwe-(onl/2)+"px";
        new_color03.style.width=wwe-(onl/2)+"px";
    })
});
on_off03.addEventListener("touchend",function(ev){
    on_off03.touchmove=null;
});
























