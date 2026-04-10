import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "MES Engineer and Manufacturing IT Specialist based in Nürnberg, Germany.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <AboutContent />
      </div>
    </div>
  );
}
