<?php

session_start();

$user_id = $_POST['username'];

if (!isset($_SESSION['user_id'])) {
    $_SESSION['user_id'] = $user_id;
}

header("Location: index.php");
exit;

?>