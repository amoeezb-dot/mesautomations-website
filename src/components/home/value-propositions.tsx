"use client";

import {
  HighlightGroup,
  HighlighterItem,
} from "@/components/shared/highlight-group";
import { Cpu, ArrowRightLeft, ShieldCheck, Headphones } from "lucide-react";

const propositions = [
  {
    icon: Cpu,
    title: "Industry 4.0-Ready MES",
    description:
      "Modern MES implementations that connect your shop floor to enterprise systems with real-time data flow and full traceability.",
  },
  {
    icon: ArrowRightLeft,
    title: "End-to-End Automation",
    description:
      "From requirements gathering and system design to deployment and ongoing support — we manage the entire automation lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Integrations",
    description:
      "Certified integrations with SIEMENS, SAP, and Rockwell Automation platforms for seamless enterprise connectivity.",
  },
  {
    icon: Headphones,
    title: "On-Site & Remote Support",
    description:
      "Comprehensive on-site and remote support across Germany and the EU. Your operations never stop, and neither do we.",
  },
];

export function ValuePropositions() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MES Automation?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over a decade of hands-on experience in the German
            manufacturing landscape, we combine deep technical expertise with
            practical consulting know-how.
          </p>
        </div>

        <HighlightGroup className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propositions.map((prop) => {
            const Icon = prop.icon;
            return (
              <HighlighterItem key={prop.title} className="rounded-3xl">
                <div className="relative z-20 h-full bg-card rounded-3xl p-6 border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {prop.description}
                  </p>
                </div>
              </HighlighterItem>
            );
          })}
        </HighlightGroup>
      </div>
    </section>
  );
}
