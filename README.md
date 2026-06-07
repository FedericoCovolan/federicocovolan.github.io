# Federico Covolan — Portfolio

Personal portfolio website. Static HTML/CSS/JS, no build step.

## Pages
- `index.html` — Home
- `about.html` — About me
- `projects.html` — Index of all 12 projects
- `project_*.html` — Individual project pages
- `get_in_touch.html`, `privacy.html`

## Stack
- HTML / CSS / vanilla JS
- Type: **Space Grotesk** (display) · **Archivo** (body) · **Instrument Serif** (editorial italics)
- Fonts are self-hosted in `fonts/` with a Google Fonts fallback
- Stylesheets: `styles.css` is the root entry that imports `colors_and_type.css`, `pages.css`, `project_page.css`

## Deploy
Drop the folder on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). No server side required.

## Local preview
Just open `index.html` in a browser — or run a tiny server:
```bash
python3 -m http.server 8000
```

© Federico Covolan — Systemic & Strategic Designer
