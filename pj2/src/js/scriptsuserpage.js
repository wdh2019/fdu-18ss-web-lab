//CookieUtil方法
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
    set:function(name,value,expires,path,domain,secure){
        var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
        if(path){
            cookieText+=";domain="+domain;
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
window.onload=function(){fillInInfo();showBoughtProducts();
    if(document.cookie.indexOf("productcount")!==-1){
        productcount=CookieUtil.get("productcount");
    }
    document.querySelector("header a.shoppingcart").innerText+="[商品数："+productcount+"]";}
function fillInInfo(){
    if(username!==""){
    var username=CookieUtil.get("username");
    var password=CookieUtil.get("password");
    var telephone=CookieUtil.get("telephone");
    document.querySelector("span.username").innerHTML=username;
    document.querySelector("span.password").innerHTML=password;
    document.querySelector("span.telephone").innerHTML=telephone;}
}
function showBoughtProducts(){
    var productcount=CookieUtil.get("productcount");
    if(productcount!==undefined&&productcount!=="0"&&productcount!==null){
    for(i=1;i<=productcount;i++){
        var div=document.createElement("div");
        div.setAttribute("class","div");
        var p=document.createElement("p");
        p.setAttribute("class","p")
        var num=document.createElement("span");
        num.setAttribute("id","num");
        num.innerHTML="订单编号："+CookieUtil.get("createTime"+i);
        var name=document.createElement("span");
        name.setAttribute("id","name");
        name.innerHTML="商品名称："+CookieUtil.get("imgname"+i);
        var date=document.createElement("span");
        date.setAttribute("id","date");
        date.innerHTML="订单时间："+CookieUtil.get("createTime"+i);
        var price=document.createElement("span");
        price.setAttribute("id","price");
        price.innerHTML="订单金额：$"+CookieUtil.get("price"+i);
        p.appendChild(num);
        p.appendChild(name);
        p.appendChild(date);
        p.appendChild(price);
        div.appendChild(p);
        document.querySelector("section#boughtproducts").appendChild(div);
    }
}
}

document.querySelector("button[name=deposit]").addEventListener("click",deposit);
function deposit() {
    alert("充值并不能使你变强");
}
document.querySelector("header a.logout").addEventListener("click",backToHomePage);
function backToHomePage() {
    document.querySelector("header a.logout").href="First%20Page.html";
    CookieUtil.unset("username");
}