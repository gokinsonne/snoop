import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  locale: string
}

export function CTASection({ locale }: CTASectionProps) {
  const ctaContent = {
    tr: {
      title: "Hemen Başla ve Kazanmaya Başla!",
      subtitle: "Snoop Dogg ile birlikte hip-hop'ın ritmiyle büyük kazançlar elde et!",
      playButton: "ŞIMDI OYNA",
      downloadButton: "UYGULAMAYI İNDİR",
      bonusText: "İlk üyelikte %200 bonus + 100 ücretsiz spin!",
      urgency: "⏰ Sınırlı süre! Sadece bugün geçerli!",
    },
    en: {
      title: "Start Now and Begin Winning!",
      subtitle: "Join Snoop Dogg for big wins with the rhythm of hip-hop!",
      playButton: "PLAY NOW",
      downloadButton: "DOWNLOAD APP",
      bonusText: "current welcome offer on first signup!",
      urgency: "⏰ Limited time! Valid today only!",
    },
    pt: {
      title: "Comece Agora e Comece a Ganhar!",
      subtitle: "Junte-se ao Snoop Dogg para grandes vitórias com o ritmo do hip-hop!",
      playButton: "JOGAR AGORA",
      downloadButton: "DESCARREGAR APP",
      bonusText: "200% de bónus + 100 spins grátis no primeiro registo!",
      urgency: "⏰ Tempo limitado! Válido apenas hoje!",
    },
    fr: {
      title: "Commencez Maintenant et Commencez à Gagner!",
      subtitle: "Rejoignez Snoop Dogg pour de gros gains avec le rythme du hip-hop!",
      playButton: "JOUER MAINTENANT",
      downloadButton: "TÉLÉCHARGER L'APP",
      bonusText: "200% de bonus + 100 tours gratuits à l'inscription!",
      urgency: "⏰ Temps limité! Valide aujourd'hui seulement!",
    },
    ie: {
      title: "Start Now and Begin Winning!",
      subtitle: "Join Snoop Dogg for big wins with the rhythm of hip-hop in Ireland!",
      playButton: "PLAY NOW",
      downloadButton: "DOWNLOAD APP",
      bonusText: "€500 bonus + 100 free spins for Irish players!",
      urgency: "⏰ Limited time! Valid today only!",
    },
  }

  const content = ctaContent[locale as keyof typeof ctaContent] || ctaContent.tr

  return (
    <section className="py-16 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/hip-hop-music-notes-pattern.jpg')] opacity-50" />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gold/20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4 text-balance">{content.title}</h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty">{content.subtitle}</p>

          <div className="bg-coral/20 rounded-2xl p-6 mb-8 border border-coral/30">
            <p className="text-coral font-bold text-lg md:text-xl mb-2">🎁 {content.bonusText}</p>
            <p className="text-gold font-semibold text-sm md:text-base">{content.urgency}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://lkhv.pro/581ee4"
              target="_blank"
              rel="nofollow noopener sponsored"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gold to-coral hover:from-gold/90 hover:to-coral/90 text-background font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              data-cta="cta-play"
            >
              {content.playButton}
            </a>

            <a
              href="https://lkhv.pro/581ee4"
              target="_blank"
              rel="nofollow noopener sponsored"
              className="inline-flex items-center justify-center border-2 border-gold text-gold bg-black/40 hover:bg-gold hover:text-black font-bold px-8 py-4 text-lg rounded-full w-full sm:w-auto"
              data-cta="cta-download"
            >
              {content.downloadButton}
            </a>


          </div>
        </div>
      </div>
    </section>
  )
}
