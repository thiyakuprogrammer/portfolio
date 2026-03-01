# Quick Setup Guide

Follow these steps to get your portfolio website running:

## Step 1: Install MySQL

### Windows
1. Download MySQL Installer from https://dev.mysql.com/downloads/installer/
2. Run the installer and choose "Developer Default"
3. Set root password during installation
4. Complete the installation

### macOS
```bash
brew install mysql
brew services start mysql
mysql_secure_installation
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo mysql_secure_installation
```

## Step 2: Create Database

Open MySQL command line:
```bash
mysql -u root -p
```

Create the database:
```sql
CREATE DATABASE portfolio_db;
EXIT;
```

## Step 3: Configure Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Edit `backend/.env`:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
DB_DIALECT=mysql
```

Also update `backend/config/config.json` with your MySQL credentials.

## Step 4: Setup Database Tables

```bash
# Run migrations to create tables
npm run db:migrate

# Seed with sample data
npm run db:seed
```

## Step 5: Start Backend

```bash
npm run dev
```

You should see:
```
Database synced successfully.
Server is running on port 5000.
```

## Step 6: Configure Frontend

Open a NEW terminal:

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

The default `.env` should work:
```
VITE_API_URL=http://localhost:5000/api
```

## Step 7: Start Frontend

```bash
npm run dev
```

You should see:
```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

## Step 8: Open in Browser

Visit: http://localhost:5173

You should see your portfolio website!

## Verification Checklist

- [ ] MySQL is installed and running
- [ ] Database `portfolio_db` is created
- [ ] Backend dependencies installed (`backend/node_modules` exists)
- [ ] Backend `.env` file configured
- [ ] Migrations ran successfully
- [ ] Backend server running on port 5000
- [ ] Frontend dependencies installed (`frontend/node_modules` exists)
- [ ] Frontend `.env` file configured
- [ ] Frontend running on port 5173
- [ ] Website loads in browser
- [ ] Projects page shows 6 sample projects
- [ ] Contact form submits successfully

## Common Issues

### "Cannot connect to MySQL"
- Verify MySQL is running: `mysql -u root -p`
- Check credentials in `backend/.env` and `backend/config/config.json`

### "Port 5000 already in use"
- Change PORT in `backend/.env` to 5001
- Update `VITE_API_URL` in `frontend/.env` to http://localhost:5001/api

### "CORS error"
- Ensure backend is running
- Check `VITE_API_URL` in frontend `.env`

### "Projects not loading"
- Check backend console for errors
- Verify migrations ran: `npm run db:migrate`
- Verify seeding ran: `npm run db:seed`
- Test API directly: http://localhost:5000/api/projects

## Next Steps

1. **Customize Content**: Edit pages in `frontend/src/pages/`
2. **Add Your Projects**: Update database or edit seeder file
3. **Add Your CV**: Replace `frontend/public/cv.pdf`
4. **Update Colors**: Edit CSS variables in `frontend/src/index.css`
5. **Add Your Photo**: Update avatar in `frontend/src/components/Navbar.jsx`

## Need Help?

Check the main README.md for detailed documentation.
