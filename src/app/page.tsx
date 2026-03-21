import { HeroSection } from "@/components/home/hero-section";
import { ValuePropositions } from "@/components/home/value-propositions";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { ProcessSection } from "@/components/home/process-section";
import { CapabilitiesHero } from "@/components/home/capabilities-hero";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropositions />
      <DashboardShowcase />
      <CapabilitiesHero />
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
}
