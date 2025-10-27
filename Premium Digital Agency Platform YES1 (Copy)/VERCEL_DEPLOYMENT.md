# Vercel Deployment Guide - Free & Production-Ready

Deploy your entire application (frontend + backend) on Vercel's **free tier** - perfect for production.

## ✅ Why Vercel?

- **100% Free** for personal/commercial projects
- **Serverless Functions** - No server to manage
- **Automatic SSL** - HTTPS included
- **CDN** - Lightning fast globally
- **Zero configuration** - Just connect GitHub
- **Perfect for this use case** - Low-traffic contact forms

---

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your GitHub Repository

Make sure all changes are pushed:

```bash
git add -A
git commit -m "Add Vercel serverless functions"
git push origin main
```

### Step 2: Deploy on Vercel

1. **Go to [vercel.com](https://vercel.com)**

2. **Sign up with GitHub** (or sign in if you have an account)

3. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

4. **Configure the project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

5. **Add Environment Variables:**

   Click "Environment Variables" and add these:

   | Name | Value |
   |------|-------|
   | `SMTP_HOST` | `smtp.zoho.eu` |
   | `SMTP_PORT` | `465` |
   | `SMTP_SECURE` | `true` |
   | `SMTP_USER` | `contact@webmediadesign.ro` |
   | `SMTP_PASS` | `Webmediadesign01!` |
   | `SMTP_FROM` | `"Web Media Design <contact@webmediadesign.ro>"` |

6. **Click "Deploy"**

   Vercel will:
   - Install dependencies
   - Build your frontend
   - Deploy serverless functions
   - Give you a URL like `https://your-project.vercel.app`

---

## 🎯 What Gets Deployed

### Frontend (Static Files)
- Your React/Vite app
- Hosted on Vercel's CDN
- Lightning fast globally

### Backend (Serverless Function)
- `/api/submit-application` endpoint
- Runs on-demand (only when form is submitted)
- Sends emails via Zoho SMTP
- Auto-scales, always available

---

## ✅ After Deployment

### 1. Test Your API Endpoint

Visit your Vercel URL + `/api/submit-application`:
```
https://your-project.vercel.app/api/submit-application
```

You should see a 405 error (Method not allowed) - this is correct! It means the function is working but needs a POST request.

### 2. Test the Form

1. Go to your Vercel URL: `https://your-project.vercel.app/aplica`
2. Fill out the form completely
3. Click "Trimite Aplicația"
4. You should see success message
5. Check `contact@webmediadesign.ro` for the email

### 3. Check Vercel Logs

1. Go to Vercel Dashboard → Your Project
2. Click "Functions" tab
3. Click on `/api/submit-application`
4. View logs for each invocation
5. Look for "Form submission email sent successfully"

---

## 🌐 Custom Domain (Optional)

### Option A: Use Vercel Domain (Free)

Your site is already live at:
```
https://your-project.vercel.app
```

### Option B: Add Custom Domain

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add `webmediadesign.ro`
   - Vercel will show you DNS records

2. **In Hostinger (or your DNS provider):**
   - Go to DNS settings for `webmediadesign.ro`
   - Add the records Vercel provided:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

3. **Wait for DNS propagation** (5-60 minutes)

4. **Your site is now at:**
   ```
   https://webmediadesign.ro
   ```

---

## 🔧 How It Works

### Development (Local)
```
Frontend (localhost:3000)
    ↓
Vite Proxy (/api)
    ↓
Express Server (localhost:3001)
    ↓
Zoho SMTP → Email
```

### Production (Vercel)
```
Frontend (Vercel CDN)
    ↓
Form Submit to /api/submit-application
    ↓
Vercel Serverless Function
    ↓
Zoho SMTP → Email
```

**Key difference:** No Express server needed! Vercel runs your function on-demand.

---

## 💰 Vercel Free Tier Limits

| Resource | Free Tier | Your Usage |
|----------|-----------|------------|
| Bandwidth | 100 GB/month | ~1 GB (low traffic) |
| Functions | 100 GB-Hrs | < 1 GB-Hr |
| Builds | 6,000 min/month | ~5 min/build |
| **Cost** | **$0/month** | **Perfect fit!** |

**For a contact form:** You'll use < 1% of free limits.

---

## 🐛 Troubleshooting

### Issue: "Module not found: nodemailer"

**Fix:** Make sure `nodemailer` is in `package.json` dependencies:
```json
"dependencies": {
  "nodemailer": "^6.9.7"
}
```

Redeploy on Vercel.

### Issue: Email not received

1. **Check Vercel Function Logs:**
   - Dashboard → Functions → `/api/submit-application`
   - Look for errors

2. **Common causes:**
   - Environment variables not set
   - Wrong SMTP password
   - Zoho account inactive

3. **Test SMTP credentials manually:**
   ```javascript
   // In Vercel Function logs, you'll see if SMTP auth fails
   ```

### Issue: CORS error

Already handled! The function includes CORS headers:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

If you still get errors, check browser console for details.

### Issue: "Too many requests"

Vercel free tier allows:
- 100 function invocations per hour
- 1,000 per day

This is more than enough for a contact form.

---

## 🔐 Security Notes

### Environment Variables

✅ **Correct way (Vercel Dashboard):**
- Set in Vercel project settings
- Never exposed to client
- Encrypted at rest

❌ **Wrong way:**
- Don't put in `.env` file in repo
- Don't hardcode in JavaScript
- Don't commit sensitive data

### SMTP Password

Your password is in environment variables, which means:
- ✅ Not visible in browser
- ✅ Not in your code/commits
- ✅ Only Vercel serverless function can access it

---

## 📊 Monitoring

### View Email Deliveries

1. **Vercel Dashboard → Functions → Logs**
   - See every form submission
   - Check for errors
   - View timestamps

2. **Zoho Mail Sent Folder**
   - Verify emails were sent
   - Check if marked as spam

### Set Up Alerts (Optional)

Vercel can notify you:
- When functions fail
- When builds fail
- Via Slack, Discord, or email

---

## 🔄 Updates & Redeployment

### Automatic Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes
git add -A
git commit -m "Update form"
git push origin main

# Vercel automatically:
# 1. Detects push
# 2. Runs build
# 3. Deploys new version
# 4. Live in ~2 minutes
```

### Manual Deployment

If needed:
1. Go to Vercel Dashboard
2. Click "Deployments"
3. Click "Redeploy" on any previous deployment

---

## ✅ Final Checklist

Before going live:

- [ ] All code pushed to GitHub
- [ ] Environment variables set on Vercel
- [ ] Test form submission
- [ ] Verify email received at `contact@webmediadesign.ro`
- [ ] Check spam folder
- [ ] Test on mobile device
- [ ] Custom domain configured (if desired)
- [ ] SSL certificate active (automatic on Vercel)

---

## 🆘 Still Not Working?

### Check these in order:

1. **Vercel Function Logs** - Any errors?
2. **Environment Variables** - All 6 set correctly?
3. **Zoho Account** - Active and can receive emails?
4. **Spam Folder** - Email filtered as spam?
5. **Browser Console** - Any JavaScript errors?
6. **Network Tab** - Is response JSON or HTML?

### Expected Success Flow:

```
1. User fills form
2. Clicks submit
3. Loading spinner shows
4. POST to /api/submit-application
5. Function runs (check logs)
6. Email sent via Zoho
7. Success toast appears
8. Email arrives (check inbox/spam)
```

---

## 📞 Support

If you encounter issues:

1. **Check Vercel Function Logs** (most common solution)
2. **Review environment variables** (spelling matters!)
3. **Test SMTP credentials** in email client
4. **Check Vercel status:** [status.vercel.com](https://status.vercel.com)

---

## 🎉 Advantages of This Setup

✅ **No backend server to maintain**
✅ **$0/month cost** (Vercel free tier)
✅ **Auto-scaling** (handles traffic spikes)
✅ **Automatic HTTPS/SSL**
✅ **Global CDN** (fast everywhere)
✅ **Zero downtime deployments**
✅ **Git-based workflow**
✅ **Built-in monitoring**

Perfect for production! 🚀
