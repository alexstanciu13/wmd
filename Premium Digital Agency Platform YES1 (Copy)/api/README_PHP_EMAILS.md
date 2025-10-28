# PHP Email Setup Documentation

## Overview

The form submission uses **PHP with PHPMailer** to send emails via Zoho SMTP. This approach is simple and works reliably on Hostinger shared hosting.

---

## How It Works

### Files Structure

```
api/
├── submit-application.php     # Main form handler
├── email-template.php         # HTML email template function
└── vendor/PHPMailer/         # PHPMailer library

/secrets/
└── mail.php                   # SMTP password (outside public_html)
```

---

## Email Flow

When a user submits the application form:

1. **Validate form data** - Check all required fields
2. **Send internal notification** - Plain text email to `contact@webmediadesign.ro`
3. **Send user confirmation** - Professional HTML email to the user
4. **Return success** - JSON response `{"ok": true}`

---

## SMTP Configuration

### Location: `/secrets/mail.php`

This file is **outside** `public_html` for security:

```php
<?php
return [
    'SMTP_PASS' => 'your_zoho_password_here'
];
```

### How it's loaded:

```php
$rootPath    = dirname(__DIR__, 2);           // public_html/api → up twice → account root
$secretsFile = $rootPath . '/secrets/mail.php';
$arr = include $secretsFile;
$SMTP_PASS = $arr['SMTP_PASS'];
```

---

## Email #1: Internal Notification

**To:** `contact@webmediadesign.ro`
**From:** `contact@webmediadesign.ro`
**Format:** Plain text
**Content:** All form data

```
Nouă cerere de colaborare — Web Media Design

Ai primit o cerere nouă de colaborare:

Nume:        John Doe
Email:       john@example.com
Telefon:     +40 712 345 678
Companie:    Example SRL
Website:     https://example.com
Buget:       5.000 €
Tip Proiect: Design Web
Cronologie:  1-3 săptămâni

Mesaj:
[User's message here]
```

---

## Email #2: User Confirmation

**To:** User's email
**From:** `contact@webmediadesign.ro`
**Reply-To:** `contact@webmediadesign.ro`
**Format:** HTML with plain text fallback
**Content:** Professional branded template

