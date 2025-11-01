<?php
declare(strict_types=1);

/**
 * API: /api/submit-contact(.php)
 * Simple contact form - sends only to contact@webmediadesign.ro (NO confirmation email to client)
 * JSON → Zoho SMTP via PHPMailer (UTF-8). Secrets auto-detected at <account root>/secrets/mail.php
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); echo json_encode(['success'=>true]); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')   { http_response_code(405); echo json_encode(['success'=>false,'error'=>'Method Not Allowed'], JSON_UNESCAPED_UNICODE); exit; }

// --- Parse JSON body
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { http_response_code(400); echo json_encode(['success'=>false,'error'=>'Invalid JSON'], JSON_UNESCAPED_UNICODE); exit; }

// --- Fields
$name        = trim((string)($data['name']    ?? ''));
$email       = trim((string)($data['email']   ?? ''));
$phone       = trim((string)($data['phone']   ?? ''));
$service     = trim((string)($data['service'] ?? ''));
$message     = trim((string)($data['message'] ?? ''));
$honeypot    = trim((string)($data['_honeypot'] ?? ''));

// --- Honeypot (spam protection)
if ($honeypot !== '') { http_response_code(204); exit; }

// --- Validate
$errors = [];

if ($name === '' || mb_strlen($name, 'UTF-8') < 2) {
  $errors['name'] = 'Numele este obligatoriu';
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors['email'] = 'Email invalid';
}

if ($phone === '') {
  $errors['phone'] = 'Telefonul este obligatoriu';
} else {
  // Romanian phone validation: +40 or 0, followed by 7/2/3, then 8 more digits
  $normalizedPhone = preg_replace('/[\s\-()]/', '', $phone);
  if (!preg_match('/^(\+?40|0)(7[0-9]{8}|[2-3][0-9]{8})$/', $normalizedPhone)) {
    $errors['phone'] = 'Telefonul trebuie să fie un număr românesc valid';
  }
}

if ($service === '') {
  $errors['service'] = 'Te rugăm să selectezi un serviciu';
}

if ($errors) {
  http_response_code(422);
  echo json_encode(['success'=>false,'errors'=>$errors], JSON_UNESCAPED_UNICODE);
  exit;
}

// --- Sanitize / format
function clean_text(string $s): string {
  $s = strip_tags($s);
  $s = preg_replace("/[ \t]+/u", ' ', $s);
  return trim($s);
}

$name    = clean_text($name);
$email   = clean_text($email);
$phone   = clean_text($phone);
$service = clean_text($service);
$message = ($message !== '') ? strip_tags(preg_replace("/\r\n|\r/u", "\n", $message)) : 'N/A';

// --- Format service name
function formatProjectType(string $type): string {
  $types = [
    'web-design' => 'Design Web',
    'ecommerce' => 'E-Commerce',
    'seo' => 'SEO',
    'marketing' => 'Marketing Digital',
    'email-marketing' => 'E-mail Marketing',
    'branding' => 'Branding',
    'ai-automation' => 'Automatizare AI',
    'comprehensive' => 'Pachet Complet',
    'other' => 'Altceva',
  ];
  return $types[$type] ?? $type;
}

$formattedService = formatProjectType($service);

// --- Build plain-text body (UTF-8)
$nl = "\r\n";
$bodyText  = 'Nou Contact din Formularul Homepage' . $nl;
$bodyText .= '=====================================' . $nl . $nl;
$bodyText .= 'Informații Contact:' . $nl;
$bodyText .= '------------------' . $nl;
$bodyText .= 'Nume:    ' . $name . $nl;
$bodyText .= 'Email:   ' . $email . $nl;
$bodyText .= 'Telefon: ' . $phone . $nl;
$bodyText .= 'Serviciu Interes: ' . $formattedService . $nl . $nl;

if ($message !== 'N/A' && $message !== '') {
  $bodyText .= 'Mesaj:' . $nl . $message . $nl . $nl;
} else {
  $bodyText .= 'Mesaj: (Nu a fost completat)' . $nl . $nl;
}

$bodyText .= '---' . $nl;
$bodyText .= 'Primit din: Formular Contact - Homepage' . $nl;
$bodyText .= 'Data: ' . date('d.m.Y H:i') . $nl;

// --- Secrets: auto-detect /secrets/mail.php (one level above public_html)
$rootPath    = dirname(__DIR__, 2);           // public_html/api → up twice → account root
$secretsFile = $rootPath . '/secrets/mail.php';
$SMTP_PASS   = '';

if (is_file($secretsFile)) {
  $arr = include $secretsFile;                 // returns ['SMTP_PASS' => '...']
  if (is_array($arr) && !empty($arr['SMTP_PASS'])) $SMTP_PASS = (string)$arr['SMTP_PASS'];
}
if ($SMTP_PASS === '') {                       // optional fallback
  $SMTP_PASS = getenv('SMTP_PASS') ?: '';
}
if ($SMTP_PASS === '') {
  http_response_code(500);
  echo json_encode(['success'=>false,'error'=>'Lipsește parola SMTP (secrets/mail.php)'], JSON_UNESCAPED_UNICODE);
  exit;
}

// --- PHPMailer
$base = __DIR__ . '/vendor/PHPMailer/src';
require_once $base . '/PHPMailer.php';
require_once $base . '/SMTP.php';
require_once $base . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
  // ✓ UTF-8 everywhere
  $mail->CharSet  = 'UTF-8';
  $mail->Encoding = 'quoted-printable';
  $mail->isHTML(false);

  // SMTP (Zoho EU)
  $mail->isSMTP();
  $mail->Host       = 'smtp.zoho.eu';
  $mail->Port       = 465;
  $mail->SMTPAuth   = true;
  $mail->Username   = 'contact@webmediadesign.ro';
  $mail->Password   = $SMTP_PASS;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

  // From must be the authenticated Zoho mailbox
  $mail->setFrom('contact@webmediadesign.ro', 'Web Media Design');
  $mail->addAddress('contact@webmediadesign.ro');
  $mail->addReplyTo($email, $name);

  // ✓ UTF-8 subject & body
  $mail->Subject = '🔔 Nou Contact - ' . $name;
  $mail->Body    = $bodyText;
  $mail->AltBody = $bodyText;

  // Send ONLY to contact@ (NO confirmation email to client)
  $mail->send();
  error_log('[EMAIL] ✓ Contact form notification sent to contact@webmediadesign.ro');

  echo json_encode(['success'=>true, 'message'=>'Contact form submitted successfully'], JSON_UNESCAPED_UNICODE);
  exit;

} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['success'=>false,'error'=>'Eroare trimitere email.','smtp'=>$e->getMessage()], JSON_UNESCAPED_UNICODE);
  exit;
}
