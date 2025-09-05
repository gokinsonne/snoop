import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { LocaleContent } from "@/lib/content"

interface PromotionSectionProps {
  content: LocaleContent["promotion"]
}

export function PromotionSection({ content }: PromotionSectionProps) {
  return (
    <section
      id="promotion"
      className="relative py-16 px-4 bg-gradient-to-b from-black via-black to-[#003f15]"
    >
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-transparent shadow-none border-0">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Content */}
              <div className="flex-1 p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
                  {content.title}
                </h2>
                <h3 className="text-xl md:text-2xl text-secondary mb-6 text-balance">
                  {content.subtitle}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  {content.description}
                </p>

                {/* Ticket-style promo */}
                <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg mb-6 text-center">
                  <div className="bg-black rounded p-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      FREE SPIN BONUS
                    </div>
                    <div className="text-lg font-bold text-primary">HOLY1WIN</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      EXCLUSIVE FOR NEW PLAYERS
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold w-full sm:w-auto animate-glow"
                  asChild
                >
                  <Link href="/app">{content.button}</Link>
                </Button>
              </div>

              {/* -------- Desktop images (видно только от md) -------- */}
              <div className="relative flex-1 min-h-[500px] overflow-visible hidden md:block">
                {/* Центр: Snoop */}
                <img
                  src="/snoopsmoke.gif"
                  alt="Snoop Dogg"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] 
                             h-[650px] md:h-[500px] lg:h-[650px] w-auto 
                             z-30 pointer-events-none"
                />

                {/* Левая девчонка */}
                <img
                  src="/girl1.gif"
                  alt="Girl 1"
                  className="absolute bottom-0 left-[-0%] md:left-[-30%] 
                             h-[380px] md:h-[460px] lg:h-[520px] w-auto 
                             z-20 pointer-events-none"
                />

                {/* Правая девчонка */}
                <img
                  src="/girl2.gif"
                  alt="Girl 2"
                  className="absolute bottom-0 right-[-5%] md:right-[-25%] 
                             h-[380px] md:h-[460px] lg:h-[520px] w-auto 
                             z-20 pointer-events-none"
                />
              </div>

              {/* --- зелёный дым (только desktop) --- */}
              <div className="pointer-events-none absolute inset-x-0 bottom-[-450px] z-10 hidden md:block">
                <img
                  src="/smokegreen.webp"
                  alt="Green Smoke"
                  className="block mx-auto w-full max-w-screen-3xl h-auto select-none opacity-90"
                />
              </div>

              {/* -------- Mobile images (видно только до md) -------- */}
              <div className="relative flex-1 min-h-[400px] overflow-visible md:hidden">
                {/* Тут мобильный сетап — поменяй как надо */}
                <img
                  src="/snoopsmoke.gif"
                  alt="Snoop Dogg Mobile"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] 
                             h-[450px] w-auto z-30 pointer-events-none"
                />

                <img
                  src="/girl1.gif"
                  alt="Girl 1 Mobile"
                  className="absolute left-[-30px] bottom-[-70px] 
                             h-[300px] w-auto z-20 pointer-events-none"
                />

                <img
                  src="/girl2.gif"
                  alt="Girl 2 Mobile"
                  className="absolute right-[-30px] bottom-[-70px] 
                             h-[300px] w-auto z-20 pointer-events-none"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
