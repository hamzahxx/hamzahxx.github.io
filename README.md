# hamzahcodes.in

Personal portfolio of **Hamzah Chhapra** — developer & product manager.
Live at **[hamzahcodes.in](https://hamzahcodes.in)** (served from this GitHub user site).

Dark, editorial "engineer's datasheet" look — Fraunces + Space Mono + Inter, single gold accent.

## Stack

- **React 19** + **Vite** — single-page app, zero routing
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **GSAP** (+ ScrollTrigger) for the intro and scroll reveals

## Develop

```bash
npm install
npm run dev        # http://localhost:5173  (HMR)
npm run build      # -> dist/
npm run preview    # serve the production build locally
```

## Editing content

All copy lives in one file — **`src/data.js`** (profile, hero datasheet, about,
experience, skills, projects). Edit there; the page updates live. No content is
hard-coded in components except section headings.

## Structure

```
index.html            Vite entry (fonts, meta, favicon)
src/
  main.jsx            React root
  index.css           Tailwind + theme tokens (colors, fonts, grid, crop marks)
  data.js             ← all site content
  App.jsx             layout + GSAP setup
  components/         Nav, Hero, About, Experience, Skills, Projects, Contact, Footer
public/
  assets/hamzah-cv.pdf
  images/             photo + social icons
  CNAME               hamzahcodes.in
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages.

One-time setup: **repo Settings → Pages → Source = GitHub Actions**.
