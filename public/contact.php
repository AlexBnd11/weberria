<?php
header('Content-Type: application/json');

$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

$to = "contact@weberria.fr";
$subject = "Nouveau message de contact depuis Weberria.fr";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=utf-8\r\n";

$body = "Nom: $name\nEmail: $email\nMessage:\n$message";

if ($name && $email && $message) {
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Erreur lors de l'envoi du message."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Merci de remplir tous les champs."]);
}
?>