<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];

    // Build the email message
    $message = "Nome: " . $firstname . "\n";
    $message .= "Cognome: " . $lastname . "\n";
    $message .= "Email: " . $email . "\n\n";
    $message .= "Progetto: " . $subject;

    // Set the recipient email address
    $to = "riccardoreali05@gmail.com";

    // Set the email subject
    $subject = "Nuovo Progetto - $firstname $lastname";

    // Build the headers for the message
    $headers = "From: $email" . "\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Il tuo messaggio è stato inviato con successo!";
    } else {
        echo "C'è stato un errore nell'invio del tuo messaggio, riprova più tardi.";
    }
}
?>
