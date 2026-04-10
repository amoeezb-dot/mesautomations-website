import type { Metadata } from "next";
import { ServicesGrid } from "@/components/services/services-grid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MES configuration, SAP integration, industrial automation, and production dashboards.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ServicesGrid />
      </div>
    </div>
  );
}
