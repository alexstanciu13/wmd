# Host Everything on Hostinger (No Vercel!)

Simple, all-in-one deployment on Hostinger. No external services needed.

---

## 🎯 Architecture

```
Hostinger (Single Server)
├── Frontend (public_html/)
└── Backend API (public_html/api/)
    └── PHP script sends emails
```

**Benefits:**
- ✅ Everything in one place
- ✅ No Vercel issues
- ✅ Uses Hostinger's built-in PHP mail
- ✅ No Node.js needed
- ✅ 2-minute setup

---

## 🚀 Deployment Steps

### Step 1: Upload PHP API

1. **Login to Hostinger** → File Manager

2. **Navigate to:** `public_html/`

3. **Create folder:** `api`

4. **Upload file:** `api/submit-application.php` to `public_html/api/`

Your structure:
```
public_html/
├── index.html
├── assets/
└── api/
    └── submit-application.php  ← Upload this
```

### Step 2: Configure Hostinger Email

**Important:** Hostinger's `mail()` function needs proper configuration.

1. **Go to:** Hostinger Panel → **Email** → **Email Accounts**

2. **Create email:** `contact@webmediadesign.ro` (if not exists)

3. **Set password** and save

4. **Go to:** Hostinger Panel → **Advanced** → **PHP Configuration**

5. **Enable:** `mail` function (should be enabled by default)

### Step 3: Update Frontend

Edit `.env.production`:

```env
# API is on same domain, use relative path
VITE_API_URL=/api
```

Rebuild:
```bash
npm run build
```

Upload `dist/` contents to `public_html/`

---

## ✅ That's It!

Your form will now:
1. Submit to `https://webmediadesign.ro/api/submit-application.php`
2. PHP script sends email via Hostinger's mail server
3. Email arrives at `contact@webmediadesign.ro`

---

## 🧪 Testing

### Test 1: Check PHP File

Visit: `https://webmediadesign.ro/api/submit-application.php`

**Should see:** `{"error":"Method not allowed"}` ✅

### Test 2: Submit Form

1. Go to `https://webmediadesign.ro/aplica`
2. Fill out form
3. Submit
4. Check email

### Test 3: Check Logs

If email doesn't arrive:
1. Hostinger Panel → **Email** → **Logs**
2. Check for sent emails or errors

---

## 🐛 Troubleshooting

### Issue: Email not received

**Check:**
1. **Spam folder** in `contact@webmediadesign.ro`
2. **Hostinger Email Logs**
3. **PHP Error Logs:** File Manager → `public_html/error_log`

**Common fixes:**
- Make sure `contact@webmediadesign.ro` email account exists
- Check Hostinger email quota isn't full
- Verify domain DNS is pointing to Hostinger

### Issue: CORS error

**Fix:** Already handled in PHP script with headers.

If still seeing errors, add to `.htaccess`:
```apache
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "POST, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type"
```

### Issue: 404 on /api/submit-application

**Fix:** Create `.htaccess` in `public_html/` to route properly:

```apache
RewriteEngine On

# API requests
RewriteRule ^api/submit-application$ api/submit-application.php [L]

# Frontend routing (for React Router)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## 💡 Why This Works Better

| Aspect | Vercel | Hostinger PHP |
|--------|--------|---------------|
| **Setup complexity** | Complex (secrets, env vars, builds) | Simple (upload 1 file) |
| **Debugging** | Hard (serverless logs) | Easy (PHP error log) |
| **Email sending** | Needs SMTP config | Built-in mail() |
| **Cost** | Free (with limits) | Already paying |
| **Maintenance** | Multiple services | One place |

---

## 🔐 Security Notes

The PHP script includes:
- ✅ Input sanitization
- ✅ Email validation
- ✅ XSS prevention
- ✅ CORS headers
- ✅ Method validation (POST only)

---

## 📧 Email Configuration (Advanced)

If Hostinger's `mail()` doesn't work, use SMTP instead:

**Install PHPMailer:**
1. Download from: https://github.com/PHPMailer/PHPMailer
2. Upload to `public_html/vendor/PHPMailer/`
3. Update `submit-application.php` to use SMTP

---

## ✅ Final Checklist

- [ ] `api/submit-application.php` uploaded to `public_html/api/`
- [ ] Email account `contact@webmediadesign.ro` exists in Hostinger
- [ ] `.env.production` set to `VITE_API_URL=/api`
- [ ] Frontend rebuilt and uploaded
- [ ] Test form submission
- [ ] Email received

---

## 🎉 Advantages

**No external dependencies!**
- No Vercel
- No Node.js server to maintain
- No environment variable headaches
- Just PHP + Hostinger's email

**Simple updates:**
- Edit PHP file directly in File Manager
- No rebuilds needed
- Changes are instant

---

**This is MUCH simpler than Vercel!** Just upload the PHP file and you're done. 🚀
