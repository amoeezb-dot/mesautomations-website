import type { Metadata } from "next";
import { SkillsBadges } from "@/components/projects/skills-badges";
import { ExperienceCards } from "@/components/projects/project-cards";

export const metadata: Metadata = {
  title: "Technologies & Experience",
  description:
    "MES systems, SAP integration, and production environments I have worked with.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SkillsBadges />
        <ExperienceCards />
      </div>
    </div>
  );
}