import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesContent } from "@/components/services/services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive automation and MES consulting services tailored to modern manufacturing demands.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ServicesContent />
        </div>
      </div>
    </>
  );
}