### HTML Features:
- ✅ Dark theme matching website design
- ✅ Neon cyan accents (#00AEEF)
- ✅ Success icon with gradient
- ✅ 3-step "What Happens Next" section
- ✅ Application details recap
- ✅ CTA button to portfolio
- ✅ Responsive design
- ✅ Email client compatible (Gmail, Outlook, etc.)

### Plain Text Fallback:
If HTML is disabled, users see a clean plain text version.

---

## Hostinger Deployment

### Step 1: Upload Files

Upload these files to your Hostinger account:

```
public_html/
└── api/
    ├── submit-application.php
    ├── email-template.php
    └── vendor/PHPMailer/     (entire folder)
```

### Step 2: Create Secrets File

SSH or File Manager → Navigate to **account root** (one level above `public_html`):

```bash
mkdir -p secrets
nano secrets/mail.php
```

Add:
```php
<?php
return [
    'SMTP_PASS' => 'your_actual_zoho_password'
];
```

Save and set permissions:
```bash
chmod 600 secrets/mail.php
```

### Step 3: Test

Submit a test form. You should receive:
- ✅ Internal email at `contact@webmediadesign.ro`
- ✅ Confirmation email at the user's email address

---

## Troubleshooting

### Issue: No emails being sent

**Check PHP error log:**
```bash
tail -f ~/public_html/error_log
```

**Check Hostinger email limits:**
- Shared hosting: ~50 emails/hour
- If exceeded, wait or upgrade plan

### Issue: Internal email works, but user confirmation doesn't

**Check the API response:**
```json
{
  "ok": false,
  "error": "Eroare trimitere email.",
  "smtp": "Actual error message here"
}
```

**Common causes:**
1. User email is invalid
2. SPF/DKIM issues (emails marked as spam)
3. Hourly email limit reached

**Solution:**
- Verify user email is valid
- Check spam folder
- Wait and retry if limit reached

### Issue: Emails go to spam

**Solutions:**
1. **Add SPF record** in Hostinger DNS:
   ```
   v=spf1 include:_spf.zoho.eu ~all
   ```

2. **Add DKIM** - Configure in Zoho Mail settings

3. **Verify domain** - Ensure webmediadesign.ro is verified in Zoho

---

## Advantages of PHP Approach

### vs. Node.js/Nodemailer:

✅ **Simpler setup** - No Node.js server required
✅ **Works on shared hosting** - Standard PHP/Apache
✅ **No port issues** - Uses standard SMTP
✅ **No dependencies** - PHPMailer is self-contained
✅ **Better compatibility** - Hostinger optimized for PHP
✅ **Easier debugging** - Check error_log directly

---

## Customizing the Email Template

### Edit: `api/email-template.php`

The template uses heredoc syntax with HTML:

```php
function getConfirmationEmailHTML(array $data): string {
    $name = htmlspecialchars($data['name'], ENT_QUOTES, 'UTF-8');
    // ... more variables

    return <<<HTML
<!DOCTYPE html>
<html lang="ro">
...your HTML here...
HTML;
}
```

**To modify:**
1. Edit the HTML inside the heredoc
2. Use `{$variableName}` for dynamic content
3. Always escape with `htmlspecialchars()`
4. Test in multiple email clients

---

## Security Notes

- ✅ **Password stored outside public_html** - `/secrets/mail.php`
- ✅ **File permissions** - `chmod 600` on secrets
- ✅ **Input sanitization** - All data cleaned with `htmlspecialchars()`
- ✅ **Honeypot field** - Spam protection
- ✅ **SMTP authentication** - Secure connection to Zoho
- ✅ **No passwords in Git** - `/secrets/` in `.gitignore`

---

## Testing

### Test Internal Email Only:

```bash
curl -X POST https://webmediadesign.ro/api/submit-application.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+40 712 345 678",
    "company": "Test Company",
    "budget": "5000",
    "projectType": "web-design",
    "timeline": "1-3",
    "description": "Test message"
  }'
```

### Expected Response:

```json
{"ok":true}
```

### Check Emails:

1. **Internal** - Check `contact@webmediadesign.ro` inbox
2. **User confirmation** - Check `test@example.com` inbox (or spam)

---

## Monitoring

### Check Email Logs:

```bash
# Hostinger PHP error log
tail -f ~/public_html/error_log

# Email activity in Hostinger control panel
hPanel → Emails → Activity Log
```

### Email Delivery Stats:

- Track open rates (add tracking pixel if needed)
- Monitor spam reports
- Check bounce rates in Zoho Mail

---

## Maintenance

### Update PHPMailer:

```bash
cd public_html/api/vendor
# Download latest PHPMailer
wget https://github.com/PHPMailer/PHPMailer/archive/refs/tags/v6.9.1.zip
unzip v6.9.1.zip
mv PHPMailer-6.9.1/src PHPMailer/
```

### Rotate SMTP Password:

1. Change password in Zoho Mail
2. Update `/secrets/mail.php`
3. Test form submission

---

## FAQ

**Q: Why not use Hostinger SMTP instead of Zoho?**
A: Zoho Mail provides better deliverability, SPF/DKIM support, and professional email management.

**Q: Can I use Gmail SMTP?**
A: Yes, but Gmail has stricter limits (100 emails/day) and requires app passwords with 2FA.

**Q: What if I hit the email limit?**
A: Hostinger shared hosting allows ~50 emails/hour. If exceeded, emails queue or fail. Upgrade to VPS for higher limits.

**Q: How do I add email attachments?**
A: Use PHPMailer's `addAttachment()` method:
```php
$mail->addAttachment('/path/to/file.pdf', 'filename.pdf');
```

**Q: Can I customize emails per project type?**
A: Yes! Modify `getConfirmationEmailHTML()` to accept `$projectType` and change content accordingly.

---

**Last Updated:** 2025-10-28
**Version:** 1.0
**PHP Version Required:** 7.4+
**PHPMailer Version:** 6.9+
