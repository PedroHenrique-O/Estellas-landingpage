import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://advocacianeves.com.br/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

writeFileSync(join(root, 'public/sitemap.xml'), sitemap)

const faqItems = JSON.parse(
  readFileSync(join(root, 'src/lib/faq.json'), 'utf8'),
)

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

const indexPath = join(root, 'index.html')
const indexHtml = readFileSync(indexPath, 'utf8')
const faqJson = JSON.stringify(faqSchema, null, 2)
const updated = indexHtml.replace(
  /<!-- JSON-LD: FAQ -->[\s\S]*?<\/script>/,
  `<!-- JSON-LD: FAQ -->\n    <script type="application/ld+json">\n      ${faqJson}\n    </script>`,
)

writeFileSync(indexPath, updated)
console.log(`SEO: sitemap lastmod=${today}, FAQ schema synced`)
