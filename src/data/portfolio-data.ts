import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { portfolioDataEn } from "@/data/portfolio-en";
import { portfolioDataEs } from "@/data/portfolio-es";
import { portfolioDataPt } from "@/data/portfolio-pt";

export * from "@/data/portfolio-types";

export const portfolioDataByLocale = {
  pt: portfolioDataPt,
  en: portfolioDataEn,
  es: portfolioDataEs,
};

export function getPortfolioData(locale: Locale) {
  return portfolioDataByLocale[locale];
}

export const portfolioData = portfolioDataByLocale[DEFAULT_LOCALE];
