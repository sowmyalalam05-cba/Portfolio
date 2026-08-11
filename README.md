# Cyber Sentinel

Build a premium, futuristic, dark-themed cybersecurity portfolio website using React (Next.js preferred) with Tailwind CSS and Framer Motion.

⚠️ IMPORTANT:

- This is a frontend-only portfolio
- Use the sample data provided below
- Focus on animations, UI, and professional look
- The design should feel like a hacker/cybersecurity dashboard

---

👩‍💻 PORTFOLIO OWNER DETAILS:

Name: Sowmya Lalam  
Email: sowmyalalam05@gmail.com  
Role: Cybersecurity Analyst

Bio:
"I am a passionate cybersecurity graduate student at the University of Maryland, Baltimore County, specializing in network security, threat analysis, and ethical hacking. I enjoy identifying vulnerabilities, securing systems, and building tools that enhance digital safety. My goal is to contribute to building secure and resilient systems in an increasingly connected world."

---

🎨 DESIGN THEME:

Colors:

- Background: #0A0A0A (deep black)
- Primary: #00FF9C (neon green)
- Secondary: #00E5FF (cyan)
- Accent: #0F172A (dark blue)

Fonts:

- Headings: Orbitron or Montserrat
- Body: Poppins

Style:

- Futuristic hacker UI
- Terminal-inspired components
- Neon glow effects
- Glassmorphism cards
- Smooth animations

---

🖥️ HERO SECTION:

- Fullscreen dark background with animated particles or code rain
- Typing animation:

"Hi, I'm Sowmya Lalam"
"Cybersecurity Analyst"

- Subtitle:
  "Securing systems. Defending networks. Building trust."

- Buttons:
- View Projects
- Download Resume

---

💻 TERMINAL SECTION (VERY IMPORTANT):

Create a fake terminal UI with typing animation:

> whoami  
> Cybersecurity Analyst

> skills  
> Network Security | Ethical Hacking | Threat Analysis

> status  
> Actively seeking opportunities

---

🧠 SKILLS SECTION:

Categories:

1. Security Tools:

- Wireshark
- Metasploit
- Burp Suite
- Nmap
- Splunk

2. Programming:

- Python
- JavaScript
- C
- Bash

3. Networking:

- TCP/IP
- DNS
- Firewalls
- VPN

4. Security Concepts:

- Penetration Testing
- Vulnerability Assessment
- Cryptography Basics
- SIEM

Display as:

- Glowing badges or animated progress bars

---

💼 PROJECTS SECTION:

Create 4 project cards with hover glow effects:

1. Network Vulnerability Scanner

- Built using Python and Nmap
- Scans open ports and identifies vulnerabilities

2. Phishing Detection System

- Detects malicious URLs using ML concepts
- Built with Python

3. Password Strength Analyzer

- Evaluates password security
- Suggests improvements

4. SIEM Dashboard Simulation

- Simulated log monitoring dashboard
- Detects suspicious activities

Each project:

- Title
- Description
- Tech stack
- GitHub button (dummy link)

---

🏆 CERTIFICATIONS SECTION:

- CompTIA Security+ (In Progress)
- Ethical Hacking Essentials
- Cybersecurity Fundamentals (Coursera)

---

📝 BLOG SECTION:

Add 3 sample blog cards:

1. "Understanding SQL Injection Attacks"
2. "Top 10 Cybersecurity Threats in 2025"
3. "How Password Cracking Works"

---

📄 RESUME SECTION:

- Add "Download Resume" button
- Add preview card (dummy)

---

📊 EXPERIENCE / EDUCATION:

Education:

- Master’s in Cybersecurity  
  University of Maryland, Baltimore County  
  (2023 – 2025)

---

📞 CONTACT SECTION:

- Email: sowmyalalam05@gmail.com
- LinkedIn (dummy)
- GitHub (dummy)

Include contact form:

- Name
- Email
- Message

---

⚡ ANIMATIONS:

- Typing animation (hero + terminal)
- Cursor blinking
- Scroll reveal (fade/slide)
- Neon hover effects
- Particle background

---

🎯 FEATURES:

- Fully responsive
- Sticky navbar
- Smooth scrolling
- Dark mode only
- Modern UI

---

🧠 TECH STACK:

- React / Next.js
- Tailwind CSS
- Framer Motion

---

🚫 DO NOT INCLUDE:

- Backend
- Authentication
- Real APIs

---

🎯 FINAL OUTPUT:

- Complete working React portfolio
- Clean component structure
- Premium UI with animations
- Ready to run locally

its my prestaggious project so build perfectly with seo rankinng

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cyber-guardian-lalam.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4bc985d9-e44b-454f-a60c-52e9b4127cfd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Contact form email setup

The contact form sends messages through a server-only Resend request. For a Vercel deployment:

1. Create a Resend account using `sowmyalalam05@gmail.com` and create an API key.
2. In Vercel, open **Project Settings → Environment Variables**.
3. Add `RESEND_API_KEY` and paste the Resend API key as its value.
4. Redeploy the project after saving the variable.

The default testing sender, `onboarding@resend.dev`, can send only to the email address associated
with the Resend account. To use another recipient later, verify a domain in Resend and set
`CONTACT_FROM_EMAIL` in Vercel. See `.env.example` for all supported variables.
