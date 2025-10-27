# WMD Backend Server

Backend server for handling form submissions from the Web Media Design website.

## Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=contact@webmediadesign.ro
PORT=3001
```

### 3. Gmail Configuration (if using Gmail)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated password and use it as `SMTP_PASS`

### Alternative SMTP Providers

You can use any SMTP provider. Popular options:

- **Gmail**: smtp.gmail.com:587 (requires App Password)
- **Outlook**: smtp-mail.outlook.com:587
- **SendGrid**: smtp.sendgrid.net:587
- **Mailgun**: smtp.mailgun.org:587
- **Zoho**: smtp.zoho.com:587

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### POST /api/submit-application

Handles form submissions and sends email to contact@webmediadesign.ro

**Request Body:**

```json
{
  "name": "Ion Popescu",
  "email": "ion@companie.ro",
  "phone": "+40 712 345 678",
  "company": "Compania SRL",
  "website": "https://exemplu.ro",
  "budget": "5000",
  "projectType": "web-design",
  "timeline": "1-3",
  "description": "Project description..."
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Application submitted successfully"
}
```

**Response (Error):**

```json
{
  "error": "Error message"
}
```

### GET /api/health

Health check endpoint

**Response:**

```json
{
  "status": "ok"
}
```

## Security Features

- CORS enabled for frontend
- Input sanitization to prevent XSS
- Email validation
- Honeypot field checked on frontend
- Rate limiting can be added for production

## Email Template

The email sent to contact@webmediadesign.ro follows this format:

```
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
Project description...

--
Formular Aplica Acum
Web Media Design
contact@webmediadesign.ro
```

## Troubleshooting

### "SMTP configuration error"

- Check your SMTP credentials in `.env`
- Verify that you're using an App Password (for Gmail)
- Ensure 2FA is enabled on your Gmail account

### "Connection timeout"

- Check if your firewall is blocking the SMTP port
- Verify the SMTP host and port are correct
- Some networks block port 587; try port 465 (set `secure: true`)

### "Invalid login"

- Double-check your SMTP_USER and SMTP_PASS
- For Gmail, make sure you're using an App Password, not your regular password
