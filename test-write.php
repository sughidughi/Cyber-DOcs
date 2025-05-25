<?php
$file = '/var/www/phishingsite/creds.txt';
$data = "Test entry: " . date('Y-m-d H:i:s') . "\n";
file_put_contents($file, $data, FILE_APPEND);

?>
