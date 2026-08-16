# 💰 ExpenseFlow – Personal Expense Tracker

ExpenseFlow is a full-stack **MERN expense management application** that helps users track their income and expenses, manage budgets, and monitor their overall financial activity through an intuitive dashboard.

The application includes **JWT-based authentication**, RESTful APIs, MongoDB data storage, and a responsive React frontend.

## 🌐 Live Demo

**Frontend:** https://expenseflow-two-nu.vercel.app/

**Backend API:** https://expenseflow-6s85.onrender.com

**GitHub:** https://github.com/Jhanani22/expenseflow

---

## 📌 About the Project

Managing personal expenses manually can make it difficult to understand spending patterns and stay within a budget.

ExpenseFlow provides a centralized platform where users can securely create an account, record transactions, manage budgets, and view summarized financial information.

The application follows a full-stack architecture:

```text
React + Vite
     ↓
REST API
     ↓
Node.js + Express
     ↓
MongoDB Atlas
```

The frontend is deployed on **Vercel**, while the backend is deployed on **Render** and the database is hosted using **MongoDB Atlas**.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Protected API routes
* Automatic JWT token handling
* Logout functionality

### 💸 Transaction Management

* Add income and expense transactions
* View transaction history
* Delete transactions
* Categorize transactions
* User-specific transaction data

### 💰 Budget Management

* Create budgets
* View existing budgets
* Update budgets
* Delete budgets
* Track spending against budgets

### 📊 Dashboard

* View financial summary
* Track total income
* Track total expenses
* Monitor overall balance
* View transaction information

### 🛡️ Security

* Password hashing
* JWT authentication
* Protected backend routes
* Environment variables for sensitive credentials
* User-specific data access

### 📱 Responsive UI

* Responsive React interface
* Clean and intuitive dashboard
* Mobile-friendly layout
* Easy navigation

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **Vite**
* **JavaScript**
* **Axios**
* **Tailwind CSS**

### Backend

* **Node.js**
* **Express.js**
* **JavaScript**
* **JWT**
* **bcrypt**

### Database

* **MongoDB**
* **MongoDB Atlas**

### Deployment

* **Vercel** – Frontend
* **Render** – Backend
* **MongoDB Atlas** – Database

### Version Control

* **Git**
* **GitHub**

---

## 📂 Project Structure

```text
ExpenseFlow/
│
├── frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── ...
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   │
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

> The exact folder names may vary depending on the current project structure.

---

## 🔄 Application Flow

```text
                 User
                  │
                  ▼
        ┌──────────────────┐
        │ React Frontend   │
        │      Vite        │
        └────────┬─────────┘
                 │
                 │ Axios / REST API
                 ▼
        ┌──────────────────┐
        │ Express Backend  │
        │    Node.js       │
        └────────┬─────────┘
                 │
        ┌────────┴─────────┐
        │                  │
        ▼                  ▼
   JWT Authentication   API Routes
                            │
                            ▼
                    ┌──────────────┐
                    │ MongoDB Atlas│
                    └──────────────┘
```

---

## 🔑 Authentication Flow

ExpenseFlow uses **JWT (JSON Web Tokens)** for authentication.

```text
User
 │
 │ Login
 ▼
Express API
 │
 │ Validate credentials
 ▼
Generate JWT
 │
 ▼
React Frontend
 │
 │ Store token
 ▼
API Requests
 │
 │ Authorization: Bearer <token>
 ▼
Protected Backend Routes
```

The Axios interceptor automatically attaches the JWT token to authenticated requests.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB Atlas account
* Git

---

## 📥 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/expenseflow.git
```

Navigate into the project:

```bash
cd expenseflow
```

---

# 🖥️ Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

# ⚙️ Backend Setup

Open another terminal and navigate to:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm start
```

The backend will normally run at:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

The application uses environment variables to keep sensitive configuration outside the source code.

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend

The frontend API configuration should point to the backend API.

For local development:

```text
http://localhost:5000/api
```

For production:

```text
https://expenseflow-6s85.onrender.com/api
```

> Never commit `.env` files, database credentials, or JWT secrets to GitHub.

---

## 🌍 Deployment

ExpenseFlow is deployed using:

### Frontend

**Vercel**

The React/Vite frontend is deployed separately from the backend.

### Backend

**Render**

The Node.js/Express backend is deployed as a Web Service.

### Database

**MongoDB Atlas**

The application uses MongoDB Atlas for cloud database storage.

### Production Architecture

```text
        ┌─────────────────────┐
        │       Vercel        │
        │   React Frontend    │
        └──────────┬──────────┘
                   │
                   │ HTTPS API
                   ▼
        ┌─────────────────────┐
        │       Render        │
        │ Node + Express API  │
        └──────────┬──────────┘
                   │
                   │ MongoDB Driver
                   ▼
        ┌─────────────────────┐
        │   MongoDB Atlas     │
        │      Database       │
        └─────────────────────┘
```

---

## 📸 Screenshots

Add screenshots of the main application pages here.


## 🧠 Key Learning Outcomes

Through this project, I gained practical experience in:

* Building full-stack applications using the MERN stack
* Developing RESTful APIs with Express.js
* Creating reusable React components
* Implementing JWT-based authentication
* Hashing and securely handling passwords
* Working with MongoDB and MongoDB Atlas
* Using Axios for frontend-backend communication
* Managing environment variables
* Implementing protected API routes
* Connecting frontend applications with backend APIs
* Deploying React applications using Vercel
* Deploying Node.js applications using Render
* Using Git and GitHub for version control
* Debugging deployment, CORS, API, and authentication issues

---

## 🔮 Future Improvements

Possible future enhancements include:

* 📈 Expense analytics and visual charts
* 📊 Advanced financial reports
* 🔔 Budget limit notifications
* 📅 Monthly and yearly expense filtering
* 📥 Export transactions as CSV/PDF
* 🔍 Advanced transaction search and filtering
* 🌙 Dark mode
* 💳 Recurring transactions
* 📱 Progressive Web App support
* ☁️ Automated backups

---

## 👩‍💻 Author

**Jhanani**

Computer Science Engineering Student

---

⭐ If you found this project useful, consider giving the repository a star!
