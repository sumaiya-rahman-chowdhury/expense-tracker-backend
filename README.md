
# Expense Tracker Backend

This is the **backend API** for the Expense Tracker application.
It provides authentication, user management, and expense tracking functionalities using **Node.js, Express, and MongoDB**.

## 🚀 Features

* User authentication with JWT
* Secure password hashing with bcrypt
* CRUD operations for expenses (Create, Read, Update, Delete)
* Category-based expense management
* MongoDB with Mongoose for database operations
* CORS enabled for frontend integration

## 🛠️ Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – Web framework
* **MongoDB + Mongoose** – Database & ODM
* **TypeScript** – Type safety
* **JWT** – Authentication
* **Bcrypt** – Password hashing
* **Cors** – Cross-origin support

## 📂 Project Structure

```
expense-tracker-backend/
│── src/
│   ├── controllers/   # Route handlers
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── middlewares/   # Auth middleware, error handling
│   ├── utils/         # Helper functions
│   ├── config/        # DB & environment setup
│   └── server.ts      # App entry point
│── package.json
│── tsconfig.json
│── .env.example
```

## ⚙️ Installation & Setup

1. Clone the repo

```bash
git clone https://github.com/sumaiya-rahman-chowdhury/expense-tracker-backend.git
cd expense-tracker-backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file (see `.env.example`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run in development mode

```bash
npm run dev
```

5. Build & run in production

```bash
npm run build
npm start
```

## 📡 API Endpoints

### Auth

* `POST /api/auth/register` – Register user
* `POST /api/auth/login` – Login user

### Expenses

* `GET /api/expenses` – Get all expenses (logged-in user)
* `POST /api/expenses` – Add new expense
* `PUT /api/expenses/:id` – Update expense
* `DELETE /api/expenses/:id` – Delete expense

## 🔗 Related

* **Frontend Repo:** [Expense Tracker Frontend](https://github.com/sumaiya-rahman-chowdhury/expense-tracker-frontend)
* **Live Demo:** [View Here](https://expense-tracker-frontend-hdh6pjfmw.vercel.app/)


