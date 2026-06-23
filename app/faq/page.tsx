import type { Metadata } from "next"
import Script from "next/script"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars FAQ | RTP, Bonus Buy, Free Spins & Mobile",
  description:
    "Answers to all Snoop Dogg Dollars questions. RTP, volatility, bonus buy, free spins, mobile play. Play with 200% bonus at 1WIN.",
  keywords: [
    "snoop dogg dollars faq",
    "snoop dogg dollars questions",
    "snoop dogg dollars rtp explained",
    "snoop dogg dollars bonus buy",
    "snoop dogg dollars free spins",
    "snoop dogg dollars mobile",
    "is snoop dogg dollars legit",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org/faq",
  },
  openGraph: {
    title: "Snoop Dogg Dollars FAQ | Common Questions Answered",
    description: "Everything you need to know about Snoop Dogg Dollars slot — RTP, features, bonus buy & more.",
    type: "website",
    url: "https://snoopdoggdollar.org/faq",
    siteName: "Snoop Dogg Dollars",
  },
}

const faqs = [
  {
    q: "What is the RTP of Snoop Dogg Dollars?",
    a: "The default BGaming configuration ships at 97.00% RTP, which is above average for a celebrity-branded slot. Some operators run reduced variants at 96% or 94%, so always check the in-game rules panel before playing for real money.",
  },
  {
    q: "What is the maximum win on Snoop Dogg Dollars?",
    a: "The maximum win is capped at 10,000x your stake, with an absolute cash limit of $250,000. This can be achieved during both the base game and the free spins bonus round when multipliers and cascades align optimally.",
  },
  {
    q: "How do I trigger the free spins?",
    a: "Landing 3, 4, 5, or 6 Scatter symbols triggers 10, 12, 15, or 20 free spins respectively. The triggering Scatters transform into Wild symbols or Cell Multipliers of x10 that remain sticky for the entire bonus round. Free spins can be retriggered.",
  },
  {
    q: "What is the Snoop Spin feature?",
    a: "Snoop Spin costs 20x your base bet per spin and guarantees at least one Wild symbol will be dug up before the start of every spin. It dramatically increases volatility and the chance of hitting massive cascades, but burns bankroll quickly.",
  },
  {
    q: "Does Snoop Dogg Dollars have a bonus buy?",
    a: "Yes. Non-UK players can purchase the bonus round with four tiers: 100x (standard), 200x (+1 Wild), 400x (+2 Wilds), and 800x (all Scatters become Wilds). Note that Bonus Buy is restricted in some jurisdictions.",
  },
  {
    q: "Can I play Snoop Dogg Dollars on mobile?",
    a: "Absolutely. The slot is built in HTML5 and runs natively in any mobile browser without downloading an app. It works smoothly on both iOS and Android devices, with touch-optimized controls and portrait/landscape support.",
  },
  {
    q: "Is there a demo mode?",
    a: "Yes. Most BGaming partner casinos offer a free demo mode where you can play with virtual credits. The demo accurately reproduces the math model and is a great way to test the features before committing real money.",
  },
  {
    q: "Is Snoop Dogg Dollars legit?",
    a: "Yes. The game is developed by BGaming, a licensed provider with MGA and Curacao certifications. It uses certified RNG algorithms verified by independent auditors. Always play at licensed casinos to ensure fairness.",
  },
  {
    q: "What is the volatility of Snoop Dogg Dollars?",
    a: "Very High. While the hit rate is 33.3% (a win roughly every 3 spins), most base-game wins are small. The big payouts are concentrated in rare events, especially during the free spins round with sticky multipliers.",
  },
  {
    q: "Where can I play Snoop Dogg Dollars for real money?",
    a: "We recommend 1WIN for the best combination of bonus value, fast crypto withdrawals, and confirmed 97% RTP configuration. Other solid options include Roobet, BitStarz, and Stake. See our full casino comparison.",
  },
]

export default function FAQPage() {
  return (
    <>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        })}
      </Script>

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://snoopdoggdollar.org/" },
        { name: "FAQ", url: "https://snoopdoggdollar.org/faq" }
      ]} />

      <main className="min-h-screen bg-black text-neutral-100">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-neutral-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-neutral-600">/</li>
              <li aria-current="page" className="text-neutral-200">FAQ</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Snoop Dogg Dollars FAQ
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            Common questions about the slot, answered by our team.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-neutral-800 bg-neutral-900/40 open:bg-neutral-900/60 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-lg font-semibold text-white hover:text-green-400 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-neutral-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 text-neutral-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-green-900/30 bg-green-950/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-400 mb-6">
              Try the demo mode or read our full slot review for an in-depth breakdown of every feature.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/review"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                Read Full Review
              </a>
              <a
                href="/casinos"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors"
              >
                Play at 1WIN →
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
