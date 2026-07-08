"use client";

import { usePortfolioContent } from "@/components/providers/AppProviders";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export function SkillsSection() {
  const content = usePortfolioContent();
  const { skills } = content;

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container space-y-10">
        <StaggerContainer className="grid gap-6">
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
      </div>
    </section>
  );
}
