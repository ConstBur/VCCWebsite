<?php
    $id = uniqid("", true);
    $user = "";
    $psw = "";
    include_once('phpconnect.php');
    function sendData() {
        global $id, $user, $psw;
        $id = uniqid("", true);
        if(isset($_POST['username']))
            $user = $_POST['username'];
        if(isset($_POST['psw']))
            $psw = hash('sha256', $_POST['psw']);
        if($user != "" && $psw != "" && 
        mysqli_query($conn, "INSERT INTO Users (AccountId, UserName, PasswordHash) VALUES('$id', '$user', '$psw')"))
            echo "Registration successful!";
        else
            echo "Registration failed"; }
    sendData();
?>