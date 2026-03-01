# Troubleshooting Guide

Common issues and their solutions for the portfolio website.

## 🔴 Database Issues

### Error: "Cannot connect to database"

**Symptoms:**
- Backend fails to start
- Error message: "Unable to connect to the database"

**Solutions:**

1. **Check if MySQL is running:**
```bash
# Windows
services.msc  # Look for MySQL service

# Mac
brew services list

# Linux
sudo systemctl status mysql
```

2. **Verify database exists:**
```bash
mysql -u root -p
SHOW DATABASES;
# Should see 'portfolio_db'
```

3. **Check credentials:**
- Open `backend/.env`
- Verify DB_USER, DB_PASSWORD, DB_HOST
- Open `backend/config/config.json`
- Ensure credentials match

4. **Test connection manually:**
```bash
mysql -h localhost -u root -p portfolio_db
```

### Error: "Table doesn't exist"

**Symptoms:**
- API returns errors
- "Table 'portfolio_db.Projects' doesn't exist"

**Solutions:**

1. **Run migrations:**
```bash
cd backend
npm run db:migrate
```

2. **Check migration status:**
```bash
cd backend
npx sequelize-cli db:migrate:status
```

3. **Reset database (WARNING: Deletes all data):**
```bash
cd backend
npm run db:reset
```

### Error: "Seeder failed"

**Symptoms:**
- `npm run db:seed` fails
- No sample projects in database

**Solutions:**

1. **Ensure migrations ran first:**
```bash
npm run db:migrate
npm run db:seed
```

2. **Check if data already exists:**
```sql
SELECT * FROM Projects;
```

3. **Clear and reseed:**
```bash
npm run db:reset
```

## 🔴 Backend Issues

### Error: "Port 5000 already in use"

**Symptoms:**
- Backend won't start
- Error: "EADDRINUSE: address already in use :::5000"

**Solutions:**

1. **Find and kill process:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

2. **Change port:**
- Edit `backend/.env`: `PORT=5001`
- Edit `frontend/.env`: `VITE_API_URL=http://localhost:5001/api`
- Restart both servers

### Error: "Module not found"

**Symptoms:**
- Backend crashes on start
- "Cannot find module 'express'" or similar

**Solutions:**

1. **Reinstall dependencies:**
```bash
cd backend
rm -rf node_modules
rm package-lock.json
npm install
```

2. **Check Node version:**
```bash
node -v  # Should be v16 or higher
```

### Error: "Sequelize connection error"

**Symptoms:**
- Backend starts but API fails
- Database connection timeout

**Solutions:**

1. **Check MySQL is accepting connections:**
```bash
mysql -h 127.0.0.1 -u root -p
```

2. **Update config to use 127.0.0.1 instead of localhost:**
```json
// backend/config/config.json
{
  "development": {
    "host": "127.0.0.1"  // Instead of "localhost"
  }
}
```

## 🔴 Frontend Issues

### Error: "Failed to fetch"

**Symptoms:**
- Projects page shows error
- Contact form fails
- Console: "Failed to fetch" or "Network Error"

**Solutions:**

1. **Verify backend is running:**
- Check terminal running backend
- Visit http://localhost:5000/api/projects

2. **Check API URL:**
- Open `frontend/.env`
- Verify: `VITE_API_URL=http://localhost:5000/api`

3. **Check CORS:**
- Backend should have CORS enabled (already configured)
- Check backend console for CORS errors

4. **Test API directly:**
```bash
curl http://localhost:5000/api/projects
```

### Error: "Blank page" or "White screen"

**Symptoms:**
- Browser shows blank page
- No errors visible

**Solutions:**

1. **Check browser console:**
- Press F12
- Look for errors in Console tab

2. **Check if frontend is running:**
- Terminal should show "Local: http://localhost:5173"

3. **Clear cache and reload:**
- Ctrl+Shift+R (Windows/Linux)
- Cmd+Shift+R (Mac)

4. **Rebuild:**
```bash
cd frontend
rm -rf node_modules dist
npm install
npm run dev
```

### Error: "Module not found" (Frontend)

**Symptoms:**
- Frontend won't start
- "Cannot find module 'react'" or similar

**Solutions:**

1. **Reinstall dependencies:**
```bash
cd frontend
rm -rf node_modules
rm package-lock.json
npm install
```

2. **Check Node version:**
```bash
node -v  # Should be v16 or higher
```

### Error: "Vite error" or "Build failed"

**Symptoms:**
- `npm run dev` fails
- Vite configuration errors

**Solutions:**

1. **Clear Vite cache:**
```bash
cd frontend
rm -rf node_modules/.vite
npm run dev
```

2. **Check vite.config.js exists and is valid**

3. **Reinstall Vite:**
```bash
npm install vite@latest
```

## 🔴 CORS Issues

### Error: "CORS policy blocked"

**Symptoms:**
- Browser console: "blocked by CORS policy"
- API calls fail from frontend

**Solutions:**

1. **Verify CORS is enabled in backend:**
```javascript
// backend/app.js should have:
const cors = require('cors');
app.use(cors());
```

