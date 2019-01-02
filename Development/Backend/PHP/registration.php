<?php
    $id = "";
    $user = "";
    $psw = "";
    include_once('phpconnect.php');
    function sendData() {
        global $id, $user, $psw;
        $id = uniqid("", true);
        if(isset($_POST['username']))
        {
            $user = $_POST['username'];
            echo "User $user obtained.\n";
        }
        if(isset($_POST['psw']))
        {
            $psw = hash('sha256', $_POST['psw']);
            echo "Password hash $psw obtained.\n";
        }
        if($user != "" && $psw != "" && 
        mysqli_query($conn, "INSERT INTO Users (AccountId, UserName, PasswordHash) VALUES('$id', '$user', '$psw')"))
            echo "Registration successful!";
        else
            echo "Registration failed"; }
    sendData();
?>