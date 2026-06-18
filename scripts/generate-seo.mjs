import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const today = new Date().toISOString().slice(0, 10)
const siteUrl = 'https://advocacianeves.com.br/'

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

writeFileSync(join(root, 'public/sitemap.xml'), sitemap)

const heroPath = join(root, 'public/hero.jpg')
const ogPath = join(root, 'public/og.jpg')

if (existsSync(heroPath)) {
  await sharp(heroPath)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85 })
    .toFile(ogPath)
  console.log('SEO: og.jpg generated (1200x630)')
} else {
  console.warn('SEO: hero.jpg not found, skipping og.jpg generation')
}

const faqItems = JSON.parse(
  readFileSync(join(root, 'src/lib/faq.json'), 'utf8'),
)

const organizationId = `${siteUrl}#organization`
const websiteId = `${siteUrl}#website`
const webpageId = `${siteUrl}#webpage`

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': organizationId,
  name: 'Advocacia Neves',
  description:
    'Escritório de advocacia especializado em Direito do Consumidor, Família e Previdenciário em Londrina/PR.',
  url: siteUrl,
  image: `${siteUrl}og.jpg`,
  telephone: '+55-43-3323-3109',
  email: 'atendimentoadvocacianeves@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Sergipe, 829, sala 11',
    addressLocality: 'Londrina',
    addressRegion: 'PR',
    postalCode: '86010-380',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.3099529,
    longitude: -51.1609742,
  },
  areaServed: {
    '@type': 'City',
    name: 'Londrina',
  },
  hasMap: 'https://www.google.com/maps?cid=4929134630303143466',
  sameAs: [
    'https://www.instagram.com/advocaciawneves/',
    'https://www.google.com/maps?cid=4929134630303143466',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    telephone: '+55-43-3323-3109',
    email: 'atendimentoadvocacianeves@gmail.com',
    availableLanguage: 'Portuguese',
    areaServed: 'Londrina',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  knowsAbout: [
    'Direito do Consumidor',
    'Direito de Família',
    'Direito Previdenciário',
    'INSS',
    'Divórcio',
    'Guarda de filhos',
    'Pensão alimentícia',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: 'Advocacia Neves',
  url: siteUrl,
  inLanguage: 'pt-BR',
  publisher: { '@id': organizationId },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': webpageId,
  name: 'Advocacia Neves | Advogado em Londrina/PR',
  url: siteUrl,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': websiteId },
  about: { '@id': organizationId },
  description:
    'Advocacia Neves em Londrina/PR. Especializada em Direito do Consumidor, Família e Previdenciário. Atendimento no Centro de Londrina.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

function injectSchema(html, marker, schema) {
  const json = JSON.stringify(schema, null, 2)
  const block = `<!-- ${marker} -->\n    <script type="application/ld+json">\n      ${json}\n    </script>`
  const pattern = new RegExp(`<!-- ${marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')} -->[\\s\\S]*?<\\/script>`)
  return html.replace(pattern, block)
}

const indexPath = join(root, 'index.html')
let indexHtml = readFileSync(indexPath, 'utf8')

indexHtml = injectSchema(indexHtml, 'JSON-LD: Legal Service', legalServiceSchema)
indexHtml = injectSchema(indexHtml, 'JSON-LD: WebSite', websiteSchema)
indexHtml = injectSchema(indexHtml, 'JSON-LD: WebPage', webPageSchema)
indexHtml = injectSchema(indexHtml, 'JSON-LD: FAQ', faqSchema)

indexHtml = indexHtml.replace(
  /content="https:\/\/advocacianeves\.com\.br\/hero\.jpg"/g,
  'content="https://advocacianeves.com.br/og.jpg"',
)
indexHtml = indexHtml.replace(
  /<meta property="og:image:width" content="\d+" \/>/,
  '<meta property="og:image:width" content="1200" />',
)
indexHtml = indexHtml.replace(
  /<meta property="og:image:height" content="\d+" \/>/,
  '<meta property="og:image:height" content="630" />',
)

writeFileSync(indexPath, indexHtml)
console.log(`SEO: sitemap lastmod=${today}, schemas synced, og meta updated`)
