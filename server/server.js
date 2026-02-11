const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB if URI is provided
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));
}

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error.message);
    console.log('⚠️  Please configure EMAIL_USER and EMAIL_PASS in .env file');
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Save to database if MongoDB is connected
    if (mongoose.connection.readyState === 1) {
      const newMessage = new Message({ name, email, subject, message });
      await newMessage.save();
    }

    const mailToOwner = {
      from: `"Portfolio System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `[NEW_MESSAGE]: ${subject} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Transmission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #020408; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; color: #e2e8f0;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #0a0f18; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden; max-width: 100%;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: #0f172a; padding: 40px 20px; text-align: center; border-bottom: 1px solid #1e293b;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Incoming <span style="color: #22d3ee;">Message</span></h1>
                      <div style="margin-top: 10px; display: inline-block; padding: 5px 15px; background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 20px;">
                        <span style="color: #22d3ee; font-size: 12px; font-weight: 500; letter-spacing: 0.5px;">NEW INQUIRY RECEIVED</span>
                      </div>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 40px 20px;">
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
                        <strong>System Alert:</strong> A new contact form submission has been intercepted from your portfolio interface.
                      </p>
                      
                       <!-- Details Block -->
                      <div style="background-color: #1e293b; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="padding-bottom: 10px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Sender Name</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 20px; color: #ffffff; font-weight: 600; font-size: 16px;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 10px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Sender Email</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom: 20px; color: #22d3ee; font-weight: 600; font-size: 16px;">
                                    <a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                             <tr>
                                <td style="padding-bottom: 10px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                            </tr>
                            <tr>
                                <td style="color: #ffffff; font-weight: 600; font-size: 16px;">${subject}</td>
                            </tr>
                        </table>
                      </div>

                      <div style="background-color: #1e293b; border-left: 2px solid #22d3ee; padding: 20px; margin: 0 0 30px;">
                        <p style="color: #cbd5e1; font-style: italic; margin: 0; font-size: 14px;">
                          "${message}"
                        </p>
                      </div>

                      <!-- Action Buttons -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="padding-bottom: 30px;">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #22d3ee; color: #020408; padding: 14px 30px; border-radius: 2px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease;">
                              Reply Now
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #020408; padding: 30px; text-align: center; border-top: 1px solid #1e293b;">
                      
                      <h4 style="color: #f1f5f9; margin: 0 0 5px; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Shahid Hussain</h4>
                      <p style="color: #22d3ee; margin: 0 0 20px; font-size: 12px; font-family: monospace;">MERN || FULL STACK DEVELOPER</p>
                      
                      <div style="margin-bottom: 20px;">
                        <a href="mailto:janashahid999@gmail.com" style="color: #94a3b8; text-decoration: none; font-size: 13px; margin: 0 10px; transition: color 0.2s;">janashahid999@gmail.com</a>
                        <span style="color: #334155;">|</span>
                        <a href="tel:+923339571763" style="color: #94a3b8; text-decoration: none; font-size: 13px; margin: 0 10px; transition: color 0.2s;">+92 (333) 9571-763</a>
                      </div>
                      
                      <p style="color: #475569; font-size: 10px; margin: 0; font-family: monospace;">
                        SYSTEM_ID: ${new Date().getFullYear()} || SHAHID_HUSSAIN || ALL_RIGHTS_RESERVED
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    const mailToSender = {
      from: `"Shahid Hussain" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Connection Established | Shahid Hussain',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Connection Established</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #020408; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; color: #e2e8f0;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #0a0f18; border: 1px solid #1e293b; border-radius: 8px; overflow: hidden; max-width: 100%;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: #0f172a; padding: 40px 20px; text-align: center; border-bottom: 1px solid #1e293b;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">Hello, <span style="color: #22d3ee;">${name.split(' ')[0]}</span></h1>
                      <div style="margin-top: 10px; display: inline-block; padding: 5px 15px; background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 20px;">
                        <span style="color: #22d3ee; font-size: 12px; font-weight: 500; letter-spacing: 0.5px;">MESSAGE RECEIVED SUCCESSFULLY</span>
                      </div>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 40px 20px;">
                      <p style="color: #94a3b8; font-size: 16px; line-height: 1.8; margin-bottom: 25px;">
                        Thank you for initiating contact. I have successfully received your transmission regarding <strong style="color: #f1f5f9;">"${subject}"</strong>.
                      </p>
                      
                      <div style="background-color: #1e293b; border-left: 2px solid #22d3ee; padding: 20px; margin: 0 0 30px;">
                        <p style="color: #cbd5e1; font-style: italic; margin: 0; font-size: 14px;">
                          "${message.length > 150 ? message.substring(0, 150) + '...' : message}"
                        </p>
                      </div>

                      <p style="color: #94a3b8; font-size: 15px; line-height: 1.8; margin-bottom: 30px;">
                        I am currently reviewing your inquiry and will establish a return link shortly. In the meantime, you can inspect my source code and other projects.
                      </p>

                      <!-- Action Buttons -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="padding-bottom: 30px;">
                            <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}" style="display: inline-block; background-color: #22d3ee; color: #020408; padding: 14px 30px; border-radius: 2px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease;">
                              Return to Portfolio
                            </a>
                            <a href="https://github.com/shahidjana" style="display: inline-block; background-color: transparent; color: #f1f5f9; padding: 14px 30px; border: 1px solid #334155; border-radius: 2px; text-decoration: none; font-weight: 600; font-size: 14px; margin-left: 15px; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease;">
                              Access GitHub
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #020408; padding: 30px; text-align: center; border-top: 1px solid #1e293b;">
                      
                      <h4 style="color: #f1f5f9; margin: 0 0 5px; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Shahid Hussain</h4>
                      <p style="color: #22d3ee; margin: 0 0 20px; font-size: 12px; font-family: monospace;">MERN || FULL STACK DEVELOPER</p>
                      
                      <div style="margin-bottom: 20px;">
                        <a href="mailto:janashahid999@gmail.com" style="color: #94a3b8; text-decoration: none; font-size: 13px; margin: 0 10px; transition: color 0.2s;">janashahid999@gmail.com</a>
                        <span style="color: #334155;">|</span>
                        <a href="tel:+923339571763" style="color: #94a3b8; text-decoration: none; font-size: 13px; margin: 0 10px; transition: color 0.2s;">+92 (333) 9571-763</a>
                      </div>
                      
                      <p style="color: #475569; font-size: 10px; margin: 0; font-family: monospace;">
                        SYSTEM_ID: ${new Date().getFullYear()} || SHAHID_HUSSAIN || ALL_RIGHTS_RESERVED
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToSender);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
  console.log(`🌐 CORS enabled for: ${process.env.CLIENT_URL}`);
  console.log(`\n✨ Portfolio API endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`   POST http://localhost:${PORT}/api/contact\n`);
});

module.exports = app;
