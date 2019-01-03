<?php
    $servername = "localhost";
    $username = "id8288583_constbur";
    $password = "MHz6D8wWKGZ29HU";
    $database = "id8288583_vcc_website";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
?>
