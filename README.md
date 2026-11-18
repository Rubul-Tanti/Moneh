# Moneh

Moneh is a digital product studio for web design, development, apps, AI
integration, branding, and digital marketing.

## Build and prerender

Run `npm run build` to type-check the app, build the Vite assets, and prerender
every public route into `dist`:

- `/`
- `/case-studies`
- `/case-studies/cogniflow`
- `/case-studies/shiftswip`
- `/contact`

The prerender step also writes `dist/sitemap.xml`. `public/robots.txt` points
crawlers to that sitemap, and `vercel.json` maps clean URLs to their prerendered
HTML files.

Route titles, descriptions, canonicals, social metadata, and structured data are
defined in `src/seo.ts`. Update the site origin there and in
`public/robots.txt` if the canonical domain changes. The current canonical
domain is `https://moneh.in`; configure and verify that custom domain in Vercel
before deploying it as the primary site.

The default social preview is `public/og-image.png` (1200 × 630). Replace it
with the final brand artwork at the same path and dimensions when available.
