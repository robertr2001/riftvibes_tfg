<?php

$path="./splash";
$arrArchivos=array_diff(scandir($path),array());

foreach ($arrArchivos as $key) {
    if(!endsWith($key,"_0.jpg")){
        unlink($path."/".$key);
    }
}

function endsWith($haystack, $needle) {
    return substr_compare($haystack, $needle, -strlen($needle)) === 0;
}