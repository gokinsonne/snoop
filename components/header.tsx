"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import type { LocaleContent } from "@/lib/content"
import Image from "next/image"

interface HeaderProps {
  content: LocaleContent["header"]
  locale: string
  onLocaleChange: (locale: string) => void
}

export function Header({ content, locale, onLocaleChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const locales = [
    { code: "tr", flag: "🇹🇷", name: "Türkçe" },
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "pt", flag: "🇵🇹", name: "Português" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "ie", flag: "🇮🇪", name: "Ireland" },
    { code: "in", flag: "🇮🇳", name: "हिन्दी" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20 overflow-x-clip">
      {/* тот же контейнер, что и на страницах */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image
              src="/snoop-dogg-dollars-logo-gold-hip-hop-style.png"
              alt="Snoop Dogg Dollars Logo"
              width={120}
              height={30}
              priority
              className="w-[100px] md:w-[120px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-foreground hover:text-primary transition-colors text-sm">
              {content.howToPlay}
            </Link>
            <Link href="#promotion" className="text-foreground hover:text-primary transition-colors text-sm">
              {content.promotions}
            </Link>
            <Link href="#support" className="text-foreground hover:text-primary transition-colors text-sm">
              {content.support}
            </Link>
          </nav>

          {/* Language Selector & Play Button */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={locale}
              onChange={(e) => onLocaleChange(e.target.value)}
              className="bg-card border border-primary/20 rounded-lg px-3 py-1 text-sm text-foreground max-w-[140px]"
            >
              {locales.map((loc) => (
                <option key={loc.code} value={loc.code}>
                  {loc.flag} {loc.name}
                </option>
              ))}
            </select>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold animate-glow text-sm whitespace-nowrap">
              <Link href="/play">{content.playNow}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/20">
            {/* держим ширину в контейнере, без растяжения */}
            <nav className="flex flex-col space-y-3 mt-4">
              <Link
                href="#features"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.howToPlay}
              </Link>
              <Link
                href="#promotion"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.promotions}
              </Link>
              <Link
                href="#support"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.support}
              </Link>
              <div className="flex flex-col gap-3 pt-3 border-t border-primary/20">
                <select
                  value={locale}
                  onChange={(e) => onLocaleChange(e.target.value)}
                  className="bg-card border border-primary/20 rounded-lg px-3 py-2 text-sm text-foreground w-full"
                >
                  {locales.map((loc) => (
                    <option key={loc.code} value={loc.code}>
                      {loc.flag} {loc.name}
                    </option>
                  ))}
                </select>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full">
                  <Link href="/play" onClick={() => setIsMenuOpen(false)}>
                    {content.playNow}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
