"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { TECH_CATEGORIES } from "@/lib/data";
import { useLocale } from "@/context/locale-context";

const t = {
  title: { en: "Technologies & Experience", de: "Technologien & Erfahrung" },
  subtitle: {
    en: "Tools, systems, and environments I work with.",
    de: "Werkzeuge, Systeme und Umgebungen, mit denen ich arbeite.",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function SkillsBadges() {
  const { locale } = useLocale();

  return (
    <>
      <SectionHeader title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 space-y-8"
      >
        {TECH_CATEGORIES.map((category) => (
          <motion.div key={category.category.en} variants={rowVariants}>
            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-3">
              {category.category[locale]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.div key={skill.en} variants={pillVariants}>
                  <Badge
                    variant="outline"
                    className="bg-white/[0.05] border-white/[0.1] text-white/70 px-3 py-1 text-sm"
                  >
                    {skill[locale]}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
