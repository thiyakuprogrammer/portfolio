# 🚀 GitHub Pages Deployment Guide

## ✅ Configuration Complete!

Your portfolio is now configured for GitHub Pages deployment.

---

## 📋 What Was Changed

### 1. Vite Configuration
- ✅ Set `base: '/portfolio/'` in `vite.config.js`
- ✅ Optimized build settings
- ✅ Code splitting configured

### 2. Package.json Updates
- ✅ Added `homepage: "https://thiyakuprogrammer.github.io/portfolio"`
- ✅ Added deploy scripts
- ✅ gh-pages package installed

### 3. React Router Fix
- ✅ Changed from `BrowserRouter` to `HashRouter`
- ✅ Prevents blank page issues on GitHub Pages
- ✅ URLs will use hash routing (e.g., `/#/about`)

### 4. Project Structure
- ✅ Frontend `.gitignore` created
- ✅ Backend excluded from deployment
- ✅ Only frontend will be deployed

---

## 🚀 Deployment Steps

### Step 1: Install Dependencies (if not already done)
```bash
cd frontend
npm install
```

### Step 2: Test Build Locally
```bash
npm run build
npm run preview
```
Visit: http://localhost:4173/portfolio/

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the `dist` folder to that branch
4. Deploy automatically

---

## ⚙️ Configure GitHub Repository

### Step 1: Enable GitHub Pages
1. Go to your repository: https://github.com/thiyakuprogrammer/portfolio
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Source":
   - Branch: Select `gh-pages`
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 2: Wait for Deployment
- First deployment takes 2-5 minutes
- GitHub will show: "Your site is published at..."
- Visit: https://thiyakuprogrammer.github.io/portfolio/

---

## 🔄 Update Your Live Site

Whenever you make changes:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy to GitHub Pages
cd frontend
npm run deploy
```

---

## 🎯 Your URLs

### GitHub Repository
```
https://github.com/thiyakuprogrammer/portfolio
```

### Live Portfolio (After Deployment)
```
https://thiyakuprogrammer.github.io/portfolio/
```

### Local Development
```
Frontend: http://localhost:5173
Backend:  http://localhost:5000 (not deployed)
```

---

## 📱 Testing Checklist

After deployment, verify:
- [ ] Site loads at https://thiyakuprogrammer.github.io/portfolio/
- [ ] All pages accessible (Home, About, Skills, etc.)
- [ ] Navigation works (hash routing: /#/about)
- [ ] Images load correctly
- [ ] Styling is correct
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Projects display (mock data)

---

## 🐛 Troubleshooting

### Issue: Blank Page After Deployment

**Solution**: Already fixed with HashRouter!
- We changed from BrowserRouter to HashRouter
- This prevents the blank page issue

### Issue: 404 on Direct URL Access

**Expected Behavior**: 
- Direct URLs like `/about` won't work
- Use hash URLs: `/#/about`
- This is normal for GitHub Pages with client-side routing

### Issue: Images Not Loading

**Check**:
1. Images are in `frontend/src/asserts/` or `frontend/public/`
2. Using correct import paths
3. Build includes images

**Fix**:
```bash
cd frontend
npm run build
npm run deploy
```

### Issue: CSS Not Applied

**Check**:
1. `base: '/portfolio/'` is set in vite.config.js
2. Rebuild and redeploy:
```bash
npm run deploy
```

### Issue: Deploy Command Fails

**Solution**:
```bash
# Ensure gh-pages is installed
npm install --save-dev gh-pages

# Try deploying again
npm run deploy
```

---

## 🎨 How It Works

### Hash Routing
- URLs use `#` symbol: `https://site.com/#/about`
- Works perfectly with GitHub Pages
- No server configuration needed
- All routing handled by React

### Build Process
1. `npm run build` creates optimized production build
2. Output goes to `frontend/dist/` folder
3. `gh-pages` package pushes `dist/` to `gh-pages` branch
4. GitHub Pages serves from `gh-pages` branch

### Base Path
- `base: '/portfolio/'` in vite.config.js
- Ensures all assets load from correct path
- Matches your repository name

---

## 📊 Build Output

After running `npm run build`, you'll see:
```
dist/
├── index.html
├── assets/
│   ├── img-xxxxx.png
│   ├── index-xxxxx.css
│   ├── index-xxxxx.js
│   ├── react-vendor-xxxxx.js
│   └── animation-vendor-xxxxx.js
```

Total size: ~395 KB (optimized!)

---

## 🔧 Advanced Configuration

### Custom Domain (Optional)

1. **Buy a domain** (Namecheap, GoDaddy, etc.)

2. **Add CNAME file** in `frontend/public/`:
```
yourdomain.com
```

3. **Update DNS records**:
```
Type: CNAME
Name: www
Value: thiyakuprogrammer.github.io
```

4. **Update vite.config.js**:
```javascript
base: '/', // Change from '/portfolio/' to '/'
```

5. **Redeploy**:
```bash
npm run deploy
```

6. **Configure in GitHub**:
- Settings → Pages → Custom domain
- Enter your domain
- Enable HTTPS

---

## 📝 Important Notes

### Backend Not Deployed
- Backend folder is NOT deployed to GitHub Pages
- GitHub Pages only hosts static files
- Portfolio uses mock data (no backend needed)
- Contact form shows alternative contact info

### API Calls
- All API calls use mock data in production
- Configured in `frontend/src/services/mockData.js`
- No backend required for GitHub Pages

### Environment Variables
- `.env.production` sets `VITE_USE_MOCK_DATA=true`
- Ensures mock data is used in production
- No backend API calls in deployed version

---

## 🎯 Quick Deploy Commands

```bash
# One-time setup (already done)
cd frontend
npm install

# Every time you want to deploy
cd frontend
npm run deploy

# Your site will be live at:
# https://thiyakuprogrammer.github.io/portfolio/
```

---

## ✅ Deployment Checklist

Before deploying:
- [x] HashRouter configured
- [x] Base path set to '/portfolio/'
- [x] Homepage URL in package.json
- [x] gh-pages package installed
- [x] Build tested locally
- [x] Mock data configured
- [x] Images optimized
- [x] .gitignore updated

After deploying:
- [ ] Run `npm run deploy`
- [ ] Enable GitHub Pages in repo settings
- [ ] Wait 2-5 minutes
- [ ] Visit live URL
- [ ] Test all pages
- [ ] Verify mobile responsive
- [ ] Check console for errors

---

## 🎉 Success!

Once deployed, your portfolio will be live at:
```
https://thiyakuprogrammer.github.io/portfolio/
```

Share it on:
- LinkedIn
- Resume
- Twitter/X
- Email signature
- GitHub profile

---

## 📞 Support

### Documentation
- This guide (GITHUB_PAGES_DEPLOY.md)
- TROUBLESHOOTING.md
- README.md

### Resources
- GitHub Pages Docs: https://pages.github.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
- React Router: https://reactrouter.com

---

**Status**: ✅ Ready to Deploy
**Repository**: https://github.com/thiyakuprogrammer/portfolio
**Live URL**: https://thiyakuprogrammer.github.io/portfolio/ (after deployment)

## 🚀 Deploy Now!

```bash
cd frontend
npm run deploy
```

---

**Last Updated**: March 1, 2026
**Deployment Method**: GitHub Pages
**Routing**: Hash Router
**Cost**: FREE! 🎉
