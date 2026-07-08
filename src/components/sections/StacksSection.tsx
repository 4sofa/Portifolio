"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const languageIcons: Record<string, string> = {
  Python: "/logos/python.svg",
  HTML: "/logos/html5.svg",
  CSS: "/logos/css3.svg",
  JavaScript: "/logos/javascript.svg",
  TypeScript: "/logos/typescript.svg",
};

export function StacksSection() {
  const { stacks } = usePortfolioContent();
  const languageStack = stacks.find((category) =>
    category.items.some((item) => languageIcons[item]),
  );

  return (
    <section className="section-shell border-b-0 pt-12 sm:pt-14">
      <div className="container space-y-10">
        {languageStack ? (
          <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-2 justify-items-center gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
            {languageStack.items.map((item) => (
              <StaggerItem key={item}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -3 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="flex min-h-36 flex-col items-center justify-center gap-4 text-center"
                >
                  <Image
                    src={languageIcons[item]}
                    alt=""
                    aria-hidden="true"
                    width={88}
                    height={88}
                    className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
                  <span className="text-lg font-semibold text-foreground sm:text-xl">{item}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : null}
      </div>
    </section>
  );
}
