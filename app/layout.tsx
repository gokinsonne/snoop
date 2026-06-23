import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "Snoop Dogg Dollars Slot | 97% RTP, 10,000x Win & Free Demo 2025",
  description:
    "Play Snoop Dogg Dollars by BGaming — 97% RTP, 10,000x max win, free demo. Read review, learn strategy, claim 200% bonus + 100 free spins at 1WIN.",
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
    description: "Play the Snoop Dogg Dollars slot by BGaming. Free demo, full review, strategy guide, and 200% bonus at 1WIN.",
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
    description: "Play Snoop Dogg Dollars by BGaming. Free demo, review, strategy & 200% bonus at 1WIN.",
    images: ["https://snoopdoggdollar.org/og-image.jpg"],
  },
  authors: [{ name: "Snoop Dogg Dollars" }],
  publisher: "Snoop Dogg Dollars",
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://boost.bgaming-network.com" />
        <link rel="preconnect" href="https://replays.bgaming-network.com" />
        <link rel="preconnect" href="https://brush.bgaming-network.com" />
        <link rel="preconnect" href="https://cdn.bgaming-network.com" />
        <link rel="canonical" href="https://snoopdoggdollar.org" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className={`min-h-screen overflow-x-hidden bg-black text-neutral-100 antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
          <Header />
          <div className="pt-14">{children}</div>
          <Footer />
        </Suspense>
        <Analytics />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID ?? "G-3CVZMLWDXD"}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
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
        <Script id="ga-spa" strategy="afterInteractive">
          {`
            (function(){
              var send = function(){
                if (typeof window.gtag !== 'function') return;
                window.gtag('event','page_view',{
                  page_location: location.href,
                  page_path: location.pathname + location.search,
                  page_title: document.title
                });
              };
              var wrap = function(type){
                var orig = history[type];
                return function(){
                  var rv = orig.apply(this, arguments);
                  window.dispatchEvent(new Event('routechange'));
                  return rv;
                };
              };
              history.pushState = wrap('pushState');
              history.replaceState = wrap('replaceState');
              window.addEventListener('popstate', function(){ window.dispatchEvent(new Event('routechange')); });
              window.addEventListener('routechange', send);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
