"use client";

import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StacksSection() {
  const { stacks, ui } = usePortfolioContent();

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container space-y-10">
        <AnimateIn>
          <SectionHeading
            eyebrow={ui.stacksEyebrow}
            title={ui.stacksTitle}
            description={ui.stacksDescription}
          />
        </AnimateIn>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <StaggerContainer className="grid gap-4">
            {stacks.map((category) => (
              <StaggerItem key={category.title}>
                <article className="surface-panel p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {category.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="cursor-default rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateIn variant="slideLeft" delay={0.2}>
            <aside className="surface-panel p-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {ui.currentFocusLabel}
                </p>
                <h3 className="text-2xl font-semibold text-foreground">{ui.currentFocusTitle}</h3>
                <p className="section-copy text-sm">{ui.currentFocusDescription}</p>
              </div>
            </aside>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
