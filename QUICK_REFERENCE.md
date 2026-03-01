# Quick Reference Card

## 🚀 Quick Start

```bash
# Automated Setup (Recommended)
./setup.sh          # Linux/Mac
setup.bat           # Windows

# Manual Setup
npm run setup       # Install all dependencies
```

## 🗄️ Database Commands

```bash
# Create database first in MySQL
mysql -u root -p
CREATE DATABASE portfolio_db;
EXIT;

# Then run migrations and seeds
npm run db:migrate
npm run db:seed
npm run db:reset    # Reset everything
```

## 🏃 Running the Application

```bash
# Terminal 1 - Backend (Port 5000)
cd backend
npm run dev

# Terminal 2 - Frontend (Port 5173)
cd frontend
npm run dev
```

Or use root commands:
```bash
npm run dev:backend
npm run dev:frontend
```

## 📁 Important Files to Edit

### Personal Info
- `frontend/src/pages/Home.jsx` - Hero section
- `frontend/src/pages/About.jsx` - About content
- `frontend/src/pages/Resume.jsx` - Experience & education
- `frontend/src/components/Navbar.jsx` - Profile section

### Projects
- `backend/seeders/20260301120726-demo-projects.js` - Sample projects
- Or add directly to database

### Skills
- `frontend/src/pages/Skills.jsx` - Skills list

### Blog
- `frontend/src/pages/Blog.jsx` - Blog posts

### CV
- `frontend/public/cv.pdf` - Your CV file

### Colors
- `frontend/src/index.css` - CSS variables

## 🔧 Configuration Files

### Backend
- `backend/.env` - Database credentials
- `backend/config/config.json` - Sequelize config

### Frontend
- `frontend/.env` - API URL

## 📡 API Endpoints

```
GET  /api/projects     - Fetch all projects
POST /api/contact      - Submit contact form
```

## 🎨 CSS Variables

```css
--bg-primary: #0a0a0a
--bg-secondary: #121212
--accent-color: #3b82f6
--accent-hover: #60a5fa
--text-primary: #f8f9fa
--text-secondary: #9ca3af
```

## 📦 Build Commands

```bash
# Frontend
cd frontend
npm run build       # Creates dist/ folder
npm run preview     # Preview production build

# Backend
cd backend
npm start           # Production mode
npm run dev         # Development mode
```

## 🌐 Default URLs

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API: http://localhost:5000/api

## 🐛 Common Issues

### Database Connection Error
```bash
# Check MySQL is running
mysql -u root -p

# Verify credentials in:
backend/.env
backend/config/config.json
```

### Port Already in Use
```bash
# Change ports in:
backend/.env (PORT=5001)
frontend/.env (VITE_API_URL=http://localhost:5001/api)
```

### CORS Error
```bash
# Verify backend is running
# Check VITE_API_URL in frontend/.env
```

### Projects Not Loading
```bash
# Run migrations and seeds
cd backend
npm run db:migrate
npm run db:seed
```

## 📚 Documentation

- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Step-by-step setup
- `DEPLOYMENT.md` - Deployment guide
- `PROJECT_SUMMARY.md` - Project overview

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
DB_DIALECT=mysql
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 📝 Database Schema

### Projects Table
- id (INT, PK, Auto)
- title (STRING)
- description (TEXT)
- techStack (STRING)
- githubUrl (STRING)
- liveUrl (STRING)
- createdAt (DATE)
- updatedAt (DATE)

### ContactMessages Table
- id (INT, PK, Auto)
- name (STRING)
- email (STRING)
- message (TEXT)
- createdAt (DATE)
- updatedAt (DATE)

## 🎯 Pages & Routes

```
/           - Home
/about      - About
/skills     - Skills
/portfolio  - Portfolio (Projects)
/resume     - Resume
/blog       - Blog
/contact    - Contact
```

## 🛠️ Tech Stack

**Frontend**: React 18, Vite, React Router, Framer Motion, Lucide Icons, Axios
**Backend**: Node.js, Express 5, Sequelize, MySQL2, CORS, dotenv
**Database**: MySQL 8+

## 📊 Project Stats

- **Pages**: 7
- **Components**: 6
- **API Endpoints**: 2
- **Database Models**: 2
- **Sample Projects**: 6
- **Blog Posts**: 6

## 🚀 Deployment Platforms

**Frontend**: Vercel, Netlify, GitHub Pages
**Backend**: Railway, Render, Heroku
**Database**: PlanetScale, Railway MySQL, AWS RDS

## 💡 Quick Tips

1. Always run backend before frontend
2. Check both terminals for errors
3. Use browser DevTools console
4. Test API endpoints directly
5. Keep environment files updated
6. Run migrations after DB changes
7. Clear browser cache if needed
8. Use incognito for testing

## 📞 Support

Check documentation files for detailed help:
- Setup issues → SETUP_GUIDE.md
- Deployment → DEPLOYMENT.md
- Overview → PROJECT_SUMMARY.md

---

**Quick Reference v1.0** | Thiyaku R Portfolio
