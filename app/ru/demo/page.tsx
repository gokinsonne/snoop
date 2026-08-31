import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { DemoGameFrame } from "@/components/demo-game-frame"
import { JsonLd } from "@/components/json-ld"

const PAGE_URL = "https://snoopdoggdollar.org/ru/demo/"

export const metadata: Metadata = {
  title: {
    absolute: "Snoop Dogg Dollars демо — играть бесплатно онлайн",
  },
  description:
    "Бесплатное демо Snoop Dogg Dollars в браузере: без скачивания, регистрации и депозита. RTP, правила, бонусы и безопасный тест игры.",
  robots: "index, follow",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "https://snoopdoggdollar.org/demo/",
      ru: PAGE_URL,
      "x-default": "https://snoopdoggdollar.org/demo/",
    },
  },
  openGraph: {
    title: "Snoop Dogg Dollars демо — бесплатная игра",
    description: "Запуск демо в браузере, проверка RTP, механик и бонусов без депозита.",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    url: PAGE_URL,
    siteName: "Snoop Dogg Dollars",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Бесплатное демо Snoop Dogg Dollars",
      },
    ],
  },
}

const faq = [
  {
    question: "Можно ли играть в Snoop Dogg Dollars бесплатно?",
    answer:
      "Да. Демо использует виртуальные кредиты, поэтому депозит и регистрация не нужны. Такой баланс нельзя вывести.",
  },
  {
    question: "Нужно ли скачивать приложение или APK?",
    answer:
      "Нет. Демо запускается в современном браузере на телефоне или компьютере. Не устанавливайте файлы с неофициальных сайтов.",
  },
  {
    question: "Какой RTP у Snoop Dogg Dollars?",
    answer:
      "На публичной странице BGaming указан RTP 96,00%. Перед игрой на деньги нужно дополнительно проверить показатель в информационной панели конкретной версии игры у оператора.",
  },
  {
    question: "Можно ли выиграть реальные деньги в демо?",
    answer:
      "Нет. Все ставки, выигрыши и баланс в демо виртуальные. Результаты пробной сессии не предсказывают следующие спины.",
  },
]

