"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { getPortfolioData } from "@/data/portfolio-data";
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  LOCALE_COOKIE,
  isLocale,
  type Locale,
} from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "portfolio-locale";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function usePortfolioContent() {
  const { locale } = useLocale();
  return getPortfolioData(locale);
}

function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return initialLocale;
    }

    const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedLocale) ? storedLocale : initialLocale;
  });
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    setLocaleState(nextLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = HTML_LANG[nextLocale];
    router.refresh();
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function AppProviders({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  return (
    <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
  );
}
