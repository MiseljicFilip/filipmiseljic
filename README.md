# Filip Mišeljić — Portfolio

Personal portfolio and resume site: frontend developer showcase with projects, testimonials, and contact.

**Live site:** [MiseljicFilip.github.io/filipmiseljic](https://MiseljicFilip.github.io/filipmiseljic)

---

## Features

- **Sections:** Home, About, Projects, Testimonials, Contact
- **Theme:** Light / dark / system, with blue, purple, and green accent options (persisted in `localStorage`)
- **Responsive:** Navbar + mobile menu, readable on all screen sizes
- **Contact:** Contact form (EmailJS) and one-click email copy
- **Resume:** Download CV button serves `public/resume.pdf`
- **SEO:** JSON-LD structured data (Person), semantic HTML, skip link
- **Extras:** Reading progress bar, section indicator, loading screen, small easter egg

---

## Tech stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4**
- **EmailJS** (contact form)
- **Lucide React** (icons)
- **gh-pages** (deploy to GitHub Pages)

---

## Getting started

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Updating content

### Resume / CV

- **First time:** Add your PDF as **`public/resume.pdf`**.
- **To update:** Replace `public/resume.pdf` with the new file (keep the filename). No code changes needed.

### Site config (name, email, links, resume filename)

Edit **`src/data/site.js`**:

- `person` — name, job title, description, `sameAs` (LinkedIn, GitHub, etc.)
- `email` — used for the “Copy email” button
- `resumeDownloadName` — filename offered when downloading the CV
- `siteUrl` — canonical URL (no trailing slash), used for JSON-LD and sharing

### Projects and testimonials

- **Projects:** `src/data/projects.js`
- **Testimonials:** `src/data/testimonials.js`

---

## Deployment

The site is deployed to **GitHub Pages** via `gh-pages`:

```bash
npm run deploy
```

This runs `npm run build` (via `predeploy`) and publishes the `dist` folder to the `gh-pages` branch. The `homepage` in `package.json` must match your GitHub Pages URL.

---

## Project structure (overview)

| Path | Purpose |
|------|--------|
| `src/data/` | Site config, projects, testimonials |
| `src/components/sections/` | Home, About, Projects, Testimonials, Contact |
| `src/components/` | Navbar, Footer, LoadingScreen, Contact form, etc. |
| `public/` | Static assets; `resume.pdf` is the CV |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy to GitHub Pages |
