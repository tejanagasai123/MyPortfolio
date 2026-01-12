# Portfolio Website

A modern, responsive portfolio website built with React and Node.js to showcase skills, projects, and services. It features a clean design, smooth animations, and a functional contact form with email integration.

## 🚀 Tech Stack

### Frontend

- **React**: UI library for building the interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PostCSS**: Tool for transforming CSS with JavaScript.
- **React Toastify**: For displaying notifications (e.g., success/error messages).

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Nodemailer**: Module for sending emails.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Module to load environment variables.

### Deployment

- **Vercel**: Platform for hosting the frontend and backend.

## ✨ Features

- **Hero Section**: Engaging introduction with a welcome message.
- **About Me**: Detailed information about the developer.
- **Tech Stack**: Visual representation of technical skills and tools.
- **Services**: Overview of services offered.
- **Projects**: Showcase of past work with links and descriptions.
- **Contact Form**: Fully functional form that sends emails directly to the developer using Nodemailer.
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop).

## 🛠️ Setup Instructions

Follow these steps to run the project locally.

### Prerequisites

- Node.js installed on your machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Client Setup

Navigate to the client directory, install dependencies, and start the development server.

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the client:

```bash
npm run dev
```

The client will run at `http://localhost:5173`.

### 3. Server Setup

Navigate to the server directory, install dependencies, and start the server.

```bash
cd ../server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
FRONTEND_URL=http://localhost:5173
```

> **Note**: For `EMAIL_PASS`, use an [App Password](https://support.google.com/accounts/answer/185833) if using Gmail.

Start the server:

```bash
npm start
```

The server will run at `http://localhost:5000`.

## 🌍 Environment Variables

### Client (`client/.env`)

| Variable           | Description                                                                  |
| :----------------- | :--------------------------------------------------------------------------- |
| `VITE_BACKEND_URL` | URL of the backend server (e.g., `http://localhost:5000` or production URL). |

### Server (`server/.env`)

| Variable       | Description                                               |
| :------------- | :-------------------------------------------------------- |
| `PORT`         | Port for the server to run on (default: `5000`).          |
| `EMAIL_USER`   | Your email address for sending contact form messages.     |
| `EMAIL_PASS`   | Your email password or App Password.                      |
| `FRONTEND_URL` | URL of the frontend application (for CORS configuration). |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
