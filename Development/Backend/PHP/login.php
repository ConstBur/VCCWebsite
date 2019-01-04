<?php
    $user = "";
    $psw = "";
    include_once('phpconnect.php');
    function checkUser() 
    {
        global $user, $psw, $conn;
        if(isset($_POST['username']))
            $user = $_POST['username'];
        if(isset($_POST['psw']))
            $psw = hash('sha256', $_POST['psw']);
        $query = mysqli_query($conn, "SELECT PasswordHash FROM Accounts WHERE UserName = '$user';");
        $count = mysqli_num_rows($query);
        if(count == "0")
            echo "User not found!";
        else if(mysqli_fetch_array($query)[0] != $psw)
            echo "Wrong password!";
        else
            echo "Login successful!";
    }
    checkUser();
?>