"use client"

import type React from "react"
import type { LocaleContent } from "@/lib/content"

interface DesktopEnhancementsProps {
  children: React.ReactNode
  content: LocaleContent["header"]
}

export function DesktopEnhancements({ children, content }: DesktopEnhancementsProps) {
  return (
    <div className="relative">
      {/* Desktop floating CTA buttons */}
      <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 space-y-4">
        <a
          href="/play"
          className="block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg animate-pulse"
        >
          🎰 {content.playNow}
        </a>
        <a
          href="/bonus"
          className="block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
        >
          💰 {content.promotions}
        </a>
        <a
          href="/demo"
          className="block bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
        >
          🎮 {content.howToPlay}
        </a>
      </div>

      {/* Desktop background enhancements */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {children}
    </div>
  )
}
