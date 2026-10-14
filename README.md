# 🚀 Piyush Yadav - Personal Developer Portfolio

A modern, high-performance, and responsive single-page portfolio website tailored for **Piyush Yadav**, a first-year Computer Science Engineering student at **JECRC University, Jaipur**.

Built with semantic **HTML5**, modern **CSS3** (custom properties, glassmorphism, responsive grid & flexbox), and vanilla **JavaScript** (no heavy external frameworks or dependencies).

---

## 🌟 Key Features

- **Cyber & Tech Modern Dark Theme**: Deep navy/charcoal background (`#080C16`) with electric cyan (`#00F0FF`) and blue accents.
- **Light / Dark Mode Toggle**: Instant switch with smooth color transitions, persisting user preference in `localStorage`.
- **Animated Typing Effect**: Dynamic typewriter cycling through roles (*"First-Year B.Tech CSE Student"*, *"Aspiring Web Developer"*, *"Python & AI Enthusiast"*, etc.).
- **Smooth Navigation & ScrollSpy**: Sticky navigation bar with active section highlighting as you scroll.
- **Mobile Responsive Drawer**: Hamburger menu with backdrop blur and smooth slide animation on mobile and tablet screens.
- **Grouped Skills Cards with Animated Progress**: Interactive progress bars that smoothly animate into view when scrolled to.
- **Featured Projects Showcase**: 4 project cards with tech tags, live demo buttons, and GitHub links.
- **Education & Milestones Timeline**: Visual academic journey from High School to B.Tech at JECRC University (2025–2029).
- **Interactive Contact Section**:
  - Live client-side input validation (Name, Email, Message length).
  - One-click **Copy Email to Clipboard** button.
  - Floating Toast Notifications.
  - Easy 1-minute setup for free email forwarding via [Formspree](https://formspree.io).
- **Floating Back-to-Top Button**: Appears smoothly after scrolling down.

---

## 📂 Project Structure

```text
portfolio-piyush/
│
├── index.html              # Main semantic HTML structure with clearly marked comments
├── style.css               # Complete responsive CSS styling & themes
├── script.js               # Interactive features (Typewriter, Theme toggle, Form validation, ScrollSpy)
├── README.md               # Documentation, setup & deployment guide
│
└── assets/                 # Graphics & static files
    ├── favicon.svg         # Monogram browser icon (PY)
    ├── avatar.svg          # Stylized developer avatar illustration
    ├── project-hackathon.svg # Hackathon project preview graphic
    ├── project-ai.svg      # AI data explorer graphic
    ├── project-portfolio.svg# Responsive web mockup graphic
    ├── project-python.svg  # Python terminal automation graphic
    └── resume-sample.pdf   # Sample resume download placeholder
```

---

## ✏️ How to Customize Your Content

All files are thoroughly commented with `<!-- EDIT HERE: ... -->` or `/* EDIT HERE: ... */` so you can customize them in seconds:

### 1. Change Your Details (index.html)
- **Name & Title**: Search for `Piyush Yadav` in `index.html` to update title or headings.
- **Bio & Tagline**: Locate the `<p class="hero-tagline">` and `<p class="about-bio-text">` sections to personalize your story.
- **Projects**: Search for `<!-- Project 1 -->` in `index.html`. Replace the titles, descriptions, and update the `href=""` attributes in the "Live Demo" and "GitHub" buttons with your actual URLs.
- **Social Links**: Replace the GitHub and LinkedIn links with your preferred links.
- **Your Photo**: Place your photo inside `assets/` (e.g. `assets/my-photo.jpg`) and replace `src="assets/avatar.svg"` in `index.html`.
- **Your Resume**: Put your PDF file into `assets/my-resume.pdf` and update the link `<a href="assets/my-resume.pdf">`.

### 2. Connect Your Contact Form to Receive Real Emails (Free)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **"+ New Form"** and enter your university email (`piyush.26bcon2195@jecrcu.edu.in`).
3. Copy your Form ID (looks like `f/xdoqwbzy`).
4. In `index.html`, update line containing `<form class="contact-form" id="contactForm">` to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Now, every time someone sends a message through your portfolio, it goes straight to your inbox!

---

## 💻 How to Run Locally

### Option 1: Double-Click (Easiest)
Simply open the `portfolio-piyush` folder in File Explorer and double-click `index.html`. It will open in your default browser (Chrome, Edge, Brave, Firefox).

### Option 2: VS Code Live Server (Recommended)
1. Open Visual Studio Code.
2. Open the `portfolio-piyush` folder (`File` > `Open Folder...`).
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab (`Ctrl+Shift+X`).
4. Right-click `index.html` and click **"Open with Live Server"**.
5. Your portfolio will run at `http://127.0.0.1:5500` with automatic live reload on every save!

---

## 🌐 How to Deploy for Free

### Method A: Deploy on GitHub Pages (Free & Recommended for Developers)

1. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com) and log in.
   - Click **"New"** to create a new repository.
   - Name it `portfolio` (or `<your-username>.github.io`).
   - Set it to **Public** and do not add a README (since you already have one).
   - Click **"Create repository"**.

2. **Push your code from VS Code / Terminal**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/piyush26bcon2195-cell/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** (top right) > **Pages** (in left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under Branch, select `main` and `/ (root)`, then click **Save**.
   - In 1-2 minutes, your website will be live at:
     `https://piyush26bcon2195-cell.github.io/portfolio/`

---

### Method B: Deploy on Netlify (Instant Drag & Drop - 30 Seconds)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (sign in or sign up for free).
2. Drag and drop the `portfolio-piyush` folder directly onto the page.
3. Netlify will deploy your site in 5 seconds and give you a live URL like `https://piyush-yadav.netlify.app`!
4. You can change your site name in **Site settings** > **Change site name**.

---

## 📜 Credits & License

- Designed for **Piyush Yadav** (JECRC University, Jaipur).
- Icons provided by [Font Awesome 6](https://fontawesome.com).
- Typography provided by [Google Fonts (Outfit & Inter)](https://fonts.google.com).
- Feel free to use, modify, and showcase this portfolio freely!
