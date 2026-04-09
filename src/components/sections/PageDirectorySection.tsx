"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";

export function PageDirectorySection() {
  const content = usePortfolioContent();
  const { navigation, ui } = content;

  return (
    <section className="max-w-7xl mx-auto px-6 mt-40 pb-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] px-3 py-1 rounded-full mb-6 uppercase">
          {ui.directoryEyebrow}
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-2xl text-white">
          {ui.directoryTitle}
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          {ui.directoryDescription}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {navigation
          .filter((item) => item.href !== "/")
          .map((item, i) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={item.href}
              className="block bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group cursor-pointer h-full"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                {item.label}
              </h3>
              <p className="text-gray-400 text-sm">
                {ui.directoryDescriptions[item.href] || ui.directoryFallbackDescription}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
