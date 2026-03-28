import type { Metadata } from "next";
import { LocalizedPageIntro } from "@/components/layout/LocalizedPageIntro";
import { ContactSection } from "@/components/sections/ContactSection";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("contact");
}

export default function ContactPage() {
  return (
    <>
      <LocalizedPageIntro page="contact" />
      <ContactSection />
    </>
  );
}
