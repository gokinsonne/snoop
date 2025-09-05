import { Card, CardContent } from "@/components/ui/card"
import type { LocaleContent } from "@/lib/content"
import Image from "next/image"

interface FeaturesSectionProps {
  content: LocaleContent["features"]
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 text-balance">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.items.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                {feature.icon.endsWith(".png") || feature.icon.endsWith(".jpg") ? (
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={10}
                    height={10}
                    className="mx-auto mb-4 w-25 h-25"
                  />
                ) : (
                  <div className="text-4xl mb-4">{feature.icon}</div>
                )}
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
