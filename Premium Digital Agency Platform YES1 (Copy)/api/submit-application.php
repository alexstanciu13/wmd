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

  <!-- Hints for clients that respect schemes -->
  <meta name="color-scheme" content="dark only">
  <meta name="supported-color-schemes" content="dark">
  <style>
    /* Fallback classes some clients respect in dark mode */
    .bg-outer { background:#111315 !important; }
    .bg-card  { background:#181B1F !important; }
    .text-hi  { color:#F2F5F7 !important; }
    .text-mid { color:#D1D5DB !important; }
    .text-lo  { color:#9AA3AF !important; }
    .link     { color:#00AEEF !important; text-decoration:none !important; }
    [data-ogsc] .bg-outer{ background:#111315 !important; }
    [data-ogsc] .bg-card { background:#181B1F !important; }
    [data-ogsc] .text-hi { color:#F2F5F7 !important; }
    [data-ogsc] .text-mid{ color:#D1D5DB !important; }
    [data-ogsc] .text-lo { color:#9AA3AF !important; }
    [data-ogsc] .link    { color:#00AEEF !important; }
  </style>
</head>

<body style="margin:0; padding:0; background:#111315;" bgcolor="#111315">
  <!-- Full-bleed wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
         class="bg-outer" style="background:#111315;" bgcolor="#111315">
    <tr>
      <td align="center" style="padding:40px 20px; background:#111315;" class="bg-outer" bgcolor="#111315">

        <!-- Container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"
               style="max-width:600px; width:100%; background:#111315;" class="bg-outer" bgcolor="#111315">

          <!-- Header -->
          <tr>
            <td align="center" style="padding:28px 20px; background:#111315;" class="bg-outer" bgcolor="#111315">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center"
                      style="width:80px; height:80px; border-radius:50%;
                             background:linear-gradient(135deg,#0B61D6 0%,#06306F 100%);
                             line-height:80px; font-size:40px; color:#FFFFFF;">
                    ✓
                  </td>
                </tr>
              </table>
              <h1 style="margin:16px 0 0 0; font-size:28px; font-weight:700; color:#F2F5F7;"
                  class="text-hi">
                Aplicația ta a fost <span style="color:#00AEEF;">primită</span>!
              </h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:0 24px 22px; background:#111315;" class="bg-outer" bgcolor="#111315">
              <p style="text-align:center; font-size:16px; margin:0 0 8px 0; color:#D1D5DB;" class="text-mid">
                Bună {$nameHtml},
              </p>
              <p style="text-align:center; line-height:1.6; margin:0; color:#D1D5DB;" class="text-mid">
                Mulțumim pentru interesul tău de a colabora cu
                <strong style="color:#00AEEF;">Web Media Design</strong>.
                Am primit cu succes aplicația ta și suntem entuziasmați să aflăm mai multe despre proiect!
              </p>
            </td>
          </tr>

          <!-- What's next card -->
          <tr>
            <td style="padding:0 24px 24px; background:#111315;" class="bg-outer" bgcolor="#111315">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                     style="border-radius:12px; background:#181B1F; border:1px solid #23262A;"
                     class="bg-card" bgcolor="#181B1F">
                <tr>
                  <td style="padding:22px; background:#181B1F;" class="bg-card" bgcolor="#181B1F">
                    <h3 style="margin:0 0 10px 0; font-size:18px; text-align:center; color:#F2F5F7;" class="text-hi">
                      ✨ Ce urmează?
                    </h3>

                    <!-- Step -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:10px 0;">
                      <tr>
                        <td width="36" valign="top">
                          <div style="width:32px; height:32px; border-radius:8px;
                                      background:linear-gradient(135deg,#0B61D6 0%,#06306F 100%);
                                      text-align:center; line-height:32px; font-weight:700; color:#FFFFFF;">1</div>
                        </td>
                        <td valign="top" style="padding-left:12px;">
                          <div style="font-weight:600; margin-bottom:2px; color:#F2F5F7;" class="text-hi">Revizuire aplicație</div>
                          <div style="font-size:14px; color:#9AA3AF;" class="text-lo">Analizăm detaliile și cerințele proiectului tău.</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Step -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:10px 0;">
                      <tr>
                        <td width="36" valign="top">
                          <div style="width:32px; height:32px; border-radius:8px;
                                      background:linear-gradient(135deg,#0070C9 0%,#002F6C 100%);
                                      text-align:center; line-height:32px; font-weight:700; color:#FFFFFF;">2</div>
                        </td>
                        <td valign="top" style="padding-left:12px;">
                          <div style="font-weight:600; margin-bottom:2px; color:#F2F5F7;" class="text-hi">Apel de descoperire</div>
                          <div style="font-size:14px; color:#9AA3AF;" class="text-lo">Stabilim o sesiune scurtă pentru a clarifica obiectivele.</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Step -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:10px 0;">
                      <tr>
                        <td width="36" valign="top">
                          <div style="width:32px; height:32px; border-radius:8px;
                                      background:linear-gradient(135deg,#00AEEF 0%,#0070C9 100%);
                                      text-align:center; line-height:32px; font-weight:700; color:#FFFFFF;">3</div>
                        </td>
                        <td valign="top" style="padding-left:12px;">
                          <div style="font-weight:600; margin-bottom:2px; color:#F2F5F7;" class="text-hi">Propunere personalizată</div>
                          <div style="font-size:14px; color:#9AA3AF;" class="text-lo">Primești o strategie adaptată și un plan clar de implementare.</div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reminder -->
          <tr>
            <td align="center" style="padding:6px 24px 0; background:#111315;" class="bg-outer" bgcolor="#111315">
              <p style="margin:0; color:#9AA3AF;" class="text-lo">
                📅 Te contactăm în <strong style="color:#00AEEF;">24–48 de ore</strong>
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td align="center" style="padding:16px 24px 26px; background:#111315;" class="bg-outer" bgcolor="#111315">
              <a href="https://webmediadesign.ro/studii-de-caz"
   style="display:inline-block; padding:14px 28px;
          background:linear-gradient(90deg,#0B61D6 0%,#06306F 100%);
          color:#00AEEF !important; text-decoration:none !important;
          border-radius:8px; font-weight:600; font-size:16px;">
  <span style="color:#00AEEF !important; -webkit-text-fill-color:#00AEEF !important;">Explorează Portofoliul</span>
</a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:18px 24px; background:#111315; border-top:1px solid #23262A;"
                class="bg-outer" bgcolor="#111315">
              <p style="text-align:center; font-size:14px; margin:0 0 12px 0; color:#9AA3AF;" class="text-lo">
                Ai întrebări? Scrie-ne la
                <a href="mailto:contact@webmediadesign.ro" style="color:#00AEEF; text-decoration:none;">contact@webmediadesign.ro</a>
              </p>

              <p style="text-align:center; margin:10px 0; color:#D1D5DB;" class="text-mid">
                <a href="https://webmediadesign.ro" style="color:#00AEEF; text-decoration:none;">Website</a>
                <span style="margin:0 8px; color:#23262A;">|</span>
                <a href="https://webmediadesign.ro/studii-de-caz" style="color:#00AEEF; text-decoration:none;">Portofoliu</a>
                <span style="margin:0 8px; color:#23262A;">|</span>
                <a href="https://webmediadesign.ro/academia" style="color:#00AEEF; text-decoration:none;">Academie</a>
              </p>

              <p style="text-align:center; font-size:12px; margin:8px 0 0 0; color:#9AA3AF;" class="text-lo">
                © 2025 Web Media Design · Excelență Digitală Premium
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
