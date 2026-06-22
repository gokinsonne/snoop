"use client"

import { useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PromotionSection } from "@/components/promotion-section"
import { GameInfoSection } from "@/components/game-info-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GameStatsSection } from "@/components/game-stats-section"
import { PlayHereSection } from "@/components/play-here-section"
import { DesktopEnhancements } from "@/components/desktop-enhancements"
import { getContent } from "@/lib/content"
import FAQSection from "@/components/FAQSection"
import VpnOfferSection from "@/components/VpnOfferSection"

export default function HomePage() {
  const [locale, setLocale] = useState("en")
  const content = getContent(locale)

  const guideCards = [
    { href: "/review", title: "Full Slot Review", desc: "In-depth review of RTP, features, and max win potential." },
    { href: "/how-to-play", title: "How to Play", desc: "Step-by-step guide to cluster pays and bonuses." },
    { href: "/strategy", title: "Winning Strategy", desc: "Bankroll management, Snoop Spin timing, and Bonus Buy tips." },
    { href: "/demo", title: "Free Demo", desc: "Play Snoop Dogg Dollars for free. No registration needed." },
    { href: "/casinos", title: "Where to Play", desc: "Best casinos offering Snoop Dogg Dollars with verified bonuses." },
    { href: "/bonus", title: "Bonus Offers", desc: "200% welcome bonus + 100 free spins at 1WIN." },
    { href: "/rtp", title: "RTP Explained", desc: "Why 97% RTP makes this one of the best-paying slots." },
    { href: "/mobile", title: "Mobile Play", desc: "Android & iOS. HTML5 optimized, all features." },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Snoop Dogg Dollars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Snoop Dogg Dollars is a celebrity-branded slot by BGaming featuring Snoop Dogg. It has 97% RTP, 10,000x max win, cluster pays on a 6×8 grid, and multiple bonus features including free spins and Snoop Spin."
        }
      },
      {
        "@type": "Question",
        name: "What is the RTP of Snoop Dogg Dollars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The default RTP is 97.00%, which is exceptional for a branded slot. Some casinos may offer reduced variants at 96% or 94%. Always check the game info panel before playing."
        }
      },
      {
        "@type": "Question",
        name: "Can I play Snoop Dogg Dollars for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can play the Snoop Dogg Dollars demo for free at snoopdoggdollar.org/demo. No registration, no download, no deposit required. The demo has the same 97% RTP and all features."
        }
      },
      {
        "@type": "Question",
        name: "Where can I play Snoop Dogg Dollars for real money?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend 1WIN casino. They offer a 200% welcome bonus up to $500 + 100 free spins, fast crypto withdrawals, and the verified 97% RTP version of the game."
        }
      },
      {
        "@type": "Question",
        name: "Is Snoop Dogg Dollars available on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Snoop Dogg Dollars is built on HTML5 and runs on any Android or iOS device directly in your browser. No app download needed. All features including Bonus Buy and Snoop Spin are available on mobile."
        }
      }
    ]
  }

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <DesktopEnhancements content={content.header}>
        <div className="min-h-screen bg-background">
          <main className="pt-16 overflow-x-clip">
            <div className="w-full overflow-x-clip">
              <HeroSection content={content.hero} />

              {/* About Section — SEO */}
              <section className="py-16 px-4 bg-black">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                    Snoop Dogg Dollars by BGaming
                  </h1>
                  <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                    Snoop Dogg Dollars is the first-ever celebrity-branded slot from BGaming, launched in partnership with hip-hop legend Snoop Dogg. Released on October 30, 2024, this slot drops players into a graffiti-filled urban world with the Doggfather himself standing beside the reels.
                  </p>
                  <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                    Unlike typical branded slots, Snoop Dogg Dollars was built from the ground up around its star. The game features authentic Snoop voiceovers, a <strong className="text-white">97% RTP</strong> (exceptional for a branded slot), <strong className="text-white">very high volatility</strong>, and a <strong className="text-white">10,000x max win</strong> potential. The cluster pays mechanic on a 6×8 grid with cascading wins, sticky wilds, and the unique "Multiplier Area" system creates explosive payout potential.
                  </p>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    Key features include Snoop Spin (guaranteed wilds for 20x bet), four Bonus Buy tiers (100x to 800x), free spins with persistent multipliers, and the "Digging Up a Symbol" bonus that can reveal wilds, weed multipliers, skulls, or scatters. Whether you play the free demo or real money at 1WIN, Snoop Dogg Dollars delivers one of the most engaging hip-hop slot experiences available today.
                  </p>
                </div>
              </section>

              <FeaturesSection content={content.features} />
              <PromotionSection content={content.promotion} />
              <GameStatsSection />
              <VpnOfferSection offer={content.vpnOffer} />
              <TestimonialsSection locale={locale} />
              <FAQSection faq={content.faq} />
              <GameInfoSection content={content.gameInfo} />
              <CTASection locale={locale} />

              {/* Latest Guides — Internal Linking */}
              <section className="py-16 px-4 bg-black border-t border-neutral-800">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Guides</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {guideCards.map((card) => (
                      <Link
                        key={card.href}
                        href={card.href}
                        className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition-colors block"
                      >
                        <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-neutral-400">{card.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why 1WIN — CTA */}
              <section className="py-16 px-4 bg-neutral-900/30 border-t border-neutral-800">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Why Play at 1WIN?</h2>
                  <p className="text-lg text-neutral-400 mb-6">
                    1WIN is our top recommendation for Snoop Dogg Dollars. They offer the verified 97% RTP version, a 200% welcome bonus up to $500 + 100 free spins, and withdrawals processed in under 1 hour for crypto. Minimum deposit is just $1. No KYC required for crypto.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="https://lkhv.pro/581ee4"
                      rel="nofollow noopener sponsored"
                      className="inline-flex items-center justify-center rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition-colors"
                      data-cta="why-1win"
                    >
                      Play at 1WIN →
                    </a>
                    <a
                      href="/demo"
                      className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-colors"
                    >
                      Try Demo First
                    </a>
                  </div>
                  <p className="mt-4 text-xs text-neutral-500">
                    18+ | Gamble Responsibly | T&Cs Apply
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </DesktopEnhancements>
    </>
  )
}
