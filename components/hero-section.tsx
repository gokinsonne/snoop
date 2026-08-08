"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { LocaleContent } from "@/lib/content"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface HeroSectionProps {
  content: LocaleContent["hero"]
}

export function HeroSection({ content }: HeroSectionProps) {
  const [showIframe, setShowIframe] = useState(false)
  const iframeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowIframe(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (iframeRef.current) observer.observe(iframeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-clip overflow-y-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0">
          <Image
            loading="lazy"
            src="/hip-hop-background-with-gold-chains-and-smoke.webp"
            alt="Hip Hop Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 text-balance">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 text-balance">
          {content.subtitle}
        </p>

        {/* Game Section */}
        <div className="mb-8 max-w-4xl mx-auto" ref={iframeRef}>
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden border-2 border-primary/30 animate-glow">
            {showIframe ? (
              <iframe
                className="w-full h-full"
                src="https://bgaming-network.com/play/SnoopDoggDollars/FUN?server=demo"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                title="Snoop Dogg Dollars Demo"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white">
                <span className="animate-pulse">Loading demo…</span>
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://lkhv.pro/581ee4"
            target="_blank"
            rel="nofollow noopener sponsored"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-full animate-glow inline-flex items-center justify-center"
            data-cta="hero-play"
          >
            {content.playButton}
          </a>
          <a
            href="/demo/"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-4 rounded-full bg-transparent inline-flex items-center justify-center border"
          >
            {content.demoButton}
          </a>
        </div>

        {/* Snoop + Smoke */}
        <div className="relative mt-12 overflow-x-clip overflow-y-visible">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/snoop-preview.webp"
            className="mx-auto max-w-full h-auto relative z-10"
          >
            <source src="/snoop-dogg-in-white-hoodie-with-gold-chains-hip-ho.webm" type="video/webm" />
            <source src="/snoop-dogg-in-white-hoodie-with-gold-chains-hip-ho.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>

          <Image
            src="/smoke.webp"
            alt="Smoke"
            fill
            className="hidden md:block object-contain opacity-90 pointer-events-none"
            loading="lazy"
          />

          <img
            src="/smoke.webp"
            alt="Smoke mobile"
            className="md:hidden absolute left-[200px] -translate-x-1/2 bottom-0 translate-y-[25%] w-[120vw] max-w-[680px] h-auto z-30 pointer-events-none opacity-80"
          />
        </div>
      </div>
    </section>
  )
}
