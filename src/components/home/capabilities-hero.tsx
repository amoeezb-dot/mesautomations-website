"use client";

import { HeroRotating } from "@/components/shared/hero-rotating";

export function CapabilitiesHero() {
  return (
    <section className="bg-[#030303] border-t border-white/[0.05]">
      <HeroRotating
        heading="We deliver"
        words={[
          "MES Solutions",
          "PLC Programming",
          "Digital Twins",
          "OEE Analytics",
          "Smart Factories",
        ]}
        description="Whether you're a Tier-1 automotive supplier, a pharmaceutical manufacturer, or a food & beverage plant, our team has the tools and knowledge to transform your operations with Industry 4.0 technology."
        badgeText="Explore our services"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />
    </section>
  );
}
