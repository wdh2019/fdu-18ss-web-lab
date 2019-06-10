<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome To ArtStore</title>
    <link href="../bootstrap3/css/bootstrap.css" rel="stylesheet">
    <link href="css/CSS firstpage.css" rel="stylesheet"> 
    <link href="css/CSS log+reg.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-3.1.0.min.js"></script>
    <script src="../jcanvas-21.0.1/dist/jcanvas.js"></script>    
</head>
<body>
        <header class="container">
                <ul class="row list list-unstyled list-inline" id="afterloginorregistration">
                     <li>Welcome!  
                     <?php
                     session_start();
                     if(isset($_SESSION['username'])) echo "<a href='User Information Page.html'>".$_SESSION['username'].$_SESSION['password'].'</a>
                     <li><a class="shoppingcart" href="Shopping%20Cart%20Page.html"><span class="glyphicon glyphicon-shopping-cart"></span>shoppingcart</a></li><li><a class="logout"><span class="glyphicon glyphicon-log-out"></span> logout</a></li>';
                     else{echo ' Please first <strong><a href="#login">Login</a></strong>/<strong><a href="#registration">Register</a></strong> </li>';}
                     ?>
                     
                 </ul>
                    
                 <div class="row"><h1 title="logo" class="col-lg-2">Art Store</h1>
                     <div class="col-lg-3">As the sun colours flowers so does art colour life．</div>  
                </div>
              
             </header>
             <nav class="container navbar narbar-default">
                 <ul class="nav nav-tabs">
                 <li role="presentation" class="active"><a  class="navhomepage" href="First%20Page.php">Home</a> </li>
                 <li role="presentation"><a class="navsearch "href="Search%20Page.html">Search</a> </li>
                 <li role="presentation"><a class="login" href="#login">Login</a> </li>
                 <li role="presentation"><a class="registration" href="#registration">registration</a></li>
                 </ul>
             </nav> 
<div class="popup" id="login">
    <div class="popup-content">
        <form action="login.php" method="post" novalidate>
            <legend>Login</legend>
            <div class="control-group" id="controlLoginUsername">
                <label class="control-label" for="loginUsername">Username</label>
                <input type="text" id="loginUsername" name="username" placeholder="enter your username" required>
                <span class="tip" id="loginUsernameTip"></span>
            </div>
            <div class="control-group" id="controlLoginPassword">
                <label class="control-label" for="loginPassword">Password</label>
                <input type="password" id="loginPassword" name="password" placeholder="enter your password" required>
                <span class="tip" id="loginPasswordTip"></span>
            </div>
            <div class="control-group" id="controlLoginCaptcha">
                <div id="captchaimg"></div><span>(Press to refresh; Allow all lowercase)</span><br>
                <label class="control-label" for="captcha">Captcha</label>
                <input type="text" id="captcha" name="captcha" required>
                <span class="tip" id="loginCaptchaTip"></span>
            </div>
                <button type="submit" name="submit">submit</button>
        </form>
        <a href="#" class="close">x</a>
    </div>
</div>

<div class="popup" id="registration">
    <div class="popup-content">
        <form action="register.php" method="post" novalidate>
        <legend>Register</legend>
            <div class="control-group" id="controlRegisterUsername">
                <label class="control-label" for="registrationUsername" >Username</label>
                <input type="text" id="registrationUsername" name="username" placeholder="enter the username" minlength="6" required>
                <span class="tip" id="registrationUsernameTip"></span>
            </div>

            <div class="control-group" id="controlRegisterEmail">
                <label class="control-label" for="registrationEmail" >Email</label>
                <input type="email" id="registrationEmail" name="email" placeholder="enter your email" required>
                <span class="tooltips" data-tooltip="format:xxx@xxx">?</span>
                <span class="tip" id="registrationEmailTip"></span>
            </div>
            
            <div class="control-group" id="controlRegisterPassword">
                <label class="control-label" for="registrationPassword">Password</label>
                <input type="password" id="registrationPassword" name="password" placeholder="enter the password" minlength="6" required>
                <span class="tooltips" data-tooltip="Pure numbers are not allowed.Minlength is 6.">?</span>
                <span class="tip" id="registrationPasswordTip"></span>
            </div>
            
            <div class="control-group" id="controlRegisterRepassword">
                <label class="control-label" for="registrationRepassword">Repassword</label>
                <input type="password" id="registrationRepassword" name="repassword" placeholder="repeat the password"  required>
                <span class="tooltips" data-tooltip="Should be the same as password">?</span>
                <span class="tip" id="registrationRepasswordTip"></span>
            </div>

            <div class="control-group" id="controlRegisterTelephone">
                <label class="control-label" for="registrationTelephone">telephone</label>
                <input type="text" id="registrationTelephone" name="telephone" placeholder="enter your tel"  required>
                <span class="tip" id="registrationTelephoneTip"></span>
            </div>

            <div class="control-group" id="controlRegisterAddress">
                <label class="control-label" for="registrationAddress">Address</label>
                <input type="text" id="registrationAddress" name="address" placeholder="enter your address"  required>
                <span class="tip" id="registrationAddressTip"></span>
            </div>
                <button type="submit" name="submit">submit</button>
        </form>
        <a href="" class="close">x</a>
    </div>
</div>


<article class="container">
<section class="gallery">
     <div class="wrap" style="left:0px;">
     <a href="Picture%20Details%20Page.html"><img src="" alt="1"></a>
     <a href="Picture%20Details%20Page.html"><img src="" alt="2"></a>
     <a href="Picture%20Details%20Page.html"><img src="" alt="3"></a>
    </div>
    <div class="buttons">
     <span>1</span>
     <span>2</span>
     <span>3</span>
    </div>
     <a href="#" class=" arrow arrow_left">&lt;</a>
     <a href="#" class=" arrow arrow_right">&gt;</a>
</section>
<section class="display">
    <div class="row">
     <h1 class="col-lg-3 col-lg-offset-3">Picture</h1><h1 class="col-lg-3">Discription</h1>
    </div>
     <ul class="pic">
        <div><img class="displaypic" src="">
         <img class="author" src=""></div>
        <h2></h2>
         <h3>author: <span></span></h3>
         <p></p>
         <a href="Picture%20Details%20Page.html"><button>View details</button></a>
     </ul>

    <ul class="pic">
        <div class="imglist"><img class="displaypic" src="">
        <img class="author" src=""></div>
        <h2></h2>
        <h3>author: <span></span></h3>
        <p></p>
        <a href="Picture%20Details%20Page.html"><button>View details</button></a>
    </ul>

    <ul class="pic">
        <div class="imglist"><img class="displaypic" src="">
        <img class="author" src=""></div>
        <h2></h2>
        <h3>author: <span></span></h3>
        <p></p>
        <a href="Picture%20Details%20Page.html"><button>View details</button></a>
    </ul>
</section>
</article>
<footer>
    <hr/>
    <p>Produced by WangDonghui in 18ss at 2019/6/1</p>
</footer>
<script src="js/scriptshomepage.js"></script>
<script src="js/scriptslogin.js"></script>
<script src="js/scriptsregister.js"></script>
</body>
</html>