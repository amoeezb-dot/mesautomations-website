"use client";

import RadialOrbitalTimeline from "@/components/shared/radial-orbital-timeline";
import { PROJECTS } from "@/lib/data";

export function ProjectsTimeline() {
  return <RadialOrbitalTimeline timelineData={[...PROJECTS]} />;
}
