# Finance Dashboard Backend

A RESTful API built with Node.js, Express, and SQLite for managing financial records with Role‑Based Access Control (RBAC).

---

## 🚀 Features

- **Authentication**: Secure login/signup using JWT and Bcrypt.
- **RBAC**:
  - `Admin`: Full CRUD access.
  - `Analyst`: Read + Dashboard access.
  - `Viewer`: Read‑only access.
- **Dashboard API**: Aggregated totals for Income, Expenses, and Net Balance.
- **Persistence**: SQLite database (`finance.db`) included for immediate testing.

---

## 📁 Project Structure

```text
src/
├── config/      # Database connection (SQLite)
├── controllers/ # Route logic (Auth, Records, Dashboard)
├── middleware/  # JWT & Role‑based guards
├── models/      # SQL queries (User, Record)
├── routes/      # Endpoint definitions
├── services/    # Business logic (Calculations)
└── server.js    # Entry point
```

---

## 🛠️ Setup

### 1. Clone & Install

```bash
git clone https://github.com/nonehxrry/finance-backend.git
cd finance-backend
npm install
```

### 2. Environment

Create a `.env` file in the project root:

```text
PORT=3000
JWT_SECRET=your_secret_key
```

### 3. Run

```bash
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint                    | Access        | Description                     |
|--------|-----------------------------|---------------|---------------------------------|
| POST   | `/api/auth/register`        | Public        | Create account                  |
| POST   | `/api/auth/login`           | Public        | Get JWT token                   |
| GET    | `/api/records`              | All Roles     | List entries                    |
| POST   | `/api/records`              | Admin         | Add new entry                   |
| GET    | `/api/dashboard/summary`    | Admin/Analyst | Get financial totals            |

---

## 📝 Assumptions & Decisions

- **Database**: SQLite was chosen for zero‑configuration setup during evaluation.
- **Dashboard**: Net balance is calculated as `Total Income - Total Expenses`.
- **Validation**: Strict input validation is applied to `amount` and `type` fields.