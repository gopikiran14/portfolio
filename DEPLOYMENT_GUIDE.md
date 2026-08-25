# 🌐 Worldwide Free Deployment Guide for Gopikiran S

This guide outlines exactly how to deploy your portfolio online so anyone in the world can view it via a clean, fast web link across any browser (Chrome, Safari, Edge, Firefox, Mobile, etc.) and you can include it directly in your resume and LinkedIn.

---

## ⚡ Method 1: Deploy with Vercel (Fastest & Most Recommended)

**Why Vercel?**  
- Ultra-fast global edge network (instant page loading)
- Free SSL HTTPS certificate automatically
- Clean URL like `https://gopikiran-portfolio.vercel.app`
- 100% Free

### Steps:
1. **Via GitHub (Automated Continuous Deployment)**:
   - Push this `portfolio` folder to a GitHub repository (e.g. `github.com/gopikirans/portfolio`).
   - Open [https://vercel.com](https://vercel.com) and Sign In with GitHub.
   - Click **"Add New..."** ➔ **"Project"**.
   - Select your `portfolio` repository and click **"Deploy"**.
   - In 15 seconds, Vercel will give you a live URL like `https://gopikiran.vercel.app`.

2. **Via Drag & Drop (No Git required)**:
   - Install the Vercel CLI via terminal: `npm install -g vercel`
   - In your portfolio directory, run: `vercel`
   - Follow the 3 prompt questions, and your site is instantly published!

---

## 🐙 Method 2: Deploy on GitHub Pages (Free Forever on GitHub)

**Why GitHub Pages?**  
- Tied directly to your GitHub profile: `https://gopikirans.github.io`

### Steps:
1. In your terminal, navigate to the `portfolio` folder:
   ```bash
   cd C:\Users\gopikirans\.gemini\antigravity-ide\scratch\portfolio
   git init
   git add .
   git commit -m "feat: initial release of next-level developer portfolio"
   ```
2. Create a new public repository on GitHub named:
   - `gopikirans.github.io` (for a direct domain `https://gopikirans.github.io`)
   - OR `portfolio` (for `https://gopikirans.github.io/portfolio`)
3. Link and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/gopikirans/gopikirans.github.io.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings** ➔ **Pages** ➔ Set Branch to `main` and Folder to `/ (root)` ➔ Click **Save**.
5. Your portfolio is now permanently live!

---

## 🚀 Method 3: Deploy with Netlify Drop (Instant Drag-and-Drop)

1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2. Drag and drop the `portfolio` folder directly into the browser window.
3. Your site is live immediately with a link like `https://gopikiran-dev.netlify.app`!

---

## 📝 How to Add It to Your Resume & LinkedIn

Once your link is live (e.g. `https://gopikiran.vercel.app` or `https://gopikirans.github.io`):

1. **In Your Resume Header**:
   ```
   GOPIKIRAN S
   Software Engineer | Full Stack Developer
   Email: gopikiran14062002@gmail.com | Phone: +91 9363789859
   Portfolio: https://gopikiran.vercel.app | LinkedIn: linkedin.com/in/gopikirans
   ```

2. **On LinkedIn Profile**:
   - Go to your profile ➔ Click **"Edit Intro"** (pencil icon).
   - Under **"Custom Button"**, choose **"Link"**.
   - Paste your portfolio URL and set button text to **"View Portfolio"**.
   - Add it under the **"Featured"** section with a screenshot of the homepage!
