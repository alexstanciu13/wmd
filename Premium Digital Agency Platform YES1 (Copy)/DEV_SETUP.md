# Local Development Setup Guide

This guide will help you run the Web Media Design website locally for development and testing.

## The Problem (Why You Saw a White Screen)

Previously, running `npm run dev` only started the **frontend** (Vite dev server on port 3000), but the application also requires a **backend server** (Express on port 3001) to handle API requests like form submissions.

Without the backend running, the Vite proxy couldn't forward API requests, which caused the white screen issue.

**UPDATE:** SMTP errors have been fixed! The server now runs without requiring email credentials for local development.

## The Solution

The project now includes:
1. ✅ Environment files for local development (`.env` files)
2. ✅ Automated script to run both frontend AND backend servers together
3. ✅ Server dependencies installed and ready

---

## Quick Start (New Method)

### First Time Setup

If you haven't already, run this once to install all dependencies:

```bash
npm run setup
```

This installs dependencies for both the frontend and backend server.

### Running the Development Server

Now you can start both servers with a single command:

```bash
npm run dev
```

This will:
- 🎨 Start the frontend (Vite) on `http://localhost:3000`
- ⚙️ Start the backend API server on `http://localhost:3001`
- 📊 Display color-coded logs from both servers

The website will automatically open in your browser at `http://localhost:3000`.

### Stopping the Servers

Press `Ctrl+C` in the terminal to stop both servers.

---

## Alternative Method (Manual)

If you prefer to run the servers separately:

### Terminal 1 - Frontend
```bash
npm run dev:frontend
```

### Terminal 2 - Backend
```bash
npm run dev:server
```

---

## Environment Configuration

### Frontend Environment (`.env`)

Located in the root directory. Already configured for local development:

```env
VITE_API_URL=/api
```

This tells the frontend to make API requests to `/api`, which Vite proxies to `http://localhost:3001`.

### Backend Environment (`server/.env`)

Located in the `server/` directory. Contains server configuration.

**Good news!** SMTP credentials are now **completely optional** for local development. The server will run without any errors even if you don't configure email.

**What happens without SMTP?**
- ✅ Server starts normally without errors
- ✅ Frontend works perfectly
- ✅ Form submissions are accepted by the API
- ℹ️  Emails are skipped (form data is logged to console instead)
- ✅ All other functionality works normally

**Want to test actual email sending?** You have three options:

1. **Mailtrap** (Recommended for testing) - Free service that catches emails
   - Sign up at https://mailtrap.io
   - Get free test credentials
   - Emails won't actually send but you can view them in Mailtrap

2. **Gmail** - Use your personal Gmail with App Password
   - Requires 2FA enabled
   - Generate App Password in Google Account settings
   - Good for testing real email delivery

3. **Production SMTP** (Not recommended for local dev)
   - Use your actual Zoho credentials
   - Be careful - emails will actually send!

To enable emails, edit `server/.env` and uncomment the SMTP section you want to use.

---

## NPM Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Run both frontend and backend together (recommended) |
| `npm run dev:frontend` | Run only the frontend (Vite dev server) |
| `npm run dev:server` | Run only the backend API server |
| `npm run build` | Build the frontend for production |
| `npm run server:install` | Install server dependencies only |
| `npm run setup` | Install all dependencies (frontend + backend) |

---

## Troubleshooting

### Port Already in Use

If you see an error like "Port 3000 is already in use":

```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use port 3001
lsof -ti:3001 | xargs kill -9
```

### Want to Enable Email Testing?

SMTP is optional for development! If you want to test email functionality:

1. Open `server/.env`
2. Uncomment one of the SMTP configuration options
3. Add your credentials
4. Restart the server with `npm run dev`

Recommended: Use [Mailtrap](https://mailtrap.io) for safe email testing without sending real emails.

### White Screen Still Appears

1. **Clear browser cache and cookies**
2. **Try hard refresh**: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. **Check browser console** for errors (F12 → Console tab)
4. **Verify both servers are running** - you should see logs from both "frontend" and "server"

### Dependencies Issues

If you run into dependency issues:

```bash
# Clean install everything
rm -rf node_modules server/node_modules package-lock.json server/package-lock.json
npm run setup
```

---

## Development Tips

### Hot Reload
The frontend supports hot module replacement (HMR). Changes to React components will update instantly without refreshing the page.

### Backend Changes
The backend uses `--watch` mode, so it will automatically restart when you modify `server/index.js` or other backend files.

### API Testing
You can test the backend API directly:

```bash
# Health check
curl http://localhost:3001/api/health

# Test form submission (requires backend to be running)
curl -X POST http://localhost:3001/api/submit-application \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"+40123456789","company":"Test Co","budget":"5000","projectType":"web-design","timeline":"1-3","description":"Test project"}'
```

---

## What Changed?

### Files Added/Modified:
- ✅ `.env` - Frontend environment variables for development
- ✅ `server/.env` - Backend environment variables for development
- ✅ `package.json` - Updated scripts to run both servers concurrently
- ✅ `DEV_SETUP.md` - This guide
- ✅ `concurrently` package installed for running multiple scripts

### Files NOT Changed:
- ❌ `.env.production` - Production environment (Hostinger) unchanged
- ❌ Source code - No application code was modified
- ❌ Vite config - Proxy configuration remains the same

---

## Production Deployment

This setup is for **local development only**. For production deployment to Hostinger:

```bash
npm run build
```

Then upload the `build/` directory contents to Hostinger as described in `HOSTINGER_DEPLOYMENT.md`.

---

## Need Help?

- **SMTP Setup**: See `server/README.md`
- **Hostinger Deployment**: See `HOSTINGER_DEPLOYMENT.md`
- **Email Issues**: See `DEBUGGING_EMAILS.md`

Happy coding! 🚀
