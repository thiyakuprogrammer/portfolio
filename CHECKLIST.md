# Portfolio Setup & Verification Checklist

Use this checklist to ensure your portfolio is set up correctly and ready to deploy.

## ✅ Pre-Setup Checklist

- [ ] Node.js installed (v16 or higher)
- [ ] MySQL installed (v8 or higher)
- [ ] MySQL server is running
- [ ] Git installed (optional, for version control)
- [ ] Code editor installed (VS Code recommended)

## ✅ Database Setup

- [ ] MySQL server is running
- [ ] Created database: `CREATE DATABASE portfolio_db;`
- [ ] Can connect to MySQL: `mysql -u root -p`
- [ ] Know your MySQL root password

## ✅ Backend Setup

- [ ] Navigated to `backend` folder
- [ ] Ran `npm install` successfully
- [ ] Created `.env` file from `.env.example`
- [ ] Updated `.env` with correct MySQL credentials:
  - [ ] DB_HOST
  - [ ] DB_USER
  - [ ] DB_PASSWORD
  - [ ] DB_NAME
- [ ] Updated `config/config.json` with MySQL credentials
- [ ] Ran `npm run db:migrate` successfully
- [ ] Ran `npm run db:seed` successfully
- [ ] Backend starts without errors: `npm run dev`
- [ ] See "Database synced successfully" message
- [ ] See "Server is running on port 5000" message
- [ ] Can access http://localhost:5000 in browser
- [ ] API responds: http://localhost:5000/api/projects

## ✅ Frontend Setup

- [ ] Navigated to `frontend` folder
- [ ] Ran `npm install` successfully
- [ ] Created `.env` file from `.env.example`
- [ ] Verified `VITE_API_URL=http://localhost:5000/api`
- [ ] Frontend starts without errors: `npm run dev`
- [ ] See "Local: http://localhost:5173" message
- [ ] Can access http://localhost:5173 in browser

## ✅ Application Testing

### Navigation
- [ ] Home page loads
- [ ] About page loads
- [ ] Skills page loads
- [ ] Portfolio page loads
- [ ] Resume page loads
- [ ] Blog page loads
- [ ] Contact page loads
- [ ] All navigation links work
- [ ] Active link highlighting works

### Home Page
- [ ] Hero section displays
- [ ] Name "Thiyaku R" shows with typing animation
- [ ] "View My Work" button works
- [ ] "Contact Me" button works
- [ ] Animations are smooth

### About Page
- [ ] Personal bio displays
- [ ] Profile image placeholder shows
- [ ] Experience level shows: "Intermediate"
- [ ] Specialization shows: "Full Stack Developer & Designer"
- [ ] Hover effects work

### Skills Page
- [ ] All skills display in grid
- [ ] Skill badges animate on load
- [ ] Hover effects work on badges
- [ ] Responsive layout works

### Portfolio Page
- [ ] Loading spinner shows initially
- [ ] 6 sample projects load
- [ ] Project cards display correctly
- [ ] Tech stack badges show
- [ ] GitHub links are present
- [ ] Live demo links are present
- [ ] Hover animations work
- [ ] Cards have glassmorphism effect

### Resume Page
- [ ] Education section displays
- [ ] Experience section displays
- [ ] Core competencies show
- [ ] Download CV button works (shows alert)
- [ ] Content is readable

### Blog Page
- [ ] 6 blog posts display
- [ ] Categories show on cards
- [ ] Dates format correctly
- [ ] Read time displays
- [ ] Hover effects work
- [ ] Cards animate on load

### Contact Page
- [ ] Form displays correctly
- [ ] Name field works
- [ ] Email field works
- [ ] Message field works
- [ ] Form validation works (try submitting empty)
- [ ] Submit button works
- [ ] Success message shows after submission
- [ ] Form clears after successful submission

## ✅ API Testing

### Test Projects Endpoint
- [ ] Open http://localhost:5000/api/projects
- [ ] Returns JSON array
- [ ] Contains 6 projects
- [ ] Each project has: id, title, description, techStack, githubUrl, liveUrl

### Test Contact Endpoint
Use Postman or curl:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello"}'
```
- [ ] Returns success message
- [ ] Status code is 201
- [ ] Message saved in database

## ✅ Database Verification

```sql
-- Check projects
SELECT * FROM Projects;

