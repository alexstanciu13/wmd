# Hostinger Deployment Checklist

## 🚨 Common Issues & Solutions

### Issue: Confirmation Emails Not Being Sent

If you deployed to Hostinger and confirmation emails aren't being sent, follow this checklist:

---

## ✅ Pre-Deployment Checklist

### 1. **Verify Email Template File Exists**

The email template must be uploaded to the server:

```bash
server/email-templates/application-confirmation.html
```

**How to verify on Hostinger:**
- Log in to Hostinger File Manager
- Navigate to your project directory
- Ensure `server/email-templates/` folder exists
- Check that `application-confirmation.html` is present

**If missing:**
- Upload the entire `server/email-templates/` folder via FTP/File Manager
- Ensure file permissions are readable (644 or 755)

---

### 2. **Configure Environment Variables (.env)**

Create a `.env` file in your **server** directory with these variables:

```env
# SMTP Configuration for Zoho Mail
SMTP_HOST=smtp.zoho.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@webmediadesign.ro
SMTP_PASS=your_email_password_here
SMTP_FROM=Web Media Design <contact@webmediadesign.ro>

# Server Configuration
PORT=3001
NODE_ENV=production
```

**⚠️ CRITICAL:** Replace `your_email_password_here` with your actual Zoho Mail password or app-specific password.

**On Hostinger:**
- File Manager → Navigate to `server/` directory
- Create new file named `.env`
- Paste the configuration above
- Save the file
- Verify permissions: 600 or 644

---

### 3. **Install Server Dependencies**

SSH into your Hostinger server and run:

```bash
cd /path/to/your/project/server
npm install
```

**Required packages:**
- express
- cors
- nodemailer
- dotenv

---

### 4. **Check SMTP Credentials**

**Test your SMTP connection manually:**

Create a test file `test-email.js` in the server directory:

```javascript
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.eu',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ SMTP Error:', error);
  } else {
    console.log('✅ SMTP server is ready to send emails');
  }
});

// Test sending an email
transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: 'your-test-email@example.com', // Replace with your email
  subject: 'Test Email from Hostinger',
  text: 'If you receive this, SMTP is working!',
}, (err, info) => {
  if (err) {
    console.error('❌ Send error:', err);
  } else {
    console.log('✅ Email sent:', info);
  }
});
```

Run the test:
```bash
node test-email.js
```

---

### 5. **Hostinger-Specific SMTP Issues**

#### Option A: Use Hostinger's SMTP Server

Some Hostinger plans block external SMTP (like Zoho). Use Hostinger's SMTP instead:

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@webmediadesign.ro
SMTP_PASS=your_hostinger_email_password
SMTP_FROM=Web Media Design <contact@webmediadesign.ro>
```

**To get Hostinger SMTP credentials:**
1. Hostinger hPanel → Emails
2. Click on your email account
3. Find "Email Configuration" or "Manual Setup"
4. Use the SMTP settings provided

---

#### Option B: Use App-Specific Password (Recommended)

If using Zoho Mail, create an app-specific password:

1. Log in to Zoho Mail
2. Go to Settings → Security → App Passwords
3. Generate a new app password for "Web Media Design Server"
4. Use this password in `.env` instead of your regular password

---

### 6. **Check Server Logs**

The improved server now logs detailed email information. Check logs:

**On Hostinger:**
- SSH into server
- Run: `pm2 logs` (if using PM2)
- Or check: `/path/to/your/logs/` directory

**Look for these log messages:**

✅ **Success:**
```
Loading email template from: /path/to/server/email-templates/application-confirmation.html
Email template loaded successfully, length: 12345
Attempting to send confirmation email to: user@example.com
HTML template loaded, preparing confirmation email...
Sending confirmation email with options: { from: '...', to: '...', subject: '...' }
Confirmation email sent successfully!
```

❌ **Failure:**
```
❌ Email template file not found at: /path/...
❌ Failed to load HTML template, confirmation email not sent
❌ ERROR sending confirmation email to user
Error message: ...
Error code: ...
```

---

### 7. **Verify File Permissions**

Ensure the server can read the email template:

```bash
chmod 644 server/email-templates/application-confirmation.html
chmod 755 server/email-templates/
```

---

### 8. **Check Firewall/Port Restrictions**

Hostinger may block outbound SMTP connections on certain ports.

**Test port connectivity:**
```bash
telnet smtp.zoho.eu 465
# or
telnet smtp.hostinger.com 587
```

If connection fails:
- Try port 587 instead of 465
- Update `.env`: `SMTP_PORT=587` and `SMTP_SECURE=false`
- Use Hostinger's SMTP server (Option A above)

---

## 🔍 Debugging Steps

### Step 1: Check Server Startup Logs

When your server starts, it should display:

```
Server running on port 3001
Environment check:
  - SMTP_HOST: smtp.zoho.eu (default)
  - SMTP_PORT: 465 (default)
  - SMTP_USER: ✓ Set
  - SMTP_PASS: ✓ Set
  - SMTP_FROM: contact@webmediadesign.ro (default)
  - Working directory: /path/to/server
