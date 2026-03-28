import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/layout/LocalizedPageIntro";
import { StacksSection } from "@/components/sections/StacksSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("stacks");
}

export default function StacksPage() {
  return (
    <>
      <LocalizedPageIntro page="stacks" />
      <StacksSection />
    </>
  );
}
