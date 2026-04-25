import type { Metadata } from "next";
import { DatenschutzContent } from "@/components/impressum/datenschutz-content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Privacy policy and data protection information pursuant to GDPR.",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <DatenschutzContent />
      </div>
    </div>
  );
}