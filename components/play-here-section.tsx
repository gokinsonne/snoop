import { getContent } from "@/lib/content"

interface PlayHereSectionProps {
  locale?: string
}

export function PlayHereSection({ locale = "en" }: PlayHereSectionProps) {
  const content = getContent(locale)

  const playHereContent = {
    tr: {
      title: "Burada Oyna!",
      subtitle: "Yeni Oyuncular İçin Özel Teklif",
      offer: "+200% Depozit Bonusu",
      description: "İlk yatırımınızda %200 bonus kazanın! Hemen kayıt olun ve büyük kazançlara başlayın.",
      features: ["Anında Bonus", "Güvenli Ödeme", "7/24 Destek", "Mobil Uyumlu"],
      playButton: "HEMEN OYNA",
      demoButton: "ÜCRETSİZ DENE",
    },
    en: {
      title: "Play Here!",
      subtitle: "Special Offer for New Players",
      offer: "+200% Deposit Bonus",
      description: "Get 200% bonus on your first deposit! Sign up now and start winning big.",
      features: ["Instant Bonus", "Secure Payment", "24/7 Support", "Mobile Compatible"],
      playButton: "PLAY NOW",
      demoButton: "TRY FREE",
    },
    pt: {
      title: "Jogue Aqui!",
      subtitle: "Oferta Especial para Novos Jogadores",
      offer: "+200% Bónus de Depósito",
      description: "Obtenha 200% de bónus no seu primeiro depósito! Registe-se agora e comece a ganhar muito.",
      features: ["Bónus Instantâneo", "Pagamento Seguro", "Suporte 24/7", "Compatível com Móvel"],
      playButton: "JOGAR AGORA",
      demoButton: "EXPERIMENTAR GRÁTIS",
    },
    fr: {
      title: "Jouez Ici!",
      subtitle: "Offre Spéciale pour Nouveaux Joueurs",
      offer: "+200% Bonus de Dépôt",
      description:
        "Obtenez 200% de bonus sur votre premier dépôt! Inscrivez-vous maintenant et commencez à gagner gros.",
      features: ["Bonus Instantané", "Paiement Sécurisé", "Support 24/7", "Compatible Mobile"],
      playButton: "JOUER MAINTENANT",
      demoButton: "ESSAYER GRATUITEMENT",
    },
    ie: {
      title: "Play Here!",
      subtitle: "Special Offer for New Irish Players",
      offer: "+200% Deposit Bonus",
      description: "Get 200% bonus on your first deposit! Licensed in Ireland. Sign up now and start winning big.",
      features: ["Instant Bonus", "Secure Payment", "24/7 Support", "Irish Licensed"],
      playButton: "PLAY NOW",
      demoButton: "TRY FREE",
    },
    in: {
      title: "यहाँ खेलें!",
      subtitle: "नए खिलाड़ियों के लिए विशेष ऑफर",
      offer: "+200% जमा बोनस",
      description: "अपनी पहली जमा राशि पर 200% बोनस पाएं! अभी साइन अप करें और बड़ी जीत शुरू करें।",
      features: ["तुरंत बोनस", "सुरक्षित भुगतान", "24/7 सहायता", "मोबाइल संगत"],
      playButton: "अभी खेलें",
      demoButton: "मुफ्त में आज़माएं",
    },
  }

  const localContent = playHereContent[locale as keyof typeof playHereContent] || playHereContent.en

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-coral via-gold to-coral">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-gold shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gold">{localContent.title}</h2>
          <p className="text-xl md:text-2xl text-white mb-6">{localContent.subtitle}</p>

          <div className="mb-6">
            <img
              src="/snoop-dogg-with-money-and-gold-chains-hip-hop-styl.webp"
              alt="Snoop Dogg Dollars Bonus"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-gradient-to-r from-gold to-coral text-black rounded-2xl p-6 mb-8 transform rotate-1 shadow-lg">
            <div className="text-3xl md:text-5xl font-black mb-2">{localContent.offer}</div>
            <p className="text-lg md:text-xl font-semibold">{localContent.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {localContent.features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-3 border border-gold/30">
                <div className="text-gold font-semibold text-sm md:text-base">✓ {feature}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#play"
              className="bg-gradient-to-r from-gold to-coral text-black px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-lg"
            >
              {localContent.playButton}
            </a>
            <a
              href="#demo"
              className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-gold hover:text-black transition-colors"
            >
              {localContent.demoButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
