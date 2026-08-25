# 🚀 Gopikiran S — Next-Level Personal Developer Portfolio

An interactive, recruiter-ready developer portfolio web application built with modern web technologies, responsive glassmorphism design, and interactive developer features.

---

## 🌟 Key Highlights & Features

- 🌌 **Interactive Particle Constellation Background**: Reacts dynamically to mouse physics and theme changes.
- 💻 **Interactive Developer CLI Terminal**: Recruiters can test commands like `skills`, `projects`, `cat resume`, `sudo hire-me`, and `matrix`.
- 🎨 **4 Curated Theme Modes**: Cosmic Obsidian (Default), Cyber Neon, Emerald Matrix, and Clean Pro Light.
- 🃏 **3D Perspective Tilt on Project Cards**: Smooth physics-based tilt with category filtering and interactive tags.
- 📊 **Architecture & Deep Dive Case Studies**: Modal popup displaying system architecture flows, challenges solved, and measured impact.
- 📄 **In-Browser Interactive Printable Resume**: Real-time resume renderer with 1-click **Print / Save as PDF**.
- 🔊 **Subtle Futuristic Web Audio Synthesizer**: Generates UI sounds without external audio assets (with instant mute control).
- 📋 **1-Click Copy with Animated Toast**: Copy Email and Phone number with instant visual feedback.
- 📱 **100% Responsive & Cross-Browser Tested**: Flawless on Mobile (iOS/Android), Tablets, and 4K Displays.

---

## 📁 Project Structure

```
portfolio/
├── index.html            # Main semantic markup & SEO metadata
├── css/
│   ├── style.css         # Design tokens, themes, glassmorphism, buttons & layouts
│   ├── terminal.css      # Interactive CLI terminal styles & prompt animations
│   └── responsive.css    # Responsive breakpoints & resume print formatting
├── js/
│   ├── portfolio-data.js # Centralized configuration for all personal data & projects
│   ├── particles.js      # Dynamic HTML5 canvas particle constellation physics
│   ├── terminal.js       # CLI terminal emulator engine & command parser
│   ├── audio.js          # Web Audio API futuristic sound feedback
│   └── main.js           # UI logic, 3D card tilt, modals, scrollspy, and events
└── DEPLOYMENT_GUIDE.md   # Step-by-step free 1-click deployment guide
```

---

## 🛠️ How to Customize Your Portfolio

All your data is cleanly separated in `js/portfolio-data.js`:
1. Open `js/portfolio-data.js`.
2. Edit your **Bio**, **Projects**, **Work Experience**, **Social Links**, or **Skills**.
3. Save the file — the entire website automatically updates without editing any HTML/CSS!

---

## 🌐 How to Deploy for Free (To Share with Recruiters & Add in Resume)

### Option 1: Deploy with Vercel (Recommended — Takes 1 Minute)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** -> Import your portfolio repository or simply drag and drop the `portfolio` folder.
3. Click **Deploy**.
4. You will instantly get a free fast global URL like: `https://gopikiran.vercel.app`.

### Option 2: Deploy on GitHub Pages (Free Forever)
1. Push your `portfolio` code to a GitHub repository named `portfolio` (or `gopikirans.github.io`).
2. Go to repository **Settings** -> **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
4. Your website will be live at: `https://gopikirans.github.io/portfolio`.

### Option 3: Deploy with Netlify
1. Go to [netlify.com](https://app.netlify.com/drop).
2. Drag and drop the `portfolio` folder into the Netlify drop zone.
3. It will immediately publish your website with a free live link!
