//CookieUtil方法，便于创、取、删cookie
var CookieUtil={
    get:function(name){
        var cookieName=encodeURIComponent(name)+"=",
            cookieStart=document.cookie.indexOf(cookieName),
            cookieValue=null;
        if(cookieStart>-1){
            var cookieEnd=document.cookie.indexOf(";",cookieStart);
            if(cookieEnd===-1){
                cookieEnd=document.cookie.length;}
            cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
        }
        return cookieValue;
    },
    set:function(name,value,path,domain,secure){
        var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(path){
            cookieText+=";path="+path;
        }
        if(domain){
            cookieText+=";domain="+domain;
        }
        if(secure){
            cookieText+=";secure";
        }
        document.cookie=cookieText;
    },
    unset:function(name,path,domain,secure){
        this.set(name,"",new Date(0),path,domain,secure);
    }
};

var productcount=0;
window.onload=function(){
    change();
    changePage();
    if(document.cookie.indexOf("productcount")!==-1){
        productcount=CookieUtil.get("productcount");
    }
    document.querySelector("header a.shoppingcart").innerText+="[商品数："+productcount+"]";
    if(document.cookie.indexOf("productcount")!==-1){
        productcount=CookieUtil.get("productcount");
    }

}

//加入购物车
document.querySelector("article div.add a button[name=shoppingcart]").addEventListener("click",addProduct);
function addProduct(){
    var imgname=document.querySelector("article div.info h2.picname").innerHTML;
    var imgauthor=document.querySelector("article div.info p a.author span").innerHTML;
    var imgpath=document.querySelector("article div.info img").src;
    var imgdes=document.querySelector("article div.add p.desc").innerHTML;
    var price=document.querySelector("article div.add p.price span.pricenumber").innerHTML;
    var currentTime=getCurrentTime();
    try{productcount++;
    CookieUtil.set("imgname"+productcount,imgname,"/");
    CookieUtil.set("imgauthor"+productcount,imgauthor,"/");
    CookieUtil.set("imgpath"+productcount,imgpath,"/");
    CookieUtil.set("imgdes"+productcount,imgdes,"/");
    CookieUtil.set("price"+productcount,price,"/");
    CookieUtil.set("createTime"+productcount,currentTime,"/");
    CookieUtil.set("productcount",productcount,"/");
    alert("添加成功！");}catch (e) {alert("添加失败！");productcount--}
    location.reload();
}

//得到当前时间
function getCurrentTime(){
    var now=new Date();
    var year=now.getDay().toString();
    var month=(now.getMonth()+1).toString();
    var day=now.getDate().toString();
    var hour=now.getHours().toString();
    var minute=now.getMinutes().toString();
    var second=now.getSeconds().toString();
    return year+month+day+hour+minute+second;
}

//作者名跳转
document.querySelector("div.info p a.author").addEventListener("click",searchAuthor);
function searchAuthor(){
    document.querySelector("div.info p a.author").href="Search%20Page.html?search="+document.querySelector("div.info p a.author span").innerText;
}



//登出按钮
document.querySelector("header span.right a.logout").addEventListener("click",logout);
function logout(){
    if(checkLogin()!=="unfound"){
        document.cookie="username="+checkLogin()+";Max-Age="+0+";path=/";}
    document.querySelector("header span.right a.login").innerHTML="未登录";
    document.querySelector("header span.right a.login").href="User%20Information%20Page.html";
    document.querySelector("header span.right a.logout").style.display="none";
    document.querySelector("header span.right").style.display="inline";
    document.querySelector("header span.left").style.display="inline";
}

//登录用户名错误提示
var loginUsernameInput=document.querySelector("div#login div.popup-content form p input[name=username]");
loginUsernameInput.onblur=function(){
    var username = loginUsernameInput.value;
    if(username==="none"){
        document.querySelector("#loginUsernameTip").innerHTML="用户名不存在";
    }
    else if(username===""){
        document.querySelector("#loginUsernameTip").innerHTML="用户名不能为空";
    }
    else{
        document.querySelector("#loginUsernameTip").innerHTML="";
    }
}
loginUsernameInput.onfocus=function () {
    document.querySelector("#loginUsernameTip").innerHTML="";
}

//登录密码错误提示
var loginPasswordInput=document.querySelector("div#login div.popup-content form p input[name=password]");
loginPasswordInput.onblur=function () {
    var password=loginPasswordInput.value;
    if(password===""){
        document.querySelector("#loginPasswordTip").innerHTML="密码不能为空";
    }
    //密码错误提示在按钮click事件上
}
loginPasswordInput.onfocus=function () {
    document.querySelector("#loginPasswordTip").innerHTML="";
}

//注册用户名错误提示
var registrationUsernameInput=document.querySelector("div#registration div.popup-content form p input[name=username]");
registrationUsernameInput.onblur=function () {
    var username=registrationUsernameInput.value,reg = /^(?![a-zA-z]+$)(?![0-9]+$)[0-9A-Za-z]{6,}$/;
    if(username===""){
        document.querySelector("#registrationUsernameTip").innerHTML="用户名不能为空";
    }
    else if(reg.test(username)===false){
        document.querySelector("#registrationUsernameTip").innerHTML="用户名不符合规范 正确示例:Abc123";
    }
}
registrationUsernameInput.onfocus=function () {
    document.querySelector("#registrationUsernameTip").innerHTML="";
}

