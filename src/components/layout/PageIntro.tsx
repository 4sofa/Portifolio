"use client";

import { motion } from "framer-motion";
import { usePortfolioContent } from "@/components/providers/AppProviders";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
  highlights?: string[];
}

export function PageIntro({
  eyebrow,
  title,
  description,
  badge,
  highlights = [],
}: PageIntroProps) {
  const { ui } = usePortfolioContent();

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
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

        {/* Info Card (replaces the old aside) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="mb-8">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2 block">
                  {ui.pageContextLabel}
                </span>
                <p className="text-xl font-bold text-white">
                  {badge || ui.pageContextFallback}
                </p>
              </div>

              {highlights.length > 0 && (
                <div className="space-y-3">
                  {highlights.map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
