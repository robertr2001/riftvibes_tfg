<?php
//Separar ID de Campeon a partir de un archivo con estos datos encontrado en Internet
$archivo = fopen('champsIDs.txt','r');
$idCampeones=[];
$nombreCampeones=[];
while ($linea = fgets($archivo)) {
    $datos=explode(":",$linea);
    array_push($idCampeones,$datos[0]);
    array_push($nombreCampeones,$datos[1]);
    //str_replace("'","",)
}
fclose($archivo);
//conexion y creacion de sentencias para insertar los campeones a la BD; Total=5h porque soy imbecil :]]
require_once("conexionClass.php");

    $connect = new Conexion("prueba1");
    $conexion=$connect->bd_connect;
    require_once("importarCampeones.php");
    $insercion=new Resultados();
    for($i=0;$i<count($idCampeones);$i++){
        $result = $insercion->consultaInsertValores($conexion,$idCampeones[$i],$nombreCampeones[$i],("./".$nombreCampeones[$i]."_0.jpg"));
        echo $result;
    }
 
    