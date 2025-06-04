<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    http_response_code(403);
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$userId = $_SESSION['user_id'];
$movieId = $_POST['movie_id'] ?? null;

if (!$movieId) {
    http_response_code(400);
    echo json_encode(['error' => 'Movie ID is required']);
    exit;
}

$pdo = new PDO("mysql:host=localhost;dbname=suggest-movie;charset=utf8", "root", "");

$stmt = $pdo->prepare("SELECT * FROM user_likes WHERE user_id = ? AND movie_id = ?");
$stmt->execute([$userId, $movieId]);

if ($stmt->rowCount() > 0) {
    $deleteStmt = $pdo->prepare("DELETE FROM user_likes WHERE user_id = ? AND movie_id = ?");
    $deleteStmt->execute([$userId, $movieId]);
    echo json_encode(['status' => 'unliked']);
} else {
    $insertStmt = $pdo->prepare("INSERT INTO user_likes (user_id, movie_id) VALUES (?, ?)");
    $insertStmt->execute([$userId, $movieId]);
    echo json_encode(['status' => 'liked']);
}
