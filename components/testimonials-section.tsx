interface TestimonialsProps {
  locale: string
}

export function TestimonialsSection({ locale }: TestimonialsProps) {
  const testimonialsContent = {
    tr: {
      title: "Oyuncularımız Ne Diyor?",
      testimonials: [
        {
          name: "Mehmet K.",
          location: "İstanbul",
          text: "Snoop Dogg Dollars'da 25.000 TL kazandım! Bonus turları inanılmaz, müzikler de harika!",
          rating: 5,
          amount: "25.000 TL",
        },
        {
          name: "Ayşe M.",
          location: "Ankara",
          text: "Her gün oynuyorum, günlük bonuslar süper. VIP programı gerçekten değerli!",
          rating: 5,
          amount: "12.500 TL",
        },
        {
          name: "Can S.",
          location: "İzmir",
          text: "Hip-hop seviyorsanız bu oyunu mutlaka oynayın! Jackpot'u 3. günde vurdum!",
          rating: 5,
          amount: "45.000 TL",
        },
      ],
    },
    en: {
      title: "What Our Players Say?",
      testimonials: [
        {
          name: "John D.",
          location: "London",
          text: "Won €15,000 on Snoop Dogg Dollars! The bonus rounds are incredible, love the music!",
          rating: 5,
          amount: "€15,000",
        },
        {
          name: "Sarah M.",
          location: "Dublin",
          text: "Play every day, daily bonuses are amazing. VIP program is really worth it!",
          rating: 5,
          amount: "€8,500",
        },
        {
          name: "Mike R.",
          location: "Manchester",
          text: "If you love hip-hop, you must play this game! Hit the jackpot on day 3!",
          rating: 5,
          amount: "€32,000",
        },
      ],
    },
    pt: {
      title: "O Que Dizem Os Nossos Jogadores?",
      testimonials: [
        {
          name: "João P.",
          location: "Lisboa",
          text: "Ganhei €18.000 no Snoop Dogg Dollars! As rondas bónus são incríveis!",
          rating: 5,
          amount: "€18.000",
        },
        {
          name: "Maria S.",
          location: "Porto",
          text: "Jogo todos os dias, os bónus diários são fantásticos. Programa VIP vale a pena!",
          rating: 5,
          amount: "€9.200",
        },
        {
          name: "Carlos M.",
          location: "Braga",
          text: "Se gostas de hip-hop, tens de jogar! Ganhei o jackpot no 3º dia!",
          rating: 5,
          amount: "€28.500",
        },
      ],
    },
    fr: {
      title: "Que Disent Nos Joueurs?",
      testimonials: [
        {
          name: "Pierre L.",
          location: "Paris",
          text: "J'ai gagné 20.000€ sur Snoop Dogg Dollars! Les tours bonus sont incroyables!",
          rating: 5,
          amount: "20.000€",
        },
        {
          name: "Sophie D.",
          location: "Lyon",
          text: "Je joue tous les jours, les bonus quotidiens sont super. Programme VIP excellent!",
          rating: 5,
          amount: "11.800€",
        },
        {
          name: "Marc B.",
          location: "Marseille",
          text: "Si vous aimez le hip-hop, vous devez jouer! J'ai touché le jackpot le 3ème jour!",
          rating: 5,
          amount: "35.200€",
        },
      ],
    },
    ie: {
      title: "What Our Irish Players Say?",
      testimonials: [
        {
          name: "Liam O.",
          location: "Dublin",
          text: "Won €22,000 on Snoop Dogg Dollars! The bonus rounds are class, love the beats!",
          rating: 5,
          amount: "€22,000",
        },
        {
          name: "Siobhan K.",
          location: "Cork",
          text: "Play every day, daily bonuses are brilliant. VIP program is top notch!",
          rating: 5,
          amount: "€13,400",
        },
        {
          name: "Paddy M.",
          location: "Galway",
          text: "If you're into hip-hop, this game is deadly! Hit the jackpot on me third go!",
          rating: 5,
          amount: "€41,500",
        },
      ],
    },
  }

  const content = testimonialsContent[locale as keyof typeof testimonialsContent] || testimonialsContent.tr

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12 text-balance">{content.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {content.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-gold/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gold/40"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-coral rounded-full flex items-center justify-center text-background font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.text}"</p>

              <div className="bg-gold/10 rounded-lg p-3 text-center">
                <span className="text-gold font-bold text-lg">💰 {testimonial.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
