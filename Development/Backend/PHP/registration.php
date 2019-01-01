<?php
    include_once('phpconnect.php');

    $email = $_POST['email'];
    $psw = $_POST['psw'];

    if(mysql_query("INSERT INTO Users VALUES('$email', '$psw')"))
        echo "Registration successful!";
    else
        echo "Registration failed";
?>