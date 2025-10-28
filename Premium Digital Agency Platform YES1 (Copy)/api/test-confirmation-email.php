<?php
declare(strict_types=1);

/**
 * TEST ENDPOINT: /api/test-confirmation-email.php
 * Sends a test confirmation email to verify the setup
 *
 * Usage:
 * GET: https://webmediadesign.ro/api/test-confirmation-email.php?email=your@email.com
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(['ok'=>false,'error'=>'Method Not Allowed'], JSON_UNESCAPED_UNICODE);
  exit;
}

// Get email from query string
$testEmail = trim((string)($_GET['email'] ?? ''));

if ($testEmail === '' || !filter_var($testEmail, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok'=>false,'error'=>'Invalid or missing email parameter. Use: ?email=your@email.com'], JSON_UNESCAPED_UNICODE);
  exit;
}

// --- Secrets: auto-detect /secrets/mail.php
$rootPath    = dirname(__DIR__, 2);
$secretsFile = $rootPath . '/secrets/mail.php';
$SMTP_PASS   = '';

if (is_file($secretsFile)) {
  $arr = include $secretsFile;
  if (is_array($arr) && !empty($arr['SMTP_PASS'])) $SMTP_PASS = (string)$arr['SMTP_PASS'];
}
if ($SMTP_PASS === '') {
  $SMTP_PASS = getenv('SMTP_PASS') ?: '';
}
if ($SMTP_PASS === '') {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'Missing SMTP password (secrets/mail.php)'], JSON_UNESCAPED_UNICODE);
  exit;
}

// --- PHPMailer
$base = __DIR__ . '/vendor/PHPMailer/src';
require_once $base . '/PHPMailer.php';
require_once $base . '/SMTP.php';
require_once $base . '/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load email template
require_once __DIR__ . '/email-template.php';

$mail = new PHPMailer(true);

try {
  // Test data
  $testData = [
    'name' => 'Test User',
    'company' => 'Test Company SRL',
    'projectType' => 'Design Web',
    'budget' => '5.000 €',
    'timeline' => '1-3 săptămâni',
  ];

  // Generate HTML template
  $confirmationHTML = getConfirmationEmailHTML($testData);

  error_log('[TEST CONFIRMATION] Template generated, length: ' . strlen($confirmationHTML));

  // SMTP Configuration
  $mail->CharSet  = 'UTF-8';
  $mail->Encoding = 'quoted-printable';
  $mail->isSMTP();
  $mail->Host       = 'smtp.zoho.eu';
  $mail->Port       = 465;
  $mail->SMTPAuth   = true;
  $mail->Username   = 'contact@webmediadesign.ro';
  $mail->Password   = $SMTP_PASS;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

  // Enable verbose debug output
  $mail->SMTPDebug = 2; // 0=off, 1=client, 2=client+server
  $mail->Debugoutput = function($str, $level) {
    error_log("[SMTP DEBUG] $str");
  };

  // Email configuration
  $mail->setFrom('contact@webmediadesign.ro', 'Web Media Design');
  $mail->addAddress($testEmail, 'Test User');
  $mail->addReplyTo('contact@webmediadesign.ro', 'Web Media Design');

  $mail->isHTML(true);
  $mail->Subject = 'TEST - Aplicația ta a fost primită — Web Media Design';
  $mail->Body = $confirmationHTML;
  $mail->AltBody = "Acesta este un email de test.\n\nDacă primești acest mesaj, emailurile de confirmare funcționează corect!\n\n© 2025 Web Media Design";

  error_log('[TEST CONFIRMATION] Sending to: ' . $testEmail);

  // Send
  $mail->send();

  error_log('[TEST CONFIRMATION] ✓ Successfully sent to: ' . $testEmail);

  echo json_encode([
    'ok'=>true,
    'message'=>'Test email sent successfully!',
    'recipient'=>$testEmail,
    'template_length'=>strlen($confirmationHTML),
    'check'=>'Please check your email inbox (and spam folder)'
  ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
  error_log('[TEST CONFIRMATION] ✗ FAILED');
  error_log('[TEST CONFIRMATION] Error: ' . $e->getMessage());

  http_response_code(500);
  echo json_encode([
    'ok'=>false,
    'error'=>'Failed to send test email',
    'smtp_error'=>$e->getMessage(),
    'help'=>'Check error_log for detailed SMTP debug output'
  ], JSON_UNESCAPED_UNICODE);
}
