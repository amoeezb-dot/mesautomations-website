"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/locale-context";

const t = {
  body: {
    en: "With hands-on experience in automotive and semiconductor manufacturing, I support companies in configuring and optimizing MES systems, integrating with SAP and shopfloor equipment, and building dashboards that give production teams real-time visibility. My focus is on reliable, traceable, and well-integrated manufacturing IT — from the PLC layer up to enterprise systems.",
    de: "Mit praktischer Erfahrung in der Automobil- und Halbleiterfertigung unterstütze ich Unternehmen bei der Konfiguration und Optimierung von MES-Systemen, der Integration mit SAP und Shopfloor-Equipment sowie beim Aufbau von Dashboards, die Produktionsteams in Echtzeit Transparenz bieten. Mein Fokus liegt auf zuverlässiger, rückverfolgbarer und gut integrierter Manufacturing-IT – von der SPS-Ebene bis zu Enterprise-Systemen.",
  },
  cta: {
    en: "See what I do",
    de: "Was ich tue",
  },
};

export function IntroSection() {
  const { locale } = useLocale();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-base md:text-lg lg:text-xl text-white/50 leading-relaxed mb-8 md:mb-10">
          {t.body[locale]}
        </p>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors group"
        >
          {t.cta[locale]}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
