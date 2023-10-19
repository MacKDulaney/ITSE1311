<?php
/* */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$rightNow = date("n/j/Y G:i");
//echo $rightNow;

$ag5b1b5dz = "aXRzZTEzMTFhZG1pbg==";
$aterhaove = "bG9jYWxob3N0";
$srbnssr5dfzb1bs = "YWJjMTIzNDU2IQ==";

$conn = new mysqli(base64_decode($aterhaove), base64_decode($ag5b1b5dz), base64_decode($srbnssr5dfzb1bs), "itse1311");

//create connection
if ($conn->connect_error) {
    die("connection Failed: " . $conn->connect_error);
}
else{
    echo "Connection Successful";
}
?>