export default function RussianDemoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoGame",
          name: "Snoop Dogg Dollars — демо",
          description: "Бесплатная браузерная демо-версия слота Snoop Dogg Dollars от BGaming.",
          image: "https://snoopdoggdollar.org/og-image.jpg",
          inLanguage: "ru",
          author: { "@type": "Organization", name: "BGaming" },
          publisher: { "@type": "Organization", name: "BGaming", url: "https://bgaming.com/" },
          mainEntityOfPage: PAGE_URL,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "ru",
          mainEntity: faq.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Главная", url: "https://snoopdoggdollar.org/" },
          { name: "Демо на русском", url: PAGE_URL },
        ]}
      />

      <main lang="ru" className="min-h-screen bg-black text-neutral-100">
        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <nav aria-label="Хлебные крошки" className="mb-8 text-sm text-neutral-400">
            <Link href="/" className="transition-colors hover:text-white">Главная</Link>{" "}
            <span aria-hidden="true" className="px-2 text-neutral-600">/</span>
            <span aria-current="page" className="text-neutral-200">Демо на русском</span>
          </nav>

          <p className="text-sm font-black uppercase tracking-[.18em] text-green-400">Бесплатная версия без депозита</p>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Snoop Dogg Dollars демо — играть бесплатно онлайн
          </h1>
          <p className="mt-6 text-xl leading-8 text-neutral-400">
            Запустите официальную браузерную демо-версию на виртуальные кредиты. Здесь не нужны регистрация, скачивание или депозит: можно спокойно проверить сетку 6×8, каскады, множители и бонусные механики.
          </p>

          <aside className="mt-8 rounded-2xl border border-white/10 bg-white/[.035] p-5 text-sm leading-6 text-neutral-400">
            <p>
              <strong className="text-neutral-200">Независимый информационный материал.</strong>{" "}
              Характеристики сверены с публичной страницей BGaming 31 августа 2026 года. Конкретная версия у оператора может отличаться — проверяйте её информационную панель.
            </p>
          </aside>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Условия демо">
            {[
              ["Стоимость", "0 — виртуальные кредиты"],
              ["Регистрация", "Не требуется"],
              ["Скачивание", "Не требуется"],
              ["RTP", "96,00% по данным BGaming"],
              ["Максимум", "10 000× ставки"],
              ["Волатильность", "Очень высокая"],
            ].map(([term, value]) => (
              <div key={term} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-green-400">{term}</dt>
                <dd className="mt-2 font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-4 sm:p-6" aria-labelledby="demo-launch-title">
            <h2 id="demo-launch-title" className="sr-only">Запуск бесплатного демо</h2>
            <DemoGameFrame locale="ru" />
            <p className="mt-4 text-center text-sm text-neutral-500">
              Если провайдер ограничил демо в вашем регионе, не скачивайте сторонние APK. Используйте наш <Link href="/how-to-play/" className="text-green-400 hover:text-green-300">разбор механик</Link>.
            </p>
          </section>

          <div className="prose prose-invert prose-lg mt-12 max-w-none">
            <h2>Что доступно в бесплатной версии</h2>
            <p>
              Демо воспроизводит основную логику Snoop Dogg Dollars без реальной ставки. Вы увидите кластеры одинаковых символов, каскадное исчезновение выигрышных комбинаций, зоны множителей и специальные символы. Это удобный способ понять темп игры и интерфейс до любого финансового решения.
            </p>
            <p>
              Виртуальная сессия не делает игру прибыльной и не показывает «горячий» или «холодный» цикл. Каждый новый результат формируется отдельно, а серия в демо не повышает вероятность выигрыша после перехода на реальные деньги.
            </p>

            <h2>Как запустить Snoop Dogg Dollars демо</h2>
            <ol>
              <li>Нажмите кнопку «Запустить демо» в блоке выше.</li>
              <li>Дождитесь загрузки игры от BGaming и подтвердите возраст, если появится запрос.</li>
              <li>Откройте справку внутри игры и проверьте таблицу выплат, RTP и доступные функции.</li>
              <li>Выберите виртуальную ставку и сначала проведите короткую тестовую сессию.</li>
            </ol>
            <p>
              Демо работает без отдельного приложения. На мобильном устройстве лучше использовать актуальную версию браузера и стабильное соединение. Если окно не открывается, причиной может быть региональное ограничение провайдера, блокировщик содержимого или запрет стороннего фрейма.
            </p>

            <h2>RTP, волатильность и максимальный выигрыш</h2>
            <p>
              BGaming публично указывает теоретический RTP 96,00%, очень высокую волатильность и максимальный результат до 10 000× ставки. RTP — долгосрочная математическая модель, а не обещание возврата за одну сессию. При высокой волатильности между заметными выигрышами могут быть длинные серии без результата.
            </p>
            <p>
              Для проверки расчётов откройте отдельный <Link href="/rtp/">разбор RTP</Link> и <Link href="/symbols-paytable/">таблицу символов и выплат</Link>. Если казино показывает другое значение, ориентируйтесь на параметры внутри запущенной версии, а не на рекламный текст.
            </p>

            <h2>Демо и игра на деньги: в чём разница</h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-800">
              <table>
                <thead>
                  <tr><th>Параметр</th><th>Демо</th><th>Реальные деньги</th></tr>
                </thead>
                <tbody>
                  <tr><td>Баланс</td><td>Виртуальный</td><td>Средства на счёте</td></tr>
                  <tr><td>Вывод выигрыша</td><td>Невозможен</td><td>Зависит от правил и проверки аккаунта</td></tr>
                  <tr><td>Регистрация</td><td>Не нужна</td><td>Обычно обязательна</td></tr>
                  <tr><td>Финансовый риск</td><td>Нет</td><td>Есть риск потерять всю ставку</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Частые вопросы</h2>
            {faq.map(({ question, answer }) => (
              <section key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-green-900/30 bg-green-950/20 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white">Перед игрой на деньги</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              Убедитесь, что оператор доступен в вашей стране, проверьте лицензию, RTP конкретной версии, лимиты, KYC и правила вывода. Бесплатное демо остаётся самым безопасным способом познакомиться с механикой.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/casinos/" className="rounded-full bg-green-400 px-6 py-3 font-black text-black transition-colors hover:bg-green-300">Как проверить казино</Link>
              <Link href="/responsible-gaming/" className="rounded-full border border-neutral-700 px-6 py-3 font-bold text-white transition-colors hover:bg-neutral-800">Ответственная игра</Link>
              <Link href="/demo/" hrefLang="en" className="rounded-full border border-neutral-700 px-6 py-3 font-bold text-white transition-colors hover:bg-neutral-800">English demo</Link>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
