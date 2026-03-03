@echo off
echo ========================================
echo    Netlify Deployment Script
echo ========================================
echo.

echo Building frontend...
cd frontend
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo [SUCCESS] Build completed!
echo.
echo ========================================
echo    Next Steps:
echo ========================================
echo.
echo Option 1: Deploy via Netlify Dashboard
echo   1. Go to https://app.netlify.com
echo   2. Click "Add new site" - "Import an existing project"
echo   3. Connect your Git repository
echo   4. Set build settings:
echo      - Base directory: frontend
echo      - Build command: npm run build
echo      - Publish directory: frontend/dist
echo   5. Click "Deploy site"
echo.
echo Option 2: Drag and Drop
echo   1. Go to https://app.netlify.com/drop
echo   2. Drag the "frontend\dist" folder
echo   3. Your site is live!
echo.
echo Option 3: Use Netlify CLI
echo   1. Install: npm install -g netlify-cli
echo   2. Login: netlify login
echo   3. Deploy: netlify deploy --prod
echo.
echo Your build files are ready in: frontend\dist
echo.
echo For detailed instructions, see: NETLIFY_DEPLOYMENT.md
echo.
pause
