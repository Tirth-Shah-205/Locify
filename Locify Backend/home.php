<?php
    include 'connection.php';

    $data = json_decode(file_get_contents("php://input"), true);
    $reg_id = $data["reg_id"];
    $result = $obj->query("select * from website where reg_id='$reg_id'") ;

    $r=array();
    while($row = $result->fetch_object())
    {
        $r[]=$row;
    }

    echo json_encode($r);
?>