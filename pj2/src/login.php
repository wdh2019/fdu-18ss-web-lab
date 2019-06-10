<?php 
$username=-1;
$password=-1;
$db=new mysqli("localhost","root","wangdonghui2019","pj2 database");
$sql="SELECT * FROM users";
$result=$db->query($sql);
while($row=$result->fetch_assoc()){
    if($row['name']===$_POST['username']&$row['password']===$_POST['password']){
    $username=$_POST['username'];
    $password=$_POST['password'];
    session_start();
    $_SESSION['username']=$username;
    $_SESSION['password']=$password;
}else{}
}
if($username!==-1){header("Location:First Page.php");}
else{header("Location:First Page.php");}
?>


