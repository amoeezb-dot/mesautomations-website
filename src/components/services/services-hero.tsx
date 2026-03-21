"use client";

import ScrollExpandMedia from "@/components/shared/scroll-expand-media";
import {
  HighlightGroup,
  HighlighterItem,
} from "@/components/shared/highlight-group";
import { SERVICES } from "@/lib/data";

export function ServicesHero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
      title="Automation Services"
      scrollToExpand="Scroll to explore"
      textBlend
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our Service Portfolio
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We offer a comprehensive suite of automation and MES consulting
          services tailored to the unique demands of modern manufacturing.
          Our solutions are scalable, modular, and designed to deliver ROI
          within the first year.
        </p>
        <HighlightGroup className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <HighlighterItem key={service.id} className="rounded-3xl">
                <div className="relative z-20 h-full bg-card rounded-3xl p-8 border">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
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
    </ScrollExpandMedia>
  );
}