//注册密码错误提示
var registrationPasswordInput=document.querySelector("div#registration div.popup-content form p input[name=password]");
registrationPasswordInput.onblur=function(){
    var password=registrationPasswordInput.value,
        reg=/^[0-9A-Za-z]{6,}$/,
        username=registrationUsernameInput.value;
    if(password===""){
        document.querySelector("#registrationPasswordTip").innerHTML="密码不能为空";
    }
    else if(password===username){
        document.querySelector("#registrationPasswordTip").innerHTML="密码不能与用户名重复";
    }
    else if(reg.test(password)===false) {
        document.querySelector("#registrationPasswordTip").innerHTML = "密码不符合规范 正确示例:123Abc";
    }
}
registrationPasswordInput.onfocus=function () {
    document.querySelector("#registrationPasswordTip").innerHTML="";
}
//注册确认密码错误提示
var registrationRePasswordInput=document.querySelector("div#registration div.popup-content form p input[name=repassword]");
registrationRePasswordInput.onblur=function(){
    var repassword=registrationRePasswordInput.value,password=document.querySelector("div#registration div.popup-content form p input[name=password]").value;
    if(repassword===""){
        document.querySelector("#registrationRePasswordTip").innerHTML="确认密码不能为空";
    }
    else if(repassword!==password){
        document.querySelector("#registrationRePasswordTip").innerHTML="确认密码与密码不同";
    }
}
registrationRePasswordInput.onfocus=function(){
    document.querySelector("#registrationRePasswordTip").innerHTML="";
}


//注册电话错误提示
var registrationTelephoneInput=document.querySelector("div#registration div.popup-content form p input[name=telephone]");
registrationTelephoneInput.onblur=function(){
    var telephone=registrationTelephoneInput.value,reg=/^1[0-9]{10}$/;
    if(telephone===""){
        document.querySelector("#telephone").innerHTML="输入不能为空";
    }
    else if(reg.test(telephone)===false){
        document.querySelector("#telephone").innerHTML="输入格式不正确 正确示例：12345678910";
    }
}
registrationTelephoneInput.onfocus=function(){
    document.querySelector("#telephone").innerHTML="";
}
//登录写入cookie
document.querySelector("div#login div.popup-content form p button").addEventListener("click",login);
document.querySelector("div#registration div.popup-content form p button").addEventListener("click",registration);
function login() {
    var username=document.querySelector("div#login div.popup-content form p input[name=username]").value;
    var password=document.querySelector("div#login div.popup-content form p input[name=password]").value;
    //密码错误，错误提示，表单禁止发送
    if(password==="wrong"){
        document.querySelector("#loginPasswordTip").innerHTML="密码错误";
        document.querySelector("#login div.popup-content form").onsubmit=function () {
            return false;
        }}
    else if(username===""){
        document.querySelector("#loginUsernameTip").innerHTML="用户名不能为空";
        document.querySelector("#login div.popup-content form").onsubmit=function () {
            return false;
        }
    }
    //密码正确发送cookie
    else{
        document.querySelector("#login div.popup-content form").onsubmit=function () {
            return true;
        }
        document.cookie="username="+username+";Max-Age="+24*60*60+";path=/";
        document.cookie="password="+password+";Max-Age="+24*60*60+";path=/";
        changePage();}
}
function registration() {
    var username=document.querySelector("div#registration.popup-content form p input[name=username]").value;
    var password=document.querySelector("div#registration.popup-content form p input[name=password]").value;
    document.cookie="username="+username+";Max-Age="+24*60*60+";path=/";
    document.cookie="password="+password+";Max-Age="+24*60*60+";path=/";
    changePage();
}
//读入cookie判断登录
function checkLogin(){
    if(document.cookie.length>0){
        var c_start=document.cookie.indexOf("username=");
        if(c_start!==-1){
            c_start=c_start+"username=".length;
            c_end=document.cookie.indexOf(";",c_start);
            if(c_end===-1){
                c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }return"unfound";
}

function changePage(){
    var username=checkLogin();
    if(username!=="unfound"&&username!==""){
        document.querySelector("header span.right a.login").innerHTML="用户"+username;
        document.querySelector("header span.right a.login").href="User%20Information%20Page.html";
        document.querySelector("header span.right a.logout").style.display="block";
        document.querySelector("header span.left").style.display="none";
        document.querySelector("header span.right").style.display="inline-flex";
    }
}

//随机生成4位验证码
document.querySelector("#captchaimg").addEventListener("click",change);
function change(){
    document.querySelector("#captchaimg").innerHTML=getCode(4);
}
function getCode(n){
    var all="aazcxbnvmdsgfjhqklwretuyipoMNBVCXZLKJHGFDSAPOIUYTREWQ1480235697";
    var b="";
    for(var i=0;i<n;i++){
        var index=Math.floor(Math.random()*62);
        b+=all.charAt(index);
    }
    return b;
}
var captchainput=document.querySelector("input[name=captcha]");
captchainput.onblur=function(){
    var captchaanswer=document.querySelector("#captchaimg").innerHTML;
    if(captchainput!==captchaanswer){
        document.querySelector("#loginCaptchaTip").innerHTML="验证码错误";
        document.querySelector("#login div.popup-content form").onsubmit=function () {
            return false;
        }
    }}
captchainput.onfocus=function(){
    document.querySelector("#loginCaptchaTip").innerHTML="";
}