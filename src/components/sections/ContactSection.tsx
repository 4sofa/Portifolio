"use client";

import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  const content = usePortfolioContent();
  const { contact, socialLinks, ui } = content;

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container">
        <AnimateIn variant="scaleIn">
          <div className="surface-panel overflow-hidden p-8 sm:p-10">
            <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <AnimateIn delay={0.1}>
                  <SectionHeading
                    eyebrow={ui.contactEyebrow}
                    title={contact.title}
                    description={contact.description}
                  />
                </AnimateIn>

                <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                  <StaggerItem>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-3xl border border-border/70 bg-background/50 p-6"
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {ui.availabilityLabel}
                      </p>
                      <p className="mt-3 text-lg font-medium text-foreground">
                        {contact.availability}
                      </p>
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-3xl border border-primary/20 bg-primary/5 p-6"
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        {ui.primaryChannelLabel}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="mt-3 inline-flex text-lg font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {contact.email}
                      </a>
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.ariaLabel}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              <AnimateIn delay={0.18} variant="slideLeft">
                <div className="rounded-[2rem] border border-border/70 bg-background/45 p-6 sm:p-7">
                  <div className="mb-6 space-y-2">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">{ui.formLabel}</p>
                    <h3 className="text-2xl font-semibold text-foreground">{ui.formTitle}</h3>
                  </div>
                  <ContactForm contactEmail={contact.email} />
                </div>
              </AnimateIn>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
