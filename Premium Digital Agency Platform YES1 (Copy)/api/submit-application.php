<?php
declare(strict_types=1);

/**
 * API: /api/submit-application(.php)
 * JSON → Zoho SMTP via PHPMailer (UTF-8). Secrets auto-detected at <account root>/secrets/mail.php
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); echo json_encode(['ok'=>true]); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')   { http_response_code(405); echo json_encode(['ok'=>false,'error'=>'Method Not Allowed'], JSON_UNESCAPED_UNICODE); exit; }

// --- Parse JSON body
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Invalid JSON'], JSON_UNESCAPED_UNICODE); exit; }

// --- Fields
$name        = trim((string)($data['name']        ?? ''));
$email       = trim((string)($data['email']       ?? ''));
$phone       = trim((string)($data['phone']       ?? ''));
$company     = trim((string)($data['company']     ?? ''));
$website     = trim((string)($data['website']     ?? ''));
$budgetRaw   = trim((string)($data['budget']      ?? ''));
$projectType = trim((string)($data['projectType'] ?? ''));
$timeline    = trim((string)($data['timeline']    ?? ''));
$description = trim((string)($data['description'] ?? ($data['message'] ?? ''))); // accept 'message' alias, just in case
$honeypot    = trim((string)($data['_honeypot']   ?? ''));

// --- Honeypot
if ($honeypot !== '') { http_response_code(204); exit; }

// --- Validate
$errors = [];
if ($name === '' || mb_strlen($name, 'UTF-8') < 2) $errors['name'] = 'Nume obligatoriu.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Email invalid.';
if ($phone === '' || !preg_match('/^[0-9+\-\s().]{7,}$/', $phone)) $errors['phone'] = 'Telefon invalid.';
if ($budgetRaw === '') $errors['budget'] = 'Buget obligatoriu.';

$budgetDigits = preg_replace('/[^\d]/', '', $budgetRaw);
$budgetInt = ($budgetDigits !== '') ? (int)$budgetDigits : 0;
if ($budgetInt <= 0) $errors['budget'] = 'Buget invalid.';

// ↓↓↓ only change vs. previous version: lower minimum message length from 10 → 3
if ($description === '' || mb_strlen($description, 'UTF-8') < 3) $errors['description'] = 'Mesaj prea scurt.';

if ($errors) { http_response_code(422); echo json_encode(['ok'=>false,'errors'=>$errors], JSON_UNESCAPED_UNICODE); exit; }

// --- Sanitize / format
function clean_text(string $s): string {
  $s = strip_tags($s);
  $s = preg_replace("/[ \t]+/u", ' ', $s);
  return trim($s);
}
$name        = clean_text($name);
email: {
}
$email       = clean_text($email);
$phone       = clean_text($phone);
$company     = clean_text($company);
$website     = clean_text($website);
$projectType = clean_text($projectType);
$timeline    = clean_text($timeline);
$description = strip_tags(preg_replace("/\r\n|\r/u", "\n", $description));
$formattedBudget = number_format($budgetInt, 0, ',', '.') . ' €';

// --- Build plain-text body (UTF-8)
$nl = "\r\n";
$bodyText  = 'Nouă cerere de colaborare — Web Media Design' . $nl . $nl;
$bodyText .= 'Ai primit o cerere nouă de colaborare:' . $nl . $nl;
$bodyText .= 'Nume:        ' . $name . $nl;
$bodyText .= 'Email:       ' . $email . $nl;
$bodyText .= 'Telefon:     ' . $phone . $nl;
$bodyText .= 'Companie:    ' . ($company !== '' ? $company : '-') . $nl;
$bodyText .= 'Website:     ' . ($website !== '' ? $website : '-') . $nl;
$bodyText .= 'Buget:       ' . $formattedBudget . $nl;
$bodyText .= 'Tip Proiect: ' . ($projectType !== '' ? $projectType : '-') . $nl;
$bodyText .= 'Cronologie:  ' . ($timeline !== '' ? $timeline : '-') . $nl . $nl;
$bodyText .= 'Mesaj:' . $nl . $description . $nl . $nl;
$bodyText .= '--' . $nl . 'Formular Aplica Acum' . $nl . 'Web Media Design' . $nl . 'contact@webmediadesign.ro' . $nl;

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
  echo json_encode(['ok'=>false,'error'=>'Lipsește parola SMTP (secrets/mail.php)'], JSON_UNESCAPED_UNICODE);
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
  $mail->Subject = 'Nouă cerere de colaborare — Web Media Design';
  $mail->Body    = $bodyText;
  $mail->AltBody = $bodyText;

  $mail->send();
  echo json_encode(['ok'=>true], JSON_UNESCAPED_UNICODE);
  exit;

} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'Eroare trimitere email.','smtp'=>$e->getMessage()], JSON_UNESCAPED_UNICODE);
  exit;
}
