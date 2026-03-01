#!/bin/bash

echo "🚀 Portfolio Setup Script"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Check if MySQL is installed
if ! command -v mysql &> /dev/null
then
    echo "⚠️  MySQL command not found. Make sure MySQL is installed and running."
    echo "   Continue anyway? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]
    then
        exit 1
    fi
fi

echo "📦 Installing Backend Dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend installation failed"
    exit 1
fi

echo ""
echo "📦 Installing Frontend Dependencies..."
cd ../frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Frontend installation failed"
    exit 1
fi

cd ..

echo ""
echo "📝 Setting up environment files..."

# Backend .env
if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env"
    echo "⚠️  Please edit backend/.env with your MySQL credentials"
else
    echo "ℹ️  backend/.env already exists"
fi

# Frontend .env
if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "✅ Created frontend/.env"
else
    echo "ℹ️  frontend/.env already exists"
fi

echo ""
echo "🗄️  Database Setup"
echo "=================="
echo "Please ensure you have:"
echo "1. MySQL installed and running"
echo "2. Created database: CREATE DATABASE portfolio_db;"
echo "3. Updated backend/.env with your MySQL credentials"
echo ""
echo "Run migrations? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]
then
    echo "Running migrations..."
    cd backend
    npm run db:migrate
    
    if [ $? -eq 0 ]; then
        echo "✅ Migrations completed"
        echo ""
        echo "Seed database with sample data? (y/n)"
        read -r seed_response
        
        if [[ "$seed_response" =~ ^[Yy]$ ]]
        then
            npm run db:seed
            if [ $? -eq 0 ]; then
                echo "✅ Database seeded successfully"
            else
                echo "❌ Seeding failed"
            fi
        fi
    else
        echo "❌ Migrations failed. Please check your database configuration."
    fi
    cd ..
fi

echo ""
echo "✨ Setup Complete!"
echo "=================="
echo ""
echo "To start the application:"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd backend"
echo "  npm run dev"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "Then visit: http://localhost:5173"
echo ""
echo "📚 For detailed instructions, see:"
echo "   - README.md"
echo "   - SETUP_GUIDE.md"
echo ""
