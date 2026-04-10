"use client";

import { SectionHeader } from "@/components/shared/section-header";
import { DatenschutzContent } from "@/components/impressum/datenschutz-content";
import { useLocale } from "@/context/locale-context";

export default function DatenschutzPage() {
  const { locale } = useLocale();

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title={locale === "en" ? "Privacy Policy" : "Datenschutzerklärung"}
        />
        <DatenschutzContent />
      </div>
    </div>
  );
}
