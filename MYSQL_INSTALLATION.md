# MySQL Installation Guide for Windows

Since MySQL is not currently installed on your system, here are the steps to install it:

## Option 1: MySQL Installer (Recommended)

1. **Download MySQL Installer**
   - Visit: https://dev.mysql.com/downloads/installer/
   - Download: `mysql-installer-community-8.x.x.msi`

2. **Run the Installer**
   - Double-click the downloaded file
   - Choose "Developer Default" or "Server only"
   - Click "Next" through the setup

3. **Configure MySQL Server**
   - Set root password (remember this!)
   - Keep default port: 3306
   - Configure as Windows Service
   - Complete installation

4. **Verify Installation**
   ```bash
   mysql --version
   ```

5. **Create Database**
   ```bash
   mysql -u root -p
   # Enter your password
   CREATE DATABASE portfolio_db;
   EXIT;
   ```

6. **Update Backend Configuration**
   - Edit `backend/.env`
   - Set `DB_PASSWORD=your_password`

## Option 2: XAMPP (Easier for Beginners)

1. **Download XAMPP**
   - Visit: https://www.apachefriends.org/
   - Download for Windows

2. **Install XAMPP**
   - Run installer
   - Select MySQL component
   - Complete installation

3. **Start MySQL**
   - Open XAMPP Control Panel
   - Click "Start" next to MySQL

4. **Create Database**
   - Click "Admin" next to MySQL (opens phpMyAdmin)
   - Click "New" to create database
   - Name it: `portfolio_db`
   - Click "Create"

5. **Update Backend Configuration**
   - Edit `backend/.env`
   - Keep `DB_PASSWORD=` empty (XAMPP default)

## Option 3: Quick Test with SQLite (No Installation)

If you want to test the application immediately without MySQL:

1. Install SQLite package:
   ```bash
   cd backend
   npm install sqlite3
   ```

2. Update `backend/config/config.json`:
   ```json
   {
     "development": {
       "dialect": "sqlite",
       "storage": "./database.sqlite"
     }
   }
   ```

3. Update `backend/.env`:
   ```
   DB_DIALECT=sqlite
   ```

4. Run migrations and start server

## After MySQL Installation

Once MySQL is installed, run these commands:

```bash
# Navigate to backend
cd backend

# Run migrations
npm run db:migrate

# Seed database with sample data
npm run db:seed

# Start backend server
npm run dev
```

Then in a new terminal:

```bash
# Navigate to frontend
cd frontend

# Start frontend server
npm run dev
```

Visit: http://localhost:5173

---

**Current Status**: MySQL not detected. Please install MySQL or use SQLite option above.
