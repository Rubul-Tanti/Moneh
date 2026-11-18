import { caseStudies } from './components/caseStudy'

export const SITE_URL = 'https://moneh.in'
export const SITE_NAME = 'Moneh'
export const SITE_DESCRIPTION =
  'Moneh is a digital product studio for web design, development, apps, AI integration, branding and digital marketing.'
export const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`
export const LOGO_URL = `${SITE_URL}/logo.png`
export const PUBLIC_ROUTES = [
  '/',
  '/case-studies',
  ...caseStudies.map((study) => study.href),
  '/contact',
]

export type SeoMetadata = {
  title: string
  description: string
  canonical: string
  image: string
  structuredData: string
}

type RouteMetadata = Pick<SeoMetadata, 'title' | 'description'>

const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'Web Design & Development Studio | Moneh',
    description:
      'Design, development and marketing for ambitious businesses. Build a website, app or digital product with Moneh—one team to launch, grow and get found online.',
  },
  '/case-studies': {
    title: 'Digital Product Case Studies | Moneh',
    description:
      'Explore Moneh case studies in AI platforms, workforce marketplaces and digital products. See how we help ambitious teams turn ideas into useful software.',
  },
  '/contact': {
    title: 'Contact Moneh | Start a Digital Project',
    description:
      'Talk with Moneh about your website, app, software or marketing project. Share your goals and get a clear next step from our digital product team today.',
  },
}

function getRouteMetadata(pathname: string): RouteMetadata {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const knownRoute = routeMetadata[normalizedPath]
  if (knownRoute) return knownRoute

  const study = caseStudies.find((item) => item.href === normalizedPath)
  if (study) {
    const description =
      study.name === 'Cogniflow'
        ? 'See how Moneh built Cogniflow, an AI calling platform with multilingual voice agents, real-time call tools and a focused SaaS experience for businesses.'
        : 'See how Moneh built ShiftSwip’s workforce marketplace, connecting businesses and gig workers with flexible shifts, real-time updates and reliable systems.'

    return {
      title: `${study.name} Case Study | Moneh`,
      description,
    }
  }

  return routeMetadata['/']
}

function escapeJsonForHtml(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function getStructuredData(): string {
  return escapeJsonForHtml({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        logo: {
          '@type': 'ImageObject',
          url: LOGO_URL,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
    ],
  })
}

export function getSeoMetadata(pathname: string): SeoMetadata {
  const route = getRouteMetadata(pathname)
  const canonical = new URL(pathname, SITE_URL).href.replace(/\/$/, '') || SITE_URL
  const structuredData = getStructuredData()

  return {
    ...route,
    canonical,
    image: SOCIAL_IMAGE,
    structuredData,
  }
}

export function renderSeoHead(metadata: SeoMetadata): string {
  const attribute = (value: string) =>
    value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const jsonLd = metadata.structuredData.replace(/<\/script/gi, '<\\/script')
  const routeSeo = 'data-route-seo=""'

  return `
    <title ${routeSeo}>${attribute(metadata.title)}</title>
    <meta ${routeSeo} name="description" content="${attribute(metadata.description)}" />
    <meta ${routeSeo} name="robots" content="index,follow" />
    <link ${routeSeo} rel="canonical" href="${attribute(metadata.canonical)}" />
    <meta ${routeSeo} property="og:title" content="${attribute(metadata.title)}" />
    <meta ${routeSeo} property="og:description" content="${attribute(metadata.description)}" />
    <meta ${routeSeo} property="og:url" content="${attribute(metadata.canonical)}" />
    <meta ${routeSeo} property="og:type" content="website" />
    <meta ${routeSeo} property="og:image" content="${attribute(metadata.image)}" />
    <meta ${routeSeo} property="og:site_name" content="${SITE_NAME}" />
    <meta ${routeSeo} property="og:locale" content="en_US" />
    <meta ${routeSeo} name="twitter:card" content="summary_large_image" />
    <meta ${routeSeo} name="twitter:title" content="${attribute(metadata.title)}" />
    <meta ${routeSeo} name="twitter:description" content="${attribute(metadata.description)}" />
    <meta ${routeSeo} name="twitter:image" content="${attribute(metadata.image)}" />
    <script ${routeSeo} id="structured-data" type="application/ld+json">${jsonLd}</script>
  `
}
