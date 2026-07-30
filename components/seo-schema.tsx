import Script from "next/script"

const SITE_URL = "https://snoopdoggdollar.org"
const PUBLISHER_ID = `${SITE_URL}/#publisher`

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Snoop Dogg Dollars",
        description:
          "Independent Snoop Dogg Dollars slot guide covering gameplay, RTP, features and crypto casino payment checks.",
        inLanguage: "en",
        publisher: { "@id": PUBLISHER_ID },
      },
      {
        "@type": "Organization",
        "@id": PUBLISHER_ID,
        name: "Snoop Dogg Dollars Guide",
        url: SITE_URL,
        description: "Independent informational publisher. Not BGaming or an official game operator.",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-image.jpg`,
        },
      },
    ],
  }

  return (
    <Script id="website-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

type ArticleSchemaProps = {
  path: string
  title: string
  description: string
  section: string
  published?: string
  modified?: string
}

export function ArticleSchema({
  path,
  title,
  description,
  section,
  published = "2026-07-28",
  modified = "2026-07-30",
}: ArticleSchemaProps) {
  const url = new URL(path, SITE_URL).toString()
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${SITE_URL}/og-image.jpg`,
    datePublished: published,
    dateModified: modified,
    articleSection: section,
    inLanguage: "en",
    author: { "@id": PUBLISHER_ID },
    publisher: { "@id": PUBLISHER_ID },
  }

  return (
    <Script id={`article-schema-${path.replace(/[^a-z0-9]+/gi, "-")}`} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
