<?php
//Підключення бази даних
include_once('db.php');
//Вставлення даних в базу даних
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$password = $_POST['user_password'];
if(mysql_query("INSERT INTO users (user_name, user_email, user_password) VALUES('$name' , '$email' , '$password')"))
    //результат вставлення
    echo "god";
else
    echo "fail";
/*$name = $_POST['user_name'];
$email = $_POST['user_email'];
$password = $_POST['user_password'];
$sql = "INSERT INTO users (user_name, user_email, user_password)
VALUES ('$name' , '$email' , '$password')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();*/
    
?>
