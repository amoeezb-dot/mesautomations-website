"use client";

import {
  HighlightGroup,
  HighlighterItem,
} from "@/components/shared/highlight-group";
import { AnimatedTestimonialsImage } from "@/components/shared/animated-testimonials-image";
import { VALUES, TEAM_MEMBERS } from "@/lib/data";
import { Target, Eye, Crosshair, Handshake, Lightbulb, Shield } from "lucide-react";

const valueIcons = [Crosshair, Shield, Handshake, Lightbulb];

export function AboutContent() {
  return (
    <>
      {/* Company Story */}
      <div className="max-w-3xl mx-auto mb-20">
        <p className="text-lg text-muted-foreground leading-relaxed">
          MES Automation Consulting & Services was founded by a group of
          industrial engineers and software architects who saw a widening gap
          between what modern manufacturing technology could offer — and what
          most factories were actually using. Based in Germany, the epicenter of
          European manufacturing excellence, we set out to make world-class
          automation accessible to businesses of all sizes.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-card border rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To accelerate the digital transformation of manufacturing through
            intelligent automation, data-driven decision-making, and
            people-first consulting.
          </p>
        </div>
        <div className="bg-card border rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A future where every factory — regardless of size — operates with
            the efficiency, precision, and transparency of Industry 4.0.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
        <HighlightGroup className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, index) => {
            const Icon = valueIcons[index];
            return (
              <HighlighterItem key={value.title} className="rounded-3xl">
                <div className="relative z-20 h-full bg-card rounded-3xl p-6 border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </HighlighterItem>
            );
          })}
        </HighlightGroup>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our leadership team brings decades of combined experience in
          industrial automation, systems integration, and manufacturing
          excellence.
        </p>
        <AnimatedTestimonialsImage
          testimonials={[...TEAM_MEMBERS]}
          autoplay
        />
      </div>
    </>
  );
}
