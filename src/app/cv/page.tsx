import type { Metadata } from "next";
import { getPortfolioData } from "@/data/portfolio-data";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const content = getPortfolioData(locale);

  return {
    title: content.ui.resumePageTitle,
    description: content.ui.resumePageDescription,
  };
}

export default async function CvPage() {
  const locale = await getRequestLocale();
  const content = getPortfolioData(locale);
  const resumeUrl = content.profile.resumeUrl;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            {content.ui.resumeLabel}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {content.ui.resumePageTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-gray-400">
            {content.ui.resumePageDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            {content.ui.resumeOpenLabel}
          </a>
          <a
            href={resumeUrl}
            download
            className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-primary/90"
          >
            {content.ui.resumeDownloadLabel}
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
        <iframe
          src={resumeUrl}
          title={content.ui.resumePageTitle}
          className="h-[78vh] w-full bg-background"
        />
      </div>
    </section>
  );
}
