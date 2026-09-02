import type { MetadataRoute } from "next"

const routes = [
  "",
  "/review",
  "/demo",
  "/ru/demo",
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
  const updated2September = new Set([""])
  const updated31August = new Set(["/demo", "/ru/demo"])
  const updated27August = new Set(["", "/demo", "/review", "/rtp", "/mobile", "/editorial-policy", "/research/snoop-dogg-dollars-feature-costs", "/bonus-buy", "/snoop-spin", "/symbols-paytable", "/vs-aztec-clusters", "/best-cluster-pays-slots", "/bgaming-cluster-slots", "/snoop-dogg-dollars-release-history", "/crypto-casinos/snoop-dogg-dollars", "/bitcoin-casinos/snoop-dogg-dollars", "/usdt-casinos/snoop-dogg-dollars", "/crypto-casino-deposits", "/crypto-casino-withdrawals", "/bitcoin-vs-usdt-casinos", "/crypto-casino-networks", "/crypto-casino-fees", "/crypto-casino-kyc", "/crypto-casino-bonuses", "/crypto-casino-security"])
  const updated26August = new Set(["/research/snoop-dogg-dollars-feature-costs"])
  const updated25August = new Set(["/vs-sugar-rush"])
  const updated24August = new Set(["/mobile"])
  const updated22August = new Set(["", "/demo", "/review", "/rtp", "/bonus", "/casinos", "/faq", "/free-spins", "/max-win", "/how-to-play", "/strategy", "/play-in-india", "/play-in-japan", "/vs-sugar-rush", "/crypto-casinos/snoop-dogg-dollars", "/bitcoin-casinos/snoop-dogg-dollars", "/usdt-casinos/snoop-dogg-dollars"])
  const updated15August = new Set(["/bitcoin-vs-usdt-casinos", "/crypto-casino-bonuses"])
  const updated5August = new Set(["/how-to-play", "/strategy", "/bonus-buy", "/vs-aztec-clusters", "/best-cluster-pays-slots", "/bgaming-cluster-slots", "/snoop-dogg-dollars-release-history"])

  return routes.map((route) => ({
    url: `https://snoopdoggdollar.org${route}/`,
    lastModified: updated2September.has(route)
      ? new Date("2026-09-02")
      : updated31August.has(route)
      ? new Date("2026-08-31")
      : updated27August.has(route)
        ? new Date("2026-08-27")
      : updated26August.has(route)
        ? new Date("2026-08-26")
      : updated25August.has(route)
        ? new Date("2026-08-25")
        : updated24August.has(route)
          ? new Date("2026-08-24")
          : updated22August.has(route)
            ? new Date("2026-08-22")
            : updated15August.has(route)
              ? new Date("2026-08-15")
              : updated5August.has(route)
                ? new Date("2026-08-05")
                : new Date("2026-07-30"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/review" ? 0.9 : 0.7,
  }))
}
