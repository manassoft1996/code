<?php 
$conn = mysqli_connect("localhost","root","");
if($conn){
	echo "conn successful";
}
else
{
	echo "error";
}

mysqli_select_db($conn,'ll');
$name = $_POST['login'];
$email = $_POST['email'];
$password = $_POST['password'];
$sql = "INSERT INTO `da`(name,email,password) VALUES ('$name','$email','$password')";
mysqli_query($conn,$sql);

?>