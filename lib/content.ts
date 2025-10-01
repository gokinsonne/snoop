export interface LocaleContent {
  locale: string
  header: {
    logo: string
    playNow: string
    howToPlay: string
    promotions: string
    support: string
  }
  hero: {
    title: string
    subtitle: string
    playButton: string
    demoButton: string
  }
  features: {
    title: string
    items: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  promotion: {
    title: string
    subtitle: string
    description: string
    button: string
    expires: string
  }
  gameInfo: {
    title: string
    steps: string[]
    downloadTitle: string
    downloadSubtitle: string
  }
  footer: {
    copyright: string
    terms: string
    privacy: string
    support: string
  }
  seo: {
    title: string
    description: string
    keywords: string
  }
    faq: {
    title: string
    items: Array<{
      id: string
      q: string
      a: string
    }>
    subtitle?: string
    cta?: { label: string; href: string }
  }
  vpnOffer: {
    title: string
    description: string
    button: string
    logo: string   // путь к лого (например /vpn/nordvpn.png)
    url: string    // ссылка на партнёрку NordVPN
  }
}

export interface GameStats {
  provider: string
  rtp: string
  volatility: string
  maxWin: string
  minBet: string
  maxBet: string
}

export interface PayoutSymbol {
  symbol: string
  payout: string
  description: string
}

export const gameStats: GameStats = {
  provider: "BGaming",
  rtp: "97.00%",
  volatility: "Very High",
  maxWin: "50,000x",
  minBet: "$0.25",
  maxBet: "$25",
}

export const payoutTable: PayoutSymbol[] = [
  { symbol: "/boom.webp", payout: "10x – 50x", description: "Destroy - Highest payout" },
  { symbol: "/girl.webp", payout: "2.5x – 25x", description: "Purple Dog - Second highest" },
  { symbol: "/predator.webp", payout: "2x – 15x", description: "Green Dog - Medium tier" },
  { symbol: "/man.webp", payout: "1.5x – 12x", description: "Red Dog - Lower medium" },
  { symbol: "/blue.webp", payout: "1x – 10x", description: "Blue - Lower tier" },
  { symbol: "/green.webp", payout: "0.8x – 8x", description: "Green - High-paying fruit" },
  { symbol: "/purpure.webp", payout: "0.5x – 5x", description: "Purple - Common low payout" },
  { symbol: "/Heart.webp", payout: "0.4x – 2x", description: "Red - Lowest value fruit" },
]

export type FaqItem = { id: string; q: string; a: string };

export type FaqBlock = {
  title: string;
  items: FaqItem[];
  // опц.
  subtitle?: string;
  cta?: { label: string; href: string };
};


export const content: Record<string, LocaleContent> = {
  tr: {
    locale: "tr",
    header: {
      logo: "Snoop Dogg Dollars",
      playNow: "Şimdi Oyna",
      howToPlay: "Nasıl Oynanır",
      promotions: "Promosyonlar",
      support: "Destek",
    },
    hero: {
      title: "Snoop Dogg Dollars",
      subtitle: "Snoop Dogg Dollars slot, oyuncuları hip-hop kültürünün derinliklerine götürüyor. Grafiti arka planlar, keskin grafikler ve makaraların yanında yer alan animasyonlu Snoop Dogg ile her dönüş adeta bir sokak performansı gibi hissediliyor. Orijinal seslendirmeler ve ritmik soundtrack ile birlikte Snoop Dogg Dollars, güçlü ve sürükleyici bir slot deneyimi sunuyor.",
      playButton: "OYNA HEMEN",
      demoButton: "Demo Oyna",
    },
    features: {
      title: "Oyun Özellikleri",
      items: [
        {
          title: "Mega Jackpot",
          description: "50.000x'e kadar kazanç! Snoop Dogg'un özel jackpot sistemi ile milyonlarca kazanın!",
          icon: "/mega.webp",
        },
        {
          title: "Bonus Turları",
          description: "25 ücretsiz spin + 5x çarpan! Hip-hop ritmi ile kazançlarınızı katlayın!",
          icon: "/bonus.webp",
        },
        {
          title: "Wild Semboller",
          description: "Snoop Dogg wild sembolleri tüm makaraları kaplar ve büyük kazançlar getirir!",
          icon: "/wild.webp",
        },
        {
          title: "Scatter Bonusu",
          description: "3 scatter ile bonus oyunu! Snoop'un stüdyosunda özel ödüller kazanın!",
          icon: "/Scatter.webp",
        },
        {
          title: "Günlük Turnuvalar",
          description: "Her gün yeni turnuvalar! Liderlik tablosunda zirvede yer alın!",
          icon: "/tourn.webp",
        },
        {
          title: "VIP Program",
          description: "Özel VIP avantajları, kişisel hesap yöneticisi ve premium bonuslar!",
          icon: "/VIP.webp",
        },
      ],
    },
    promotion: {
      title: "Snoop'un Özel Uygulaması",
      subtitle: "Mobil Uygulamamızı İndirin ve %200 Bonus Kazanın!",
      description:
        "İlk üyelikte 500 TL bonus + 100 ücretsiz spin! Günlük giriş bonusları, özel turnuvalar ve VIP avantajları için mobil uygulamamızı hemen indirin!",
      button: "UYGULAMAYI YÜKLE",
      expires: "31 Aralık 2024'e kadar geçerli - Sınırlı süre!",
    },
    gameInfo: {
      title: "Nasıl Oynanır? 3 Kolay Adım!",
      steps: [
        "1. Uygulamayı İndir ve Kayıt Ol - 2 dakikada tamamla!",
        "2. İlk Yatırımını Yap ve %200 Bonus Kazan!",
        "3. Snoop Dogg Dollars'ı Çevir ve Mega Jackpot Kazan!",
      ],
      downloadTitle: "Mobil Uygulamayı Hemen İndir!",
      downloadSubtitle: "iOS ve Android için mevcut - 4.8★ kullanıcı puanı",
    },
    footer: {
      copyright: "© 2024 Snoop Dogg Dollars. Tüm hakları saklıdır.",
      terms: "Şartlar ve Koşullar",
      privacy: "Gizlilik Politikası",
      support: "Müşteri Desteği",
    },
    seo: {
      title: "Snoop Dogg Dollars - Hip-Hop Slot Oyunu | Büyük Kazançlar",
      description:
        "Özel Snoop Dogg hip-hop slotunu oyna — bedava dönüşler, yatırımsız bonus, devasa jackpotlar ve x1000 çarpanlar! Wild makaraları çevir, bonus turları satın al, demo modunu dene veya gerçek parayla büyük kazançlar elde et. Yüksek RTP, maksimum kazanç potansiyeli ve durmaksızın aksiyon — Snoop Dogg ile en iyi hip-hop casino deneyimi. Bonusu kap ve hemen kazanmaya başla!",
      keywords: "snoop dogg, slot oyunu, casino, jackpot, hip-hop, online casino, büyük kazançlar, snoop dogg dollars",
    },
    faq: {
  title: "Snoop Dogg Dollars — SSS",
  items: [
    { id: "how", q: "Nasıl oynarım?", a: "“Demo Oyna” veya “Gerçek Para ile Oyna”ya tıkla. Makaraları döndür ve bonus turlarıyla çarpanları artır." },
    { id: "bonus", q: "Hoş geldin bonusu var mı?", a: "Evet — ilk yatırımlarda %200’e kadar + free spin mevcut. Ayrıntılar için Promosyonlar sayfasına bak." },
    { id: "mobile", q: "Mobil destek var mı?", a: "Evet, mobil web üzerinde çalışır; Android/iOS uygulama bağlantıları sayfada mevcut." },
    { id: "fair", q: "Oyun adil mi?", a: "Sertifikalı RNG kullanılır; ödeme tablosu ve sembol oranları Oyun Özeti’nde listelenmiştir." },
    { id: "limits", q: "Minimum/Maksimum bahis nedir?", a: "Minimum 0,25$; maksimum bölgeye ve sağlayıcıya göre değişir." },
    { id: "withdraw", q: "Para nasıl çekilir?", a: "Doğrulanmış yöntemleri kullan; operatör KYC talep edebilir. Süre, yönteme bağlıdır." }
  ],
  cta: { label: "Hâlâ sorularınız mı var? Destek", href: "/support" }
    },
    vpnOffer: {
  title: "Sitemize erişimde sorun mu yaşıyorsunuz?",
  description: "Eğer web sitemiz açılmıyorsa, güvenilir ortağımız NordVPN'i indirin ve oyuna geri dönün.",
  button: "NordVPN'i İndir",
  logo: "/nordvpn-logo.webp",
  url: "/download-vpn"
}
  },
  en: {
    locale: "en",
    header: {
      logo: "Snoop Dogg Dollars",
      playNow: "Play Now",
      howToPlay: "How to Play",
      promotions: "Promotions",
      support: "Support",
    },
    hero: {
      title: "Snoop Dogg Dollars",
      subtitle: "The Snoop Dogg Dollars slot takes players deep into the world of hip-hop culture. With graffiti backgrounds, sharp graphics and an animated Snoop Dogg by the reels, every spin feels like a street performance. Add the authentic voice lines and groovy soundtrack, and Snoop Dogg Dollars delivers a powerful and immersive slot experience.",
      playButton: "Play with Real Money",
      demoButton: "Play Demo",
    },
    features: {
      title: "Game Features",
      items: [
        {
          title: "Mega Jackpot",
          description: "Win up to 50,000x your stake! Snoop Dogg's exclusive jackpot system for millions in winnings!",
          icon: "/mega.webp",
        },
        {
          title: "Bonus Rounds",
          description: "25 free spins + 5x multiplier! Multiply your wins with hip-hop rhythm!",
          icon: "/bonus.webp",
        },
        {
          title: "Wild Symbols",
          description: "Snoop Dogg wild symbols cover entire reels and bring massive wins!",
          icon: "/wild.webp",
        },
        {
          title: "Scatter Bonus",
          description: "3 scatters trigger bonus game! Win exclusive rewards in Snoop's studio!",
          icon: "/Scatter.webp",
        },
        {
          title: "Daily Tournaments",
          description: "New tournaments every day! Climb to the top of the leaderboard!",
          icon: "/tourn.webp",
        },
        {
          title: "VIP Program",
          description: "Exclusive VIP benefits, personal account manager and premium bonuses!",
          icon: "/VIP.webp",
        },
      ],
    },
    promotion: {
      title: "Snoop's Special App",
      subtitle: "Download Our Mobile App and Get 200% Bonus!",
      description:
        "500€ bonus + 100 free spins on first signup! Daily login bonuses, exclusive tournaments and VIP benefits!",
      button: "DOWNLOAD APP",
      expires: "Valid until December 31st, 2024 - Limited time!",
    },
    gameInfo: {
      title: "How to Play? 3 Easy Steps!",
      steps: [
        "1. Download App & Sign Up - Complete in 2 minutes!",
        "2. Make Your First Deposit and Get 200% Bonus!",
        "3. Spin Snoop Dogg Dollars and Win the Mega Jackpot!",
      ],
      downloadTitle: "Download Mobile App Now!",
      downloadSubtitle: "Available for iOS and Android - 4.8★ user rating",
    },
    footer: {
      copyright: "© 2024 Snoop Dogg Dollars. All rights reserved.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      support: "Customer Support",
    },
    seo: {
      title: "Snoop Dogg Dollars - Hip-Hop Slot Game | Big Wins",
      description:
        "Play the exclusive Snoop Dogg hip-hop slot — free spins, no deposit bonus, huge jackpots and x1000 multipliers! Spin wild reels, buy bonus rounds, test demo mode or hit real money wins. High RTP, max win potential and nonstop action — the ultimate hip-hop casino experience with Snoop Dogg. Claim your bonus and start winning big now!",
      keywords: "snoop dogg, slot game, casino, jackpot, hip-hop, online casino, big wins, snoop dogg dollars",
    },
    faq: {
      title: "Snoop Dogg Dollars — FAQ",
      items: [
        { id: "how", q: "How do I play?", a: "Tap “Play Demo” or “Play with Real Money”. Spin reels and trigger bonus rounds for higher multipliers." },
        { id: "bonus", q: "Is there a welcome bonus?", a: "Yes — up to 200% on the first deposit + free spins. See the Promotions page." },
        { id: "mobile", q: "Mobile support?", a: "Works on mobile web; Android/iOS app links available on the page." },
        { id: "fair", q: "Is the game fair?", a: "Certified RNG; payouts & symbol odds are listed in Game Overview." },
        { id: "limits", q: "Min/Max bet?", a: "From $0.25; max depends on region/provider." },
        { id: "withdraw", q: "How to withdraw?", a: "Use verified methods; KYC may be required by the operator. Timing depends on method." }
      ],
      cta: { label: "Still have questions? Support", href: "/support" }
    },
vpnOffer: {
    title: "Having trouble accessing our site?",
    description: "If our website doesn’t open for you, download VPN from our trusted partner NordVPN and get back in the game.",
    button: "Download NordVPN",
    logo: "/nordvpn-logo.webp",
    url: "/download-vpn"
  },

  },
  pt: {
    locale: "pt",
    header: {
      logo: "Snoop Dogg Dollars",
      playNow: "Jogar Agora",
      howToPlay: "Como Jogar",
      promotions: "Promoções",
      support: "Suporte",
    },
    hero: {
      title: "Snoop Dogg Dollars",
      subtitle: "O Snoop Dogg Dollars slot leva os jogadores ao coração da cultura hip-hop. Com cenários de grafite, gráficos nítidos e um Snoop Dogg animado ao lado dos rolos, cada giro parece uma apresentação de rua. Somando as falas autênticas e a trilha sonora cheia de groove, o Snoop Dogg Dollars oferece uma experiência de slot poderosa e imersiva.",
      playButton: "JOGAR AGORA",
      demoButton: "Jogar Demo",
    },
    features: {
      title: "Características do Jogo",
      items: [
        {
          title: "Mega Jackpot",
          description: "Ganhe até 50.000x a sua aposta! Sistema exclusivo de jackpot do Snoop Dogg!",
          icon: "/mega.webp",
        },
        {
          title: "Rondas Bónus",
          description: "25 spins grátis + multiplicador 5x! Multiplique os seus ganhos com ritmo hip-hop!",
          icon: "/bonus.webp",
        },
        {
          title: "Símbolos Wild",
          description: "Símbolos wild do Snoop Dogg cobrem rolos inteiros e trazem vitórias massivas!",
          icon: "/wild.webp",
        },
        {
          title: "Bónus Scatter",
          description: "3 scatters ativam o jogo bónus! Ganhe recompensas exclusivas no estúdio do Snoop!",
          icon: "/Scatter.webp",
        },
        {
          title: "Torneios Diários",
          description: "Novos torneios todos os dias! Suba ao topo da tabela de líderes!",
          icon: "/tourn.webp",
        },
        {
          title: "Programa VIP",
          description: "Benefícios VIP exclusivos, gestor de conta pessoal e bónus premium!",
          icon: "/VIP.webp",
        },
      ],
    },
    promotion: {
      title: "App Especial do Snoop",
      subtitle: "Descarregue a Nossa App Móvel e Ganhe 200% de Bónus!",
      description:
        "500€ de bónus + 100 spins grátis no primeiro registo! Bónus diários de login, torneios exclusivos e benefícios VIP!",
      button: "DESCARREGAR APP",
      expires: "Válido até 31 de Dezembro de 2024 - Tempo limitado!",
    },
    gameInfo: {
      title: "Como Jogar? 3 Passos Fáceis!",
      steps: [
        "1. Descarregue a App e Registe-se - Complete em 2 minutos!",
        "2. Faça o Seu Primeiro Depósito e Ganhe 200% de Bónus!",
        "3. Rode o Snoop Dogg Dollars e Ganhe o Mega Jackpot!",
      ],
      downloadTitle: "Descarregue a App Móvel Agora!",
      downloadSubtitle: "Disponível para iOS e Android - 4.8★ classificação dos utilizadores",
    },
    footer: {
      copyright: "© 2024 Snoop Dogg Dollars. Todos os direitos reservados.",
      terms: "Termos e Condições",
      privacy: "Política de Privacidade",
      support: "Apoio ao Cliente",
    },
    seo: {
      title: "Snoop Dogg Dollars - Jogo de Slot Hip-Hop | Grandes Vitórias",
      description:
        "Jogue o slot exclusivo de hip-hop do Snoop Dogg — rodadas grátis, bônus sem depósito, enormes jackpots e multiplicadores x1000! Gire os rolos selvagens, compre rodadas de bônus, teste o modo demo ou jogue com dinheiro real. Alto RTP, ganho máximo e ação sem parar — a experiência definitiva de cassino hip-hop com Snoop Dogg. Resgate seu bônus e comece a ganhar muito agora!",
      keywords: "snoop dogg, jogo de slot, casino, jackpot, hip-hop, casino online, grandes vitórias, snoop dogg dollars",
    },
    faq: {
  title: "Snoop Dogg Dollars — FAQ",
  items: [
    { id: "how", q: "Como jogar?", a: "Toque em “Jogar Demo” para testar gratuitamente ou em “Jogar com Dinheiro Real” para começar. Gire os rolos e ative rodadas bônus para multiplicadores maiores." },
    { id: "bonus", q: "Existe bônus de boas-vindas?", a: "Sim — até 200% no primeiro depósito + rodadas grátis. Veja a página de Promoções." },
    { id: "mobile", q: "Suporte móvel?", a: "Funciona no site móvel; links para aplicativos Android/iOS estão disponíveis na página." },
    { id: "fair", q: "O jogo é justo?", a: "RNG certificado; tabelas de pagamento e probabilidades de símbolos estão listadas em Visão Geral do Jogo." },
    { id: "limits", q: "Aposta mínima/máxima?", a: "A partir de $0,25; o máximo depende da região/provedor." },
    { id: "withdraw", q: "Como sacar?", a: "Use métodos verificados; a KYC pode ser exigida pelo operador. O tempo de processamento depende do método." }
  ],
  cta: { label: "Ainda tem dúvidas? Suporte", href: "/support" }
},
vpnOffer: {
  title: "Está com dificuldades para acessar nosso site?",
  description: "Se o nosso site não abrir para você, baixe a VPN do nosso parceiro confiável NordVPN e volte ao jogo.",
  button: "Baixar NordVPN",
  logo: "/nordvpn-logo.webp",
  url: "/download-vpn"
}
  },
  fr: {
    locale: "fr",
    header: {
      logo: "Snoop Dogg Dollars",
      playNow: "Jouer Maintenant",
      howToPlay: "Comment Jouer",
      promotions: "Promotions",
      support: "Support",
    },
    hero: {
      title: "Snoop Dogg Dollars",
      subtitle: "La machine à sous Snoop Dogg Dollars plonge les joueurs au cœur de la culture hip-hop. Avec des décors de graffitis, des graphismes nets et un Snoop Dogg animé à côté des rouleaux, chaque tour ressemble à une performance de rue. Ajoutez les voix authentiques et une bande-son groovy, et Snoop Dogg Dollars offre une expérience de slot puissante et immersive.",
      playButton: "JOUER MAINTENANT",
      demoButton: "Jouer Démo",
    },
    features: {
      title: "Caractéristiques du Jeu",
      items: [
        {
          title: "Méga Jackpot",
          description: "Gagnez jusqu'à 50 000x votre mise! Système de jackpot exclusif de Snoop Dogg!",
          icon: "/mega.webp",
        },
        {
          title: "Tours Bonus",
          description: "25 tours gratuits + multiplicateur 5x! Multipliez vos gains avec le rythme hip-hop!",
          icon: "/bonus.webp",
        },
        {
          title: "Symboles Wild",
          description: "Les symboles wild de Snoop Dogg couvrent des rouleaux entiers et apportent des gains massifs!",
          icon: "/wild.webp",
        },
        {
          title: "Bonus Scatter",
          description:
            "3 scatters déclenchent le jeu bonus! Gagnez des récompenses exclusives dans le studio de Snoop!",
          icon: "/Scatter.webp",
        },
        {
          title: "Tournois Quotidiens",
          description: "Nouveaux tournois chaque jour! Grimpez au sommet du classement!",
          icon: "/tourn.webp",
        },
        {
          title: "Programme VIP",
          description: "Avantages VIP exclusifs, gestionnaire de compte personnel et bonus premium!",
          icon: "/VIP.webp",
        },
      ],
    },
    promotion: {
      title: "App Spéciale de Snoop",
      subtitle: "Téléchargez Notre App Mobile et Obtenez 200% de Bonus!",
      description:
        "500€ de bonus + 100 tours gratuits à l'inscription! Bonus de connexion quotidiens, tournois exclusifs et avantages VIP!",
      button: "TÉLÉCHARGER L'APP",
      expires: "Valide jusqu'au 31 décembre 2024 - Temps limité!",
    },
    gameInfo: {
      title: "Comment Jouer? 3 Étapes Faciles!",
      steps: [
        "1. Téléchargez l'App et Inscrivez-vous - Complétez en 2 minutes!",
        "2. Effectuez Votre Premier Dépôt et Obtenez 200% de Bonus!",
        "3. Faites Tourner Snoop Dogg Dollars et Gagnez le Méga Jackpot!",
      ],
      downloadTitle: "Téléchargez l'App Mobile Maintenant!",
      downloadSubtitle: "Disponible pour iOS et Android - 4.8★ note des utilisateurs",
    },
    footer: {
      copyright: "© 2024 Snoop Dogg Dollars. Tous droits réservés.",
      terms: "Termes et Conditions",
      privacy: "Politique de Confidentialité",
      support: "Support Client",
    },
    seo: {
      title: "Snoop Dogg Dollars - Jeu de Machine à Sous Hip-Hop | Gros Gains",
      description:
        "Jouez à la machine à sous exclusive Snoop Dogg hip-hop — tours gratuits, bonus sans dépôt, énormes jackpots et multiplicateurs x1000 ! Faites tourner les rouleaux sauvages, achetez des tours bonus, testez le mode démo ou remportez des gains en argent réel. RTP élevé, gain maximum et action non-stop — l’expérience ultime du casino hip-hop avec Snoop Dogg. Réclamez votre bonus et commencez à gagner gros dès maintenant!",
      keywords: "snoop dogg, machine à sous, casino, jackpot, hip-hop, casino en ligne, gros gains, snoop dogg dollars",
    },
    faq: {
  title: "Snoop Dogg Dollars — FAQ",
  items: [
    { id: "how", q: "Comment jouer ?", a: "Appuyez sur « Démo » pour essayer gratuitement ou « Jouer avec de l’argent réel ». Faites tourner les rouleaux et déclenchez des tours bonus pour obtenir des multiplicateurs plus élevés." },
    { id: "bonus", q: "Y a-t-il un bonus de bienvenue ?", a: "Oui — jusqu’à 200 % sur le premier dépôt + tours gratuits. Voir la page Promotions." },
    { id: "mobile", q: "Support mobile ?", a: "Fonctionne sur le web mobile ; applications Android/iOS disponibles sur la page." },
    { id: "fair", q: "Le jeu est-il équitable ?", a: "RNG certifié ; les paiements et les probabilités des symboles sont listés dans la section Vue d’ensemble du jeu." },
    { id: "limits", q: "Mise min/max ?", a: "À partir de 0,25 $ ; le maximum dépend de la région et du fournisseur." },
    { id: "withdraw", q: "Comment retirer ?", a: "Utilisez des méthodes vérifiées ; une vérification KYC peut être requise par l’opérateur. Le délai dépend de la méthode." }
  ],
  cta: { label: "Encore des questions ? Support", href: "/support" }
},
vpnOffer: {
  title: "Des difficultés à accéder à notre site ?",
  description: "Si notre site ne s’ouvre pas pour vous, téléchargez le VPN de notre partenaire de confiance NordVPN et revenez dans le jeu.",
  button: "Télécharger NordVPN",
  logo: "/nordvpn-logo.webp",
  url: "/download-vpn"
}
  },
  ie: {
    locale: "ie",
    header: {
      logo: "Snoop Dogg Dollars",
      playNow: "Play Now",
      howToPlay: "How to Play",
      promotions: "Promotions",
      support: "Support",
    },
    hero: {
      title: "Snoop Dogg Dollars",
      subtitle: "The Snoop Dogg Dollars slot takes players deep into the world of hip-hop culture. With graffiti backgrounds, sharp graphics and an animated Snoop Dogg by the reels, every spin feels like a street performance. Add the authentic voice lines and groovy soundtrack, and Snoop Dogg Dollars delivers a powerful and immersive slot experience.",
      playButton: "Play with Real Money",
      demoButton: "Play Demo",
    },
    features: {
      title: "Game Features",
      items: [
        {
          title: "Mega Jackpot",
          description: "Win up to 50,000x your stake! Snoop Dogg's exclusive jackpot system for millions in winnings!",
          icon: "/mega.webp",
        },
        {
          title: "Bonus Rounds",
          description: "25 free spins + 5x multiplier! Multiply your wins with hip-hop rhythm!",
          icon: "/bonus.webp",
        },
        {
          title: "Wild Symbols",
          description: "Snoop Dogg wild symbols cover entire reels and bring massive wins!",
          icon: "/wild.webp",
        },
        {
          title: "Scatter Bonus",
          description: "3 scatters trigger bonus game! Win exclusive rewards in Snoop's studio!",
          icon: "/Scatter.webp",
        },
        {
          title: "Daily Tournaments",
          description: "New tournaments every day! Climb to the top of the leaderboard!",
          icon: "/tourn.webp",
        },
        {
          title: "VIP Program",
          description: "Exclusive VIP benefits, personal account manager and premium bonuses!",
          icon: "/VIP.webp",
        },
      ],
    },
    promotion: {
      title: "Snoop's Special App",
      subtitle: "Download Our Mobile App and Get 200% Bonus!",
      description:
        "€500 bonus + 100 free spins on first signup! Daily login bonuses, exclusive tournaments and VIP benefits for Irish players!",
      button: "DOWNLOAD APP",
      expires: "Valid until December 31st, 2024 - Limited time offer for Ireland!",
    },
    gameInfo: {
      title: "How to Play? 3 Easy Steps!",
      steps: [
        "1. Download App & Sign Up - Complete in 2 minutes!",
        "2. Make Your First Deposit and Get 200% Bonus!",
        "3. Spin Snoop Dogg Dollars and Win the Mega Jackpot!",
      ],
      downloadTitle: "Download Mobile App Now!",
      downloadSubtitle: "Available for iOS and Android - Licensed in Ireland - 4.8★ user rating",
    },
    footer: {
      copyright: "© 2024 Snoop Dogg Dollars. All rights reserved. Licensed in Ireland.",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      support: "Customer Support",
    },
    seo: {
      title: "Snoop Dogg Dollars Ireland - Hip-Hop Slot Game | Big Wins",
      description:
        "Play the exclusive Snoop Dogg hip-hop slot — free spins, no deposit bonus, huge jackpots and x1000 multipliers! Spin wild reels, buy bonus rounds, test demo mode or hit real money wins. High RTP, max win potential and nonstop action — the ultimate hip-hop casino experience with Snoop Dogg. Claim your bonus and start winning big now!",
      keywords: "snoop dogg, slot game ireland, casino ireland, jackpot, hip-hop, online casino ireland, big wins, snoop dogg dollars",
    },
        faq: {
      title: "Snoop Dogg Dollars — FAQ",
      items: [
        { id: "how", q: "How do I play?", a: "Tap “Play Demo” or “Play with Real Money”. Spin reels and trigger bonus rounds for higher multipliers." },
        { id: "bonus", q: "Is there a welcome bonus?", a: "Yes — up to 200% on the first deposit + free spins. See the Promotions page." },
        { id: "mobile", q: "Mobile support?", a: "Works on mobile web; Android/iOS app links available on the page." },
        { id: "fair", q: "Is the game fair?", a: "Certified RNG; payouts & symbol odds are listed in Game Overview." },
        { id: "limits", q: "Min/Max bet?", a: "From $0.25; max depends on region/provider." },
        { id: "withdraw", q: "How to withdraw?", a: "Use verified methods; KYC may be required by the operator. Timing depends on method." }
      ],
      cta: { label: "Still have questions? Support", href: "/support" }
      },
vpnOffer: {
    title: "Having trouble accessing our site?",
    description: "If our website doesn’t open for you, download VPN from our trusted partner NordVPN and get back in the game.",
    button: "Download NordVPN",
    logo: "/nordvpn-logo.webp",
    url: "/download-vpn"
  },
  },
  in: {
    locale: "in",
    header: {
      logo: "Snoop Dogg Dollars",
      playNow: "अभी खेलें",
      howToPlay: "कैसे खेलें",
      promotions: "प्रमोशन",
      support: "सहायता",
    },
    hero: {
      title: "Snoop Dogg Dollars",
      subtitle: "Snoop Dogg Dollars स्लॉट खिलाड़ियों को हिप-हॉप संस्कृति की गहराइयों में ले जाता है। ग्रैफिटी बैकग्राउंड, तेज़ ग्राफिक्स और रील्स के बगल में एनिमेटेड Snoop Dogg के साथ, हर स्पिन एक स्ट्रीट परफ़ॉर्मेंस जैसा लगता है। असली वॉइस लाइन्स और ग्रूवी साउंडट्रैक जोड़ें, और Snoop Dogg Dollars एक दमदार और इमर्सिव स्लॉट अनुभव देता है।",
      playButton: "अभी खेलें",
      demoButton: "डेमो खेलें",
    },
    features: {
      title: "गेम की विशेषताएं",
      items: [
        {
          title: "मेगा जैकपॉट",
          description: "अपनी हिस्सेदारी का 50,000x तक जीतें! Snoop Dogg का विशेष जैकपॉट सिस्टम!",
          icon: "/mega.webp",
        },
        {
          title: "बोनस राउंड",
          description: "25 मुफ्त स्पिन + 5x गुणक! हिप-हॉप रिदम के साथ अपनी जीत बढ़ाएं!",
          icon: "/bonus.webp",
        },
        {
          title: "वाइल्ड सिंबल",
          description: "Snoop Dogg वाइल्ड सिंबल पूरी रील को कवर करते हैं और बड़ी जीत लाते हैं!",
          icon: "/wild.webp",
        },
        {
          title: "स्कैटर बोनस",
          description: "3 स्कैटर बोनस गेम ट्रिगर करते हैं! Snoop के स्टूडियो में विशेष पुरस्कार जीतें!",
          icon: "/Scatter.webp",
        },
        {
          title: "दैनिक टूर्नामेंट",
          description: "हर दिन नए टूर्नामेंट! लीडरबोर्ड के शीर्ष पर चढ़ें!",
          icon: "/tourn.webp",
        },
        {
          title: "VIP प्रोग्राम",
          description: "विशेष VIP लाभ, व्यक्तिगत खाता प्रबंधक और प्रीमियम बोनस!",
          icon: "/VIP.webp",
        },
      ],
    },
    promotion: {
      title: "Snoop का विशेष ऐप",
      subtitle: "हमारा मोबाइल ऐप डाउनलोड करें और 200% बोनस पाएं!",
      description: "₹40,000 बोनस + 100 मुफ्त स्पिन पहली साइनअप पर! दैनिक लॉगिन बोनस, विशेष टूर्नामेंट और VIP लाभ!",
      button: "ऐप डाउनलोड करें",
      expires: "31 दिसंबर 2024 तक वैध - सीमित समय!",
    },
    gameInfo: {
      title: "कैसे खेलें? 3 आसान चरण!",
      steps: [
        "1. ऐप डाउनलोड करें और साइन अप करें - 2 मिनट में पूरा करें!",
        "2. अपनी पहली जमा राशि करें और 200% बोनस पाएं!",
        "3. Snoop Dogg Dollars स्पिन करें और मेगा जैकपॉट जीतें!",
      ],
      downloadTitle: "अभी मोबाइल ऐप डाउनलोड करें!",
      downloadSubtitle: "iOS और Android के लिए उपलब्ध - 4.8★ उपयोगकर्ता रेटिंग",
    },
    footer: {
      copyright: "© 2024 Snoop Dogg Dollars. सभी अधिकार सुरक्षित।",
      terms: "नियम और शर्तें",
      privacy: "गोपनीयता नीति",
      support: "ग्राहक सहायता",
    },
    seo: {
      title: "Snoop Dogg Dollars India - हिप-हॉप स्लॉट गेम | बड़ी जीत",
      description: "विशेष Snoop Dogg हिप-हॉप स्लॉट खेलें — फ्री स्पिन्स, नो डिपॉजिट बोनस, विशाल जैकपॉट्स और x1000 मल्टीप्लायर्स! वाइल्ड रील्स घुमाएँ, बोनस राउंड खरीदें, डेमो मोड आज़माएँ या रियल मनी जीतें। हाई RTP, मैक्स विन पोटेंशियल और नॉनस्टॉप एक्शन — Snoop Dogg के साथ अंतिम हिप-हॉप कैसीनो अनुभव। अपना बोनस क्लेम करें और अभी बड़ी जीत हासिल करें!",
      keywords: "snoop dogg, स्नूप डॉग, स्लॉट गेम, कैसीनो, जैकपॉट, हिप-हॉप, ऑनलाइन कैसीनो, बड़ी जीत, स्नूप डॉग डॉलर्स, snoop dogg dollars india",
    },
    faq: {
  title: "स्नूप डॉग डॉलर्स — अक्सर पूछे जाने वाले प्रश्न",
  items: [
    { id: "how", q: "मैं कैसे खेलूं?", a: "“Play Demo” पर टैप करके मुफ्त में आज़माएं या “Play with Real Money” से शुरू करें। रील घुमाएँ और बोनस राउंड्स से बड़े गुणक प्राप्त करें।" },
    { id: "bonus", q: "क्या वेलकम बोनस है?", a: "हाँ — पहले डिपॉज़िट पर 200% तक का बोनस + फ्री स्पिन्स। विवरण के लिए Promotions पेज देखें।" },
    { id: "mobile", q: "क्या मोबाइल सपोर्ट है?", a: "हाँ, मोबाइल वेब पर काम करता है; Android/iOS ऐप लिंक पेज पर उपलब्ध हैं।" },
    { id: "fair", q: "क्या गेम निष्पक्ष है?", a: "हाँ, प्रमाणित RNG का उपयोग होता है; पेआउट्स और प्रतीकों की संभावनाएँ Game Overview में सूचीबद्ध हैं।" },
    { id: "limits", q: "न्यूनतम/अधिकतम दांव?", a: "न्यूनतम $0.25; अधिकतम आपके क्षेत्र और प्रदाता पर निर्भर करता है।" },
    { id: "withdraw", q: "निकासी कैसे करें?", a: "सत्यापित भुगतान विधियों का उपयोग करें; ऑपरेटर KYC मांग सकता है। समय चुनी गई विधि पर निर्भर करता है।" }
  ],
  cta: { label: "अभी भी सवाल हैं? सहायता", href: "/support" }
},
vpnOffer: {
  title: "क्या हमारी साइट खोलने में परेशानी हो रही है?",
  description: "अगर हमारी वेबसाइट आपके लिए नहीं खुल रही है, तो हमारे भरोसेमंद पार्टनर NordVPN को डाउनलोड करें और फिर से गेम में लौट आएं।",
  button: "NordVPN डाउनलोड करें",
  logo: "/nordvpn-logo.webp",
  url: "/download-vpn"
},
  },
}

export function getContent(locale = "en"): LocaleContent {
  return content[locale] || content.en
}
