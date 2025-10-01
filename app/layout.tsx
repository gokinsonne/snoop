import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import GA from "@/components/ga-tracker"
import "./globals.css"


export const metadata: Metadata = {
  title: "Snoop Dogg Dollars - Hip-Hop Slot Game | Big Wins",
  description: "Play the exclusive Snoop Dogg hip-hop slot — free spins, no deposit bonus, huge jackpots and x1000 multipliers! Spin wild reels, buy bonus rounds, test demo mode or hit real money wins. High RTP, max win potential and nonstop action — the ultimate hip-hop casino experience with Snoop Dogg. Claim your bonus and start winning big now!",
  keywords: "snoop dogg, slot game, casino, jackpot, hip-hop, online casino, big wins, snoop dogg dollars",
  generator: "Snoop Dogg Dollars",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org",
    languages: {
      "en-US": "https://snoopdoggdollar.org/en",
      "tr-TR": "https://snoopdoggdollar.org/tr",
      "pt-PT": "https://snoopdoggdollar.org/pt",
      "fr-FR": "https://snoopdoggdollar.org/fr",
      "en-IE": "https://snoopdoggdollar.org/ie",
      "hi-IN": "https://snoopdoggdollar.org/in",
    },
  },
  openGraph: {
    title: "Snoop Dogg Dollars - Hip-Hop Slot Game",
    description: "Win big with the King of Hip-Hop!",
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR", "pt_PT", "fr_FR", "en_IE", "hi_IN"],
    url: "https://snoopdoggdollar.org",
    siteName: "Snoop Dogg Dollars",
    images: [
      {
        url: "https://snoopdoggdollar.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Snoop Dogg Dollars Slot Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snoop Dogg Dollars - Hip-Hop Slot Game",
    description: "Win big with Snoop Dogg! The ultimate hip-hop slot experience.",
    images: ["https://snoopdoggdollar.org/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // например: G-3CVZMLWDXD

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" hrefLang="en" href="https://snoopdoggdollar.org/en" />
        <link rel="alternate" hrefLang="tr" href="https://snoopdoggdollar.org/tr" />
        <link rel="alternate" hrefLang="pt" href="https://snoopdoggdollar.org/pt" />
        <link rel="alternate" hrefLang="fr" href="https://snoopdoggdollar.org/fr" />
        <link rel="alternate" hrefLang="en-ie" href="https://snoopdoggdollar.org/ie" />
        <link rel="alternate" hrefLang="hi-in" href="https://snoopdoggdollar.org/in" />
        <link rel="alternate" hrefLang="x-default" href="https://snoopdoggdollar.org" />
        <link rel="canonical" href="https://snoopdoggdollar.org" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body className={`min-h-screen overflow-x-hidden bg-black text-neutral-100 antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading.</div>}>{children}</Suspense>
        <Analytics />
        {/* Отправка page_view при SPA-навигации */}
        {GA_ID ? <GA gaId={GA_ID} /> : null}
      </body>
    </html>
  );
}
