# ShowCase | Mini-Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A minimal, dark-themed personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**. Designed with high-fashion aesthetics in mind — editorial typography, gold accents, and fluid motion throughout.

---

## ✨ Features

- **Animated Hero section** — parallax scroll effect, gold radial glows, film-grain texture, and stat counters
- **About section** — bio, values cards, and a skills toolkit grid (Frontend, Backend, Motion, Tools)
- **Contact / Footer** — project inquiry CTA with social links (LinkedIn, Instagram, Facebook)
- **Responsive Navbar** — scroll-aware glass effect on desktop; full-screen animated mobile menu
- **Framer Motion** — scroll-driven animations and smooth entrance transitions throughout
- **Multi-language context** — `LanguageContext` set up and ready to extend
- **Fully responsive** — mobile-first layout, fluid typography with `clamp()`

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Deployment | Vercel (recommended) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ImaneElla/ShowCase.git
cd ShowCase

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── icon.svg          # Favicon
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (composes all sections)
├── components/
│   ├── Navbar.tsx        # Fixed nav with scroll-aware glass effect
│   ├── Hero.tsx          # Landing section with parallax & stats
│   ├── About.tsx         # Bio, values, and skills grid
│   └── Footer.tsx        # Contact CTA and social links
└── context/
    └── LanguageContext.tsx  # Multi-language context provider
```

---

## 🎨 Design Tokens

The palette is intentionally minimal — near-black backgrounds with gold as the single accent color.

| Token | Value | Usage |
|---|---|---|
| Background | `#0a0a0a` | Page background |
| Gold (primary) | `#c9a84c` | Accents, headings, borders |
| Gold (light) | `#f0d080` | Gradient highlights |
| Gold (dark) | `#a07830` | Gradient shadows |
| Text muted | `#656565` / `#8a8a8a` | Body copy |

---

## 🌐 Deployment

This project is optimized for **Vercel**. Push to GitHub and import the repo at [vercel.com](https://vercel.com) — zero configuration needed.

---
