"use client";

import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export function AboutSection() {
  const content = usePortfolioContent();
  const { about } = content;

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <AnimateIn delay={0.15}>
            <div className="surface-panel p-8 sm:p-10">
              <div className="space-y-6">
                {about.paragraphs.map((paragraph, index) => (
                  <AnimateIn key={paragraph} delay={0.1 * index} variant="fadeIn">
                    <p className="section-copy">{paragraph}</p>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        <StaggerContainer as="div" className="grid gap-4">
          {about.metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <motion.article
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="surface-panel p-6"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-foreground">{metric.value}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
