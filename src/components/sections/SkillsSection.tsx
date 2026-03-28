"use client";

import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  const content = usePortfolioContent();
  const { skills, ui } = content;

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container space-y-10">
        <AnimateIn>
          <SectionHeading
            eyebrow={ui.skillsEyebrow}
            title={ui.skillsTitle}
            description={ui.skillsDescription}
          />
        </AnimateIn>

        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <StaggerItem key={group.title}>
              <article className="surface-panel p-8">
                <h3 className="text-2xl font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn delay={0.1}>
          <article className="surface-panel p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-primary">{ui.mindsetLabel}</p>
            <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">
              {ui.mindsetText}
            </p>
          </article>
        </AnimateIn>
      </div>
    </section>
  );
}
