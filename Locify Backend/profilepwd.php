<?php
include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$reg_id = $data["id"];
$profile_password = $data["profilePassword"];

$result = $obj->query("SELECT * FROM register WHERE profile_password='$profile_password' AND user_id='$reg_id'");
$rowcount = $result->num_rows;

if ($rowcount == 1) {
    $row = $result->fetch_object();
    $response = ["message" => "Profile Password Fetched Successfully", "user" => $row, "status" => true];
    echo json_encode($response);
} else {
    $response = ["message" => "Invalid Profile Password", "status" => false];
    echo json_encode($response);
}
?>
