<?php
$mykey="RGAPI-2697b082-2b04-4dfa-a13c-561561b467ef";
$nombreUsuario=$_POST["usuario"];
$contraseña=contraseñaEncriptada();
$nombreInvocador=$_POST["invocador"];
$region=$_POST["region"];

if(!invocadorExiste($nombreInvocador,$region,$mykey)){
    
}

function contraseñaEncriptada(){
    return $_POST["contrasena"];
}

function invocadorExiste($nombreInvocador,$region,$mykey){
$nombreInvocadorNoSpaces=str_replace(" ","",$nombreInvocador);
$url="https://".$region.".api.riotgames.com/lol/summoner/v4/summoners/by-name/".$nombreInvocadorNoSpaces."?api_key=".$mykey;
$summonerDatos=file_get_contents($url);
$sdd=json_decode($summonerDatos,true);
}