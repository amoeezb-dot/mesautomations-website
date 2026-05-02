"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useLocale } from "@/context/locale-context";

const t = {
  pageTitle:    { en: "About",                              de: "Über mich" },
  pageSubtitle: { en: "MES IT Specialist · Freelance",     de: "MES-IT-Spezialist · Freiberuflich" },
  location:     { en: "Nürnberg, Germany",                 de: "Nürnberg, Deutschland" },
  current:      { en: "Freelance · Semikron Danfoss (via Hays AG)", de: "Freiberuflich · Semikron Danfoss (via Hays AG)" },
  education:    { en: "M.Sc. Electrical & Computer Engineering · RPTU Germany", de: "M.Sc. Elektro- & Computertechnik · RPTU Deutschland" },
  bio1: {
    en: "MES IT Specialist with hands-on experience across automotive and semiconductor manufacturing. Currently providing freelance MES support at Semikron Danfoss — ensuring system stability, accurate production tracking, and reliable data integration between MES, SAP, and shopfloor equipment.",
    de: "MES-IT-Spezialist mit praktischer Erfahrung in der Automobil- und Halbleiterfertigung. Aktuell als Freelancer bei Semikron Danfoss tätig – mit Fokus auf Systemstabilität, präzise Produktionsverfolgung und zuverlässige Datenintegration zwischen MES, SAP und Shopfloor-Equipment.",
  },
  bio2: {
    en: "Previously at bbTech GmbH, I drove MES implementation from initial integration through stable automotive series production — configuring Camline MES workflows, aligning SAP PP/MM data, and building real-time dashboards in Power BI and Grafana for engineering and production teams.",
    de: "Zuvor bei bbTech GmbH habe ich die MES-Implementierung von der Integrationsphase bis zur stabilen Automotive-Serienproduktion begleitet – mit Camline-MES-Konfiguration, SAP-PP/MM-Datenpflege und Echtzeit-Dashboards in Power BI und Grafana für Engineering- und Produktionsteams.",
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
        className="mt-8 md:mt-12 w-full"
      >
        <div className="bg-zinc-900 border border-white/[0.08] rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row min-h-[420px]">

            {/* ── Left: Text content ── */}
            <div className="flex-1 p-8 md:p-12 space-y-6">

              {/* Name + role */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-1 tracking-tight">
                  Abdul Moeez Baig
                </h2>
                <p className="text-sm text-white/40 font-medium tracking-wide uppercase">
                  {t.pageSubtitle[locale]}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-white/30 shrink-0" />
                  <span>{t.location[locale]}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5 text-white/30 shrink-0" />
                  <span>{t.current[locale]}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-white/30 shrink-0" />
                  <span>{t.education[locale]}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.06]" />

              {/* Bio */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-base text-white/60 leading-relaxed">{t.bio1[locale]}</p>
                <p className="text-base text-white/60 leading-relaxed">{t.bio2[locale]}</p>
              </div>

              {/* LinkedIn */}
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

            {/* ── Right: Faded photo ── */}
            <div className="relative hidden md:block w-[38%] shrink-0">
              <Image
                src="/images/moeez.jpeg"
                alt="Abdul Moeez Baig"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Fade from left so it blends into the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/30 to-transparent" />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </motion.div>
    </>
  );
}