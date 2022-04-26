<?php
$datosJSON=file_get_contents('php://input');
$datos=json_decode($datosJSON);
echo "Esto es PHP thing=>";
foreach ($datos as $key => $value) {
    echo $key."=>".$value."<br>";
}

