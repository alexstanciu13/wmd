# Application Form Setup Guide

This guide explains how to set up and run the application form with email functionality.

## Overview

The application form has been updated with the following features:

✅ Budget slider replaced with free-text numeric input
✅ Phone field added as required field
✅ Email submission to contact@webmediadesign.ro
✅ Honeypot spam protection
✅ Full form validation with inline error messages
✅ Loading states and user-friendly confirmation messages
✅ Responsive layout maintained

## Quick Start

### 1. Install Server Dependencies

```bash
cd server
npm install
```

### 2. Configure Email Settings

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=contact@webmediadesign.ro
PORT=3001
```

### 3. Set Up Gmail App Password (if using Gmail)

1. Go to https://myaccount.google.com/security
2. Enable 2-Factor Authentication
3. Go to https://myaccount.google.com/apppasswords
4. Generate a new App Password for "Mail"
5. Copy the 16-character password (without spaces)
6. Use this as your `SMTP_PASS` in the `.env` file

### 4. Run Both Client and Server

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```

**Terminal 2 - Backend (Express):**
```bash
cd server
npm run dev
```

The frontend will run on http://localhost:3000
The backend will run on http://localhost:3001

## Form Changes

### 1. Budget Field (BEFORE vs AFTER)

**BEFORE:**
- Dropdown select with predefined ranges ($50k-$100k, etc.)

**AFTER:**
- Free-text numeric input
- Label: "Buget Estimat"
- Placeholder: "Ex: 5000"
- EUR symbol (€) displayed on the right
- Thousands separator formatting (e.g., "5,000")
- Required field with validation

### 2. Phone Field (NEW)

- Label: "Telefon *"
- Type: tel
- Placeholder: "+40 712 345 678"
- Required field with validation
- Placed next to Company field

### 3. Form Validation

All fields now have inline validation:
- Red error messages appear below invalid fields
- Errors clear when user starts typing
- Form validates before submission
- User-friendly Romanian error messages

### 4. Security Features

**Honeypot Field:**
- Hidden field that bots typically fill out
- Silently rejects submissions if filled
- Position: absolute, left: -9999px

**Backend Validation:**
- Email format validation
- Numeric budget validation
- Input sanitization (removes < and > characters)
- Required field checks on server

## Email Template

When a user submits the form, an email is sent to `contact@webmediadesign.ro`:

```
Subject: Nouă cerere de colaborare — Web Media Design

Ai primit o cerere nouă de colaborare:

Nume:        Ion Popescu
Email:       ion@companie.ro
Telefon:     +40 712 345 678
Companie:    Compania SRL
Website:     https://exemplu.ro
Buget:       5,000 €
Tip Proiect: Design Web
Cronologie:  1-3 luni

Mesaj:
Descrierea proiectului...

--
Formular Aplica Acum
Web Media Design
contact@webmediadesign.ro
```

## User Experience Flow

1. **User fills out form** → All fields validated in real-time
2. **User clicks "Trimite Aplicația"** → Button shows "Se Trimite Aplicația..." (disabled)
3. **Form validates** → If errors, shows toast "Eroare Validare"
4. **Honeypot checked** → Spam silently rejected
5. **API request sent** → POST to `/api/submit-application`
6. **Email sent** → Nodemailer sends email via SMTP
7. **Success** → Green toast: "Mulțumim! Cererea ta a fost trimisă cu succes."
8. **Form resets** → All fields cleared, ready for next submission

## Error Handling

### Frontend Errors

- **Validation errors**: Red text below field
- **Network errors**: Toast message with retry instructions
- **Console logging**: All errors logged for debugging

### Backend Errors

- **Missing fields**: 400 Bad Request
- **Invalid email**: 400 Bad Request
- **Invalid budget**: 400 Bad Request
- **SMTP errors**: 500 Internal Server Error
- **All errors logged**: Check server console

## Testing the Form

### 1. Test Form Validation

Try submitting the form with:
- Empty fields → Should show "obligatoriu" errors
- Invalid email (e.g., "test@") → Should show "Email invalid"
- Negative budget → Should show "număr pozitiv" error
- Very long budget (e.g., 999999999) → Should format with commas

### 2. Test Honeypot

Open browser DevTools → Console, then:
```javascript
document.querySelector('input[name="_honeypot"]').value = 'spam';
```
Submit form → Should silently fail (check console for "Spam detected")

### 3. Test Email Submission

1. Fill out form completely with valid data
2. Check server console for "Form submission email sent successfully"
3. Check contact@webmediadesign.ro inbox for email
4. Verify email content matches template

### 4. Test Loading States

1. Submit form
2. Button should show "Se Trimite Aplicația..." and be disabled
3. After response, button should re-enable with normal text

## Alternative SMTP Providers

If you don't want to use Gmail, here are alternatives:

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

### Zoho Mail
```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=contact@webmediadesign.ro
SMTP_PASS=your-zoho-password
```

### Outlook/Microsoft 365
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

## Production Deployment

### Environment Variables

Set these on your hosting platform:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=contact@webmediadesign.ro
PORT=3001
```

### Deploy Backend

Options:
- **Heroku**: `git push heroku main`
- **Railway**: Connect GitHub repo
- **DigitalOcean App Platform**: Connect GitHub repo
- **VPS**: Run with PM2 or systemd

### Update Frontend API URL

In production, update the fetch URL in `ApplicationForm.tsx`:

```typescript
const API_URL = import.meta.env.VITE_API_URL || '/api';

const response = await fetch(`${API_URL}/submit-application`, {
  // ...
});
```

Add to your `.env.production`:
```
VITE_API_URL=https://your-backend-domain.com/api
```

## Troubleshooting

### "Failed to submit application" error

1. Check if server is running: `http://localhost:3001/api/health`
2. Check browser console for detailed error
3. Check server console for error logs
4. Verify SMTP credentials in server/.env

### Emails not being sent

1. Check server console for "SMTP configuration error"
2. Verify SMTP credentials are correct
3. For Gmail, ensure you're using an App Password
4. Check spam folder in recipient inbox
5. Try sending test email from server console

### "Invalid email format" on valid email

- Check for extra spaces in email field
- Verify email regex in both frontend and backend
- Check browser console for validation errors

## File Changes Summary

### Modified Files

1. **src/components/ApplicationForm.tsx** (368 lines)
   - Added phone field
   - Replaced budget dropdown with numeric input
   - Added honeypot field
   - Implemented full validation
   - Added API integration
   - Enhanced error handling

2. **vite.config.ts**
   - Added proxy configuration for /api routes

### New Files

1. **server/index.js** - Express server with email handling
2. **server/package.json** - Server dependencies
3. **server/.env.example** - Environment variable template
4. **server/README.md** - Server documentation
5. **FORM_SETUP.md** - This setup guide

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review server console logs
3. Check browser DevTools console
4. Verify all dependencies are installed
5. Ensure both client and server are running

For SMTP-specific issues, consult your email provider's documentation.
