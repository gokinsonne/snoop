import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import type { LocaleContent } from "@/lib/content"

interface HeroSectionProps {
  content: LocaleContent["hero"]
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-clip overflow-y-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-[url('/hip-hop-background-with-gold-chains-and-smoke.jpg')] bg-cover bg-center opacity-100"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 text-balance">
          {content.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 text-balance">
          {content.subtitle}
        </p>

        {/* Game Section */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-visible border-2 border-primary/30 animate-glow">
            <iframe
              className="w-full h-full"
              src="https://bgaming-network.com/play/SnoopDoggDollars/FUN?server=demo"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              title="Snoop Dogg Dollars Demo"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-full animate-glow"
            asChild
          >
            <Link href="/play">{content.playButton}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-4 rounded-full bg-transparent"
            asChild
          >
            <Link href="/demo">{content.demoButton}</Link>
          </Button>
        </div>

        {/* Snoop + Smoke */}
        <div className="relative mt-12 overflow-x-clip overflow-y-visible">
          {/* Snoop */}
          <img
            src="/snoop-dogg-in-white-hoodie-with-gold-chains-hip-ho.gif"
            alt="Snoop Dogg Dollars Best Hip-Hop Slot"
            className="mx-auto max-w-full h-auto relative z-10"
          />

          {/* Smoke */}
          {/* Мобилка: скрываем (safe). Можно заменить на уменьшенный вариант — см. нижний блок */}
          <img
            src="/smoke.png"
            alt="Smoke"
            className="
              hidden md:block
              absolute left-1/2 -translate-x-1/2
              bottom-0 translate-y-[35%]
              w-full max-w-[1200px]  /* контроль ширины без % сверх контейнера */
              h-auto
              z-30 pointer-events-none opacity-90
              will-change-transform
            "
          />

          {/* Если хочешь дым и на мобиле — включи этот img и убери hidden у верхнего */}
          { <img
            src='/smoke.png'
            alt='Smoke mobile'
            className='md:hidden absolute left-[200px] -translate-x-1/2 bottom-0 translate-y-[25%] w-[120vw] max-w-[680px] h-auto z-30 pointer-events-none opacity-80'
          /> }
        </div>
      </div>
    </section>
  )
}
