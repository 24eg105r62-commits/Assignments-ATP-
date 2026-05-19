# Blog App — Capstone Project

A full-stack blog platform with role-based access control, allowing users to read articles, authors to write and manage content, and admins to moderate the platform.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, React Router, Zustand |
| Backend | Node.js, Express 5 |
| Database | MongoDB (Mongoose ODM) |
| Auth | JWT via httpOnly cookies |
| File Storage | Cloudinary (profile images via Multer) |
| Deployment | Frontend → Vercel, Backend → Render |

---

## Features

### Roles
- **User** — Browse articles, add comments
- **Author** — Write, edit, and soft-delete their own articles
- **Admin** — Moderate all articles, block/unblock user accounts

### Core Functionality
- Registration with profile image upload (PNG/JPEG, max 2 MB)
- JWT authentication persisted across page refreshes via httpOnly cookies
- Role-based protected routes on both frontend and backend
- Full article CRUD (create, read, update, soft-delete)
- Nested comments embedded within articles
- Admin dashboard to manage users and articles

---

## Project Structure

```
blog-app/
├── blog-app-frontend/      # React + Vite SPA
│   ├── src/
│   │   ├── components/     # Pages and UI components
│   │   ├── store/          # Zustand auth store
│   │   └── App.jsx         # Route definitions
│   └── .env                # VITE_API_URL
│
├── blog-app-backend/       # Express REST API
│   ├── APIs/               # Route handlers
│   │   ├── CommonAPI.js    # Auth routes (register, login, logout)
│   │   ├── UserAPI.js      # User routes (read articles, comment)
│   │   ├── AuthorAPI.js    # Author routes (CRUD articles)
│   │   └── AdminAPI.js     # Admin routes (moderate users/articles)
│   ├── models/
│   │   ├── UserModel.js
│   │   └── ArticleModel.js
│   ├── middlewares/
│   │   └── verifyToken.js  # JWT validation + role check
│   └── .env                # DB_URL, SECRET_KEY, Cloudinary credentials
│
└── vercel.json             # SPA rewrite rules for Vercel
```

---

## Routes

| Path | Access | Description |
|---|---|---|
| `/` | Public | Home — browse all articles |
| `/register` | Public | Sign up (USER or AUTHOR) |
| `/login` | Public | Sign in |
| `/article/:id` | Public | Full article + comments |
| `/user-profile` | USER | User dashboard |
| `/author-profile` | AUTHOR | Author dashboard |
| `/author-profile/articles` | AUTHOR | Manage own articles |
| `/author-profile/write` | AUTHOR | Write new article |
| `/author-profile/articles/:id/edit` | AUTHOR | Edit article |
| `/admin-profile` | ADMIN | Admin dashboard |

---

## API Endpoints

### Auth (`/auth`)
| Method | Path | Description |
|---|---|---|
| POST | `/auth/users` | Register with profile image |
| POST | `/auth/login` | Login, set JWT cookie |
| GET | `/auth/logout` | Clear JWT cookie |
| GET | `/auth/check-auth` | Verify session on refresh |
| PUT | `/auth/password` | Change password |

### User (`/user-api`)
| Method | Path | Description |
|---|---|---|
| GET | `/user-api/articles` | Get all active articles |
| PUT | `/user-api/articles` | Add comment to article |

### Author (`/author-api`)
| Method | Path | Description |
|---|---|---|
| POST | `/author-api/article` | Create article |
| GET | `/author-api/articles` | Get own articles |
| PUT | `/author-api/articles` | Edit article |
| PATCH | `/author-api/articles` | Toggle article active/inactive |

### Admin (`/admin-api`)
| Method | Path | Description |
|---|---|---|
| GET | `/admin-api/users-authors` | List all users and authors |
| PATCH | `/admin-api/article/:id` | Soft-delete or restore article |
| PATCH | `/admin-api/block/:email` | Block or unblock a user |

---

## Setup & Installation

### Prerequisites
- Node.js >= 18
- MongoDB Atlas cluster (or local MongoDB)
- Cloudinary account

### Backend

```bash
cd blog-app-backend
npm install
```

Create a `.env` file:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
node server.js
```

### Frontend

```bash
cd blog-app-frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:4000
```

```bash
npm run dev
```

---

## Deployment

- **Backend** is deployed on [Render](https://render.com)
- **Frontend** is deployed on [Vercel](https://vercel.com) — `vercel.json` rewrites all paths to `index.html` for SPA routing
- Update `VITE_API_URL` in the frontend `.env` to point to your Render backend URL before deploying
