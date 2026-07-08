"use client";

import { motion } from "framer-motion";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full mb-6 uppercase">
            {eyebrow}
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
            {title}
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed font-medium">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
