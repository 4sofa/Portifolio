import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/layout/LocalizedPageIntro";
import { AboutSection } from "@/components/sections/AboutSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about");
}

export default function AboutPage() {
  return (
    <>
      <LocalizedPageIntro page="about" />
      <AboutSection />
    </>
  );
}
