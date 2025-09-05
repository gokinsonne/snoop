"use client";
import { useState, useMemo } from "react";
import type { LocaleContent } from "@/lib/content";

export default function FAQSection({ faq }: { faq: LocaleContent["faq"] }) {
  const [open, setOpen] = useState<string | null>(faq.items[0]?.id ?? null);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map(i => ({
      "@type": "Question", name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a }
    }))
  }), [faq.items]);

  return (
    <section className="w-full bg-black py-16">
  <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 text-center mb-8">
        {faq.title}
      </h2>

      <div className="space-y-3">
        {faq.items.map(it => {
          const isOpen = open === it.id;
          return (
            <div key={it.id} className="rounded-2xl border border-yellow-500/20 bg-neutral-900/60">
              <button
                onClick={() => setOpen(isOpen ? null : it.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-neutral-900/70 rounded-2xl"
              >
                <span className="text-lg md:text-xl font-semibold text-neutral-100">{it.q}</span>
                <span className={`h-8 w-8 inline-flex items-center justify-center rounded-xl border border-yellow-500/30 text-yellow-300 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-neutral-300 leading-relaxed">{it.a}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
</section>
  );
}
