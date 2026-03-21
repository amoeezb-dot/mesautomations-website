"use client";

import { Timeline } from "@/components/shared/timeline";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    title: "Stuttgart",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-bold text-white mb-2">
          Automotive Assembly Line Automation
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Tier-1 Automotive Supplier
        </p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
          Designed and deployed a fully automated assembly line monitoring system
          integrating SCADA with existing MES infrastructure. Result: 23%
          increase in OEE, 18% reduction in unplanned downtime within 6 months.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-white/60 border-white/20">
            SCADA
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            MES Integration
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            +23% OEE
          </Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Frankfurt",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-bold text-white mb-2">
          MES Rollout for Pharmaceutical Plant
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Pharma Manufacturer
        </p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
          Implemented a GMP-compliant MES across three production lines,
          including full batch traceability, e-signature workflows, and SAP
          integration. Achieved full FDA 21 CFR Part 11 compliance.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-white/60 border-white/20">
            GMP Compliant
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            SAP Integration
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            FDA 21 CFR Part 11
          </Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Munich",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-bold text-white mb-2">
          Smart Factory Retrofit
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Electronics Manufacturer
        </p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
          Retrofitted a legacy production facility with IoT sensors, digital
          dashboards, and a centralized MES. Reduced manual data entry by 80%
          and enabled real-time production scheduling.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-white/60 border-white/20">
            IoT Sensors
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            Digital Dashboards
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            -80% Manual Entry
          </Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Hamburg",
    content: (
      <div>
        <h4 className="text-lg md:text-2xl font-bold text-white mb-2">
          Energy Monitoring & Optimization
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Food & Beverage Company
        </p>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
          Deployed an energy consumption monitoring system integrated with the
          plant&apos;s MES. Identified waste reduction opportunities that led to
          a 14% drop in energy costs annually.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-white/60 border-white/20">
            Energy Monitoring
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            MES Integration
          </Badge>
          <Badge variant="outline" className="text-white/60 border-white/20">
            -14% Energy Costs
          </Badge>
        </div>
      </div>
    ),
  },
];

export function ProjectsScrollTimeline() {
  return <Timeline data={timelineData} />;
}
