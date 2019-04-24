var thumbnails=document.getElementById("thumbnails").children;
var featured=document.getElementById("featured").children[0];
var figure=document.getElementsByTagName("figure")[0];
var figcaption=document.getElementsByTagName("figcaption")[0];
for(var i=0;i<thumbnails.length;i++){
thumbnails[i].onclick=function(e){
featured.src=event.target.src.replace("small","medium");
featured.title=event.target.title;
}
}
figure.onmouseenter=function(){
    figcaption.innerHTML=featured.title;
    var num=0;
    var fadeIn=setInterval(function(){
        if(figcaption.style.opacity!==0.8){
        num++
        figcaption.style.opacity=num/10;
        if(num>=8){
            clearInterval(fadeIn);
        }}
    },1000/8)   
}
figure.onmouseleave=function(){
    var num=10;
    var fadeOut=setInterval(function(){
        if(figcaption.style.opacity!==0){
        num--;
        figcaption.style.opacity=num/10;
        if(num<=0){
            clearInterval(fadeOut);
        }}
    },1000/10)
}

