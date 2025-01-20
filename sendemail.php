<?php

// Налаштування отримувача
define("RECIPIENT_NAME", "John Doe");
define("RECIPIENT_EMAIL", "admin@eclogistic.com.ua");

// Отримання даних з форми та їх валідація
$userName = isset($_POST['username']) ? filter_var($_POST['username'], FILTER_SANITIZE_STRING) : "";
$senderEmail = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : "";
$userPhone = isset($_POST['phone']) ? filter_var($_POST['phone'], FILTER_SANITIZE_STRING) : "";
$userSubject = isset($_POST['subject']) ? filter_var($_POST['subject'], FILTER_SANITIZE_STRING) : "";
$message = isset($_POST['message']) ? filter_var($_POST['message'], FILTER_SANITIZE_STRING) : "";

if (!empty($userName) && !empty($senderEmail) && !empty($userPhone) && !empty($userSubject) && !empty($message)) {
    // Формуємо лист
    $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
    $subject = "Новий контакт: $userSubject";
    $msgBody = "Ім'я: $userName\n";
    $msgBody .= "Email: $senderEmail\n";
    $msgBody .= "Телефон: $userPhone\n";
    $msgBody .= "Тема: $userSubject\n";
    $msgBody .= "Повідомлення:\n$message\n";

    // Заголовки
    $headers = "From: $senderEmail\r\n";
    $headers .= "Reply-To: $senderEmail\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Відправка листа
    if (mail($recipient, $subject, $msgBody, $headers)) {
        header('Location: contact.html?message=Success');
        exit;
    } else {
        header('Location: contact.html?message=Failed');
        exit;
    }
} else {
    header('Location: contact.html?message=InvalidInput');
    exit;
}

?>
