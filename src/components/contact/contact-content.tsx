"use client";

import { useState } from "react";
import {
  Mail, Copy, Check, Linkedin, MapPin,
  Briefcase, Globe, Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useLocale } from "@/context/locale-context";

const EMAIL = "info@mes-automation.com";

const t = {
  pageTitle:    { en: "Contact",   de: "Kontakt" },
  pageSubtitle: {
    en: "Get in touch for projects and consulting inquiries.",
    de: "Kontaktieren Sie mich für Projekte und Beratungsanfragen.",
  },
  email:    { en: "Email",    de: "E-Mail"   },
  copied:   { en: "Copied",   de: "Kopiert"  },
  copy:     { en: "Copy",     de: "Kopieren" },
  location: { en: "Location", de: "Standort" },
  city:     { en: "Nürnberg, Germany", de: "Nürnberg, Deutschland" },

  availTitle:  { en: "Available Immediately", de: "Sofort verfügbar" },
  availSub:    { en: "Open to part-time and full-time engagements", de: "Teil- und Vollzeiteinsätze möglich" },

  engLabel:    { en: "Engagement",  de: "Einsatzform"  },
  engItems: {
    en: ["Project-based", "Interim", "Day rate"],
    de: ["Projektbasiert", "Interim", "Tagessatz"],
  },

  workLabel:   { en: "Location",    de: "Einsatzort"   },
  workItems: {
    en: ["On-site – Nürnberg / Bavaria", "Remote", "Hybrid"],
    de: ["Vor Ort – Nürnberg / Bayern", "Remote", "Hybrid"],
  },

  langLabel:   { en: "Languages",   de: "Sprachen"     },
  langItems:   { en: ["German", "English"], de: ["Deutsch", "Englisch"] },

  cta: {
    en: "Let's discuss your project",
    de: "Projekt besprechen",
  },
};

export function ContactContent() {
  const { locale } = useLocale();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <SectionHeader title={t.pageTitle[locale]} subtitle={t.pageSubtitle[locale]} />

      <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* ── Left: contact cards ── */}
        <div className="space-y-4">

          {/* Email */}
          <div className="bg-zinc-900 border border-white/[0.08] rounded-2xl md:rounded-3xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.05] p-2.5">
                <Mail className="h-5 w-5 text-white/70" />
              </div>
              <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">
                {t.email[locale]}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-base md:text-lg font-semibold text-foreground hover:text-white/80 transition-colors break-all"
              >
                {EMAIL}
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-semibold text-white/60 hover:bg-white/[0.1] hover:text-white transition-colors"
              >
                {copied ? (
                  <><Check className="h-3.5 w-3.5 text-green-400" />{t.copied[locale]}</>
                ) : (
                  <><Copy className="h-3.5 w-3.5" />{t.copy[locale]}</>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-zinc-900 border border-white/[0.08] rounded-2xl md:rounded-3xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.05] p-2.5">
                <Linkedin className="h-5 w-5 text-white/70" />
              </div>
              <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">
                LinkedIn
              </span>
            </div>
            <a
              href="https://www.linkedin.com/in/moeez-abdul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-foreground hover:text-white/80 transition-colors"
            >
              linkedin.com/in/moeez-abdul
            </a>
          </div>

          {/* Location */}
          <div className="bg-zinc-900 border border-white/[0.08] rounded-2xl md:rounded-3xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center rounded-xl bg-white/[0.05] p-2.5">
                <MapPin className="h-5 w-5 text-white/70" />
              </div>
              <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">
                {t.location[locale]}
              </span>
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground">
              {t.city[locale]}
            </p>
          </div>

        </div>

        {/* ── Right: availability + engagement card ── */}
        <div className="bg-zinc-900 border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 md:p-10 space-y-8">

          {/* Status */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {t.availTitle[locale]}
              </h3>
            </div>
            <p className="text-sm text-white/50 pl-6">{t.availSub[locale]}</p>
          </div>

          <div className="border-t border-white/[0.06]" />

          {/* Engagement types */}
          <div className="flex gap-4">
            <div className="mt-0.5">
              <Briefcase className="h-4 w-4 text-white/30" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                {t.engLabel[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.engItems[locale].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Work location */}
          <div className="flex gap-4">
            <div className="mt-0.5">
              <MapPin className="h-4 w-4 text-white/30" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                {t.workLabel[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.workItems[locale].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="flex gap-4">
            <div className="mt-0.5">
              <Globe className="h-4 w-4 text-white/30" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                {t.langLabel[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.langItems[locale].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.06]" />

          {/* CTA */}
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {t.cta[locale]}
          </a>

        </div>
      </div>
    </>
  );
}