import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: { absolute: "Snoop Dogg Dollars Site Directory" },
  description: "Browse every Snoop Dogg Dollars game guide, crypto casino resource, comparison, research page and site policy.",
  alternates: { canonical: "/sitemap/" },
  robots: { index: false, follow: true },
}

const groups = [
  {
    title: "Game guides",
    links: [
      ["/", "Snoop Dogg Dollars slot guide"],
      ["/review/", "Independent review"],
      ["/demo/", "Free demo"],
      ["/how-to-play/", "How to play"],
      ["/rtp/", "RTP guide"],
      ["/strategy/", "Strategy and risk guide"],
      ["/free-spins/", "Free spins"],
      ["/bonus-buy/", "Bonus Buy"],
      ["/snoop-spin/", "Snoop Spin"],
      ["/symbols-paytable/", "Symbols and paytable"],
      ["/max-win/", "Maximum win"],
      ["/bonus/", "Bonus and promo-code checks"],
      ["/mobile/", "Mobile app guide"],
      ["/faq/", "Frequently asked questions"],
      ["/casinos/", "Where to play"],
      ["/snoop-dogg-dollars-release-history/", "Release and correction history"],
    ],
  },
  {
    title: "Crypto casino guides",
    links: [
      ["/crypto-casinos/", "Best crypto casinos: verification guide"],
      ["/crypto-casinos/snoop-dogg-dollars/", "Snoop Dogg Dollars crypto casinos"],
      ["/bitcoin-casinos/snoop-dogg-dollars/", "Bitcoin casino guide"],
      ["/usdt-casinos/snoop-dogg-dollars/", "USDT casino guide"],
      ["/crypto-casino-deposits/", "Crypto casino deposits"],
      ["/crypto-casino-withdrawals/", "Crypto casino withdrawals"],
      ["/dogecoin-casino-withdrawals/", "Dogecoin withdrawals"],
      ["/ethereum-casino-withdrawals/", "Ethereum withdrawals"],
      ["/instant-withdrawal-crypto-casinos/", "Instant-withdrawal checks"],
      ["/bitcoin-vs-usdt-casinos/", "Bitcoin vs USDT"],
      ["/crypto-casino-networks/", "Blockchain network safety"],
      ["/crypto-casino-fees/", "Fees and exchange spreads"],
      ["/crypto-casino-kyc/", "KYC and no-KYC claims"],
      ["/crypto-casino-bonuses/", "No-deposit bonus checks"],
      ["/crypto-casino-security/", "Crypto casino security"],
    ],
  },
  {
    title: "Comparisons and regional guides",
    links: [
      ["/vs-sugar-rush/", "Snoop Dogg Dollars vs Sugar Rush"],
      ["/vs-aztec-clusters/", "Snoop Dogg Dollars vs Aztec Clusters"],
      ["/best-cluster-pays-slots/", "Best cluster-pays slots"],
      ["/bgaming-cluster-slots/", "BGaming cluster slots"],
      ["/play-in-india/", "India guide"],
      ["/play-in-japan/", "日本語ガイド"],
      ["/ru/demo/", "Демо на русском"],
    ],
  },
  {
    title: "Research and policies",
    links: [
      ["/research/snoop-dogg-dollars-feature-costs/", "Feature-cost dataset"],
      ["/research/crypto-casino-keyword-landscape/", "Crypto keyword dataset"],
      ["/editorial-policy/", "Editorial policy"],
      ["/responsible-gaming/", "Responsible gaming"],
      ["/privacy-policy/", "Privacy policy"],
      ["/terms-of-service/", "Terms of service"],
      ["/sitemap.xml", "XML sitemap"],
    ],
  },
] as const

export default function SiteDirectoryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://snoopdoggdollar.org/" },
          { name: "Site directory", url: "https://snoopdoggdollar.org/sitemap/" },
        ]}
      />
      <main className="min-h-screen bg-[#080b09] text-neutral-100">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-400">Site directory</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Every Snoop Dogg Dollars guide in one place
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Use this directory to reach the game guides, crypto-payment resources,
            comparisons, research datasets and policies published on the site.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {groups.map((group) => (
              <section key={group.title} className="rounded-3xl border border-white/10 bg-[#101512] p-6 sm:p-8">
                <h2 className="text-2xl font-black text-emerald-300">{group.title}</h2>
                <ul className="mt-5 grid gap-2">
                  {group.links.map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-semibold text-neutral-200 transition hover:border-emerald-400/50 hover:text-emerald-300"
                      >
                        {label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
