import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter for Zoho Mail
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.eu',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true' || true, // true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Helper function to format project type
const formatProjectType = (type) => {
  const types = {
    'web-design': 'Design Web',
    'ecommerce': 'E-Commerce',
    'seo': 'SEO',
    'marketing': 'Marketing Digital',
    'email-marketing': 'E-mail Marketing',
    'branding': 'Branding',
    'ai-automation': 'Automatizare AI',
    'comprehensive': 'Pachet Complet',
  };
  return types[type] || type;
};

// Helper function to format timeline
const formatTimeline = (timeline) => {
  const timelines = {
    'asap': 'Cât mai curând (1 săptămână)',
    '1-3': '1-3 săptămâni',
    '3-6': '3-6 săptămâni',
    '6+': '6+ săptămâni',
  };
  return timelines[timeline] || timeline;
};

// Helper function to sanitize input
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>]/g, '');
};

// Helper function to load and populate email template
const getEmailTemplate = (data) => {
  try {
    const templatePath = path.join(__dirname, 'email-templates', 'application-confirmation.html');
    let template = fs.readFileSync(templatePath, 'utf-8');

    // Replace placeholders with actual data
    template = template.replace(/{{name}}/g, data.name);
    template = template.replace(/{{company}}/g, data.company);
    template = template.replace(/{{projectType}}/g, formatProjectType(data.projectType));
    template = template.replace(/{{budget}}/g, Number(data.budget).toLocaleString('ro-RO'));
    template = template.replace(/{{timeline}}/g, formatTimeline(data.timeline));

    return template;
  } catch (error) {
    console.error('Error loading email template:', error);
    return null;
  }
};

// API endpoint for form submission
app.post('/api/submit-application', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      website,
      budget,
      projectType,
      timeline,
      description,
    } = req.body;

    // Basic validation
    if (!name || !email || !phone || !company || !budget || !projectType || !timeline || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate budget is a number
    if (isNaN(Number(budget)) || Number(budget) <= 0) {
      return res.status(400).json({ error: 'Invalid budget value' });
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: sanitizeInput(company),
      website: sanitizeInput(website),
      budget: sanitizeInput(budget),
      projectType: sanitizeInput(projectType),
      timeline: sanitizeInput(timeline),
      description: sanitizeInput(description),
    };

    // Format budget with thousands separator and EUR symbol
    const formattedBudget = `${Number(sanitizedData.budget).toLocaleString('ro-RO')} €`;

    // Create email content
    const emailContent = `Ai primit o cerere nouă de colaborare:

Nume:        ${sanitizedData.name}
Email:       ${sanitizedData.email}
Telefon:     ${sanitizedData.phone}
Companie:    ${sanitizedData.company}
Website:     ${sanitizedData.website}
Buget:       ${formattedBudget}
Tip Proiect: ${formatProjectType(sanitizedData.projectType)}
Cronologie:  ${formatTimeline(sanitizedData.timeline)}

Mesaj:
${sanitizedData.description}

--
Formular Aplica Acum
Web Media Design
contact@webmediadesign.ro`;

    // Email options for internal notification
    const internalMailOptions = {
      from: process.env.SMTP_FROM || 'Web Media Design <contact@webmediadesign.ro>',
      to: 'contact@webmediadesign.ro',
      subject: 'Nouă cerere de colaborare — Web Media Design',
      text: emailContent,
      replyTo: sanitizedData.email,
    };

    // Send internal notification email
    await transporter.sendMail(internalMailOptions);
    console.log('Internal notification email sent successfully');

    // Send confirmation email to user
    const htmlTemplate = getEmailTemplate(sanitizedData);

    if (htmlTemplate) {
      const confirmationMailOptions = {
        from: process.env.SMTP_FROM || 'Web Media Design <contact@webmediadesign.ro>',
        to: sanitizedData.email,
        subject: 'Aplicația ta a fost primită — Web Media Design',
        html: htmlTemplate,
        // Fallback text version
        text: `Bună ${sanitizedData.name},

Mulțumim pentru interesul tău de a colabora cu Web Media Design. Am primit cu succes aplicația ta și suntem entuziasmați să aflăm mai multe despre proiectul tău!

CE URMEAZĂ?

1. Revizuire Aplicație
   Echipa noastră analizează detaliile și cerințele proiectului tău

2. Apel Descoperire
   Vom programa o sesiune de strategie pentru a discuta viziunea ta

3. Propunere Personalizată
   Primești o strategie adaptată și un plan detaliat al proiectului

📅 Te vom contacta în 24–48 de ore

DETALII APLICAȚIE:
Companie: ${sanitizedData.company}
Tip proiect: ${formatProjectType(sanitizedData.projectType)}
Buget: ${formattedBudget}
Cronologie: ${formatTimeline(sanitizedData.timeline)}

Ai întrebări? Ne poți contacta la contact@webmediadesign.ro

© 2025 Web Media Design. Toate drepturile rezervate.
Excelență Digitală Premium`,
      };

      try {
        await transporter.sendMail(confirmationMailOptions);
        console.log('Confirmation email sent to user successfully');
      } catch (confirmationError) {
        console.error('Error sending confirmation email to user:', confirmationError);
        // Don't fail the request if confirmation email fails
      }
    }

    res.status(200).json({ success: true, message: 'Application submitted successfully' });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
