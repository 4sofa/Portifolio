"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export function PageDirectorySection() {
  const content = usePortfolioContent();
  const { navigation, ui } = content;

  return (
    <section className="section-shell">
      <div className="container space-y-8">
        <AnimateIn>
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {ui.directoryEyebrow}
            </span>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {ui.directoryTitle}
            </h2>
            <p className="section-copy">{ui.directoryDescription}</p>
          </div>
        </AnimateIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {navigation
            .filter((item) => item.href !== "/")
            .map((item) => (
              <StaggerItem key={item.href}>
                <Link
                  href={item.href}
                  className="surface-panel group flex min-h-56 flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_16px_48px_hsl(var(--primary)/0.12)]"
                >
                  <div className="space-y-4">
                    <span className="text-sm uppercase tracking-[0.2em] text-primary">
                      {item.label}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {item.label}
                    </h3>
                    <p className="section-copy text-sm">
                      {ui.directoryDescriptions[item.href] || ui.directoryFallbackDescription}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                    {ui.directoryOpenLabel}
                    <motion.span className="inline-block" initial={{ x: 0 }} whileHover={{ x: 4 }}>
                      →
                    </motion.span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
