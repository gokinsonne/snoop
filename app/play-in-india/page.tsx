import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Play Snoop Dogg Dollars in India | UPI, Paytm & 1WIN 2026",
  description: "Play Snoop Dogg Dollars in India. UPI, Paytm, PhonePe deposits. Hindi support. current welcome offer at 1WIN. 97% RTP.",
  keywords: [
    "snoop dogg dollars India",
    "play snoop dogg dollars in India",
    "snoop dogg dollars UPI",
    "snoop dogg dollars Paytm",
    "1WIN India",
    "online casino India",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/play-in-india/",
  },
  openGraph: {
    title: "Play Snoop Dogg Dollars in India | UPI & 1WIN",
    description: "Play Snoop Dogg Dollars in India with UPI deposits. current offer at 1WIN.",
    type: "article",
    url: "https://snoopdoggdollar.org/play-in-india/",
    siteName: "Snoop Dogg Dollars",
  },
}

export default function PlayInIndiaPage() {
  return (
    <>
      <Script id="schema-india" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Play Snoop Dogg Dollars in India",
          description: "Guide to playing Snoop Dogg Dollars in India with UPI, Paytm, and 1WIN.",
          author: { "@type": "Organization", name: "Snoop Dogg Dollars" },
          datePublished: "2026-06-22",
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "Play in India", url: "https://snoopdoggdollar.org/play-in-india/" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">Play in India</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Play Snoop Dogg Dollars in India
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            Snoop Dogg Dollars is available for Indian players. Deposit with UPI, Paytm, or PhonePe and play with 97% RTP.
          </p>

          <section className="mb-12 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Payment Methods for India</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "UPI", value: "Instant" },
                { label: "Paytm", value: "Instant" },
                { label: "PhonePe", value: "Instant" },
                { label: "Google Pay", value: "Instant" },
                { label: "Bitcoin", value: "Under 1 hour" },
                { label: "Ethereum", value: "Under 1 hour" },
              ].map((spec) => (
                <div key={spec.label} className="rounded-lg bg-neutral-800/50 p-3">
                  <dt className="text-xs text-neutral-500 uppercase tracking-wider">{spec.label}</dt>
                  <dd className="text-lg font-semibold text-white">{spec.value}</dd>
                </div>
              ))}
            </div>
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>Is Online Casino Legal in India?</h2>
            <p>Online gambling laws in India vary by state. While some states have restrictions, many Indian players legally access international casinos like 1WIN that operate under Curacao license. 1WIN accepts Indian players and offers full Hindi support.</p>

            <h2>How to Deposit with UPI</h2>
            <ol>
              <li>Register at 1WIN (takes 2 minutes)</li>
              <li>Go to Cashier → Deposit</li>
              <li>Select UPI</li>
              <li>Enter your UPI ID (e.g., yourname@upi)</li>
              <li>Confirm payment in your UPI app</li>
              <li>Funds appear instantly — start playing</li>
            </ol>

            <h2>Minimum Deposit & Bonus</h2>
            <p>Minimum deposit is just <strong>₹100</strong> (about $1.20). First deposit gets a <strong>200% bonus</strong> up to ₹42,000 + 100 free spins. This is one of the best bonuses available for Indian players.</p>

            <h2>Withdrawals</h2>
            <p>Payment methods, processing times, limits and identity checks depend on the operator and account. Verify the live cashier and withdrawal terms before depositing.</p>

            <h2>Mobile Play in India</h2>
            <p>Snoop Dogg Dollars runs on any Android or iOS device. No app download needed. Just open 1WIN in your mobile browser and launch the game. Works perfectly on 4G and Wi-Fi.</p>
          </article>

          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Play at 1WIN India</h2>
            <p className="text-neutral-400 mb-6">current welcome offer. UPI deposits. Hindi support.</p>
            <a href="https://lkhv.pro/581ee4" rel="nofollow noopener sponsored" className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors">Play at 1WIN →</a>
          </section>
        </div>
      </main>
    </>
  )
}
