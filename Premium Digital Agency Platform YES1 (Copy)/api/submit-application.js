import nodemailer from 'nodemailer';

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

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Create email transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.eu',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === 'true' || true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || 'Web Media Design <contact@webmediadesign.ro>',
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
}
