# Deployment Guide

This guide covers deploying your portfolio to popular hosting platforms.

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Build and Deploy**
```bash
cd frontend
npm run build
vercel --prod
```

3. **Configure Environment Variables**
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `VITE_API_URL` = `https://your-backend-url.com/api`

4. **Redeploy**
```bash
vercel --prod
```

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build**
```bash
cd frontend
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod --dir=dist
```

4. **Configure Environment Variables**
- Go to Netlify Dashboard → Site Settings → Environment Variables
- Add: `VITE_API_URL` = `https://your-backend-url.com/api`

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
cd frontend
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

## Backend Deployment

### Option 1: Railway (Recommended)

1. **Create account at railway.app**

2. **Install Railway CLI**
```bash
npm install -g @railway/cli
```

3. **Login and Initialize**
```bash
railway login
cd backend
railway init
```

4. **Add MySQL Database**
- Go to Railway Dashboard
- Click "New" → "Database" → "MySQL"
- Copy connection details

5. **Set Environment Variables**
```bash
railway variables set PORT=5000
railway variables set DB_HOST=your-mysql-host
railway variables set DB_USER=your-mysql-user
railway variables set DB_PASSWORD=your-mysql-password
railway variables set DB_NAME=railway
railway variables set DB_DIALECT=mysql
```

6. **Deploy**
```bash
railway up
```

7. **Run Migrations**
```bash
railway run npm run db:migrate
railway run npm run db:seed
```

### Option 2: Render

1. **Create account at render.com**

2. **Create MySQL Database**
- Dashboard → New → PostgreSQL (or use external MySQL)
- Note connection details

3. **Create Web Service**
- Dashboard → New → Web Service
- Connect your GitHub repository
- Select `backend` folder
- Build Command: `npm install`
- Start Command: `npm start`

4. **Environment Variables**
```
PORT=5000
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
DB_DIALECT=mysql
```

5. **Deploy**
- Render will auto-deploy on git push

6. **Run Migrations**
- Use Render Shell or add to build command:
```
npm install && npm run db:migrate && npm run db:seed
```

### Option 3: Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login and Create App**
```bash
heroku login
cd backend
heroku create your-portfolio-api
```

3. **Add MySQL Database**
```bash
heroku addons:create jawsdb:kitefin
```

4. **Get Database Credentials**
```bash
heroku config:get JAWSDB_URL
```

5. **Set Environment Variables**
```bash
heroku config:set PORT=5000
heroku config:set DB_HOST=your-host
heroku config:set DB_USER=your-user
heroku config:set DB_PASSWORD=your-password
heroku config:set DB_NAME=your-db
heroku config:set DB_DIALECT=mysql
```

6. **Deploy**
```bash
git push heroku main
```

7. **Run Migrations**
```bash
heroku run npm run db:migrate
heroku run npm run db:seed
```

## Database Options

### Option 1: PlanetScale (Free MySQL)

1. Create account at planetscale.com
2. Create new database
3. Get connection string
4. Use in your backend config

### Option 2: Railway MySQL

1. Add MySQL from Railway dashboard
2. Copy connection details
3. Update backend environment variables

### Option 3: AWS RDS

1. Create MySQL instance on AWS RDS
2. Configure security groups
3. Get endpoint and credentials
4. Update backend config

## Post-Deployment Checklist

### Frontend
- [ ] Build completes without errors
- [ ] Environment variables set correctly
- [ ] API URL points to deployed backend
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits

### Backend
- [ ] Server starts without errors
- [ ] Database connection successful
- [ ] Migrations ran successfully
- [ ] Seeders ran successfully
- [ ] API endpoints respond correctly
- [ ] CORS configured for frontend domain

### Testing
- [ ] Visit deployed frontend URL
- [ ] Test all navigation links
- [ ] Check Portfolio page loads projects
- [ ] Submit contact form
- [ ] Verify form submission in database
- [ ] Test on mobile device
- [ ] Check browser console for errors

## Custom Domain Setup

### Frontend (Vercel)

1. Go to Vercel Dashboard → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate

### Backend (Railway)

1. Go to Railway Dashboard → Settings
2. Add custom domain
3. Update DNS records
4. Update frontend `VITE_API_URL`

## SSL/HTTPS

All recommended platforms (Vercel, Netlify, Railway, Render) provide free SSL certificates automatically.

## Monitoring

### Frontend
- Vercel Analytics (built-in)
- Google Analytics
- Sentry for error tracking

### Backend
- Railway Metrics (built-in)
- New Relic
- Datadog

## Troubleshooting

### "Cannot connect to database"
- Verify database is running
- Check connection string
- Verify firewall rules
- Check environment variables

### "CORS error"
- Add frontend domain to CORS whitelist in `backend/app.js`:
```javascript
app.use(cors({
    origin: ['https://your-frontend-domain.com']
}));
```

### "Build failed"
- Check build logs
- Verify all dependencies in package.json
- Test build locally first

### "API not responding"
- Check backend logs
- Verify server is running
- Test API endpoints directly
- Check environment variables

## Continuous Deployment

### GitHub Actions (Frontend)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Frontend
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd frontend && npm install
      - run: cd frontend && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./frontend/dist
```

### Auto-Deploy on Git Push

Most platforms support auto-deploy:
- **Vercel**: Auto-deploys on git push
- **Netlify**: Auto-deploys on git push
- **Railway**: Auto-deploys on git push
- **Render**: Auto-deploys on git push

## Cost Estimates

### Free Tier Options
- **Frontend**: Vercel/Netlify (Free)
- **Backend**: Railway ($5/month after free tier)
- **Database**: PlanetScale (Free tier available)

### Total Monthly Cost
- **Hobby**: $0-5/month
- **Production**: $10-20/month

## Support

For deployment issues:
1. Check platform documentation
2. Review deployment logs
3. Test locally first
4. Check environment variables
5. Verify database connection

---

Good luck with your deployment! 🚀
