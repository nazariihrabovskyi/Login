
<?php 
//Підключення до бази даних
$conn = mysql_connect('localhost' , 'root' , '');
$db = mysql_select_db('dbregistration');
/*
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbregistration";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$name = $_POST['user_name'];
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