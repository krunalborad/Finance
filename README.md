# 💰 Finance Dashboard Backend API

A backend API for managing financial records and providing dashboard analytics with secure authentication and role-based access control.

## 🚀 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- SQLite
- JWT Authentication

## ✨ Features

- 🔐 User Authentication (Register/Login)
- 👥 Role-Based Access Control (Admin, Analyst, Viewer)
- 📊 Financial Record CRUD Operations
- 📈 Dashboard Analytics
- 🔍 Record Filtering
- 🛡️ Secure Protected Routes (JWT)

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone <your-repo-link>
cd finance-dashboard-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secret_key"
PORT=5000
```

### 4. Run Database Migration
```bash
npx prisma migrate dev
```

### 5. Start Server
```bash
node server.js
```

Server will run at:
```
http://localhost:5000
```

## 🔑 Authentication

All protected routes require a **Bearer Token**

Example:
```
Authorization: Bearer <your_token>
```

## 📡 API Endpoints

### 🔐 Auth

| Method | Endpoint        | Description        |
|--------|---------------|--------------------|
| POST   | /auth/register | Register user      |
| POST   | /auth/login    | Login user         |

### 💳 Records

| Method | Endpoint         | Description              |
|--------|----------------|--------------------------|
| POST   | /records        | Create record            |
| GET    | /records        | Get all records          |
| PUT    | /records/:id    | Update record            |
| DELETE | /records/:id    | Delete record            |

### 📊 Dashboard

| Method | Endpoint                 | Description                         |
|--------|--------------------------|-------------------------------------|
| GET    | /dashboard/summary       | Income, expense, balance            |
| GET    | /dashboard/categories    | Category-wise breakdown             |
| GET    | /dashboard/recent        | Last 5 transactions                 |

## 👥 Roles & Permissions

### 🛠 Admin
- Manage users
- Full CRUD access to records

### 📊 Analyst
- View records
- Access dashboard analytics

### 👁 Viewer
- View dashboard only

## 📘 API Documentation

👉 Postman Docs:  
https://documenter.getpostman.com/view/53751102/2sBXiqEUAx

## 🎯 Future Improvements

- Pagination for records
- Advanced filtering (date range, category)
- Graph-based analytics
- Frontend integration (React)
