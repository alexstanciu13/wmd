# Debugging Email Issues - Step by Step Guide

## 🚨 Issue: Confirmation Emails Not Being Sent

If confirmation emails aren't arriving (not in inbox or spam), follow these debugging steps:

---

## Step 1: Check PHP Error Log

The updated code now logs every step of the email sending process.

### **On Hostinger:**

**Via File Manager:**
1. Go to File Manager
2. Navigate to `public_html/`
3. Look for `error_log` file
4. Right-click → View or Download

**Via SSH:**
```bash
tail -f ~/public_html/error_log
```

### **What to Look For:**

**✅ Success logs:**
```
[CONFIRMATION EMAIL] Template generated, length: 18456
[CONFIRMATION EMAIL] Sending to: user@example.com
[CONFIRMATION EMAIL] Subject: Aplicația ta a fost primită — Web Media Design
[CONFIRMATION EMAIL] ✓ Successfully sent to: user@example.com
```

**❌ Error logs:**
```
[CONFIRMATION EMAIL] ✗ FAILED to send to: user@example.com
[CONFIRMATION EMAIL] Error: SMTP connect() failed
[CONFIRMATION EMAIL] Code: 0
[CONFIRMATION EMAIL] File: /path/to/PHPMailer.php:123
```

---

## Step 2: Use the Test Endpoint

I've created a test endpoint to send emails directly and see detailed errors.

### **How to Use:**

Open this URL in your browser (replace with your email):
```
https://webmediadesign.ro/api/test-confirmation-email.php?email=YOUR_EMAIL@example.com
```

### **Expected Response:**

**✅ Success:**
```json
{
  "ok": true,
  "message": "Test email sent successfully!",
  "recipient": "your@email.com",
  "template_length": 18456,
  "check": "Please check your email inbox (and spam folder)"
}
```

**❌ Failure:**
```json
{
  "ok": false,
  "error": "Failed to send test email",
  "smtp_error": "Detailed error message here",
  "help": "Check error_log for detailed SMTP debug output"
}
```

### **Check Your Email:**

After successful response, check:
1. ✅ Inbox
2. ✅ Spam folder
3. ✅ Promotions tab (Gmail)
4. ✅ Junk folder (Outlook)

---

## Step 3: Check the Form Response

When you submit the actual form, check the browser console for the API response.

### **Open Browser Console:**
- Chrome: F12 → Console tab
- Firefox: F12 → Console tab
- Safari: Cmd+Option+C

### **Submit the form and look for:**

**✅ Success (both emails sent):**
```json
{"ok": true}
```

**⚠️ Partial success (internal sent, confirmation failed):**
```json
{
  "ok": true,
  "warning": "Internal notification sent, but confirmation email failed",
  "confirmation_error": "SMTP Error: Could not connect to SMTP host"
}
```

**❌ Complete failure:**
```json
{
  "ok": false,
  "error": "Eroare trimitere email.",
  "smtp": "Authentication failed"
}
```

---

## Step 4: Common Issues & Solutions

### **Issue A: Template Not Loading**

**Error Log:**
```
PHP Fatal error: Call to undefined function getConfirmationEmailHTML()
```

**Solution:**
- Upload `api/email-template.php` to your server
- Verify file exists: `public_html/api/email-template.php`

---

### **Issue B: SMTP Authentication Failed**

**Error:**
```
SMTP Error: Could not authenticate
```

**Possible Causes:**
1. Wrong password in `/secrets/mail.php`
2. Zoho account locked
3. 2FA enabled without app password

**Solution:**
```bash
# Check secrets file exists
ls -la ~/secrets/mail.php

# Verify password is correct
cat ~/secrets/mail.php

# Should show:
# <?php
# return [
#     'SMTP_PASS' => 'your_password_here'
# ];
```

**If using Zoho with 2FA:**
- Generate app-specific password
- Update `/secrets/mail.php` with app password

---

### **Issue C: SMTP Connection Failed**

**Error:**
```
SMTP connect() failed
```

**Possible Causes:**
1. Port 465 blocked by Hostinger
2. Firewall blocking SMTP
3. Zoho SMTP down (rare)

**Solution 1: Try Port 587**

Edit `api/submit-application.php` and `api/test-confirmation-email.php`:

```php
// Change from:
$mail->Port       = 465;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

// To:
$mail->Port       = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
```

**Solution 2: Use Hostinger SMTP**

```php
$mail->Host       = 'smtp.hostinger.com';
$mail->Port       = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Username   = 'contact@webmediadesign.ro';
$mail->Password   = $SMTP_PASS; // Use Hostinger email password
```

---

### **Issue D: Email Limit Reached**

**Error:**
```
550 User has exceeded the max emails per hour
```

