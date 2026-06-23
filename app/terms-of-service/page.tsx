import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Terms of Service | Snoop Dogg Dollars",
  description: "Terms of service for SnoopDoggDollar.org. Please read carefully before using our website.",
  robots: "index, follow",
  alternates: { canonical: "https://snoopdoggdollar.org/terms-of-service" },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-neutral-400">Last updated: June 22, 2025</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using SnoopDoggDollar.org, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
          <h2>2. Age Restriction</h2>
          <p>You must be at least 18 years of age (or the legal age for gambling in your jurisdiction) to use this website. We do not knowingly collect information from minors.</p>
          <h2>3. Gambling Disclaimer</h2>
          <p>This website provides information about online gambling and casino games. Gambling involves risk. Please play responsibly and only gamble with money you can afford to lose.</p>
          <p>We are not a gambling operator. We do not accept bets or wagers. All gambling activities are conducted through third-party casino operators.</p>
          <h2>4. Affiliate Disclosure</h2>
          <p>This website contains affiliate links. We may receive compensation when you click on these links and sign up at partner casinos. This does not affect our editorial independence or the accuracy of our reviews.</p>
          <h2>5. Intellectual Property</h2>
          <p>All content on this website, including text, images, and logos, is protected by copyright. You may not reproduce, distribute, or modify any content without prior written permission.</p>
          <h2>6. Limitation of Liability</h2>
          <p>We are not responsible for any losses or damages arising from your use of this website or third-party gambling services. We do not guarantee the accuracy of information provided by third-party operators.</p>
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </main>
  )
}