2. **For production, specify origin:**
```javascript
app.use(cors({
    origin: ['http://localhost:5173', 'https://your-domain.com']
}));
```

3. **Restart backend after changes**

## 🔴 Styling Issues

### Issue: "Styles not loading"

**Symptoms:**
- Page has no styling
- Looks like plain HTML

**Solutions:**

1. **Check if CSS files exist:**
- `frontend/src/index.css`
- Component CSS files

2. **Verify imports:**
```javascript
// main.jsx should have:
import './index.css'
```

3. **Clear browser cache:**
- Hard refresh: Ctrl+Shift+R

### Issue: "Fonts not loading"

**Symptoms:**
- Text uses default system font
- Inter font not applied

**Solutions:**

1. **Check internet connection** (Google Fonts needs internet)

2. **Verify import in index.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

3. **Use local fonts as fallback** (if needed)

## 🔴 Animation Issues

### Issue: "Animations not working"

**Symptoms:**
- No smooth transitions
- Cards don't animate

**Solutions:**

1. **Check Framer Motion is installed:**
```bash
cd frontend
npm list framer-motion
```

2. **Reinstall if needed:**
```bash
npm install framer-motion
```

3. **Check browser supports animations:**
- Try different browser
- Disable browser extensions

## 🔴 Form Issues

### Issue: "Contact form not submitting"

**Symptoms:**
- Submit button does nothing
- No success/error message

**Solutions:**

1. **Check browser console for errors**

2. **Verify backend is running:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello"}'
```

3. **Check form validation:**
- Fill all required fields
- Use valid email format

4. **Check API endpoint:**
- Should be `/api/contact` not `/contact`

### Issue: "Form submits but no data in database"

**Symptoms:**
- Success message shows
- Database has no new records

**Solutions:**

1. **Check database connection**

2. **Verify table exists:**
```sql
SHOW TABLES;
SELECT * FROM ContactMessages;
```

3. **Check backend logs for errors**

## 🔴 Deployment Issues

### Issue: "Build fails"

**Symptoms:**
- `npm run build` fails
- Deployment fails

**Solutions:**

1. **Test build locally:**
```bash
cd frontend
npm run build
```

2. **Check for TypeScript errors** (if using TS)

3. **Verify all imports are correct**

4. **Check environment variables are set**

### Issue: "API not working in production"

**Symptoms:**
- Works locally
- Fails in production

**Solutions:**

1. **Check environment variables:**
- Frontend: `VITE_API_URL` should point to production backend
- Backend: All DB credentials set

2. **Check CORS configuration:**
```javascript
app.use(cors({
    origin: ['https://your-frontend-domain.com']
}));
```

3. **Verify backend is running:**
- Visit backend URL directly
- Check hosting platform logs

### Issue: "Database connection fails in production"

**Symptoms:**
- Backend starts but can't connect to DB
- "Connection refused" errors

**Solutions:**

1. **Check database is running on hosting platform**

2. **Verify connection string:**
- Check host, port, credentials
- Some platforms use connection URLs

3. **Check firewall rules:**
- Database should allow connections from backend

4. **Use SSL if required:**
```json
{
  "production": {
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
```

## 🔴 Performance Issues

### Issue: "Slow loading"

**Symptoms:**
- Pages take long to load
- Animations are laggy

**Solutions:**

1. **Check network tab in DevTools:**
- Look for slow requests
- Check file sizes

2. **Optimize images:**
- Compress images
- Use appropriate formats

3. **Check for console errors:**
- Fix any JavaScript errors

4. **Test on different network:**
- Slow internet can cause issues

## 🔴 Mobile Issues

### Issue: "Sidebar not responsive"

**Symptoms:**
- Sidebar doesn't adapt on mobile
- Content overlaps

**Solutions:**

1. **Check viewport meta tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

2. **Test responsive design:**
- Use browser DevTools
- Toggle device toolbar (F12 → Ctrl+Shift+M)

3. **Check CSS media queries:**
- Should have `@media (max-width: 768px)`

## 📞 Getting Help

If you're still stuck:

1. **Check documentation:**
   - README.md
   - SETUP_GUIDE.md
   - QUICK_REFERENCE.md

2. **Check logs:**
   - Backend terminal
   - Frontend terminal
   - Browser console (F12)

3. **Search for error message:**
   - Google the exact error
   - Check Stack Overflow

4. **Verify setup:**
   - Use CHECKLIST.md
   - Ensure all steps completed

5. **Start fresh:**
   - Delete node_modules
   - Reinstall dependencies
   - Reset database

## 🔧 Debug Mode

Enable detailed logging:

**Backend:**
```javascript
// Add to server.js
console.log('Environment:', process.env.NODE_ENV);
console.log('Database:', process.env.DB_NAME);
```

**Frontend:**
```javascript
// Add to api.js
console.log('API URL:', import.meta.env.VITE_API_URL);
console.log('Response:', response);
```

## 📝 Reporting Issues

When asking for help, include:
- Error message (exact text)
- What you were trying to do
- What you expected to happen
- What actually happened
- Your environment (OS, Node version)
- Steps to reproduce

---

**Troubleshooting Guide v1.0** | Updated: March 1, 2026
