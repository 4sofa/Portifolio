import type { Metadata } from "next";
import { getPortfolioData, type PageKey } from "@/data/portfolio-data";
import { getRequestLocale } from "@/lib/request-locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export async function getRootMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const content = getPortfolioData(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    authors: [{ name: content.profile.name }],
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: ["/twitter-image"],
    },
  };
}

export async function getPageMetadata(page: PageKey): Promise<Metadata> {
  const locale = await getRequestLocale();
  const content = getPortfolioData(locale);
  const seo = content.routeSeo[page];

  return {
    title: seo.title,
    description: seo.description,
  };
}