-- Check contact messages
SELECT * FROM ContactMessages;
```

- [ ] Projects table has 6 rows
- [ ] ContactMessages table exists
- [ ] Test contact message appears in database

## ✅ UI/UX Verification

### Design
- [ ] Dark theme is applied
- [ ] Light blue accent color (#3b82f6) is visible
- [ ] Glassmorphism effects are visible
- [ ] Soft shadows on cards
- [ ] Rounded corners on cards
- [ ] Smooth transitions on hover

### Sidebar
- [ ] Sidebar is fixed on left
- [ ] Profile section shows "TR" avatar
- [ ] Name "Thiyaku R" displays
- [ ] Title "Freelancing Web Developer" displays
- [ ] Navigation icons show
- [ ] Active link has blue highlight
- [ ] Hover effects work

### Responsive Design
- [ ] Desktop view (>1024px) works
- [ ] Tablet view (768-1024px) works
- [ ] Mobile view (<768px) works
- [ ] Sidebar becomes horizontal on mobile
- [ ] Content is readable on all sizes
- [ ] No horizontal scrolling

### Animations
- [ ] Page transitions are smooth
- [ ] Cards animate on hover
- [ ] Typing animation on home page
- [ ] Skill badges animate on load
- [ ] Project cards stagger on load
- [ ] Blog cards stagger on load
- [ ] No janky animations

## ✅ Browser Testing

- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] No console errors
- [ ] No console warnings (or acceptable ones)

## ✅ Performance

- [ ] Pages load quickly (<2 seconds)
- [ ] No lag when navigating
- [ ] Animations are smooth (60fps)
- [ ] Images load properly
- [ ] API calls are fast

## ✅ Code Quality

- [ ] No errors in browser console
- [ ] No errors in backend terminal
- [ ] No errors in frontend terminal
- [ ] Code is readable
- [ ] Files are organized

## ✅ Customization Ready

- [ ] Know where to edit personal info
- [ ] Know how to add projects
- [ ] Know how to change colors
- [ ] Know how to add CV file
- [ ] Understand project structure

## ✅ Documentation

- [ ] Read README.md
- [ ] Read SETUP_GUIDE.md
- [ ] Understand QUICK_REFERENCE.md
- [ ] Know where to find help

## ✅ Pre-Deployment

- [ ] All tests pass
- [ ] Content is customized
- [ ] Real projects added
- [ ] CV file added
- [ ] Colors adjusted (if needed)
- [ ] Personal info updated
- [ ] Contact form tested
- [ ] Database has real data

## ✅ Deployment Preparation

- [ ] Read DEPLOYMENT.md
- [ ] Chose hosting platforms
- [ ] Created accounts on platforms
- [ ] Prepared environment variables
- [ ] Tested production build locally:
  - [ ] `cd frontend && npm run build`
  - [ ] `npm run preview`
- [ ] Backend ready for production:
  - [ ] Environment variables documented
  - [ ] Database migration plan ready

## ✅ Post-Deployment

- [ ] Frontend deployed successfully
- [ ] Backend deployed successfully
- [ ] Database deployed/connected
- [ ] Environment variables set
- [ ] Migrations ran on production
- [ ] Seeds ran on production (if needed)
- [ ] Production URL works
- [ ] All pages load on production
- [ ] Contact form works on production
- [ ] Projects load on production
- [ ] No console errors on production
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain configured (optional)

## ✅ Final Verification

- [ ] Share URL with friends for testing
- [ ] Test on different devices
- [ ] Test on different networks
- [ ] Monitor for errors
- [ ] Check analytics (if added)
- [ ] Backup database
- [ ] Document any custom changes

## 🎉 Completion

When all checkboxes are checked, your portfolio is:
- ✅ Fully functional
- ✅ Production-ready
- ✅ Deployed (if applicable)
- ✅ Ready to share with the world!

## 📝 Notes Section

Use this space to note any issues or customizations:

```
Date: ___________
Issues found:


Customizations made:


Deployment URLs:
Frontend: 
Backend: 


```

---

**Checklist v1.0** | Last updated: March 1, 2026
