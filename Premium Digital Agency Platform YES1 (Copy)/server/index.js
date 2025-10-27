import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
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
    'marketing': 'Marketing Digital',
    'branding': 'Branding',
    'ai-automation': 'Automatizare AI',
    'comprehensive': 'Pachet Complet',
  };
  return types[type] || type;
};

// Helper function to format timeline
const formatTimeline = (timeline) => {
  const timelines = {
    'asap': 'Cât mai curând (În 1 lună)',
    '1-3': '1-3 luni',
    '3-6': '3-6 luni',
    '6+': '6+ luni',
  };
  return timelines[timeline] || timeline;
};

// Helper function to sanitize input
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>]/g, '');
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

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || 'contact@webmediadesign.ro',
      to: 'contact@webmediadesign.ro',
      subject: 'Nouă cerere de colaborare — Web Media Design',
      text: emailContent,
      replyTo: sanitizedData.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Form submission email sent successfully');
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
