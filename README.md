# Thiyaku R - Personal Portfolio Website

A modern, professional, dark-themed portfolio website built with React, Node.js, Express, and MySQL. Features a sleek card-based UI with glassmorphism effects, smooth animations, and a complete backend API.

## 🎨 Features

- **Modern Dark Theme** with light blue accents
- **Glassmorphism UI** with soft shadows and rounded cards
- **Smooth Animations** using Framer Motion
- **Fully Responsive** design for all devices
- **RESTful API** with Node.js and Express
- **MySQL Database** with Sequelize ORM
- **Contact Form** with backend integration
- **Dynamic Projects** fetched from database
- **SEO-Friendly** structure

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Framer Motion (animations)
- Lucide React (icons)
- Axios (API calls)

### Backend
- Node.js
- Express 5
- Sequelize ORM
- MySQL2
- CORS
- dotenv

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── SkillBadge.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── config.json
│   ├── controllers/
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── models/
│   │   ├── index.js
│   │   ├── project.js
│   │   └── contactmessage.js
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   └── contactRoutes.js
│   ├── migrations/
│   ├── seeders/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Database Setup

1. Install and start MySQL server
2. Create a new database:

```sql
CREATE DATABASE portfolio_db;
```

3. Update database credentials in `backend/config/config.json`:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "portfolio_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your database credentials
# PORT=5000
# DB_HOST=localhost
# DB_USER=root
# DB_PASSWORD=your_password
# DB_NAME=portfolio_db
# DB_DIALECT=mysql

# Run migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed

# Start backend server
npm run dev
```

Backend will run on `http://localhost:5000`

### 4. Frontend Setup

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env (default should work)
# VITE_API_URL=http://localhost:5000/api

# Start frontend development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Fetch all projects

### Contact
- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }
  ```

## 🎯 Pages

1. **Home** - Hero section with typing animation
2. **About** - Personal information and background
3. **Skills** - Technical skills showcase
4. **Portfolio** - Projects grid (fetched from database)
5. **Resume** - Experience and education with CV download
6. **Blog** - Sample blog posts
7. **Contact** - Contact form with backend integration

## 🎨 Customization

### Update Personal Information

Edit the content in:
- `frontend/src/pages/Home.jsx`
- `frontend/src/pages/About.jsx`
- `frontend/src/pages/Resume.jsx`
- `frontend/src/components/Navbar.jsx`

### Add Your Projects

1. Add projects via database:
```sql
INSERT INTO Projects (title, description, techStack, githubUrl, liveUrl, createdAt, updatedAt)
VALUES ('Your Project', 'Description', 'React, Node.js', 'https://github.com/...', 'https://...', NOW(), NOW());
```

2. Or edit the seeder file: `backend/seeders/20260301120726-demo-projects.js`

### Add Your CV

1. Place your CV file in `frontend/public/` folder (e.g., `cv.pdf`)
2. Update the download function in `frontend/src/pages/Resume.jsx`:

```javascript
const handleDownload = () => {
    window.open('/cv.pdf', '_blank');
};
```

### Change Colors

Edit CSS variables in `frontend/src/index.css`:

```css
:root {
  --accent-color: #3b82f6; /* Change this */
  --accent-hover: #60a5fa;
}
```

## 🔧 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:reset` - Reset database (undo, migrate, seed)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📦 Deployment

### Frontend (Vercel/Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to Vercel or Netlify

3. Update environment variable:
```
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (Heroku/Railway/Render)

1. Set environment variables on your hosting platform
2. Run migrations: `npm run db:migrate`
3. Seed database: `npm run db:seed`
4. Start server: `npm start`

## 🐛 Troubleshooting

### Database Connection Error
- Verify MySQL is running
- Check credentials in `backend/config/config.json`
- Ensure database exists

### CORS Error
- Verify backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`

### Port Already in Use
- Change port in `backend/.env`
- Update `VITE_API_URL` in frontend `.env`

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Thiyaku R**
- Freelance Web Developer
- Full Stack Developer & Designer
- Student at SRM MCET

---

Built with ❤️ using React, Node.js, and MySQL
