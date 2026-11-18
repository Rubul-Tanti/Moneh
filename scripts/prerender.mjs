import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer } from 'vite'

const vite = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
})

try {
  const [{ default: App }, seo] = await Promise.all([
    vite.ssrLoadModule('/src/App.tsx'),
    vite.ssrLoadModule('/src/seo.ts'),
  ])
  const template = await readFile(path.resolve('dist/index.html'), 'utf8')
  const buildDate = process.env.SOURCE_DATE_EPOCH
    ? new Date(Number(process.env.SOURCE_DATE_EPOCH) * 1000)
    : new Date()
  const lastmod = buildDate
    .toISOString()
    .slice(0, 10)
  const sitemapEntries = []

  for (const route of seo.PUBLIC_ROUTES) {
    const markup = renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: [route] },
        createElement(App),
      ),
    )
    const headingCount = (markup.match(/<h1(?:\s|>)/g) ?? []).length

    if (headingCount !== 1) {
      throw new Error(
        `Expected exactly one h1 for ${route}, received ${headingCount}.`,
      )
    }

    const routeHtml = template
      .replace('<!-- SEO_HEAD -->', seo.renderSeoHead(seo.getSeoMetadata(route)))
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

    if (routeHtml.includes('<!-- SEO_HEAD -->') || routeHtml.includes('<div id="root"></div>')) {
      throw new Error(`Failed to inject prerendered content for ${route}.`)
    }

    const outputPath =
      route === '/'
        ? path.resolve('dist/index.html')
        : path.resolve(`dist${route}/index.html`)
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, routeHtml)

    const canonical = seo.getSeoMetadata(route).canonical
    sitemapEntries.push(
      `  <url>\n    <loc>${canonical}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    console.log(`Prerendered ${route}`)
  }

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapEntries,
    '</urlset>',
    '',
  ].join('\n')
  await writeFile(path.resolve('dist/sitemap.xml'), sitemap)
} finally {
  await vite.close()
}
