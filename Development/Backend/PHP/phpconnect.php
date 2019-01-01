<?php
$servername = "localhost";
$username = "id8288583_constbur";
$password = "MHz6D8wWKGZ29HU";
$database = "id8288583_vcc_website";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
    } 
    catch(PDOException $e) {    
        echo "Connection failed: " . $e->getMessage();
    }
?>
