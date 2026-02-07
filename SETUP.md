# 🚀 Quick Setup Guide

## Prerequisites Checklist
- [ ] Node.js installed (v16 or higher)
- [ ] npm installed
- [ ] Gmail account for email functionality
- [ ] Code editor (VS Code recommended)

## Step-by-Step Setup

### 1️⃣ Install Dependencies

Both frontend and backend dependencies are already installed! ✅

### 2️⃣ Configure Email (IMPORTANT!)

1. Open `server/.env` file
2. Update these values:
   ```env
   EMAIL_USER=janashahid999@gmail.com
   EMAIL_PASS=your-app-password-here
   ```

3. **Get Gmail App Password:**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled
   - Go to "App passwords" (search for it)
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password
   - Paste it in `EMAIL_PASS` (no spaces)

### 3️⃣ Start the Application

**Option A: Using the Startup Script (Recommended)**
```powershell
.\start-dev.ps1
```

**Option B: Manual Start**

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
cd client
npm run dev
```

### 4️⃣ Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 🎨 Customization

### Update Your Information

Edit `client/src/context/PortfolioContext.jsx`:

```javascript
const portfolioData = {
  personal: {
    name: 'Your Name',
    email: 'your-email@gmail.com',
    // ... update other fields
  },
  // ... update experience, projects, etc.
}
```

### Change Theme Colors

Edit `client/src/index.css`:

```css
:root {
  --accent-primary: #667eea;  /* Change this */
  --accent-secondary: #764ba2; /* And this */
}
```

## 🧪 Testing the Contact Form

1. Start both servers
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit and check:
   - Your email (janashahid999@gmail.com) for the message
   - Test email for auto-reply confirmation

## 🐛 Troubleshooting

### Email not sending?
- Check `EMAIL_USER` and `EMAIL_PASS` in `server/.env`
- Ensure 2-Step Verification is enabled on Gmail
- Use App Password, not your regular password
- Check server console for error messages

### Port already in use?
- Change `PORT` in `server/.env` to a different number
- Update `VITE_API_URL` in `client/.env` accordingly

### Dependencies issues?
```bash
# Reinstall dependencies
cd client && npm install
cd ../server && npm install
```

## 📦 Production Build

### Build Frontend
```bash
cd client
npm run build
```

The production files will be in `client/dist/`

### Deploy
- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Render, Railway, Heroku, or any Node.js hosting

## 🎯 Next Steps

1. ✅ Configure email credentials
2. ✅ Update portfolio data with your information
3. ✅ Test the contact form
4. ✅ Customize colors and styling
5. ✅ Add your projects and experience
6. ✅ Deploy to production

## 💡 Tips

- Use the dark/light theme toggle in the navbar
- All sections have smooth scroll animations
- The portfolio is fully responsive
- Contact form includes validation
- Auto-reply emails are sent to form submitters

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure both servers are running
4. Check the README.md for detailed documentation

---

**Happy Coding! 🚀**
