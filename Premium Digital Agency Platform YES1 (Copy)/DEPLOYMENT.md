# Deployment Guide - Web Media Design

This guide explains how to deploy your application with email functionality working.

## 🚨 Important: Current Issue

**Problem:** Backend server is NOT deployed. Hostinger only serves static files (frontend).
**Result:** Forms submit but emails don't send.
**Solution:** Deploy the backend separately (see below).

## Architecture

Your app has 2 parts:
1. **Frontend** (Vite/React) - Static files → Deploy on Hostinger ✅
2. **Backend** (Node.js/Express) - API server → NOT deployed yet ❌

## 🚀 Deployment Options

### Option A: Deploy Backend on Railway (Recommended - Free & Easy)

#### Step 1: Deploy Backend to Railway

1. **Go to [railway.app](https://railway.app)**
2. **Sign in with GitHub**
3. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `server` folder as the root directory

4. **Add Environment Variables:**
   Go to Variables tab and add:
   ```
   SMTP_HOST=smtp.zoho.eu
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=contact@webmediadesign.ro
   SMTP_PASS=Webmediadesign01!
   SMTP_FROM="Web Media Design <contact@webmediadesign.ro>"
   PORT=3001
   ```

5. **Deploy:**
   - Railway will auto-deploy
   - Wait for deployment to complete
   - Copy your Railway URL (e.g., `https://your-app.up.railway.app`)

#### Step 2: Configure Frontend to Use Railway Backend

1. **Create `.env.production` file in project root:**
   ```env
   VITE_API_URL=https://your-app.up.railway.app/api
   ```
   (Replace with your actual Railway URL)

2. **Rebuild and redeploy frontend to Hostinger:**
   ```bash
   npm run build
   ```

3. **Upload the new `build/` folder to Hostinger**

#### Step 3: Enable CORS on Backend (if needed)

The backend already has CORS enabled, but if you get CORS errors, update `server/index.js`:

```javascript
app.use(cors({
  origin: 'https://webmediadesign.ro',
  credentials: true
}));
```

### Option B: Deploy Both on Railway

Deploy both frontend and backend on Railway:

1. **Backend:** Follow steps above
2. **Frontend:**
   - Create another Railway project
   - Point to root directory
   - Railway auto-detects Vite
   - No environment variables needed (backend on same platform)

### Option C: Deploy Backend on Hostinger (If Node.js is supported)

**Check if your Hostinger plan supports Node.js applications.**

If yes:

1. **Upload `server/` folder via FTP**
2. **SSH into your hosting:**
   ```bash
   cd server
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   nano .env
   ```
   Paste:
   ```
   SMTP_HOST=smtp.zoho.eu
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=contact@webmediadesign.ro
   SMTP_PASS=Webmediadesign01!
   SMTP_FROM="Web Media Design <contact@webmediadesign.ro>"
   PORT=3001
   ```

4. **Start server with PM2:**
   ```bash
   npm install -g pm2
   pm2 start index.js --name wmd-backend
   pm2 save
   pm2 startup
   ```

5. **Configure reverse proxy in `.htaccess`:**
   ```apache
   RewriteEngine On
   RewriteRule ^api/(.*)$ http://localhost:3001/api/$1 [P,L]
   ```

## 🧪 Testing After Deployment

1. **Test backend health check:**
   ```
   https://your-backend-url/api/health
   ```
   Should return: `{"status":"ok"}`

2. **Check browser console:**
   - Open DevTools → Network tab
   - Submit form
   - Check `/api/submit-application` request:
     - Status should be `200 OK`
     - Response Content-Type should be `application/json` (NOT `text/html`)
     - Response body should be: `{"success":true,"message":"Application submitted successfully"}`

3. **Check backend logs:**
   - Railway: Go to project → Deployments → View Logs
   - Look for: "Form submission email sent successfully"

4. **Check email:**
   - Check `contact@webmediadesign.ro` inbox
   - Check spam folder
   - Email should arrive within 1-2 minutes

## 🔍 Troubleshooting

### Issue: Still getting HTML response instead of JSON

**Cause:** Backend not deployed or URL is wrong

**Fix:**
- Verify backend is running: `https://your-backend-url/api/health`
- Check `.env.production` has correct URL
- Rebuild frontend after changing `.env.production`

### Issue: CORS error in browser console

**Cause:** Backend doesn't allow your frontend domain

**Fix:** Update `server/index.js`:
```javascript
app.use(cors({
  origin: 'https://webmediadesign.ro',
  credentials: true
}));
```

### Issue: "SMTP configuration error" in backend logs

**Cause:** Environment variables not set or wrong password

**Fix:**
- Verify all environment variables are set on Railway
- Double-check `SMTP_PASS=Webmediadesign01!`
- Make sure `contact@webmediadesign.ro` is a valid Zoho Mail account

### Issue: Email not received

**Check:**
1. Backend logs show "Form submission email sent successfully"
2. Spam folder in `contact@webmediadesign.ro`
3. Zoho account is active and can receive emails
4. Try sending a test email to verify Zoho account works

## 📋 Current Status

- ✅ Frontend deployed on Hostinger (webmediadesign.ro)
- ❌ Backend NOT deployed
- ❌ Environment variables NOT configured
- ❌ Emails NOT sending

## ✅ After Following This Guide

- ✅ Frontend on Hostinger
- ✅ Backend on Railway (or your choice)
- ✅ Environment variables configured
- ✅ Emails sending to contact@webmediadesign.ro

## 🆘 Need Help?

Common deployment platforms for Node.js backend:
- **Railway** - https://railway.app (Free 500 hours/month)
- **Render** - https://render.com (Free tier available)
- **Fly.io** - https://fly.io (Free tier available)
- **Vercel** - https://vercel.com (Serverless functions)
- **Heroku** - https://heroku.com (Paid, $7/month)

Choose Railway for easiest setup with your current code.
