# Abdelrahman Elaref — Portfolio

Editorial-minimal portfolio site for Abdelrahman Elaref, Data Analyst.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # → ./dist
npm run preview  # serve ./dist locally
```

## Project structure

```
src/
  components/   shared UI components (Nav, Footer, Hero, Experience, ...)
  data/         project data
  layouts/      base Layout with head/meta defaults
  pages/        routes — index.astro, 404.astro, work/[slug].astro
  styles/       global.css with design tokens (Tailwind @theme)
public/
  img/          static images
  resume/       resume PDF
  _headers      Cloudflare Pages security + cache headers
```

## Design system

Defined in `src/styles/global.css` via Tailwind v4's `@theme` directive.

- **Type:** Fraunces (display, serif) + Inter (body, sans)
- **Color:** warm off-white paper, near-black ink, single amber accent (`#b45309`) used sparingly
- **Motion:** minimal — `IntersectionObserver`-driven reveal on scroll, honors `prefers-reduced-motion`

## Deployment

Auto-deployed to Cloudflare Pages on push. Build command: `npm run build`. Output directory: `dist`.
