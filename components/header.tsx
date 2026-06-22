"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const navLinks = [
    { href: "/review", label: "Review" },
    { href: "/how-to-play", label: "How to Play" },
    { href: "/strategy", label: "Strategy" },
    { href: "/demo", label: "Demo" },
    { href: "/casinos", label: "Casinos" },
    { href: "/bonus", label: "Bonus" },
    { href: "/faq", label: "FAQ" },
  ]

  const moreLinks = [
    { href: "/mobile", label: "Mobile" },
    { href: "/rtp", label: "RTP" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image
              src="/logosnoop.webp"
              alt="Snoop Dogg Dollars Slot"
              width={120}
              height={30}
              priority
              className="w-[100px] md:w-[120px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm px-3 py-2 rounded-md hover:bg-primary/10"
              >
                {link.label}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center text-foreground hover:text-primary transition-colors text-sm px-3 py-2 rounded-md hover:bg-primary/10"
              >
                More <ChevronDown size={14} className="ml-1" />
              </button>
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-card border border-primary/20 rounded-lg shadow-lg py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold animate-glow text-sm whitespace-nowrap"
            >
              <a
                href="https://lkhv.pro/581ee4"
                target="_blank"
                rel="nofollow noopener sponsored"
                data-cta="play-now"
              >
                Play Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-1 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-primary/20 mt-3">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full"
                >
                  <a
                    href="https://lkhv.pro/581ee4"
                    target="_blank"
                    rel="nofollow noopener sponsored"
                    data-cta="play-now-mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Play Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