```

**If you see `❌ NOT SET`:**
- Your `.env` file is missing or not loaded
- Verify `.env` is in the correct directory
- Restart the server after adding `.env`

---

### Step 2: Test Form Submission

Submit a test application and check logs for:

1. **Template loading:**
   ```
   Loading email template from: /path/...
   Email template loaded successfully, length: 12345
   ```

2. **Email sending attempt:**
   ```
   Attempting to send confirmation email to: user@example.com
   Sending confirmation email with options: { ... }
   ```

3. **Success or error:**
   ```
   Confirmation email sent successfully!
   Email info: { ... }
   ```

---

### Step 3: Check Email Template Path

Add this debug endpoint to verify the path:

In `server/index.js`, add before the server starts:

```javascript
app.get('/api/debug/email-template', (req, res) => {
  const templatePath = path.join(__dirname, 'email-templates', 'application-confirmation.html');
  const exists = fs.existsSync(templatePath);

  res.json({
    __dirname,
    templatePath,
    exists,
    files: fs.readdirSync(__dirname)
  });
});
```

Visit: `https://your-domain.com/api/debug/email-template`

**Expected output:**
```json
{
  "__dirname": "/path/to/server",
  "templatePath": "/path/to/server/email-templates/application-confirmation.html",
  "exists": true,
  "files": ["index.js", "email-templates", ".env", ...]
}
```

**If `exists: false`:**
- Upload the `email-templates` folder
- Verify the folder structure is correct

---

## 📦 Deployment Checklist Summary

### Before Deploying:

- [ ] Server dependencies installed (`npm install` in server directory)
- [ ] `.env` file created with SMTP credentials
- [ ] Email template file uploaded to `server/email-templates/`
- [ ] SMTP credentials tested (using `test-email.js`)
- [ ] File permissions set correctly (644 for files, 755 for folders)

### After Deploying:

- [ ] Server starts without errors
- [ ] Environment variables show "✓ Set" in startup logs
- [ ] Submit test application form
- [ ] Check server logs for email sending confirmation
- [ ] Verify internal email arrives at `contact@webmediadesign.ro`
- [ ] Verify confirmation email arrives at user's email
- [ ] Check spam folder if email not in inbox

---

## 🚨 Still Not Working?

### Alternative Solution: Send Plain Text Only

If HTML template continues to fail, temporarily send plain text only:

In `server/index.js`, replace the confirmation email section with:

```javascript
// Simplified plain text confirmation email
const confirmationMailOptions = {
  from: process.env.SMTP_FROM || 'Web Media Design <contact@webmediadesign.ro>',
  to: sanitizedData.email,
  subject: 'Aplicația ta a fost primită — Web Media Design',
  text: `Bună ${sanitizedData.name},

Mulțumim pentru interesul tău de a colabora cu Web Media Design!

Am primit cu succes aplicația ta și suntem entuziasmați să aflăm mai multe despre proiectul tău.

CE URMEAZĂ?

1. Revizuire Aplicație - Echipa noastră analizează detaliile proiectului
2. Apel Descoperire - Vom programa o sesiune de strategie
3. Propunere Personalizată - Primești o strategie adaptată

📅 Te vom contacta în 24–48 de ore

DETALII APLICAȚIE:
- Companie: ${sanitizedData.company}
- Tip proiect: ${formatProjectType(sanitizedData.projectType)}
- Buget: ${formattedBudget}
- Cronologie: ${formatTimeline(sanitizedData.timeline)}

Ai întrebări? Ne poți contacta la contact@webmediadesign.ro

© 2025 Web Media Design
Excelență Digitală Premium
`,
};

try {
  await transporter.sendMail(confirmationMailOptions);
  console.log('✅ Confirmation email sent successfully');
} catch (error) {
  console.error('❌ Error:', error);
}
```

---

## 📞 Need Help?

If you're still experiencing issues, provide these details:

1. **Server startup logs** (first 20 lines)
2. **Form submission logs** (when you submit test application)
3. **SMTP error message** (if any)
4. **Hostinger plan type** (shared hosting, VPS, etc.)
5. **Email service** (Zoho, Hostinger email, Gmail, etc.)

---

## 🔐 Security Notes

- **Never commit `.env` to Git** - Add to `.gitignore`
- **Use app-specific passwords** instead of main email password
- **Restrict file permissions** on `.env` (chmod 600)
- **Enable 2FA** on your email account
- **Rotate passwords regularly**

---

**Last Updated:** 2025-10-28
**Version:** 1.0