**Hostinger Limits:**
- Shared hosting: ~50 emails/hour
- Business hosting: ~100 emails/hour

**Solution:**
- Wait 1 hour and try again
- Upgrade hosting plan for higher limits
- Contact Hostinger support to check limits

---

### **Issue E: Email Goes to Spam**

**No error, but email arrives in spam folder**

**Solutions:**

1. **Add SPF Record** (Hostinger DNS):
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.zoho.eu ~all
   TTL: 14400
   ```

2. **Verify DKIM** (Zoho Mail):
   - Login to Zoho Mail
   - Settings → Domains → webmediadesign.ro
   - Check DKIM is enabled

3. **Mark as "Not Spam":**
   - First few emails often go to spam
   - Mark as "Not Spam" to train filters
   - Future emails will go to inbox

---

## Step 5: Advanced Debugging

### **Enable SMTP Debug Output**

Edit `api/submit-application.php`, add after `$mail = new PHPMailer(true);`:

```php
// Add these lines for debugging
$mail->SMTPDebug = 2; // 0=off, 1=client, 2=client+server
$mail->Debugoutput = function($str, $level) {
  error_log("[SMTP DEBUG] $str");
};
```

This will log every SMTP command and response to `error_log`.

### **Check SMTP Manually**

Test SMTP connection manually:

```bash
# Test port 465
telnet smtp.zoho.eu 465

# Test port 587
telnet smtp.zoho.eu 587
```

If connection fails, port is likely blocked.

---

## Step 6: Verify File Uploads

Make sure all files are uploaded correctly:

```bash
# Check files exist
ls -la ~/public_html/api/submit-application.php
ls -la ~/public_html/api/email-template.php
ls -la ~/public_html/api/test-confirmation-email.php
ls -la ~/secrets/mail.php

# Check file permissions
chmod 644 ~/public_html/api/*.php
chmod 600 ~/secrets/mail.php
```

---

## Quick Troubleshooting Checklist

Before diving into logs, verify:

- [ ] `api/email-template.php` uploaded to server
- [ ] `api/submit-application.php` updated (latest version)
- [ ] `/secrets/mail.php` exists and contains correct password
- [ ] Test endpoint returns success: `/api/test-confirmation-email.php?email=YOUR_EMAIL`
- [ ] Test email arrives in inbox or spam
- [ ] PHP error_log shows `[CONFIRMATION EMAIL]` logs
- [ ] Browser console shows API response with/without warnings
- [ ] Internal notification email still works (sent to contact@webmediadesign.ro)

---

## Testing Workflow

### **Complete Test Flow:**

1. **Test the endpoint first:**
   ```
   https://webmediadesign.ro/api/test-confirmation-email.php?email=YOUR_EMAIL
   ```

2. **Check response in browser**
3. **Check error_log file**
4. **Check your email inbox/spam**
5. **If test works, submit actual form**
6. **Check browser console for response**
7. **Check both inboxes (yours + contact@webmediadesign.ro)**

---

## Expected Behavior

### **When Everything Works:**

1. User submits form
2. API validates data
3. **Email #1 sent** → `contact@webmediadesign.ro` ✅
4. **Email #2 sent** → User's email ✅
5. Logs show:
   ```
   [CONFIRMATION EMAIL] Template generated, length: 18456
   [CONFIRMATION EMAIL] Sending to: user@example.com
   [CONFIRMATION EMAIL] ✓ Successfully sent to: user@example.com
   ```
6. API returns: `{"ok": true}`
7. Frontend redirects to `/thank-you`

---

## Still Not Working?

If you've tried everything and emails still don't send:

### **Collect This Information:**

1. **PHP Error Log** (last 50 lines):
   ```bash
   tail -50 ~/public_html/error_log
   ```

2. **Test Endpoint Response:**
   - Full JSON response from test endpoint

3. **Browser Console:**
   - API response when submitting form

4. **Hosting Details:**
   - Hostinger plan type (Shared/Business/VPS)
   - PHP version
   - Any error messages from Hostinger

### **Contact Support With:**

- Copy of error_log showing `[CONFIRMATION EMAIL]` lines
- Test endpoint response
- Confirmation that internal email DOES work
- Your Hostinger plan type

---

## Quick Fixes

### **Most Common Solutions:**

**90% of issues are solved by:**

1. ✅ Uploading `api/email-template.php`
2. ✅ Verifying `/secrets/mail.php` has correct password
3. ✅ Checking email went to spam folder
4. ✅ Trying port 587 instead of 465
5. ✅ Using Hostinger SMTP instead of Zoho

**Try these first!**

---

**Last Updated:** 2025-10-28
**Files Required:**
- `api/submit-application.php` (updated)
- `api/email-template.php` (new)
- `api/test-confirmation-email.php` (new)
- `/secrets/mail.php` (existing)
