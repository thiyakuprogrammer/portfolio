# 🚀 Netlify Deployment Guide

Complete guide to deploy your portfolio website to Netlify for FREE!

---

## ✅ What's Been Prepared

Your portfolio is now ready for Netlify deployment with:
- ✅ `netlify.toml` configuration file
- ✅ `_redirects` file for SPA routing
- ✅ Mock data fallback (works without backend)
- ✅ Optimized build settings
- ✅ Security headers configured

---

## 🎯 Deployment Methods

### Method 1: Deploy via Netlify Dashboard (Easiest)

#### Step 1: Create Netlify Account
1. Go to https://www.netlify.com
2. Click "Sign up" (free forever)
3. Sign up with GitHub, GitLab, or Email

#### Step 2: Prepare Your Code
```bash
# Make sure all changes are committed
git add .
git commit -m "Prepare for Netlify deployment"
```

#### Step 3: Push to GitHub (if not already done)
```bash
# Create a new repository on GitHub first
# Then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### Step 4: Deploy on Netlify
1. Log in to Netlify Dashboard
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your repositories
5. Select your portfolio repository
6. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
7. Click "Deploy site"

#### Step 5: Wait for Deployment
- First deployment takes 2-5 minutes
- Netlify will show build logs
- Once complete, you'll get a live URL like: `https://random-name-123.netlify.app`

#### Step 6: Customize Your URL (Optional)
1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Change to: `thiyaku-portfolio` or your preferred name
4. Your site will be: `https://thiyaku-portfolio.netlify.app`

---

### Method 2: Deploy via Netlify CLI

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify
```bash
netlify login
```

#### Step 3: Initialize Netlify
```bash
# From project root
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: `thiyaku-portfolio`
- Build command: `npm run build`
- Directory to deploy: `frontend/dist`
- Base directory: `frontend`

#### Step 4: Deploy
```bash
# Deploy to production
netlify deploy --prod
```

---

### Method 3: Drag & Drop (Quick Test)

#### Step 1: Build Locally
```bash
cd frontend
npm run build
```

#### Step 2: Deploy
1. Go to https://app.netlify.com/drop
2. Drag the `frontend/dist` folder
3. Your site is live instantly!

**Note**: This method doesn't connect to Git, so updates require manual re-upload.

---

## 🔧 Configuration Details

### netlify.toml
Located at `frontend/netlify.toml`:
```toml
[build]
  base = "frontend/"
  publish = "dist/"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### _redirects
Located at `frontend/public/_redirects`:
```
/*    /index.html   200
```
This ensures React Router works correctly on Netlify.

---

## 🎨 Features Working on Netlify

### ✅ Working Features
- All 7 pages (Home, About, Skills, Portfolio, Resume, Blog, Contact)
- Navigation and routing
- Animations and styling
- Responsive design
- Mock project data (6 sample projects)
- Image display (your profile picture)
- SEO meta tags

### ⚠️ Limited Features (Without Backend)
- **Contact Form**: Shows alternative contact info instead of saving to database
- **Projects**: Uses mock data instead of database

---

## 🔄 Update Your Live Site

### If Connected to Git:
```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main

# Netlify auto-deploys!
```

### If Using CLI:
```bash
cd frontend
npm run build
netlify deploy --prod
```

---

## 🌐 Custom Domain (Optional)

### Add Your Own Domain

#### Step 1: Buy a Domain
- Namecheap, GoDaddy, Google Domains, etc.

#### Step 2: Add to Netlify
1. Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain: `yourname.com`
4. Click "Verify"

#### Step 3: Update DNS
Add these records at your domain registrar:

