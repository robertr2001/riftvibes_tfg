<?php
//Esto han sido 6horas de trabajo
$mykey="RGAPI-2697b082-2b04-4dfa-a13c-561561b467ef";
$region="euw1";
$server="europe";
$summonerName="lapersonadecolor";

$summonerNameNoSpaces=str_replace(" ","",$summonerName);
$url="https://".$region.".api.riotgames.com/lol/summoner/v4/summoners/by-name/".$summonerNameNoSpaces."?api_key=".$mykey;
$summonerDatos=file_get_contents($url);
$sdd=json_decode($summonerDatos,true);

foreach ($sdd as $key => $value) {
    echo $key."=>".$value."<br>";
}

echo"<br> <br>";
$id= $sdd["id"];

echo "<br><br>";
$url2="https://".$region.".api.riotgames.com/lol/spectator/v4/active-games/by-summoner/".$id."?api_key=".$mykey;
$partidaActual=file_get_contents($url2);
$pad=json_decode($partidaActual,true);

foreach ($pad as $key => $value) {
     if(gettype($value)!="array"){
        echo $key."=>".$value."<br>";
     }
}

echo "<br>-----------------------------------------------------------------------------------------------------<br>";

$datosJugadores=$pad["participants"];
echo "<br>-----------------------------------------------------------------------------------------------------<br>";

$algo=$datosJugadores["gameCustomizationObjects"];
             foreach ($algo as $objeto => $value) {
                 echo "A".$objeto;
             }
// for($i=0;$i<10;$i++){
//     $datoJugador=$datosJugadores[$i];
//     if($datoJugador["summonerId"]==$id){
//         echo $datoJugador["championId"]."<br>";
//         $idCampeonActual=$datoJugador["championId"];
//         require_once("conexionClass.php");
//         $connect = new Conexion("prueba1");
//         $conexion=$connect->bd_connect;
//         require_once("importarCampeones.php");
//         $consultaNombre=new Resultados();
//         $nombreCampeonActual= $consultaNombre->nombreCampeon($conexion,$idCampeonActual);
//         echo $nombreCampeonActual;        
//     }
// }
