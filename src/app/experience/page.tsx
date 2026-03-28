import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("experience");
}

export default function ExperiencePage() {
  return <ExperienceSection />;
}
