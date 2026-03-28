"use client";

import { PageIntro } from "@/components/layout/PageIntro";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import type { PageKey } from "@/data/portfolio-data";

export function LocalizedPageIntro({
  page,
}: {
  page: Exclude<PageKey, "home">;
}) {
  const content = usePortfolioContent();
  const intro = content.pageIntros[page];

  return (
    <PageIntro
      eyebrow={intro.eyebrow}
      title={intro.title}
      description={intro.description}
      badge={intro.badge}
      highlights={intro.highlights}
    />
  );
}
