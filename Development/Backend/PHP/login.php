<?php
    $user = "";
    $psw = "";
    include_once('phpconnect.php');
    function checkUser() {
        global $user, $psw, $conn;
        if(isset($_POST['username']))
            $user = $_POST['username'];
        if(isset($_POST['psw']))
            $psw = hash('sha256', $_POST['psw']);
        if(mysqli_query($conn, "SELECT AccountId FROM Accounts WHERE UserName = '$name';"))
        {
            if(mysqli_query($conn, "SELECT AccountId FROM Accounts WHERE PasswordHash = '$psw'"))
                echo "Login Successful!";
            else
                echo "Wrong password!";
        }
        else
            echo "User not found!";
    }
    checkUser();
?>