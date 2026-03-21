"use client";

import { FeatureSteps } from "@/components/shared/feature-steps";
import { PROCESS_STEPS } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <FeatureSteps
        features={[...PROCESS_STEPS]}
        title="How We Work"
        autoPlayInterval={4000}
      />
    </section>
  );
}
