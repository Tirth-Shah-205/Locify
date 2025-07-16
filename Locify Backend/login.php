<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"];
$password = $data["password"];

$result = $obj->query("SELECT * FROM register WHERE email='$email' AND password='$password'");
$rowcount = $result->num_rows;

if ($rowcount == 1) {
    $row = $result->fetch_object();
    $response = [
        "message" => "Logged in Successfully",
        "user" => $row,
        "status" => true // ✅ Add status key
    ];
    echo json_encode($response);
} else {
    $response = [
        "message" => "Invalid Credentials",
        "status" => false // ✅ Add status key for consistency
    ];
    echo json_encode($response);
}
?>
