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

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/auth-class.git
   cd auth-class
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   echo "JWT_SECRET=your-super-secret-jwt-key-here" > .env
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 API Endpoints

### Authentication

| Method | Endpoint  | Description       | Body                     |
| ------ | --------- | ----------------- | ------------------------ |
| `POST` | `/signup` | Create new user   | `{ username, password }` |
| `POST` | `/signin` | Authenticate user | `{ username, password }` |
| `GET`  | `/me`     | Get user info     | Headers: `token: <jwt>`  |

### Example Requests

**Signup**

```javascript
POST /signup
Content-Type: application/json

{
  "username": "johndoe",
  "password": "securepassword123"
}
```

**Signin**

```javascript
POST /signin
Content-Type: application/json

{
  "username": "johndoe",
  "password": "securepassword123"
}
```

**Get User Info**

```javascript
GET /me
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🎨 UI Features

- **Modern Design**: Clean, minimalist interface with subtle shadows and rounded corners
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Error Handling**: User-friendly error messages and validation
- **Accessibility**: Proper focus states and semantic HTML

## 🔒 Security Features

- **JWT Tokens**: Secure, stateless authentication
- **Password Validation**: Client and server-side validation
- **Protected Routes**: Middleware prevents unauthorized access
- **Environment Variables**: Sensitive data stored securely
- **CORS Ready**: Configurable for production deployment

## 🚀 Deployment

### Render Deployment

1. **Connect GitHub repository** to Render
2. **Set environment variables** in Render dashboard:
   - `JWT_SECRET`: Your secure JWT secret key
3. **Deploy** - Render automatically builds and deploys

### Manual Deployment

1. **Build for production**

   ```bash
   npm install --production
   ```

2. **Set environment variables**

   ```bash
   export JWT_SECRET="your-production-jwt-secret"
   ```

3. **Start the server**
   ```bash
   npm start
   ```

## 🧪 Testing

### Manual Testing

1. **Visit signup page** (`/signup.html`)
2. **Create account** with username and password
3. **Sign in** with created credentials
4. **Access dashboard** to view user information
5. **Test protected routes** without token

### API Testing with curl

```bash
# Signup
curl -X POST http://localhost:3000/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass"}'

# Signin
curl -X POST http://localhost:3000/signin \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass"}'

# Get user info (replace TOKEN with actual JWT)
curl -X GET http://localhost:3000/me \
  -H "token: TOKEN"
```

## 📝 Development Notes

### Authentication Flow

1. User creates account via `/signup`
2. Server validates and stores user data
3. User signs in via `/signin`
4. Server generates JWT token
5. Client stores token in localStorage
6. Token sent with protected requests
7. Server validates token via middleware

### Data Storage

Currently uses in-memory storage (array). For production, consider:

- **MongoDB** with Mongoose
- **PostgreSQL** with Prisma
- **Redis** for session management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Inter Font** - Beautiful typography
- **Font Awesome** - Icon library
- **Express.js** - Web framework
- **jsonwebtoken** - JWT implementation

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/your-username/auth-class/issues) page
2. Create a new issue with detailed description
3. Contact: your-sahilhere13@gmail.com

---

**Built with ❤️ by Sahil Singh**
