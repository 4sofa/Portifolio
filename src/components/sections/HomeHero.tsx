"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LucideGithub as Github, 
  LucideLinkedin as Linkedin, 
  Mail, 
  GraduationCap 
} from 'lucide-react';
import { usePortfolioContent } from "@/components/providers/AppProviders";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export function HomeHero() {
  const content = usePortfolioContent();
  const { hero, profile, socialLinks, ui } = content;

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 overflow-hidden">
      <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
            {hero.title}
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-primary mb-8 flex items-center gap-2">
            <TypingAnimation phrases={hero.highlightedPhrases} delay={0.6} />
          </div>

          <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed font-medium">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link 
              href={hero.primaryCta.href}
              className="bg-primary hover:bg-primary/90 text-black px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105"
            >
              {hero.primaryCta.label}
            </Link>
            <Link 
              href={hero.secondaryCta.href}
              className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3.5 rounded-full font-bold transition-all text-white"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="flex gap-6 text-gray-500 text-sm font-medium">
            {socialLinks.map((link) => {
              const label = link.label.toLowerCase();
              const IsGithub = label.includes('github');
              const IsLinkedin = label.includes('linkedin');
              const Icon = IsGithub ? Github : IsLinkedin ? Linkedin : Mail;
              
              return (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Icon size={16} /> {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Profile Card */}
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
                  {ui.profileLabel}
                </span>
                <h2 className="text-2xl font-bold mb-1 text-white">{profile.name}</h2>
                <p className="text-gray-400 text-sm">{profile.role}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                  <span className="text-[10px] text-gray-500 uppercase block mb-1">
                    {ui.locationLabel}
                  </span>
                  <p className="text-sm font-bold text-white">
                    {profile.location || ui.locationFallback}
                  </p>
                </div>
                {profile.resumeUrl ? (
                  <Link
                    href="/cv"
                    className="bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors hover:bg-white/10 hover:border-primary/25"
                  >
                    <span className="text-[10px] text-gray-500 uppercase block mb-1">
                      {ui.resumeLabel}
                    </span>
                    <span className="mt-2 inline-flex rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-black">
                      {ui.resumeOpenLabel}
                    </span>
                  </Link>
                ) : (
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                  <span className="text-[10px] text-gray-500 uppercase block mb-1">
                    {ui.resumeLabel}
                  </span>
                  <p className="text-sm font-bold text-gray-400 italic">
                    {ui.resumeSoon}
                  </p>
                </div>
                )}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 group/edu hover:bg-white/10 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary">{ui.degreeLabel}</h3>
                  <p className="text-[10px] text-gray-500 uppercase font-bold">{ui.degreePeriod}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
