import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/layout/LocalizedPageIntro";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("skills");
}

export default function SkillsPage() {
  return (
    <>
      <LocalizedPageIntro page="skills" />
      <SkillsSection />
    </>
  );
}
