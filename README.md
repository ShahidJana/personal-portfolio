# 🚀 Shahid Hussain - Portfolio Website

A modern, fully responsive portfolio website built with the MERN stack, featuring smooth animations, dark/light theme toggle, and a functional contact form with email integration.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Latest-green)

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX** with gradient accents and glassmorphism effects
- **Dark/Light Theme** toggle with smooth transitions
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** design for all devices
- **Interactive Elements** with hover effects and micro-animations

### 🛠️ Technical Features
- **Context API** for global state management
- **Nodemailer Integration** for contact form emails
- **RESTful API** with Express.js
- **Form Validation** with real-time feedback
- **SEO Optimized** with meta tags
- **Production Ready** with environment configurations

### 📧 Contact Form
- Send messages directly from the portfolio
- Automatic email confirmation to sender
- Beautiful HTML email templates
- Error handling and loading states

## 🏗️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

```
Shahid-Portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── context/       # Context API
│   │   │   └── PortfolioContext.jsx
│   │   ├── utils/         # Utility functions
│   │   │   ├── api.js
│   │   │   └── animations.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── server.js          # Express server
    ├── .env
    ├── .env.example
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shahidjana/portfolio.git
   cd Shahid-Portfolio
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Configuration

#### Backend (.env)
Create a `.env` file in the `server` directory:

```env
PORT=5000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
CLIENT_URL=http://localhost:5173
```

**Setting up Gmail App Password:**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `EMAIL_PASS`

#### Frontend (.env)
The `.env` file in the `client` directory is already configured:

```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

#### Development Mode

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   ```
   Client will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173`

#### Production Mode

1. **Build the Frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start the Backend**
   ```bash
   cd server
   npm start
   ```

## 📧 Email Configuration

The contact form uses **Nodemailer** with Gmail SMTP. When a user submits the form:

1. **Email to Portfolio Owner** - You receive the message with sender details
2. **Auto-reply to Sender** - Sender receives a confirmation email

Both emails use beautiful HTML templates with gradient styling.

### Testing Email Functionality

1. Ensure your `.env` file has correct Gmail credentials
2. Start both frontend and backend servers
3. Navigate to the Contact section
4. Fill out and submit the form
5. Check both email inboxes

## 🎨 Customization

### Updating Portfolio Data

Edit `client/src/context/PortfolioContext.jsx` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education

### Changing Theme Colors

Edit CSS variables in `client/src/index.css`:

```css
:root {
  --accent-primary: #667eea;
  --accent-secondary: #764ba2;
  /* ... more variables */
}
```

### Adding New Sections

1. Create a new component in `client/src/pages/`
2. Import and add it to `App.jsx`
3. Add navigation link in `Navbar.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🔒 Security

- Environment variables for sensitive data
- CORS configuration
- Input validation on contact form
- Rate limiting ready (can be added)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update `VITE_API_URL` to your backend URL

### Backend (Render/Railway/Heroku)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shahid Hussain**
- Email: janashahid999@gmail.com
- GitHub: [@shahidjana](https://github.com/shahidjana)
- Location: Rawalpindi, Pakistan

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from React Icons
- Animations from Framer Motion
- Fonts from Google Fonts

## 📞 Support

For support or questions, please email janashahid999@gmail.com or open an issue on GitHub.

---

**Made with ❤️ using React & Node.js**
