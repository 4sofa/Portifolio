"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export function HomeHero() {
  const content = usePortfolioContent();
  const { hero, profile, socialLinks, ui } = content;

  return (
    <section className="section-shell overflow-hidden border-b-0 pt-16 sm:pt-24">
      <div className="container grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="space-y-5">
            <AnimateIn delay={0.1}>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {hero.eyebrow}
              </span>
            </AnimateIn>

            <div className="space-y-5">
              <AnimateIn delay={0.2}>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {hero.title}
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div
                  className="min-h-[1.5em] max-w-2xl text-lg font-medium text-primary sm:text-xl"
                  aria-live="polite"
                >
                  <TypingAnimation phrases={hero.highlightedPhrases} delay={0.6} />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.4}>
                <p className="section-copy text-base sm:text-lg">{hero.description}</p>
              </AnimateIn>
            </div>
          </div>

          <AnimateIn delay={0.5}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_24px_hsl(var(--primary)/0.35)] active:scale-[0.98]"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-card/80 hover:scale-[1.02] active:scale-[0.98]"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.6}>
            <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        <AnimateIn variant="slideLeft" delay={0.3} duration={0.6}>
          <div className="surface-panel relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
            <div className="absolute inset-0 bg-grid-fade bg-grid opacity-40" aria-hidden="true" />
            <div className="relative space-y-8">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                  {ui.profileLabel}
                </p>
                <h2 className="text-2xl font-semibold text-foreground">{profile.name}</h2>
                <p className="text-base text-muted-foreground">{profile.role}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-3xl border border-border/70 bg-background/60 p-5"
                >
                  <p className="text-sm text-muted-foreground">{ui.locationLabel}</p>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    {profile.location || ui.locationFallback}
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-3xl border border-border/70 bg-background/60 p-5"
                >
                  <p className="text-sm text-muted-foreground">{ui.resumeLabel}</p>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    {profile.resumeUrl ? ui.resumeAvailable : ui.resumeSoon}
                  </p>
                </motion.div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">{ui.degreeLabel}</p>
                  <p className="text-xs text-muted-foreground">{ui.degreePeriod}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
