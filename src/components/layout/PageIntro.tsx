"use client";

import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  highlights?: string[];
}

export function PageIntro({
  eyebrow,
  title,
  description,
  badge,
  highlights = [],
}: PageIntroProps) {
  const { ui } = usePortfolioContent();

  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-hero-glow opacity-80" aria-hidden="true" />
      <div className="container relative grid gap-10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:pb-16">
        <div className="space-y-6">
          <AnimateIn>
            <div>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {eyebrow}
              </span>
            </div>
          </AnimateIn>

          <div className="space-y-5">
            <AnimateIn delay={0.1}>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="section-copy text-base sm:text-lg">{description}</p>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn variant="slideLeft" delay={0.2}>
          <aside className="surface-panel flex h-full flex-col justify-between p-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {ui.pageContextLabel}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {badge || ui.pageContextFallback}
              </p>
            </div>

            {highlights.length > 0 ? (
              <StaggerContainer
                as="ul"
                className="mt-8 grid gap-3 text-sm text-muted-foreground"
                staggerDelay={0.06}
              >
                {highlights.map((item) => (
                  <StaggerItem key={item}>
                    <li className="flex items-center gap-3">
                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : null}
          </aside>
        </AnimateIn>
      </div>
    </section>
  );
}
