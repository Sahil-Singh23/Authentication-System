# Authentication System

A modern, full-stack authentication system built with Express.js and vanilla JavaScript, featuring JWT-based authentication, minimalist UI design, and secure user management.

## 🚀 Live Demo

- **Live Link**: [Live Application](https://authentication-system-oowr.onrender.com/)
- **GitHub**: [Source Code](https://github.com/Sahil-Singh23/Authentication-System)

## ✨ Features

- **🔐 JWT Authentication**: Secure token-based authentication with 30-day expiration
- **👤 User Management**: Complete signup and signin functionality
- **🛡️ Protected Routes**: Middleware-based route protection
- **📱 Responsive Design**: Mobile-first, minimalist UI with modern aesthetics
- **🎨 Clean Interface**: Black and white design with Inter font and smooth animations
- **⚡ Real-time Validation**: Client-side error handling and feedback
- **🌐 Production Ready**: Deployed on Render with environment configuration

## 🛠️ Tech Stack

### Backend

- **Express.js 5.1.0** - Web framework
- **jsonwebtoken 9.0.2** - JWT implementation
- **dotenv 1.0.0** - Environment variable management
- **path** - Static file serving

### Frontend

- **Vanilla JavaScript** - Client-side logic
- **Axios** - HTTP requests
- **HTML5/CSS3** - Structure and styling
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography

## 📁 Project Structure

```
auth-class/
├── index.js                 # Express server & auth logic
├── package.json             # Dependencies & scripts
├── .env                     # Environment variables
└── public/
    ├── index.js             # Frontend auth functions
    ├── signin.html          # Sign in page
    ├── signup.html          # Sign up page
    ├── dash.html            # Protected dashboard
    └── styles.css           # Global styles
```

## 🚦 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sahil-Singh23/Authentication-System.git
   cd auth-class
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   echo "JWT_SECRET=your-secret-key" > .env
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Open browser** - Navigate to `http://localhost:3000`

## 🔧 API Endpoints

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| `POST` | `/signup` | Create new user   |
| `POST` | `/signin` | Authenticate user |
| `GET`  | `/me`     | Get user info     |

## 📝 How it Works

1. User creates account via signup page
2. Server generates JWT token on signin
3. Token stored in localStorage
4. Protected routes validate token
5. Dashboard displays user information

---

**Built with ❤️ by Sahil Singh**
