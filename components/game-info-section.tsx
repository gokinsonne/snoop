import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Download } from "lucide-react"
import type { LocaleContent } from "@/lib/content"

interface GameInfoSectionProps {
  content: LocaleContent["gameInfo"]
}

export function GameInfoSection({ content }: GameInfoSectionProps) {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Phone Mockup */}


        {/* How to Play */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-balance">{content.title}</h2>

            <div className="space-y-6">
              {content.steps.map((step, index) => (
                <Card key={index} className="bg-card border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-foreground font-medium">{step}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2 text-balance">{content.downloadTitle}</h3>
              <p className="text-muted-foreground mb-6">{content.downloadSubtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-black hover:bg-black/90 text-white flex items-center space-x-2" asChild>
                  <Link href="#google-play">
                    <Download className="w-4 h-4" />
                    <span>Google Play</span>
                  </Link>
                </Button>
                <Button className="bg-black hover:bg-black/90 text-white flex items-center space-x-2" asChild>
                  <Link href="#app-store">
                    <Download className="w-4 h-4" />
                    <span>App Store</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
