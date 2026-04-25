"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/shared/hero-geometric";
import { useLocale } from "@/context/locale-context";

const t = {
  description: {
    en: "MES Configuration · SAP Integration · Production Systems",
    de: "MES-Konfiguration · SAP-Integration · Produktionssysteme",
  },
  cta: {
    en: "Explore Services",
    de: "Leistungen entdecken",
  },
};

export function HeroSection() {
  const { locale } = useLocale();

  return (
    <HeroGeometric
      badge="MES Consulting"
      title1="MES. Integration."
      title2="Manufacturing IT."
      description={t.description[locale]}
    >
      <div className="flex flex-col items-center gap-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
        >
          {t.cta[locale]}
        </Link>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/30" />
        </motion.div>
      </div>
    </HeroGeometric>
  );
}
