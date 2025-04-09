# 📚 Bookstore RESTful API

This is a **Node.js + Express + PostgreSQL** RESTful API for a Bookstore application with full **user authentication (JWT)** and **CRUD operations for books**. Built with **Prisma ORM** for seamless database access and management.

---

## 🚀 Features

- ✅ User Signup & Login (JWT-based Auth)
- 🔐 Protected Routes for managing books
- 📚 CRUD for Books (Create, Read, Update, Delete)
- 🔍 Filtering by category, author, and rating
- 🔎 Search books by title (partial match)
- 📄 Input Validation & Error Handling
- 📦 Modular File Structure

---

## 📁 Project Structure

```bash
bookstore-api/
├── prisma/                # Prisma schema & migrations
│   └── schema.prisma
├── public/               # Static assets (optional)
├── src/
│   ├── controllers/      # Route handlers
│   ├── middleware/       # Auth & error handling
│   ├── routes/           # Express routers
│   ├── utils/            # Helper functions
│   ├── prisma/           # Prisma client instance
│   └── server.js         # App entry point
├── .env                  # Environment variables
├── package.json
├── README.md
└── screenshots/          # Screenshots of API in action
    ├── signup.png
    ├── login.png
    ├── addbook.png
    └── getbook.png
```

---

## 🧪 How to Run the Project

### ✅ Prerequisites
- Node.js installed
- PostgreSQL installed & running locally
- pgAdmin (optional, for GUI)

### ⚙️ Setup Steps

1. **Clone this repo:**
```bash
git clone https://github.com/your-username/bookstore-api.git
cd bookstore-api
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure `.env` file:**
```
DATABASE_URL="postgresql://postgres:sarad123@localhost:5432/bookstore?schema=public"
JWT_SECRET="supersecretkey123"
PORT=3000
```

4. **Setup database with Prisma:**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. **Start the server:**
```bash
npm run dev
```

Server runs on: `http://localhost:3000`

---

## 🧪 API Testing with Postman

All routes are available under `/api`

### 🔐 Auth Routes
| Method | Endpoint              | Description |
|--------|------------------------|-------------|
| POST   | `/api/auth/signup`     | Register a user |
| POST   | `/api/auth/login`      | Login a user |

### 📘 Book Routes (Require JWT)
| Method | Endpoint           | Description |
|--------|--------------------|-------------|
| POST   | `/api/books`       | Add a new book |
| GET    | `/api/books`       | Get all books |
| GET    | `/api/books/:id`   | Get book by ID |
| PUT    | `/api/books/:id`   | Update book by ID |
| DELETE | `/api/books/:id`   | Delete book by ID |

> 🔑 Add `Authorization: Bearer <token>` in headers to access book routes.

---

## 📸 Screenshots

### 📝 Signup
![Signup](./screenshots/signup.png)

### 🔐 Login
![Login](./screenshots/login.png)

### ➕ Add Book
![Add Book](./screenshots/addbook.png)

### 📚 Get All Books
![Get Book](./screenshots/getbook.png)

---

## 🙌 Author
**Your Name**  
[GitHub](https://github.com/your-username)

---

## 🧠 Future Scope (Bonus Features)
- Pagination for `/books`
- Sorting by price or rating
- Swagger Documentation
- Docker support
- Tests (Jest or Supertest)

---

## 📜 License
MIT License