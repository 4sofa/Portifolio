import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { AppProviders, PageTransition } from "@/components/providers/AppProviders";
import { getPortfolioData } from "@/data/portfolio-data";
import { HTML_LANG } from "@/lib/i18n";
import { getRootMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/request-locale";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return getRootMetadata();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const content = getPortfolioData(locale);

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${sans.variable} ${mono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans text-foreground">
        <a href="#main-content" className="skip-link">
          {content.ui.skipToContentLabel}
        </a>
        <AppProviders initialLocale={locale}>
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgress />
            <Navbar />
            <main id="main-content" className="flex-1 focus:outline-none">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
