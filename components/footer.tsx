import Link from "next/link"

export function Footer() {
  const guideLinks = [
    { href: "/review", label: "Full Review" },
    { href: "/how-to-play", label: "How to Play" },
    { href: "/strategy", label: "Strategy" },
    { href: "/demo", label: "Demo" },
    { href: "/casinos", label: "Where to Play" },
    { href: "/bonus", label: "Bonus" },
    { href: "/faq", label: "FAQ" },
    { href: "/mobile", label: "Mobile" },
    { href: "/rtp", label: "RTP" },
  ]

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/responsible-gaming", label: "Responsible Gaming" },
    { href: "/sitemap", label: "Sitemap" },
  ]

  return (
    <footer className="bg-card border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Popular Guides */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-center mb-6 text-primary">Popular Guides</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Payment Methods & Partners */}
        <div className="mb-8 border-t border-primary/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-4 text-foreground">Payment Methods</h4>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <img src="/vissa.svg" alt="Visa" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <img src="/bitt.svg" alt="Bitcoin" className="h-6" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <img src="/eu.svg" alt="Ethereum" className="h-6" />
                </div>
              </div>
            </div>

            {/* Partner */}
            <div>
              <h4 className="text-lg font-semibold text-center mb-4 text-foreground">Partner</h4>
              <div className="flex justify-center">
                <a
                  href="https://lkhv.pro/581ee4"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="hover:scale-105 transition-transform"
                >
                  <img src="/1w.svg" alt="1WIN Casino" className="h-10 w-auto drop-shadow-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2025 SnoopDoggDollar.org. All rights reserved. 18+ | Responsible Gaming
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-xs transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="mt-6 pt-6 border-t border-primary/20 text-center">
          <p className="text-xs text-muted-foreground">
            18+ | Responsible Gaming | Gambling can be addictive. Please play responsibly.
          </p>
        </div>
      </div>
    </footer>
  )
}
