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
    if(n>2) n=1;
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
    if(m>2) m=1;
});
//字体大小
var sw02 = document.querySelector(".switch02");
var on_off02=document.querySelector(".on-off02"); //小球
var new_color=document.querySelector(".new-color");
var biao=document.querySelector(".no1");
var onl=sw02.offsetLeft;
var onw=sw02.offsetWidth;
    on_off02.addEventListener("touchmove",function(ev){
        ev.preventDefault();
        var wwe=ev.changedTouches[0].clientX-onl;
        if(wwe<=0) wwe=0;
        if(wwe>=onw) wwe=onw;
        on_off02.style.left=Math.floor(wwe)+"px";
        new_color.style.width=Math.floor(wwe)+"px";
        biao.innerHTML=Math.floor(Math.floor(wwe)/onw*100);
    });




//屏幕亮度
var sw03 = document.querySelector(".switch03");
var on_off03=document.querySelector(".on-off03");
var new_color03=document.querySelector(".new-color03");
var light =document.querySelector(".light");
var arr=[25,50,75,100,"自动"];
var s=0;

    var sw33l=sw03.offsetLeft;
    var sw33w=sw03.offsetWidth;
    on_off03.addEventListener("touchmove",function(ev){
        var wwe=ev.changedTouches[0].clientX-sw33l;
        var onl=on_off03.offsetWidth;
        if(wwe<=0) wwe=0;
        if(wwe>=sw33w) wwe=sw33w;
        on_off03.style.left=Math.floor(wwe-(onl/2))+"px";
        new_color03.style.width=Math.floor(wwe-(onl/2))+"px";
    });

light.addEventListener("touchstart",function(i){
    if(s>=arr.length-1){
        s=0;
    }else{
        s++;
    }
    var txt = arr[s];
    switch(s){
            case 0:
                on_off03.style.left= sw33w*0.25+"px";
                new_color03.style.width= sw33w*0.25+"px";
                light.innerHTML=txt;
                break;
            case 1:
                on_off03.style.left= sw33w*0.5+"px";
                new_color03.style.width= sw33w*0.5+"px";
                light.innerHTML=txt;
                break;
            case 2:
                on_off03.style.left= sw33w*0.75+"px";
                new_color03.style.width= sw33w*0.75+"px";
                light.innerHTML=txt;
                break;
            case 3:
                on_off03.style.left= sw33w+"px";
                new_color03.style.width= sw33w+"px";
                light.innerHTML=txt;
                break;
            case 4:
                on_off03.style.left= sw33w*0.35+"px";
                new_color03.style.width= sw33w*0.35+"px";
                light.innerHTML=txt;
                break;
        }

});
























