<?php
    $id = uniqid("", true);
    $user = $_POST['user'];
    $psw = hash('sha256', $_POST['psw']);

    function sendData() {
        global $id, $user, $psw;
        if(mysql_query("INSERT INTO Users 
        (AccountId, UserName, PasswordHash) VALUES('$id', '$user', '$psw')"))
            echo "Registration successful!";
        else
            echo "Registration failed"; }
    include_once('phpconnect.php');
    sendData();
?>