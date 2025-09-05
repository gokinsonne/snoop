import Link from "next/link"
import type { LocaleContent } from "@/lib/content"

interface FooterProps {
  content: LocaleContent["footer"]
  locale: string
}

export function Footer({ content, locale }: FooterProps) {
  const partnerContent = {
    tr: {
      partnersTitle: "Güvenilir Partnerler",
      paymentMethods: "Ödeme Yöntemleri",
      casinoPartners: "Casino Partnerleri",
    },
    en: {
      partnersTitle: "Trusted Partners",
      paymentMethods: "Payment Methods",
      casinoPartners: "Casino Partners",
    },
    pt: {
      partnersTitle: "Parceiros Confiáveis",
      paymentMethods: "Métodos de Pagamento",
      casinoPartners: "Parceiros de Casino",
    },
    fr: {
      partnersTitle: "Partenaires de Confiance",
      paymentMethods: "Méthodes de Paiement",
      casinoPartners: "Partenaires Casino",
    },
    ie: {
      partnersTitle: "Trusted Partners",
      paymentMethods: "Payment Methods",
      casinoPartners: "Casino Partners",
    },
    in: {
      partnersTitle: "विश्वसनीय साझेदार",
      paymentMethods: "भुगतान के तरीके",
      casinoPartners: "कैसीनो साझेदार",
    },
  }

  const localPartnerContent = partnerContent[locale as keyof typeof partnerContent] || partnerContent.en

  return (
    <footer className="bg-card border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-center mb-6 text-primary">{localPartnerContent.partnersTitle}</h3>

          {/* Payment Methods */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-center mb-4 text-foreground">
              {localPartnerContent.paymentMethods}
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="bg-white rounded-lg p-3 shadow-md">
                <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md">
                <img src="/visa-logo-generic.png" alt="Visa" className="h-8" />
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md">
                <img src="/bit.png" alt="Bitcoin" className="h-8" />
              </div>
              <div className="bg-white rounded-lg p-3 shadow-md">
                <img src="/ethereum-logo.png" alt="Ethereum" className="h-8" />
              </div>
            </div>
          </div>

          {/* Casino Partners */}
<div className="mb-6">
  <h4 className="text-lg font-semibold text-center mb-4 text-foreground">
    {localPartnerContent.casinoPartners}
  </h4>

  <div className="flex flex-wrap justify-center items-center gap-6">
    {/* 1WIN */}
    <a
      href="https://1win.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
    >
      <img
        src="/1win.png"
        alt="1WIN"
        className="h-12 w-auto drop-shadow-lg"
      />
    </a>

    {/* PIN-UP */}
    <a
      href="https://dudaray.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
    >
      <img
        src="/pinup.svg"
        alt="PIN-UP Aviator casino"
        className="h-12 w-auto drop-shadow-lg"
      />
    </a>
  </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-primary/20 pt-8">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">{content.copyright}</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {content.terms}
            </Link>
            <Link href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {content.privacy}
            </Link>
            <Link href="#support" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {content.support}
            </Link>
          </div>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="mt-6 pt-6 border-t border-primary/20 text-center">
          <p className="text-xs text-muted-foreground">
            {locale === "tr" && "18+ | Sorumlu Oyun | Kumar bağımlılığı yapabilir"}
            {locale === "en" && "18+ | Responsible Gaming | Gambling can be addictive"}
            {locale === "pt" && "18+ | Jogo Responsável | O jogo pode causar dependência"}
            {locale === "fr" && "18+ | Jeu Responsable | Le jeu peut créer une dépendance"}
            {locale === "ie" && "18+ | Responsible Gaming | Gambling can be addictive"}
            {locale === "in" && "18+ | जिम्मेदार गेमिंग | जुआ लत लगा सकता है"}
          </p>
        </div>
      </div>
    </footer>
  )
}
