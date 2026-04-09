import { getPortfolioData } from "@/data/portfolio-data";
import { getRequestLocale } from "@/lib/request-locale";

export async function Footer() {
  const portfolioData = getPortfolioData(await getRequestLocale());

  return (
    <footer className="border-t border-white/5 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
        <p>© {new Date().getFullYear()} {portfolioData.profile.name}</p>
        <div className="flex gap-8">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
