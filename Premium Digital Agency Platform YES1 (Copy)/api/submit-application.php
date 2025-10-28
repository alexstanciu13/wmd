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

  // Send internal notification
  $mail->send();
  error_log('[EMAIL] ✓ Internal notification sent to contact@webmediadesign.ro');

  // --- Send confirmation email to user ---
  try {
    // Clear previous recipients
    $mail->clearAddresses();
    $mail->clearReplyTos();

    // Set user as recipient
    $mail->addAddress($email, $name);
    $mail->addReplyTo('contact@webmediadesign.ro', 'Web Media Design');

    // Escape data for HTML
    $nameHtml = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $companyHtml = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
    $projectTypeHtml = htmlspecialchars($projectType !== '' ? $projectType : '-', ENT_QUOTES, 'UTF-8');
    $budgetHtml = htmlspecialchars($formattedBudget, ENT_QUOTES, 'UTF-8');
    $timelineHtml = htmlspecialchars($timeline !== '' ? $timeline : '-', ENT_QUOTES, 'UTF-8');

    // Build HTML email body
    $confirmationHTML = <<<HTML
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Aplicația ta a fost primită</title>
    <style>
        body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; background-color: #0A0A0A; }
        .header { padding: 40px; text-align: center; }
        .icon { width: 80px; height: 80px; background: linear-gradient(135deg, #0B61D6 0%, #06306F 100%); border-radius: 50%; display: inline-block; line-height: 80px; font-size: 40px; color: white; }
        .title { font-size: 32px; color: white; margin: 20px 0; }
        .gradient { background: linear-gradient(90deg, #0B61D6 0%, #00AEEF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .content { padding: 0 40px 40px; color: #cccccc; }
        .card { background-color: #1A1A1A; border-radius: 12px; padding: 30px; margin: 20px 0; }
        .step { display: table; width: 100%; margin: 15px 0; }
        .step-num { display: table-cell; width: 40px; vertical-align: top; }
        .step-badge { width: 32px; height: 32px; background: linear-gradient(135deg, #0B61D6 0%, #06306F 100%); border-radius: 8px; text-align: center; line-height: 32px; font-weight: bold; color: white; font-size: 14px; }
        .step-content { display: table-cell; vertical-align: top; padding-left: 15px; }
        .step-title { color: white; font-weight: 600; margin-bottom: 4px; }
        .step-desc { color: #999; font-size: 14px; }
        .button { display: inline-block; padding: 16px 32px; background: linear-gradient(90deg, #0B61D6 0%, #06306F 100%); color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
        .footer { padding: 30px 40px; color: #999; font-size: 14px; text-align: center; border-top: 1px solid #333; }
        .cyan { color: #00AEEF; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="icon">✓</div>
            <div class="title">Aplicația ta a fost <span class="gradient">primită</span>!</div>
        </div>

        <div class="content">
            <p style="text-align: center; font-size: 16px;">Bună {$nameHtml},</p>

            <p style="text-align: center;">Mulțumim pentru interesul tău de a colabora cu <strong class="cyan">Web Media Design</strong>. Am primit cu succes aplicația ta și suntem entuziasmați să aflăm mai multe despre proiectul tău!</p>

            <div class="card">
                <h3 style="text-align: center; color: white; margin-bottom: 20px;">✨ Ce urmează?</h3>

                <div class="step">
                    <div class="step-num"><div class="step-badge">1</div></div>
                    <div class="step-content">
                        <div class="step-title">Revizuire Aplicație</div>
                        <div class="step-desc">Echipa noastră analizează detaliile și cerințele proiectului tău</div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-num"><div class="step-badge" style="background: linear-gradient(135deg, #0070C9 0%, #002F6C 100%);">2</div></div>
                    <div class="step-content">
                        <div class="step-title">Apel Descoperire</div>
                        <div class="step-desc">Vom programa o sesiune de strategie pentru a discuta viziunea ta</div>
                    </div>
                </div>

                <div class="step">
                    <div class="step-num"><div class="step-badge" style="background: linear-gradient(135deg, #00AEEF 0%, #0070C9 100%);">3</div></div>
                    <div class="step-content">
                        <div class="step-title">Propunere Personalizată</div>
                        <div class="step-desc">Primești o strategie adaptată și un plan detaliat al proiectului</div>
                    </div>
                </div>
            </div>

            <p style="text-align: center; color: #999;">📅 Te vom contacta în <strong class="cyan">24–48 de ore</strong></p>

            <div style="text-align: center;">
                <a href="https://webmediadesign.ro/studii-de-caz" class="button" style="color: #ffffff;">Explorează Portofoliul</a>
            </div>
        </div>

        <div class="footer">
            <p>Ai întrebări? Ne poți contacta la<br>
            <a href="mailto:contact@webmediadesign.ro" class="cyan" style="text-decoration: none;">contact@webmediadesign.ro</a></p>

            <p style="margin-top: 20px;">
                <a href="https://webmediadesign.ro" class="cyan" style="text-decoration: none;">Website</a> |
                <a href="https://webmediadesign.ro/studii-de-caz" class="cyan" style="text-decoration: none;">Portofoliu</a> |
                <a href="https://webmediadesign.ro/academia" class="cyan" style="text-decoration: none;">Academie</a>
            </p>

            <p style="color: #666; font-size: 12px; margin-top: 20px;">© 2025 Web Media Design. Toate drepturile rezervate.<br>Excelență Digitală Premium</p>
        </div>
    </div>
</body>
</html>
HTML;

    // Configure for HTML email
    $mail->isHTML(true);
    $mail->Subject = 'Aplicația ta a fost primită — Web Media Design';
    $mail->Body = $confirmationHTML;

    // Plain text fallback
    $mail->AltBody = "Bună {$name},\n\nMulțumim pentru interesul tău de a colabora cu Web Media Design. Am primit cu succes aplicația ta și suntem entuziasmați să aflăm mai multe despre proiectul tău!\n\nCE URMEAZĂ?\n\n1. Revizuire Aplicație - Echipa noastră analizează detaliile proiectului\n2. Apel Descoperire - Vom programa o sesiune de strategie\n3. Propunere Personalizată - Primești o strategie adaptată\n\n📅 Te vom contacta în 24–48 de ore\n\nDETALII APLICAȚIE:\nCompanie: {$company}\nTip proiect: {$projectType}\nBuget: {$formattedBudget}\nCronologie: {$timeline}\n\nAi întrebări? Ne poți contacta la contact@webmediadesign.ro\n\n© 2025 Web Media Design\nExcelență Digitală Premium";

    // Send confirmation email
    $mail->send();
    error_log('[EMAIL] ✓ Confirmation email sent to: ' . $email);

  } catch (Exception $confirmError) {
    // Log error but don't fail the request
    error_log('[EMAIL] ✗ Confirmation email FAILED: ' . $confirmError->getMessage());
  }

  echo json_encode(['ok'=>true], JSON_UNESCAPED_UNICODE);
  exit;

} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok'=>false,'error'=>'Eroare trimitere email.','smtp'=>$e->getMessage()], JSON_UNESCAPED_UNICODE);
  exit;
}
