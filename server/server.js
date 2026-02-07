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

    // Email to portfolio owner
    const mailToOwner = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Email:</strong> <a href="mailto:${email}" style="color: #764ba2;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #667eea;">Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #f3f4f6; border-left: 4px solid #667eea; border-radius: 5px;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This email was sent from your portfolio contact form</p>
              <p>Received on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `
    };

    // Auto-reply to sender
    const mailToSender = {
      from: `"Shahid Hussain" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="margin: 25px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
              <p style="color: #333; margin: 0;"><strong>Your message:</strong></p>
              <p style="color: #555; margin: 10px 0 0 0; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              In the meantime, feel free to check out my 
              <a href="https://github.com/shahidjana" style="color: #667eea; text-decoration: none;">GitHub</a> 
              for more of my work.
            </p>
            
            <p style="color: #333; margin-top: 25px;">
              Best regards,<br>
              <strong style="color: #667eea;">Shahid Hussain</strong><br>
              <span style="color: #6b7280; font-size: 14px;">MERN | Full Stack Developer</span>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
                📧 janashahid999@gmail.com | 📱 +92 (333) 9571-763
              </p>
              <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
                📍 Rawalpindi, Pakistan
              </p>
            </div>
          </div>
        </div>
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
