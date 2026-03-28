import type { Metadata } from "next";
import { EducationSection } from "@/components/sections/EducationSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("education");
}

export default function EducationPage() {
  return <EducationSection />;
}
