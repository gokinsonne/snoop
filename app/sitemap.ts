import type { MetadataRoute } from "next"

const routes = [
  "",
  "/review",
  "/demo",
  "/casinos",
  "/bonus",
  "/bonus-buy",
  "/snoop-spin",
  "/symbols-paytable",
  "/rtp",
  "/free-spins",
  "/max-win",
  "/how-to-play",
  "/strategy",
  "/mobile",
  "/faq",
  "/vs-sugar-rush",
  "/play-in-india",
  "/play-in-japan",
  "/crypto-casinos/snoop-dogg-dollars",
  "/bitcoin-casinos/snoop-dogg-dollars",
  "/usdt-casinos/snoop-dogg-dollars",
  "/crypto-casino-deposits",
  "/crypto-casino-withdrawals",
  "/bitcoin-vs-usdt-casinos",
  "/crypto-casino-networks",
  "/crypto-casino-fees",
  "/crypto-casino-kyc",
  "/crypto-casino-bonuses",
  "/crypto-casino-security",
  "/privacy-policy",
  "/terms-of-service",
  "/responsible-gaming",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `https://snoopdoggdollar.org${route}/`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/review" ? 0.9 : 0.7,
  }))
}
