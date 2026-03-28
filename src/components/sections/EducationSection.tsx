"use client";

import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export function EducationSection() {
  const content = usePortfolioContent();
  const { education, ui } = content;

  if (education.length === 0) {
    return null;
  }

  return (
    <section className="relative min-h-[calc(100vh-8rem)] py-16 sm:py-24">
      <div className="container">
        <AnimateIn>
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-1.5 text-sm font-medium text-foreground">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              {ui.educationEyebrow}
            </span>
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {ui.educationTitle}
              </h1>
              <p className="section-copy max-w-2xl">{ui.educationDescription}</p>
            </div>
          </div>
        </AnimateIn>

        <StaggerContainer className="relative mt-16 space-y-12">
          <div className="absolute bottom-0 left-[212px] top-0 hidden w-px bg-border lg:block" aria-hidden="true" />

          {education.map((item, index) => (
            <StaggerItem key={`${item.degree}-${index}`}>
              <div className="relative grid gap-6 py-6 lg:grid-cols-[200px_24px_1fr] lg:items-center lg:gap-0">
                <div className="lg:pr-8 lg:text-right">
                  <p className="text-lg font-bold tracking-tight text-primary">{item.period}</p>
                </div>

                <div className="relative hidden justify-center lg:flex">
                  <div className="relative z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-background">
                    <span className="absolute inset-0 block rounded-full bg-primary opacity-75 animate-ping" />
                  </div>
                </div>

                <div className="lg:pl-8">
                  <article className="surface-panel space-y-4 p-6 sm:p-8">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {item.degree}
                      </h2>
                      <p className="text-lg font-medium text-primary/90">{item.institution}</p>
                    </div>
                    <p className="text-lg leading-relaxed text-foreground/80">{item.description}</p>
                  </article>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
