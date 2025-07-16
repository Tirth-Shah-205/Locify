<?php
include 'connection.php';
include 'enc.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

$data = json_decode(file_get_contents("php://input"), true);


$web_name = $data["webname"];
$username = $data["username"];
$password = encryptString($data['password'], $secretkey);
$reg_id = $data["id"];


$query = "INSERT INTO website(web_name, username, password, reg_id) 
          VALUES('$web_name', '$username', '$password', '$reg_id')";

$exe = $obj->query($query);

if ($exe) {
    $inserted_id = $obj->insert_id;
    $res = $obj->query("SELECT * FROM website WHERE web_id = '$inserted_id'");
    $row = $res->fetch_object();

    $response = [
        "message" => "Website Details Added Successfully",
        "website" => $row,
        "status" => true
    ];
} else {
    
    $response = [
        "message" => "Error Try Again",
        "error" => $obj->error, 
        "status" => false
    ];
}

echo json_encode($response);
?>