**For apex domain (example.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app
```

#### Step 4: Enable HTTPS
- Netlify provides free SSL automatically
- Wait 24 hours for DNS propagation
- HTTPS will be enabled automatically

---

## 🚀 Performance Optimization

### Already Configured:
- ✅ Asset caching (1 year)
- ✅ Gzip compression
- ✅ CDN distribution
- ✅ Security headers
- ✅ Optimized builds

### Additional Optimizations:
1. **Enable Asset Optimization** (Netlify Dashboard)
   - Site settings → Build & deploy → Post processing
   - Enable: Bundle CSS, Minify CSS, Minify JS, Compress images

2. **Add Prerendering** (for better SEO)
   - Install: `npm install --save-dev netlify-plugin-prerender`
   - Add to `netlify.toml`:
   ```toml
   [[plugins]]
     package = "netlify-plugin-prerender"
   ```

---

## 📊 Netlify Features

### Free Plan Includes:
- ✅ 100 GB bandwidth/month
- ✅ Unlimited sites
- ✅ HTTPS/SSL certificates
- ✅ Continuous deployment
- ✅ Custom domains
- ✅ Form handling (100 submissions/month)
- ✅ CDN distribution
- ✅ Deploy previews

---

## 🔐 Environment Variables

If you deploy a backend later and want to connect it:

1. Go to Site settings → Environment variables
2. Add variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.com/api`
3. Redeploy the site

---

## 🐛 Troubleshooting

### Issue: Build Failed

**Check build logs:**
1. Go to Deploys tab
2. Click on failed deploy
3. View build logs

**Common fixes:**
```bash
# Ensure dependencies are in package.json
cd frontend
npm install
npm run build  # Test locally first
```

### Issue: 404 on Page Refresh

**Solution**: Already fixed with `_redirects` file!

If still happening:
1. Check `frontend/public/_redirects` exists
2. Verify `netlify.toml` has redirect rules
3. Redeploy

### Issue: Images Not Loading

**Solution**:
- Images in `frontend/src/asserts/` are bundled correctly
- Images in `frontend/public/` are served as static files
- Check browser console for 404 errors

### Issue: Blank Page

**Check:**
1. Browser console for errors (F12)
2. Build logs on Netlify
3. Base path in `vite.config.js` should be `/`

### Issue: Slow Loading

**Solutions:**
1. Enable asset optimization in Netlify
2. Compress images before uploading
3. Use WebP format for images

---

## 📱 Testing Your Deployment

### Checklist:
- [ ] Visit your Netlify URL
- [ ] Test all 7 pages
- [ ] Check navigation works
- [ ] Verify images load
- [ ] Test on mobile (responsive)
- [ ] Check browser console (no errors)
- [ ] Test contact form
- [ ] Verify projects display
- [ ] Check page refresh works
- [ ] Test on different browsers

---

## 🎯 Post-Deployment

### Share Your Portfolio:
1. **LinkedIn**: Add to profile
2. **Resume**: Include the URL
3. **GitHub**: Add to repository description
4. **Twitter/X**: Share your work
5. **Email Signature**: Add the link

### Monitor Your Site:
1. **Netlify Analytics** (paid, but optional)
2. **Google Analytics** (free)
   - Add tracking code to `index.html`
3. **Google Search Console**
   - Submit sitemap for SEO

---

## 🔄 Continuous Deployment

Once connected to Git, Netlify automatically:
1. Detects new commits
2. Builds your site
3. Deploys if build succeeds
4. Sends you notifications

**Deploy previews** for pull requests:
- Each PR gets a preview URL
- Test changes before merging
- Automatic cleanup after merge

---

## 💡 Pro Tips

1. **Branch Deploys**
   - Deploy different branches to different URLs
   - Great for testing features

2. **Deploy Contexts**
   - Different settings for production/preview
   - Configure in `netlify.toml`

3. **Netlify Functions** (if you need backend later)
   - Serverless functions
   - No separate backend needed
   - Free tier: 125k requests/month

4. **Form Handling**
   - Netlify can handle forms without backend
   - Add `netlify` attribute to form
   - 100 submissions/month free

---

## 📋 Deployment Checklist

Before deploying:
- [ ] All content updated
- [ ] Images optimized
- [ ] Tested locally (`npm run build` && `npm run preview`)
- [ ] Git repository created
- [ ] All changes committed
- [ ] `.env` files not committed (in .gitignore)
- [ ] Build succeeds locally

After deploying:
- [ ] Site is live
- [ ] All pages accessible
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Forms work (show alternative contact)
- [ ] Custom domain configured (if applicable)

---

## 🎉 Success!

Your portfolio is now live on Netlify!

**Your live URL:**
```
https://your-site-name.netlify.app
```

**Next steps:**
1. Share your portfolio
2. Add to resume/LinkedIn
3. Keep updating with new projects
4. Monitor analytics

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://answers.netlify.com
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html

---

**Last Updated**: March 1, 2026
**Status**: Ready to Deploy! 🚀
**Deployment Time**: ~5 minutes
**Cost**: FREE! 🎉
