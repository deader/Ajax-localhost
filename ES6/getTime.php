<?php

// Заголовки
header("Content-type: text/plain; charset=utf-8");
header("Cache-Control: no-store");

// Текущее время
$time = time() - 1 * 60 * 60; // секунды
echo date('H:i:s', $time); 

?>