import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { ImpressumContent } from "@/components/impressum/impressum-content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal information and site operator details.",
};

export default function ImpressumPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Impressum" />
        <ImpressumContent />
      </div>
    </div>
  );
}
