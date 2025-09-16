"use client";
import Image from "next/image";
import type { LocaleContent } from "@/lib/content";

export default function VpnOfferSection({ offer }: { offer: LocaleContent["vpnOffer"] }) {
  return (
    <section className="w-full bg-black py-12 px-4 overflow-x-clip">
      <div className="mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-yellow-500/20 bg-neutral-900/70 shadow-[0_0_25px_rgba(255,200,0,0.15)] p-6 md:p-10">
        
        {/* Лого: не даём распирать контейнер */}
        <div className="w-[160px] md:w-[200px] shrink-0 rounded-xl overflow-hidden">
          <Image
            loading="lazy"
            src={offer.logo}
            alt="VPN Logo"
            width={200}
            height={200}
            sizes="(max-width: 768px) 160px, 200px"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="flex-1 text-center md:text-left min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
            {offer.title}
          </h3>

          {/* Защита от длинных слов/промокодов */}
          <p className="text-neutral-300 mb-5 leading-relaxed break-words">
            {offer.description}
          </p>

          <a
            href={offer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,200,0,0.6)] transition-transform hover:scale-105 will-change-transform"
          >
            {offer.button}
          </a>
        </div>
      </div>
    </section>
  );
}
