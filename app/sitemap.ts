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
  "/editorial-policy",
  "/research/snoop-dogg-dollars-feature-costs",
  "/vs-aztec-clusters",
  "/best-cluster-pays-slots",
  "/bgaming-cluster-slots",
  "/snoop-dogg-dollars-release-history",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const substantivelyUpdated = new Set(["/strategy", "/rtp", "/bonus-buy", "/vs-aztec-clusters", "/best-cluster-pays-slots", "/bgaming-cluster-slots", "/snoop-dogg-dollars-release-history"])

  return routes.map((route) => ({
    url: `https://snoopdoggdollar.org${route}/`,
    lastModified: substantivelyUpdated.has(route) ? new Date("2026-08-05") : new Date("2026-07-30"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/review" ? 0.9 : 0.7,
  }))
}
