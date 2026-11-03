# JL Corp — Enterprise Digital Flagship

> Official redesigned web platform for **JL Corp** ([jlcorp.in](https://jlcorp.in/)).  
> Engineered with a dark futuristic corporate aesthetic, balanced 3D interactive hero sculpture, sub-second performance, and static cPanel deployment compatibility.

---

## 🚀 Tech Stack

- **Framework**: React 18 with Vite & TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **3D Visualization**: Three.js & React Three Fiber (R3F)
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Hosting / Deployment**: Static Vite build with Apache `.htaccess` SPA routing rules (cPanel/WHM ready)

---

## 🎨 Brand System

- **Primary Red**: `#E00000`
- **Near-Black**: `#090909`
- **Charcoal Surface 1**: `#121212`
- **Elevated Surface 2**: `#1A1A1A`
- **High-Contrast Text**: `#F5F5F5`
- **Typography**:
  - Headings: *Syne*
  - Body: *Plus Jakarta Sans*
  - Code/Telemetry: *JetBrains Mono*

---

## 🛠️ Project Structure

```
├── public/
│   ├── .htaccess                   # cPanel Apache SPA rewrite & caching
│   ├── logo.png                    # Preserved official JL Corp logo
│   ├── logo-dark.png               # Transparent dark-theme logo (white CORP)
│   └── logo-light.png              # Transparent light-theme logo (black CORP)
│
├── src/
│   ├── components/
│   │   ├── 3d/                     # Three.js / R3F Canvas & mobile fallback
│   │   ├── common/                 # Button, Card, Badge, SectionHeader, Logo
│   │   ├── layout/                 # Sticky Navbar, Footer, PageLayout
│   │   └── sections/               # Hero, Intro, Services, Projects, Marquee, etc.
│   │
│   ├── data/                       # Content strictly decoupled from UI
│   │   ├── company.ts              # Verified contact, address, meta
│   │   ├── services.ts             # 6 verified enterprise practices
│   │   ├── projects.ts             # Featured & verified projects
│   │   ├── process.ts              # 5-stage engineering lifecycle
│   │   └── differentiators.ts      # 4 core differentiators
│   │
│   ├── pages/                      # Home, About, Services, ServiceDetail, Work, Contact
│   ├── styles/                     # Tailwind directives & futuristic grid utilities
│   ├── types/                      # Strict TypeScript interfaces
│   ├── App.tsx                     # Route hierarchy
│   └── main.tsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be generated in the `dist/` directory.

---

## 🌐 cPanel / WHM Deployment Guide

1. Run `npm run build`.
2. Upload all files from `dist/` directly into your cPanel `public_html` directory (including `.htaccess`).
3. The `.htaccess` file automatically handles client-side React Router navigation without 404s.

---

© 2026 JL Corp. All Rights Reserved.
