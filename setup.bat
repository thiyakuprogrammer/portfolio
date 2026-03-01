@echo off
echo ========================================
echo    Portfolio Setup Script (Windows)
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node -v
echo.

echo Installing Backend Dependencies...
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Backend installation failed
    pause
    exit /b 1
)

echo.
echo Installing Frontend Dependencies...
cd ..\frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Frontend installation failed
    pause
    exit /b 1
)

cd ..

echo.
echo Setting up environment files...

REM Backend .env
if not exist backend\.env (
    copy backend\.env.example backend\.env
    echo [OK] Created backend\.env
    echo [WARNING] Please edit backend\.env with your MySQL credentials
) else (
    echo [INFO] backend\.env already exists
)

REM Frontend .env
if not exist frontend\.env (
    copy frontend\.env.example frontend\.env
    echo [OK] Created frontend\.env
) else (
    echo [INFO] frontend\.env already exists
)

echo.
echo ========================================
echo    Database Setup
echo ========================================
echo.
echo Please ensure you have:
echo 1. MySQL installed and running
echo 2. Created database: CREATE DATABASE portfolio_db;
echo 3. Updated backend\.env with your MySQL credentials
echo.
echo Press any key to continue with migrations...
pause >nul

echo.
echo Running migrations...
cd backend
call npm run db:migrate

if %ERRORLEVEL% EQU 0 (
    echo [OK] Migrations completed
    echo.
    echo Seed database with sample data? (Y/N)
    set /p seed_choice=
    
    if /i "%seed_choice%"=="Y" (
        call npm run db:seed
        if %ERRORLEVEL% EQU 0 (
            echo [OK] Database seeded successfully
        ) else (
            echo [ERROR] Seeding failed
        )
    )
) else (
    echo [ERROR] Migrations failed. Please check your database configuration.
)

cd ..

echo.
echo ========================================
echo    Setup Complete!
echo ========================================
echo.
echo To start the application:
echo.
echo Terminal 1 (Backend):
echo   cd backend
echo   npm run dev
echo.
echo Terminal 2 (Frontend):
echo   cd frontend
echo   npm run dev
echo.
echo Then visit: http://localhost:5173
echo.
echo For detailed instructions, see:
echo   - README.md
echo   - SETUP_GUIDE.md
echo.
pause
