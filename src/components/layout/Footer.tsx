import { getPortfolioData } from "@/data/portfolio-data";
import { getRequestLocale } from "@/lib/request-locale";

export async function Footer() {
  const portfolioData = getPortfolioData(await getRequestLocale());

  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.profile.name}
        </p>
        <div className="flex flex-wrap gap-4">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
