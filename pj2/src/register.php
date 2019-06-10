<?php 
$usablename=true;
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$telephone=$_POST['telephone'];
$address=$_POST['address'];
$db=new mysqli("localhost","root","wangdonghui2019","pj2 database");
$sql="SELECT name FROM user";
$result=$db->query($sql);
while($row=$result->fetch_assoc()){
    if($username===$row['name']){
        $usablename=false;
        break;
        header("Location:First Page.php#registration");
    }else{}
}
if($usablename===true){
$sql1="INSERT INTO user
SET name=$username,email=$email,password=$password,tel=$telephone,address=$address,balance=0";
if($db->query($sql)===true){
    echo "新纪录插入成功";
    session_start();
    $_SESSION['username']=$username;
    header("Location:First Page.php");}
    else{echo "Error:".$sql."<br>".$db->error;}
}

?>