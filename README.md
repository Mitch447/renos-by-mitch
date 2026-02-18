# Renos By Mitch — Website

A production-ready React website for Renos By Mitch, a residential renovation company
based in North Vancouver, BC. Built with React, Vite, and Framer Motion.

## Project Structure

```
src/
├── App.jsx                  # Root — assembles all sections
├── main.jsx                 # React entry point
├── styles/
│   └── global.css           # CSS variables, fonts, reset
└── components/
    ├── utils.jsx            # Shared: FadeIn, GoldLine, GoldAccent
    ├── Nav.jsx              # Sticky navigation + mobile menu
    ├── Hero.jsx             # Full-bleed hero with parallax
    ├── Pain.jsx             # Problem / pain agitation section
    ├── Solution.jsx         # Benefits grid
    ├── Process.jsx          # Step-by-step how it works
    ├── Testimonials.jsx     # Animated review carousel
    ├── About.jsx            # Mitch bio + credentials
    ├── CTA.jsx              # Final call-to-action + contact
    └── Footer.jsx           # Footer with links + copyright
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Customisation Checklist

Before going live, update these items:

### Contact Details
- `src/components/CTA.jsx` — update `PHONE`, `PHONE_HREF`, `EMAIL`, `EMAIL_HREF`
- `src/components/Footer.jsx` — update BC contractor licence number

### Content
- `src/components/Hero.jsx` — verify tagline and stats
- `src/components/About.jsx` — update Mitch's bio and credentials
- `src/components/Testimonials.jsx` — add real client reviews
- `src/components/Footer.jsx` — update services list if needed

### Images
Each placeholder image block contains a `TODO` comment showing exactly where to
drop in a real `<img>` tag. Recommended images:
- `public/images/hero-bg.jpg` — dramatic architectural/interior shot
- `public/images/mitch.jpg` — professional headshot of Mitch
- `public/images/project-1.jpg` through `project-4.jpg` — before/after shots

### SEO
- `index.html` — update `<meta name="description">` and `<title>` as needed

## Deployment (Vercel — recommended)

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your GitHub repo
3. Vercel auto-detects Vite — click Deploy
4. In Settings → Domains, add your custom domain (e.g. renosbymitch.ca)
5. Follow Vercel's DNS instructions to point your domain

Every future `git push` to `main` triggers an automatic redeploy.

## Tech Stack

- **React 18** — UI framework
- **Vite** — build tool & dev server
- **Framer Motion** — scroll animations and transitions
- **Cormorant Garamond** + **DM Sans** — typography (Google Fonts)
- Pure CSS-in-JS via inline styles + CSS variables (no Tailwind required)
