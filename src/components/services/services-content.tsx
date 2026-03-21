"use client";

import { FeatureSteps } from "@/components/shared/feature-steps";
import {
  HighlightGroup,
  HighlighterItem,
} from "@/components/shared/highlight-group";
import { SERVICES } from "@/lib/data";

export function ServicesContent() {
  return (
    <>
      <FeatureSteps
        features={SERVICES.map((s) => ({
          step: s.step,
          title: s.title,
          content: s.content,
          image: s.image,
        }))}
        title="Our Service Portfolio"
        autoPlayInterval={5000}
        className="mb-16"
      />

      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Service Highlights
        </h2>
        <HighlightGroup className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <HighlighterItem
                key={service.id}
                className="rounded-3xl"
              >
                <div className="relative z-20 h-full bg-card rounded-3xl p-8 border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.content}
                  </p>
                </div>
              </HighlighterItem>
            );
          })}
        </HighlightGroup>
      </div>
    </>
  );
}
