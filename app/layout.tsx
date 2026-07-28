import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AffiliateTracker } from "@/components/affiliate-tracker"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://snoopdoggdollar.org"),
  title: {
    default: "Snoop Dogg Dollars Slot Guide (2026)",
    template: "%s | Snoop Dogg Dollars",
  },
  description:
    "Independent Snoop Dogg Dollars guide: 97% default RTP, 10,000x max win, features, free demo and crypto casino payment checks.",
  keywords: [
    "snoop dogg dollars",
    "snoop dogg dollars slot",
    "snoop dogg dollars demo",
    "snoop dogg dollars review",
    "snoop dogg dollars rtp",
    "snoop dogg dollars strategy",
    "snoop dogg dollars bonus",
    "snoop dogg dollars free spins",
    "bgaming snoop dogg dollars",
    "play snoop dogg dollars",
  ],
  generator: "Next.js",
  robots: "index, follow",
  alternates: {
    canonical: "https://snoopdoggdollar.org",
  },
  openGraph: {
    title: "Snoop Dogg Dollars Slot | 97% RTP & 10,000x Max Win",
    description: "Independent Snoop Dogg Dollars review, free demo, feature guide and crypto casino payment checks.",
    type: "website",
    locale: "en_US",
    url: "https://snoopdoggdollar.org",
    siteName: "Snoop Dogg Dollars",
    images: [
      {
        url: "https://snoopdoggdollar.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Snoop Dogg Dollars Slot by BGaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snoop Dogg Dollars Slot | 97% RTP",
    description: "Independent Snoop Dogg Dollars review, demo, RTP and crypto casino guide.",
    images: ["https://snoopdoggdollar.org/og-image.jpg"],
  },
  authors: [{ name: "Snoop Dogg Dollars" }],
  publisher: "Snoop Dogg Dollars",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className="min-h-screen overflow-x-hidden bg-black font-sans text-neutral-100 antialiased">
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
          <Header />
          <div className="pt-14">{children}</div>
          <Footer />
        </Suspense>
        <AffiliateTracker />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID ?? "G-3CVZMLWDXD"}`}
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            (function(gaId){
              if(!gaId) { console.warn('GA: no NEXT_PUBLIC_GA_ID'); return; }
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', gaId);
            })('${process.env.NEXT_PUBLIC_GA_ID ?? "G-3CVZMLWDXD"}');
          `}
        </Script>
      </body>
    </html>
  );
}
