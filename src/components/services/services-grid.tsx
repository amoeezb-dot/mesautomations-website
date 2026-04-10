"use client";

import { motion } from "framer-motion";
import {
  HighlightGroup,
  HighlighterItem,
} from "@/components/shared/highlight-group";
import { SectionHeader } from "@/components/shared/section-header";
import { SERVICES } from "@/lib/data";
import { useLocale } from "@/context/locale-context";

const t = {
  title: { en: "Services",   de: "Leistungen" },
  subtitle: {
    en: "End-to-end MES and manufacturing IT solutions.",
    de: "Durchgängige MES- und Manufacturing-IT-Lösungen.",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function ServicesGrid() {
  const { locale } = useLocale();

  return (
    <>
      <SectionHeader title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <HighlightGroup className="group mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <HighlighterItem>
                  <div className="relative z-20 h-full rounded-2xl md:rounded-3xl bg-zinc-900 border border-white/[0.08] p-5 md:p-8 hover:scale-[1.02] transition-transform">
                    <div className="mb-4 md:mb-5 inline-flex items-center justify-center rounded-xl bg-white/[0.05] p-3">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white/80" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                      {service.title[locale]}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description[locale]}
                    </p>
                  </div>
                </HighlighterItem>
              </motion.div>
            );
          })}
        </motion.div>
      </HighlightGroup>
    </>
  );
}
