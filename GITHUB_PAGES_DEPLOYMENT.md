# GitHub Pages Deployment Guide

## 🚀 Deploy Your Portfolio to GitHub Pages (FREE!)

Follow these steps to deploy your portfolio website live on GitHub Pages.

---

## Step 1: Prepare Your Repository

### Option A: Create New Repository on GitHub

1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Name it: `portfolio` (or any name you prefer)
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README
6. Click "Create repository"

### Option B: Use Existing Repository

If you already have a repository, you can use that.

---

## Step 2: Initialize Git (If Not Already Done)

Open terminal in your project root folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

---

## Step 3: Configure for GitHub Pages

### Update vite.config.js

If your repository name is NOT your username (e.g., `username.github.io`), update:

```javascript
// frontend/vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/', // Add your repo name here
})
```

**Example:**
- If repo is `portfolio`, use: `base: '/portfolio/'`
- If repo is `username.github.io`, use: `base: '/'`

### Update API URL for Production

Since GitHub Pages is frontend-only, you'll need a hosted backend. For now, let's create a mock data version:

**Option 1: Use Mock Data (Quick Deploy)**

Create `frontend/src/services/mockData.js`:

```javascript
export const mockProjects = [
  {
    id: 1,
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    techStack: "React, Node.js, MySQL",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.demo.com"
  },
  // ... add your 6 projects
];
```

Then update `frontend/src/pages/Portfolio.jsx` to use mock data when API fails.

**Option 2: Deploy Backend First**

Deploy backend to:
- Railway (https://railway.app) - $5/month
- Render (https://render.com) - Free tier
- Heroku (https://heroku.com) - $7/month

Then update `frontend/.env`:
```
VITE_API_URL=https://your-backend-url.com/api
```

---

## Step 4: Build Your Frontend

```bash
cd frontend
npm run build
```

This creates a `dist` folder with optimized production files.

---

## Step 5: Deploy to GitHub Pages

### Method 1: Using gh-pages Package (Recommended)

```bash
cd frontend
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the `dist` folder to that branch
4. Deploy automatically

### Method 2: Manual Deployment

```bash
# Build the project
cd frontend
npm run build

# Navigate to dist folder
cd dist

# Initialize git in dist
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to gh-pages branch
git push -f https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git main:gh-pages

cd ../..
```

---

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Source":
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
5. Click **Save**

GitHub will show: "Your site is ready to be published at..."

---

## Step 7: Wait for Deployment

- First deployment takes 2-5 minutes
- GitHub will show a green checkmark when ready
- Your site will be live at:
  - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
  - OR `https://YOUR_USERNAME.github.io/` (if repo name is username.github.io)

---

## Step 8: Verify Your Live Site

Visit your GitHub Pages URL and check:
- ✅ All pages load
- ✅ Navigation works
- ✅ Styling is correct
- ✅ Images load
- ✅ No console errors

---

## 🔄 Update Your Live Site

Whenever you make changes:

```bash
# Make your changes
# Then commit and push to main
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy to GitHub Pages
cd frontend
npm run deploy
```

---

## 🎨 Custom Domain (Optional)

### Add Custom Domain

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In GitHub repository Settings → Pages
3. Add your custom domain
4. Update DNS records:

**For apex domain (example.com):**
```
A Record → 185.199.108.153
A Record → 185.199.109.153
A Record → 185.199.110.153
A Record → 185.199.111.153
```

**For subdomain (www.example.com):**
```
CNAME → YOUR_USERNAME.github.io
```

5. Wait 24-48 hours for DNS propagation
6. Enable "Enforce HTTPS" in GitHub Pages settings

---

## 🐛 Troubleshooting

### Issue: Blank Page After Deployment

**Solution:**
1. Check `vite.config.js` base path
2. Ensure it matches your repo name
3. Rebuild and redeploy

### Issue: 404 on Page Refresh

**Solution:**
Create `frontend/public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Add to `frontend/public/index.html` in `<head>`:
```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### Issue: API Not Working

**Solution:**
- GitHub Pages only hosts static files
- You need to deploy backend separately
- Use Railway, Render, or Heroku for backend
- Update `VITE_API_URL` in frontend `.env`

### Issue: Images Not Loading

**Solution:**
- Use absolute paths: `/images/photo.jpg`
- Or import in components: `import photo from './photo.jpg'`
- Place images in `frontend/public/` folder

---

## 📋 Deployment Checklist

Before deploying:
- [ ] All content updated (name, bio, projects)
- [ ] Images optimized and added
- [ ] CV file added to `public/`
- [ ] API URL configured (or mock data added)
- [ ] Tested locally with `npm run build` and `npm run preview`
- [ ] Git repository created on GitHub
- [ ] vite.config.js base path set correctly
- [ ] No console errors in production build

After deploying:
- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Responsive on mobile
- [ ] No broken links
- [ ] Contact form works (if backend deployed)
- [ ] SEO meta tags present

---

## 🚀 Quick Deploy Commands

```bash
# One-time setup
cd frontend
npm install --save-dev gh-pages

# Every time you want to deploy
cd frontend
npm run deploy

# Your site will be live at:
# https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 📊 GitHub Pages Limits

- **Storage**: 1 GB
- **Bandwidth**: 100 GB/month
- **Build time**: 10 minutes
- **Cost**: FREE! 🎉

---

## 🎯 Alternative: Deploy Frontend Only (No Backend)

If you want to deploy without backend:

1. **Use Mock Data**
   - Create mock projects in `Portfolio.jsx`
   - Remove API calls
   - Use static data

2. **Use EmailJS for Contact Form**
   ```bash
   npm install @emailjs/browser
   ```
   - Sign up at https://www.emailjs.com
   - Replace backend API with EmailJS

3. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 📞 Need Help?

- GitHub Pages Docs: https://pages.github.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
- Check TROUBLESHOOTING.md in this project

---

## ✅ Success!

Once deployed, share your portfolio:
- Add to LinkedIn
- Share on Twitter
- Add to resume
- Send to potential clients

**Your live portfolio URL:**
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

**Last Updated**: March 1, 2026
**Status**: Ready to Deploy! 🚀
