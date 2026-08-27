import { JsonLd } from "@/components/json-ld"

const SITE_URL = "https://snoopdoggdollar.org"
const PUBLISHER_ID = `${SITE_URL}/#publisher`
const GAME_ID = `${SITE_URL}/#game`

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
        about: { "@id": GAME_ID },
      },
      {
        "@type": "VideoGame",
        "@id": GAME_ID,
        name: "Snoop Dogg Dollars",
        description: "A 6 by 8 Cluster Pays slot released by BGaming on 30 October 2024.",
        url: `${SITE_URL}/`,
        sameAs: "https://bgaming.com/games/snoop-dogg-dollars",
        image: `${SITE_URL}/og-image.jpg`,
        datePublished: "2024-10-30",
        genre: "Cluster Pays slot",
        gamePlatform: "Web browser",
        publisher: {
          "@type": "Organization",
          name: "BGaming",
          url: "https://bgaming.com/",
        },
      },
      {
        "@type": "Organization",
        "@id": PUBLISHER_ID,
        name: "Snoop Dogg Dollars Guide",
        url: SITE_URL,
        description: "Independent informational publisher. Not BGaming or an official game operator.",
        sameAs: ["https://github.com/gokinsonne/snoop-dogg-dollars-data"],
        publishingPrinciples: `${SITE_URL}/editorial-policy/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-image.jpg`,
        },
      },
    ],
  }

  return <JsonLd data={schema} />
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
  modified = "2026-08-22",
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
    about: { "@id": GAME_ID },
  }

  return <JsonLd data={schema} />
}
