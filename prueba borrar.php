<?php
$fh = fopen('prueba.html', 'a');
fwrite($fh, '<h1>¡Hola mundo!</h1>');
fclose($fh);

unlink('prueba.html');
?>