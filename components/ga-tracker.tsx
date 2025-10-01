"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GA({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId || !pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    // GA4 page_view на каждый переход
    (window as any).gtag?.("config", gaId, { page_path: url });
  }, [gaId, pathname, searchParams]);

  return null;
}
