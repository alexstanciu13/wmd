# Quick Start - Deploy in 10 Minutes

Keep Hostinger for your site, use Vercel (free) for email API.

---

## Step 1: Deploy API to Vercel (5 minutes)

### 1.1 Push your code to GitHub

```bash
git add -A
git commit -m "Ready for deployment"
git push origin main
```

### 1.2 Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** with GitHub
3. Click **"Add New... → Project"**
4. Select your repository
5. Click **"Import"**

### 1.3 Add Environment Variables

In the Vercel import screen, add these **6 variables**:

```
SMTP_HOST = smtp.zoho.eu
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = contact@webmediadesign.ro
SMTP_PASS = Webmediadesign01!
SMTP_FROM = "Web Media Design <contact@webmediadesign.ro>"
```

### 1.4 Deploy

Click **"Deploy"** and wait ~2 minutes.

Copy your URL: `https://your-project-name.vercel.app`

---

## Step 2: Update Frontend for Hostinger (5 minutes)

### 2.1 Edit .env.production

Open `.env.production` file and replace the URL:

```env
VITE_API_URL=https://your-actual-vercel-url.vercel.app/api
```

**Example:**
```env
VITE_API_URL=https://wmd-backend.vercel.app/api
```

### 2.2 Rebuild

```bash
npm run build
```

### 2.3 Upload to Hostinger

Upload the `dist/` folder contents to your Hostinger public_html:

**Via File Manager:**
1. Login to Hostinger → File Manager
2. Go to `public_html` (or your domain folder)
3. Delete old files
4. Upload everything from `dist/` folder

**Via FTP:**
1. Connect to Hostinger via FTP
2. Navigate to `public_html`
3. Upload `dist/` contents

---

## Step 3: Test (2 minutes)

### 3.1 Test API

Visit: `https://your-vercel-url.vercel.app/api/submit-application`

Should see: `{"error":"Method not allowed"}` ✅ (This is correct!)

### 3.2 Test Form

1. Go to: `https://webmediadesign.ro/aplica`
2. Fill out the form
3. Submit
4. Should see success message
5. Check email at `contact@webmediadesign.ro`

---

## ✅ Done!

Your setup:
- ✅ Frontend on Hostinger (webmediadesign.ro)
- ✅ Backend API on Vercel (free)
- ✅ Emails sending to contact@webmediadesign.ro

---

## 🐛 If Email Doesn't Arrive

### Check 1: Browser Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Submit form
4. Find `submit-application` request
5. Check:
   - URL should be your Vercel URL (not `/api/...`)
   - Status should be `200`
   - Response should be JSON with `"success": true`

### Check 2: Vercel Logs

1. Go to Vercel Dashboard
2. Click your project
3. Click "Functions"
4. Click `/api/submit-application`
5. View logs - should see "Form submission email sent successfully"

### Check 3: Common Issues

**Problem:** Request goes to `/api/submit-application` (relative URL)

**Fix:**
- `.env.production` not configured correctly
- Rebuild: `npm run build`
- Re-upload `dist/` to Hostinger

**Problem:** CORS error

**Fix:** Already handled in code. Clear cache and try again.

**Problem:** 500 error from Vercel

**Fix:** Check environment variables in Vercel dashboard

---

## 📞 Test Command

Test your Vercel API directly:

```bash
curl -X POST https://your-vercel-url.vercel.app/api/submit-application \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+40 123 456 789",
    "company": "Test Company",
    "website": "https://test.com",
    "budget": "5000",
    "projectType": "web-design",
    "timeline": "1-3",
    "description": "This is a test submission"
  }'
```

Should return:
```json
{"success":true,"message":"Application submitted successfully"}
```

And email should arrive at `contact@webmediadesign.ro`

---

## 🎉 That's It!

Total time: **~10 minutes**
Total cost: **$0** (Vercel free tier)

Need detailed help? See `HOSTINGER_VERCEL.md`
