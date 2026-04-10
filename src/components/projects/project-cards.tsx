"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  HighlightGroup,
  HighlighterItem,
} from "@/components/shared/highlight-group";
import { EXPERIENCE_ITEMS } from "@/lib/data";
import { useLocale } from "@/context/locale-context";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
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

export function ExperienceCards() {
  const { locale } = useLocale();

  return (
    <HighlightGroup className="group mt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {EXPERIENCE_ITEMS.map((item) => (
          <motion.div key={item.id} variants={cardVariants}>
            <HighlighterItem>
              <div className="relative z-20 h-full rounded-2xl md:rounded-3xl bg-zinc-900 border border-white/[0.08] p-5 md:p-8 hover:scale-[1.02] transition-transform flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">
                  {item.title[locale]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 md:mb-5 flex-1">
                  {item.description[locale]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/[0.05] text-white/50 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </HighlighterItem>
          </motion.div>
        ))}
      </motion.div>
    </HighlightGroup>
  );
}
