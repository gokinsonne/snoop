"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PromotionSection } from "@/components/promotion-section"
import { GameInfoSection } from "@/components/game-info-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GameStatsSection } from "@/components/game-stats-section"
import { PlayHereSection } from "@/components/play-here-section"
import { DesktopEnhancements } from "@/components/desktop-enhancements"
import { Footer } from "@/components/footer"
import { getContent } from "@/lib/content"
import { content } from "@/lib/content"
import FAQSection from "@/components/FAQSection"
import VpnOfferSection from "@/components/VpnOfferSection"

export default function HomePage() {
  const [locale, setLocale] = useState("en")
  const content = getContent(locale)

  return (
    <DesktopEnhancements content={content.header}>
      <div className="min-h-screen bg-background">
        <Header content={content.header} locale={locale} onLocaleChange={setLocale} />

<main className="pt-16 overflow-x-clip">
  <div className="w-full overflow-x-clip">
    <HeroSection content={content.hero} />
    <FeaturesSection content={content.features} />
    <PromotionSection content={content.promotion} />
    <GameStatsSection />
    <VpnOfferSection offer={content.vpnOffer} />
    <TestimonialsSection locale={locale} />
    <FAQSection faq={content.faq} />
    <GameInfoSection content={content.gameInfo} />
    <CTASection locale={locale} />
  </div>
</main>

        <Footer content={content.footer} locale={locale} />
      </div>
    </DesktopEnhancements>
  )
}
