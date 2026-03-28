import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/layout/LocalizedPageIntro";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("projects");
}

export default function ProjectsPage() {
  return (
    <>
      <LocalizedPageIntro page="projects" />
      <ProjectsSection />
    </>
  );
}
