"use client";

import { useState } from "react";
import { Mail, Copy, Check, Linkedin, MapPin } from "lucide-react";
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
      <div className="mt-8 md:mt-12 max-w-lg space-y-4">
        {/* Email card */}
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
                <>
                  <Check className="h-3.5 w-3.5 text-green-400" />
                  {t.copied[locale]}
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  {t.copy[locale]}
                </>
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn card */}
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
            className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-foreground hover:text-white/80 transition-colors"
          >
            linkedin.com/in/moeez-abdul
          </a>
        </div>

        {/* Location card */}
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
    </>
  );
}
