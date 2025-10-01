"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function GA({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const didFirst = useRef(false);

  useEffect(() => {
    if (!gaId || !pathname) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    // Первый page_view уже отправлен gtag('config'), пропускаем
    if (!didFirst.current) {
      didFirst.current = true;
      return;
    }

    // Отправляем page_view для SPA-навигации
    // GA4 рекомендует event page_view с явными параметрами
    (window as any).gtag?.('event', 'page_view', {
      page_location: window.location.href,
      page_path: url,
      page_title: document.title,
    });
  }, [gaId, pathname, searchParams]);

  return null;
}
