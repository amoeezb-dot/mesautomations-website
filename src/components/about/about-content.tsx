"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useLocale } from "@/context/locale-context";

const t = {
  pageTitle:    { en: "About",                              de: "Über mich" },
  pageSubtitle: { en: "MES Engineer & Manufacturing IT Specialist", de: "MES-Ingenieur & Manufacturing-IT-Spezialist" },
  role:         { en: "MES Engineer & Manufacturing IT Specialist", de: "MES-Ingenieur & Manufacturing-IT-Spezialist" },
  location:     { en: "Nürnberg, Germany",                 de: "Nürnberg, Deutschland" },
  bio1: {
    en: "With hands-on experience in automotive and semiconductor manufacturing, I specialize in MES configuration, SAP integration, and production data visualization. I work end-to-end — from shopfloor PLC systems to enterprise SAP modules — ensuring stable, traceable, and optimized production processes.",
    de: "Mit praktischer Erfahrung in der Automobil- und Halbleiterfertigung bin ich spezialisiert auf MES-Konfiguration, SAP-Integration und die Visualisierung von Produktionsdaten. Ich arbeite durchgängig – von SPS-Systemen auf Shopfloor-Ebene bis hin zu SAP-Enterprise-Modulen – und sorge für stabile, rückverfolgbare und optimierte Produktionsprozesse.",
  },
  bio2: {
    en: "My background spans Camline MES environments in both semiconductor and automotive series production, where I supported workflow configuration, traceability systems, and the alignment of production data with SAP PP/MM. I also build dashboards in Power BI and Grafana to give engineers and production teams real-time visibility into operations.",
    de: "Mein Hintergrund umfasst Camline-MES-Umgebungen in der Halbleiter- und Automotive-Serienproduktion, wo ich Workflow-Konfigurationen, Rückverfolgbarkeitssysteme und die Abstimmung von Produktionsdaten mit SAP PP/MM unterstützte. Darüber hinaus entwickle ich Dashboards in Power BI und Grafana, um Ingenieuren und Produktionsteams in Echtzeit Einblick in den Betrieb zu geben.",
  },
};

export function AboutContent() {
  const { locale } = useLocale();

  return (
    <>
      <SectionHeader title={t.pageTitle[locale]} subtitle={t.pageSubtitle[locale]} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        }}
        className="mt-8 md:mt-12 max-w-3xl"
      >
        <div className="bg-zinc-900 border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 md:p-10 space-y-6">
          <div className="flex items-center gap-5">
            <div className="relative shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-2 border-white/[0.12]">
              <Image
                src="/images/moeez.jpeg"
                alt="Abdul Moeez Baig"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                Abdul Moeez Baig
              </h2>
              <p className="text-sm text-white/50 font-medium tracking-wide">
                {t.role[locale]}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-white/40 shrink-0" />
            <span>{t.location[locale]}</span>
          </div>

          <p className="text-base text-white/60 leading-relaxed">
            {t.bio1[locale]}
          </p>

          <p className="text-base text-white/60 leading-relaxed">
            {t.bio2[locale]}
          </p>

          <div className="pt-2">
            <a
              href="https://www.linkedin.com/in/moeez-abdul/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-sm font-semibold text-white/80 hover:bg-white/[0.1] hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
