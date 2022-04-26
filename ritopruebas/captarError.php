<?php
//Esto han sido 6horas de trabajo

use Egulias\EmailValidator\Warning\Warning;

$mykey="RGAPI-2697b082-2b04-4dfa-a13c-561561b467ef";
$region="euw1";
$server="europe";
$summonerName="llamame Papi";

$summonerNameNoSpaces=str_replace(" ","",$summonerName);
$url="https://".$region.".api.riotgames.com/lol/summoner/v4/summoners/by-name/".$summonerNameNoSpaces."?api_key=".$mykey;
$summonerDatos=@file_get_contents($url);
if($summonerDatos){
    $sdd=json_decode($summonerDatos,true);
    foreach ($sdd as $key => $value) {
        echo $key."=>".$value."<br>";
    }
}
else{
    echo "AAAAAAAAAAA";
}
    
    


