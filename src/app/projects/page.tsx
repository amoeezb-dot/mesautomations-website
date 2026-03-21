import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectsTimeline } from "@/components/projects/projects-timeline";
import { ProjectsScrollTimeline } from "@/components/projects/projects-scroll-timeline";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of complex automation projects delivered across Germany and Central Europe.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Projects"
          subtitle="We've partnered with manufacturers across Germany and Central Europe to deliver complex automation projects on time and within budget."
        />
        <ProjectsScrollTimeline />
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Project Network
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
            Explore how our projects interconnect. Click on any node to see details.
          </p>
          <ProjectsTimeline />
        </div>
      </div>
    </div>
  );
}
