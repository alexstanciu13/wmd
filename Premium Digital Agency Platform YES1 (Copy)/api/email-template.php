<?php
/**
 * Confirmation Email Template for User
 * Returns HTML email content with user data
 */

function getConfirmationEmailHTML(array $data): string {
    $name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
    $company = htmlspecialchars($data['company'], ENT_QUOTES, 'UTF-8');
    $projectType = htmlspecialchars($data['projectType'], ENT_QUOTES, 'UTF-8');
    $budget = htmlspecialchars($data['budget'], ENT_QUOTES, 'UTF-8');
    $timeline = htmlspecialchars($data['timeline'], ENT_QUOTES, 'UTF-8');

    return <<<HTML
<!DOCTYPE html>
<html lang="ro" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Aplicația ta a fost primită - Web Media Design</title>

    <!--[if mso]>
    <style>
        * { font-family: Arial, sans-serif !important; }
    </style>
    <![endif]-->

    <style>
        /* Reset styles */
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
            background-color: #f4f4f4;
        }

        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        table, td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        img {
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
            height: auto;
            border: 0;
            display: block;
        }

        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: auto !important;
            }

            .fluid {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }

            .padding-mobile {
                padding: 20px !important;
            }
        }
    </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f4f4f4;">
    <center style="width: 100%; background-color: #f4f4f4;">
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
        <tr>
        <td>
        <![endif]-->

        <!-- Preheader Text (hidden) -->
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
            Mulțumim pentru aplicația ta! Echipa noastră te va contacta în 24-48 de ore.
        </div>

        <!-- Email Container -->
        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: auto;" class="email-container">

            <!-- Spacer -->
            <tr>
                <td style="padding: 20px 0; text-align: center;">
                    &nbsp;
                </td>
            </tr>

            <!-- Hero Section -->
            <tr>
                <td style="background-color: #0A0A0A; padding: 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                            <td style="padding: 40px 40px 20px 40px; text-align: center;">
                                <!-- Success Icon -->
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tr>
                                        <td style="background: linear-gradient(135deg, #00AEEF 0%, #9333EA 100%); border-radius: 50%; width: 80px; height: 80px; text-align: center; vertical-align: middle;">
                                            <span style="font-size: 40px; line-height: 80px; color: #ffffff;">✓</span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 40px 40px 40px; font-family: 'Inter', Arial, sans-serif; font-size: 32px; line-height: 40px; color: #ffffff; text-align: center; font-weight: bold;">
                                Aplicația ta a fost <span style="background: linear-gradient(90deg, #0B61D6 0%, #00AEEF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #00AEEF;">primită</span>!
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- Main Content -->
            <tr>
                <td style="background-color: #0A0A0A; padding: 0 40px 40px 40px;" class="padding-mobile">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">

                        <!-- Greeting -->
                        <tr>
                            <td style="padding: 0 0 20px 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #cccccc; text-align: center;">
                                Bună {$name},
                            </td>
                        </tr>

                        <!-- Introduction -->
                        <tr>
                            <td style="padding: 0 0 30px 0; font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; color: #cccccc; text-align: center;">
                                Mulțumim pentru interesul tău de a colabora cu <strong style="color: #00AEEF;">Web Media Design</strong>. Am primit cu succes aplicația ta și suntem entuziasmați să aflăm mai multe despre proiectul tău!
                            </td>
                        </tr>

                        <!-- What Happens Next Card -->
                        <tr>
                            <td style="background-color: #1A1A1A; border-radius: 12px; padding: 30px; margin: 20px 0;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="padding: 0 0 20px 0; font-family: 'Inter', Arial, sans-serif; font-size: 20px; line-height: 28px; color: #ffffff; font-weight: bold; text-align: center;">
                                            ✨ Ce urmează?
                                        </td>
                                    </tr>

                                    <!-- Step 1 -->
                                    <tr>
                                        <td style="padding: 15px 0;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td width="40" style="vertical-align: top;">
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                            <tr>
                                                                <td style="background: linear-gradient(135deg, #00AEEF 0%, #0EA5E9 100%); border-radius: 8px; width: 32px; height: 32px; text-align: center; vertical-align: middle; font-family: 'Inter', Arial, sans-serif; font-size: 14px; font-weight: bold; color: #ffffff;">
                                                                    1
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="vertical-align: top; font-family: 'Inter', Arial, sans-serif;">
                                                        <div style="font-size: 16px; line-height: 20px; color: #ffffff; font-weight: 600; margin-bottom: 4px;">
                                                            Revizuire Aplicație
                                                        </div>
                                                        <div style="font-size: 14px; line-height: 20px; color: #999999;">
                                                            Echipa noastră analizează detaliile și cerințele proiectului tău
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Step 2 -->
                                    <tr>
                                        <td style="padding: 15px 0;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td width="40" style="vertical-align: top;">
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                            <tr>
                                                                <td style="background: linear-gradient(135deg, #9333EA 0%, #A855F7 100%); border-radius: 8px; width: 32px; height: 32px; text-align: center; vertical-align: middle; font-family: 'Inter', Arial, sans-serif; font-size: 14px; font-weight: bold; color: #ffffff;">
                                                                    2
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="vertical-align: top; font-family: 'Inter', Arial, sans-serif;">
                                                        <div style="font-size: 16px; line-height: 20px; color: #ffffff; font-weight: 600; margin-bottom: 4px;">
                                                            Apel Descoperire
                                                        </div>
                                                        <div style="font-size: 14px; line-height: 20px; color: #999999;">
                                                            Vom programa o sesiune de strategie pentru a discuta viziunea ta
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- Step 3 -->
                                    <tr>
                                        <td style="padding: 15px 0;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td width="40" style="vertical-align: top;">
                                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                            <tr>
                                                                <td style="background: linear-gradient(135deg, #00AEEF 0%, #9333EA 100%); border-radius: 8px; width: 32px; height: 32px; text-align: center; vertical-align: middle; font-family: 'Inter', Arial, sans-serif; font-size: 14px; font-weight: bold; color: #ffffff;">
                                                                    3
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td style="vertical-align: top; font-family: 'Inter', Arial, sans-serif;">
                                                        <div style="font-size: 16px; line-height: 20px; color: #ffffff; font-weight: 600; margin-bottom: 4px;">
                                                            Propunere Personalizată
                                                        </div>
                                                        <div style="font-size: 14px; line-height: 20px; color: #999999;">
                                                            Primești o strategie adaptată și un plan detaliat al proiectului
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Timeline -->
                        <tr>
                            <td style="padding: 30px 0 20px 0; font-family: 'Inter', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #999999; text-align: center;">
                                📅 Te vom contacta în <strong style="color: #00AEEF;">24–48 de ore</strong>
                            </td>
                        </tr>

                        <!-- CTA Button -->
                        <tr>
                            <td style="padding: 20px 0; text-align: center;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tr>
                                        <td>
                                            <a href="https://webmediadesign.ro/studii-de-caz" style="background: linear-gradient(90deg, #0B61D6 0%, #06306F 100%); font-family: 'Inter', Arial, sans-serif; font-size: 16px; line-height: 24px; text-align: center; text-decoration: none; display: inline-block; border-radius: 8px; font-weight: 600; padding: 16px 32px; color: #ffffff;">
                                                Explorează Portofoliul
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Application Details -->
                        <tr>
                            <td style="padding: 30px 0 20px 0;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top: 1px solid #333333; padding-top: 20px;">
                                    <tr>
                                        <td style="font-family: 'Inter', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #999999; padding-bottom: 10px;">
                                            <strong style="color: #ffffff;">Detalii aplicație:</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: 'Inter', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #999999;">
                                            <strong>Companie:</strong> {$company}<br>
                                            <strong>Tip proiect:</strong> {$projectType}<br>
                                            <strong>Buget:</strong> {$budget}<br>
                                            <strong>Cronologie:</strong> {$timeline}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background-color: #0A0A0A; padding: 30px 40px;" class="padding-mobile">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">

                        <!-- Contact Info -->
                        <tr>
                            <td style="padding: 0 0 20px 0; font-family: 'Inter', Arial, sans-serif; font-size: 14px; line-height: 20px; color: #999999; text-align: center; border-top: 1px solid #333333; padding-top: 20px;">
                                Ai întrebări? Ne poți contacta la<br>
                                <a href="mailto:contact@webmediadesign.ro" style="color: #00AEEF; text-decoration: none;">contact@webmediadesign.ro</a>
                            </td>
                        </tr>

                        <!-- Social Links -->
                        <tr>
                            <td style="padding: 20px 0; text-align: center;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tr>
                                        <td style="padding: 0 10px;">
                                            <a href="https://webmediadesign.ro" style="color: #00AEEF; text-decoration: none; font-family: 'Inter', Arial, sans-serif; font-size: 14px;">Website</a>
                                        </td>
                                        <td style="padding: 0 10px; color: #333333;">|</td>
                                        <td style="padding: 0 10px;">
                                            <a href="https://webmediadesign.ro/studii-de-caz" style="color: #00AEEF; text-decoration: none; font-family: 'Inter', Arial, sans-serif; font-size: 14px;">Portofoliu</a>
                                        </td>
                                        <td style="padding: 0 10px; color: #333333;">|</td>
                                        <td style="padding: 0 10px;">
                                            <a href="https://webmediadesign.ro/academia" style="color: #00AEEF; text-decoration: none; font-family: 'Inter', Arial, sans-serif; font-size: 14px;">Academie</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <!-- Copyright -->
                        <tr>
                            <td style="padding: 20px 0 0 0; font-family: 'Inter', Arial, sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center;">
                                © 2025 Web Media Design. Toate drepturile rezervate.<br>
                                Excelență Digitală Premium
                            </td>
                        </tr>

                    </table>
                </td>
            </tr>

            <!-- Spacer -->
            <tr>
                <td style="padding: 20px 0; text-align: center;">
                    &nbsp;
                </td>
            </tr>

        </table>

        <!--[if mso | IE]>
        </td>
        </tr>
        </table>
        <![endif]-->
    </center>
</body>
</html>
HTML;
}
