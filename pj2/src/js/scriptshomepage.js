$(document).ready(function(){
gallery();
});


//画廊轮播js部分
    function gallery(){
    var wrap=$(".wrap");
    var prev=$(".arrow_left");
    var next=$(".arrow_right");
    var dots=$(".buttons span");
    var index=0;
    var timer=null;
    dots.eq(0).attr("class","on");
    show_pic();
    autoPlay();
    //左方向键事件
    prev.click(function(){
        prev_pic();
        show_pic();
    });
    //右方向键事件
    next.click(function(){
        next_pic();
        show_pic();
    });
    //左移画廊
    function prev_pic(){
        index--;
        if(index===-1){
            index=2;
        }
        showCurrentDot();
        var newLeft;
        if(parseInt(wrap.css("left"))===0){
           newLeft=-1600;
        }
        else if(parseInt(wrap.css("left"))===-800){
           newLeft=0;
        }
        else if(parseInt(wrap.css("left"))===-1600){
           newLeft=-800;
        }
        wrap.animate({left:newLeft+"px"});
    }
    //右移画廊
    function next_pic(){
        index++;
        if(index===3){
            index=0;
        }
        showCurrentDot();
        var newLeft;
        if(parseInt(wrap.css("left"))===-1600){
            newLeft=0;
        }
        else if(parseInt(wrap.css("left"))===-800){
            newLeft=-1600;
        }
        else if(parseInt(wrap.css("left"))===0){
            newLeft=-800;
        }
        wrap.animate({left:newLeft+"px"});
    }
    //显示对应图片描述
    function show_pic(){
        $(".pic").css("display","none");
        $(".pic").eq(index).css("display","block");
    }
    //显示对应标号
    function showCurrentDot(){
        dots.attr("class","");
        dots.eq(index).attr("class","on");
    }
    //自动播放
    function autoPlay(){
    timer=setInterval(function(){
        next_pic();
        show_pic();
    },4000)
    }    
    //鼠标悬停，停止自动播放 
    $(".gallery").mouseover(function(){clearInterval(timer)});
    //鼠标移出，开始自动播放
    $(".gallery").mouseout(function(){autoPlay()});
    //标号点击事件(点击一次需重置计时器，否则体验不佳)
    dots.click(function(){
        var dis=dots.index(this);
            wrap.animate({left:dis*-800+"px"});
            index = dis;
            showCurrentDot();
            show_pic();
            clearInterval(timer);
    })
};














