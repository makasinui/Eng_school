<?php
// на какие данные рассчитан этот скрипт
header("Content-Type: multipart/form-data");
// разбираем JSON-строку на составляющие встроенной командой
$_POST = json_decode(file_get_contents("php://input"),true);
echo var_dump($_POST);
?>