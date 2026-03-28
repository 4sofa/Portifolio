"use client";

import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  const content = usePortfolioContent();
  const { projects, ui } = content;
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container space-y-10">
        <AnimateIn>
          <SectionHeading
            eyebrow={ui.projectsEyebrow}
            title={ui.projectsTitle}
            description={ui.projectsDescription}
          />
        </AnimateIn>

        {featuredProject ? (
          <AnimateIn variant="scaleIn" delay={0.15}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="surface-panel overflow-hidden p-8 transition-shadow duration-300 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.12)] sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-5">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    {ui.featuredProjectLabel}
                  </span>
                  <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {featuredProject.title}
                  </h3>
                  <p className="section-copy">{featuredProject.summary}</p>
                </div>

                <div className="rounded-3xl border border-border/70 bg-background/50 p-6">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                        {ui.roleLabel}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        {featuredProject.role}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                        {ui.stackLabel}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {featuredProject.stack.map((item) => (
                          <motion.span
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {featuredProject.demoUrl ? (
                        <a
                          href={featuredProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] active:scale-[0.97]"
                        >
                          {ui.demoLabel}
                        </a>
                      ) : null}
                      {featuredProject.repositoryUrl ? (
                        <a
                          href={featuredProject.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:scale-[1.02] active:scale-[0.97]"
                        >
                          {ui.repositoryLabel}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimateIn>
        ) : null}

        <StaggerContainer className="grid gap-6 lg:grid-cols-2">
          {secondaryProjects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="surface-panel flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-[0_16px_48px_hsl(var(--primary)/0.1)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-primary">{ui.projectLabel}</span>
                  <span className="text-sm text-muted-foreground">{project.role}</span>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="section-copy text-sm">{project.summary}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] active:scale-[0.97]"
                    >
                      {ui.demoLabel}
                    </a>
                  ) : null}
                  {project.repositoryUrl ? (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:scale-[1.02] active:scale-[0.97]"
                    >
                      {ui.repositoryLabel}
                    </a>
                  ) : null}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
