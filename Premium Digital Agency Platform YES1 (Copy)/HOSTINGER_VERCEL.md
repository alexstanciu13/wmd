# Hostinger + Vercel Hybrid Deployment (100% Free)

Keep your frontend on Hostinger, deploy only the backend API to Vercel for free.

## 🎯 Architecture

```
Frontend on Hostinger (webmediadesign.ro)
        ↓
    Form Submit
        ↓
Backend on Vercel (your-api.vercel.app)
        ↓
  Zoho SMTP → Email
```

**Benefits:**
- ✅ Keep your existing Hostinger setup
- ✅ No migration needed
- ✅ Backend API runs free on Vercel
- ✅ Both services work together seamlessly

---

## 🚀 Step-by-Step Deployment

### Step 1: Deploy Backend API to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

2. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure the project:**
   - **Root Directory:** Leave as `./` (default)
   - **Framework Preset:** Other (or Vite - doesn't matter for API)
   - Vercel will auto-detect the `api/` folder

4. **Add Environment Variables:**

   Click "Environment Variables" tab and add these 6 variables:

   | Name | Value |
   |------|-------|
   | `SMTP_HOST` | `smtp.zoho.eu` |
   | `SMTP_PORT` | `465` |
   | `SMTP_SECURE` | `true` |
   | `SMTP_USER` | `contact@webmediadesign.ro` |
   | `SMTP_PASS` | `Webmediadesign01!` |
   | `SMTP_FROM` | `"Web Media Design <contact@webmediadesign.ro>"` |

5. **Click "Deploy"**

6. **Copy your Vercel API URL**

   After deployment, you'll get a URL like:
   ```
   https://your-project-name.vercel.app
   ```

   Your API endpoint will be:
   ```
   https://your-project-name.vercel.app/api/submit-application
   ```

---

### Step 2: Update Frontend on Hostinger

**Option A: Using Environment Variable (Recommended)**

1. Create `.env.production` file in your project root:
   ```env
   VITE_API_URL=https://your-project-name.vercel.app/api
   ```

2. Rebuild your frontend:
   ```bash
   npm run build
   ```

3. Upload the `dist/` folder to Hostinger via FTP or File Manager

**Option B: Direct URL in Code (Quick Fix)**

Update `ApplicationForm.tsx` line 96:

```javascript
// Change from:
const apiUrl = import.meta.env.VITE_API_URL || '/api';

// To:
const apiUrl = 'https://your-project-name.vercel.app/api';
```

Then rebuild and upload to Hostinger.

---

### Step 3: Test Everything

1. **Test Backend API Directly:**

   Visit: `https://your-project-name.vercel.app/api/submit-application`

   You should see: `{"error":"Method not allowed"}` (this is correct - it needs POST)

2. **Test the Form:**

   - Go to `https://webmediadesign.ro/aplica`
   - Fill out and submit the form
   - Check browser DevTools → Network tab
   - Should see POST to your Vercel URL
   - Response should be JSON: `{"success":true,...}`

3. **Check Email:**

   - Check `contact@webmediadesign.ro` inbox
   - Check spam folder
   - Email should arrive within 1-2 minutes

4. **Check Vercel Logs:**

   - Vercel Dashboard → Functions → `/api/submit-application`
   - View logs for each submission
   - Look for: "Form submission email sent successfully"

---

## 🔧 Updating Your Frontend

### If you already deployed to Hostinger:

**Quick Update Process:**

```bash
# 1. Pull latest changes
git pull

# 2. Create .env.production with your Vercel URL
echo 'VITE_API_URL=https://your-project-name.vercel.app/api' > .env.production

# 3. Rebuild
npm run build

# 4. Upload dist/ folder to Hostinger
# Use FTP, File Manager, or Git deployment
```

---

## 📁 What Goes Where

### Hostinger (Your Domain):
```
webmediadesign.ro
├── index.html
├── assets/
│   ├── main.js
│   └── main.css
└── (all static files)
```

### Vercel (Free API):
```
your-project.vercel.app
└── /api/submit-application
    └── Serverless function that sends emails
```

---

## 🔐 CORS Configuration

The Vercel function already includes CORS headers to allow your Hostinger domain:

```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

This means `webmediadesign.ro` can call your Vercel API without issues.

If you want to restrict it to only your domain:

```javascript
res.setHeader('Access-Control-Allow-Origin', 'https://webmediadesign.ro');
```

---

## 💰 Cost Breakdown

| Service | What It Does | Cost |
|---------|-------------|------|
| **Hostinger** | Hosts your frontend (HTML/CSS/JS) | Your existing plan |
| **Vercel** | Runs backend API (email sending) | **$0/month forever** |
| **Total Extra Cost** | | **$0** |

---

## 🔄 Future Updates

### When you make changes:

**Frontend Changes (HTML/CSS/JS):**
```bash
npm run build
# Upload dist/ to Hostinger
```

**Backend Changes (API logic):**
```bash
git push origin main
# Vercel auto-deploys (no action needed)
```

---

## 🐛 Troubleshooting

### Issue: Form submits but no email

**Check:**
1. Browser DevTools → Network tab
2. Look at `/api/submit-application` request
3. Check the URL - should be your Vercel URL, not `/api/...`
4. Check response - should be JSON with `success: true`

**If URL is wrong:**
- Rebuild frontend with correct `.env.production`
- Re-upload to Hostinger

### Issue: CORS error

**Symptoms:**
```
Access to fetch at 'https://your-project.vercel.app/api/submit-application'
from origin 'https://webmediadesign.ro' has been blocked by CORS policy
```

**Fix:**
The function already has CORS enabled. If you still see this:
1. Clear browser cache
2. Try in incognito mode
3. Check Vercel logs for actual error

### Issue: Vercel function timeout

**Cause:** SMTP connection taking too long

**Fix:**
1. Verify SMTP credentials in Vercel environment variables
2. Check Zoho Mail status
3. View Vercel function logs for detailed error

### Issue: Environment variable not working

**Symptoms:**
Frontend still calling `/api/...` instead of Vercel URL

**Fix:**
```bash
# Make sure .env.production exists
cat .env.production
# Should show: VITE_API_URL=https://your-project.vercel.app/api

# Rebuild
npm run build

# Verify it's in the build
grep -r "your-project.vercel.app" dist/
```

---

## 📊 Monitoring

### View Email Submissions:

1. **Vercel Dashboard:**
   - Go to your project
   - Click "Functions"
   - Click `/api/submit-application`
   - View real-time logs

2. **Check Metrics:**
   - Number of invocations
   - Success rate
   - Response times
   - Errors (if any)

---

## ✅ Checklist

Before going live:

- [ ] Backend deployed to Vercel
- [ ] Environment variables set on Vercel (6 variables)
- [ ] Test Vercel API endpoint directly
- [ ] `.env.production` created with Vercel URL
- [ ] Frontend rebuilt with `npm run build`
- [ ] `dist/` folder uploaded to Hostinger
- [ ] Form submitted successfully
- [ ] Email received at `contact@webmediadesign.ro`
- [ ] Checked spam folder
- [ ] Vercel logs show "email sent successfully"

---

## 🎯 Summary

**Your Setup:**
- ✅ **Frontend:** Hostinger (your existing setup)
- ✅ **Backend API:** Vercel (free forever)
- ✅ **Emails:** Sent via Zoho SMTP
- ✅ **Cost:** $0 extra (just your Hostinger plan)

**What You Need to Do:**
1. Deploy `api/` folder to Vercel (5 minutes)
2. Add 6 environment variables
3. Update frontend with Vercel API URL
4. Rebuild and upload to Hostinger

**Result:**
- Form submissions work perfectly
- Emails sent to `contact@webmediadesign.ro`
- No server management needed
- Scales automatically
- Free forever

---

## 🆘 Need Help?

**Testing Backend:**
```bash
curl -X POST https://your-project.vercel.app/api/submit-application \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"123","company":"Test","budget":"1000","projectType":"web-design","timeline":"1-3","description":"Test"}'
```

Should return:
```json
{"success":true,"message":"Application submitted successfully"}
```

If this works but form doesn't, the issue is in frontend configuration.

---

**This is the best solution:** Keep Hostinger (you're already paying for it) + Free Vercel API = Perfect! 🎉
