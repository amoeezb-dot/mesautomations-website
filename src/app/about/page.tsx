import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MES Automation's mission, vision, values, and the team driving industrial innovation.",
};

export default function AboutPage() {
  return (
    <div className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About Us"
          subtitle="Founded by industrial engineers and software architects who saw a widening gap between what modern manufacturing technology could offer — and what most factories were actually using."
        />
        <AboutContent />
      </div>
    </div>
  );
}
